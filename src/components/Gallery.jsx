import './Gallery.css';

export default function Gallery() {
  const galleryItems = [
    {
      category: 'Coffee',
      title: 'Crafted Espresso',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=600&fit=crop'
    },
    {
      category: 'Interior',
      title: 'Modern Space',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=600&fit=crop'
    },
    {
      category: 'Atmosphere',
      title: 'Cozy Vibes',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=600&fit=crop'
    },
    {
      category: 'Food',
      title: 'Fresh Pastries',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop'
    },
    {
      category: 'Coffee',
      title: 'Latte Art',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=600&fit=crop'
    },
    {
      category: 'Interior',
      title: 'Seating Area',
      image: 'https://images.unsplash.com/photo-1559496417-e7f25c8b1d8e?w=600&h=600&fit=crop'
    },
  ];

  return (
    <section className="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <p className="gallery-intro">A glimpse into our café and what we serve daily</p>

        <div className="gallery-grid">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="gallery-item">
              <div className="gallery-image">
                <img
                  src={item.image}
                  alt={`${item.category} - ${item.title}`}
                  loading="lazy"
                />
              </div>
              <div className="gallery-caption">
                <p className="gallery-category">{item.category}</p>
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
