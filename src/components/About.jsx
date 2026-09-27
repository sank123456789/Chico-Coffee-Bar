import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Welcome to Chico</h2>

        <div className="about-grid">
          <div className="about-content">
            <p>
              A welcoming coffee spot in the heart of Phoenix, Chico Coffee Bar offers an easy place to grab a drink, settle in, and enjoy your coffee.
            </p>
            <p>
              Whether you're looking for a quiet moment alone or a place to meet friends, our café provides the perfect setting with quality coffee and a warm atmosphere.
            </p>
          </div>

          <div className="about-highlight">
            <blockquote>
              <p>"A modern neighborhood coffee stop in downtown Phoenix."</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
