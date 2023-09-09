const Footer = () => {
  const date = new Date();

  return <footer>Copyright © 724.one {date?.getFullYear()} All Rights Reserved</footer>;
};

export default Footer;
