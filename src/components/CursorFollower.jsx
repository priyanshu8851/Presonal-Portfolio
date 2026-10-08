import { useEffect } from "react";
import "./CursorFollower.css";

export default function CursorFollower() {
  useEffect(() => {
    if (
      !window.matchMedia(
        "(pointer: fine) and (prefers-reduced-motion: no-preference)",
      ).matches
    )
      return undefined;
    const follower = document.querySelector(".cursor-follower");
    let frame = 0,
      x = -100,
      y = -100,
      targetX = x,
      targetY = y;
    const draw = () => {
      x += (targetX - x) * 0.22;
      y += (targetY - y) * 0.22;
      follower.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.1)
        frame = requestAnimationFrame(draw);
      else frame = 0;
    };
    const move = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!frame) frame = requestAnimationFrame(draw);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div className="cursor-follower" aria-hidden="true">
      <span>&lt;/&gt;</span>
    </div>
  );
}
