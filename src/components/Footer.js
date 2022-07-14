function Footer() {
  let year = new Date();
  year = year.getFullYear();
  return (
    <footer>
      <p>Copyright @ {year}</p>
    </footer>
  );
}

export default Footer;
