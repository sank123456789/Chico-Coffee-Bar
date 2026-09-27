import './Location.css';

export default function Location() {
  const handleGetDirections = () => {
    const address = '888 N 1st Ave Ste 107, Phoenix, AZ 85003';
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section id="visit" className="location">
      <div className="container">
        <div className="location-content">
          <h2>Visit Chico</h2>

          <div className="location-info">
            <address>
              <strong>Chico Coffee Bar</strong><br />
              888 N 1st Ave Ste 107<br />
              Phoenix, AZ 85003<br />
              United States
            </address>
          </div>

          <button onClick={handleGetDirections} className="btn btn-primary">
            GET DIRECTIONS
          </button>

          <p className="location-note">
            Information about opening hours, phone, and menu availability will be added once confirmed.
          </p>
        </div>

        <div className="location-map-placeholder">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" fill="var(--color-warm-beige)"/>
            <text x="200" y="200" textAnchor="middle" fontSize="16" fill="var(--color-espresso)" opacity="0.5">
              Interactive Map
            </text>
            <text x="200" y="225" textAnchor="middle" fontSize="12" fill="var(--color-espresso)" opacity="0.3">
              Click GET DIRECTIONS for Google Maps
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
