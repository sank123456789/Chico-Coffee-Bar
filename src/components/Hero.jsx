import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>Chico Coffee Bar</h1>
            <p className="hero-tagline">Coffee, good company, and a place to slow down.</p>

            <div className="hero-ctas">
              <a href="#menu" className="btn btn-primary">VIEW MENU</a>
              <a href="#visit" className="btn">GET DIRECTIONS</a>
            </div>

            <div className="hero-info">
              <address>
                888 N 1st Ave Ste 107<br />
                Phoenix, AZ 85003
              </address>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=1000&fit=crop"
              alt="Coffee being poured at Chico Coffee Bar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
