export type FooterProps = {
  copyrightYear: string;
};

export default function Footer({ copyrightYear }: FooterProps) {
  return (
    <section>
      <p>Copyright &copy; {copyrightYear} Fiona Yeung</p>
      <ul>
        <a href="https://ca.linkedin.com/">
          <li>linkedin</li>
        </a>
        <a href="https://github.com/fyeung21">
          <li>github</li>
        </a>
      </ul>
    </section>
  );
}
