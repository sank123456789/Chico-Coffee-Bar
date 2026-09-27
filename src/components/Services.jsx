import './Services.css';

export default function Services() {
  const services = [
    {
      title: 'Dine In',
      description: 'Enjoy your coffee at the café. Settle in, relax, and take your time.',
      icon: '☕'
    },
    {
      title: 'Pickup',
      description: 'Grab your order and take it with you. Quick, convenient, and ready when you are.'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>The Chico Experience</h2>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
