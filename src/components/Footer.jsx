import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <Link className="wordmark" to="/">
        PK<span>.</span>
      </Link>
      <p>Designed &amp; built with care by Priyanshu Kashyap</p>
      <a href="/#home">Back to top ↑</a>
    </footer>
  );
}
