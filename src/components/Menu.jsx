import './Menu.css';

export default function Menu() {
  const categories = [
    {
      name: 'Coffee',
      items: [
        { name: '[ESPRESSO]', description: '[Single or double shot]', price: '[$]' },
        { name: '[AMERICANO]', description: '[Espresso + hot water]', price: '[$]' },
        { name: '[LATTE]', description: '[Espresso + steamed milk]', price: '[$]' },
        { name: '[CAPPUCCINO]', description: '[Espresso + milk foam]', price: '[$]' },
      ]
    },
    {
      name: 'Tea & Matcha',
      items: [
        { name: '[BREWED TEA]', description: '[Selection of premium teas]', price: '[$]' },
        { name: '[MATCHA]', description: '[Traditional or latte style]', price: '[$]' },
      ]
    },
    {
      name: 'Food & Pastries',
      items: [
        { name: '[PASTRIES]', description: '[Fresh baked daily]', price: '[$]' },
        { name: '[SANDWICHES]', description: '[Selection available]', price: '[$]' },
      ]
    }
  ];

  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Menu</h2>
        <p className="menu-intro">Our menu is crafted with care. This is a concept layout ready for your complete menu.</p>

        <div className="menu-categories">
          {categories.map((category, idx) => (
            <div key={idx} className="menu-category">
              <h3>{category.name}</h3>
              <div className="menu-items">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="menu-item">
                    <div className="item-header">
                      <h4>{item.name}</h4>
                      <span className="item-price">{item.price}</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="menu-cta">
          <a href="#visit" className="btn btn-primary">VIEW FULL MENU</a>
          <p className="menu-note">Real menu coming soon. This layout is ready for your complete menu data.</p>
        </div>
      </div>
    </section>
  );
}
