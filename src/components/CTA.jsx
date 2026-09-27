import './CTA.css';

export default function CTA() {
  const handleGetDirections = () => {
    const address = '888 N 1st Ave Ste 107, Phoenix, AZ 85003';
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Your next coffee stop is in Phoenix.</h2>

          <address>
            <strong>Chico Coffee Bar</strong><br />
            888 N 1st Ave Ste 107<br />
            Phoenix, AZ 85003
          </address>

          <button onClick={handleGetDirections} className="btn btn-primary">
            GET DIRECTIONS
          </button>
        </div>
      </div>
    </section>
  );
}
