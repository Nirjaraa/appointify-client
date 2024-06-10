import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Appointify</h1>
          <p>Save your time and energy.</p>
        </div>
        <div>
          <a href="https://www.facebook.com">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a href="https://www.instagram.com">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a href="https://github.com">
            <i class="fa-brands fa-square-github"></i>
          </a>
          <a href="https://www.linkedin.com">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="https://github.com">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
