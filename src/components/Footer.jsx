import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span>CHICO</span>
              <span>COFFEE BAR</span>
            </h3>
            <address>
              888 N 1st Ave Ste 107<br />
              Phoenix, AZ 85003
            </address>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#visit">Visit</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-disclaimer">
            Concept website created by Sankarshan. This is an independent design concept and is not affiliated with Chico Coffee Bar.
          </p>
        </div>
      </div>
    </footer>
  );
}
