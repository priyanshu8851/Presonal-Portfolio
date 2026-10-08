const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });

export default async function contact(request) {
  if (request.method !== "POST") {
    return json(405, { error: "Method not allowed." });
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return json(400, { error: "Invalid request." });
  }

  // Silently accept honeypot submissions without forwarding spam.
  if (typeof data.website === "string" && data.website.trim()) {
    return json(200, { ok: true });
  }

  const { name, email, subject, message } = data;
  if (![name, email, subject, message].every(
    (value) => typeof value === "string" && value.trim(),
  )) {
    return json(400, { error: "Please complete every field." });
  }
  if (
    name.length > 100 ||
    email.length > 254 ||
    subject.length > 150 ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return json(400, { error: "One or more fields are outside the allowed length." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: "Enter a valid email address." });
  }

  const to = process.env.CONTACT_TO || "priyanshukashyap844@gmail.com";

  try {
    const providerResponse = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(to)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          _replyto: email.trim(),
          _subject: `Portfolio contact: ${subject.trim()}`,
          subject: subject.trim(),
          message: message.trim(),
          _honey: "",
        }),
      },
    );
    const result = await providerResponse.json().catch(() => ({}));

    if (
      !providerResponse.ok ||
      result.success === false ||
      result.success === "false"
    ) {
      return json(502, {
        error: "The email service rejected the message. Please use the email link instead.",
      });
    }

    return json(200, { ok: true });
  } catch {
    return json(502, {
      error: "The email service is temporarily unavailable. Please use the email link instead.",
    });
  }
}
