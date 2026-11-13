import usePageStyle from "../hooks/usePageStyle.js";
import useReveal from "../hooks/useReveal.js";
import useDocumentTitle from "../hooks/useDocumentTitle.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

/** Shared shell: page stylesheet + title + scroll-reveal + navbar + footer. */
export default function PageLayout({ css, title, children, footer = true }) {
  usePageStyle(css);
  useDocumentTitle(title);
  useReveal();

  return (
    <>
      <Navbar />
      {children}
      {footer && <Footer />}
    </>
  );
}
