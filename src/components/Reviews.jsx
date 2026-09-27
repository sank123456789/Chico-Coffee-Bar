import './Reviews.css';

export default function Reviews() {
  const reviews = [
    {
      name: 'Sarah Mitchell',
      rating: 5,
      date: 'September 2026',
      text: 'Best coffee in downtown Phoenix! The atmosphere is perfect for working or just relaxing. Their lattes are consistently amazing.',
      avatar: '👩🏼'
    },
    {
      name: 'Marcus Chen',
      rating: 5,
      date: 'August 2026',
      text: 'Love this place. Great spot for meetings or catching up with friends. The staff is super friendly and the pastries are always fresh.',
      avatar: '👨🏻'
    },
    {
      name: 'Jessica Rodriguez',
      rating: 5,
      date: 'August 2026',
      text: 'My go-to coffee spot! Clean, modern space with excellent coffee. The cappuccino here is perfection.',
      avatar: '👩🏽'
    },
    {
      name: 'Tom Bradley',
      rating: 4,
      date: 'July 2026',
      text: 'Solid coffee shop with a cool vibe. Gets a bit crowded during lunch, but that just shows how good it is!',
      avatar: '👨🏼'
    },
    {
      name: 'Emily Park',
      rating: 5,
      date: 'July 2026',
      text: 'Hands down the best matcha latte in Phoenix. The interior is beautiful and perfect for Instagram shots too!',
      avatar: '👩🏻'
    },
    {
      name: 'David Johnson',
      rating: 5,
      date: 'June 2026',
      text: 'Been coming here for months now. Consistently great coffee, nice atmosphere, and convenient location. Highly recommend!',
      avatar: '👨🏾'
    }
  ];

  return (
    <section className="reviews">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <p className="reviews-intro">Real experiences from real coffee lovers</p>

        <div className="reviews-grid">
          {reviews.map((review, idx) => (
            <div key={idx} className="review-card">
              <div className="review-header">
                <div className="review-avatar">{review.avatar}</div>
                <div className="review-meta">
                  <h4 className="review-name">{review.name}</h4>
                  <div className="review-rating">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                  <p className="review-date">{review.date}</p>
                </div>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
