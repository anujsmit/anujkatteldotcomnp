import React, { useState, useEffect } from 'react';

const Project1 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('veg-burgers');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(() => setLoading(false), 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const menuData = {
    'veg-burgers': [
      { id: 1, name: 'HELLO VEGGIE BURGER', price: 1800, description: 'Vegetable patty, fresh lettuce, tomato, pickles, homemade coleslaw, mustard, ketchup', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60' },
      { id: 2, name: 'SMILEY BURGER', price: 2000, description: 'Egg and breadcrumbs fried aubergine strips, fried onion-mushroom-tomato mix', image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&auto=format&fit=crop&q=60' },
      { id: 3, name: 'MEXICAN VEGGIE BURGER', price: 1900, description: 'Fried red beans, homemade salsa, homemade guacamole, lettuce, tomato', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60' },
      { id: 4, name: 'MANGO SPIRIT', price: 2000, description: 'Vegetable patty, fresh homemade mango chutney, fresh coriander', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60' }
    ],
    'soft-drinks': [
      { id: 5, name: 'COCA COLA', price: 250, description: 'Classic refreshing cola', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=60' },
      { id: 6, name: 'FANTA', price: 250, description: 'Orange sparkling soda', image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=500&auto=format&fit=crop&q=60' },
      { id: 7, name: 'SPRITE', price: 250, description: 'Lemon-lime refreshing drink', image: 'https://tse1.mm.bing.net/th/id/OIP.89vaUcdHV0llGrBIxbWzGQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
      { id: 8, name: 'SODA', price: 250, description: 'Plain soda water', image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=500&auto=format&fit=crop&q=60' },
      { id: 9, name: 'LIME SODA', price: 200, description: 'Fresh lime with soda', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=60' },
      { id: 10, name: 'LITTER WATER BOTTLE', price: 500, description: '1.5L mineral water', image: 'https://tse4.mm.bing.net/th/id/OIP.v0-Mwjn29aE63y1N4pinRAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
      { id: 11, name: 'BUTTER LEMONADE', price: 600, description: 'Butter lemonade with lime juices', image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=500&auto=format&fit=crop&q=60' },
      { id: 12, name: 'MANGO JUICE', price: 600, description: 'Fresh mango juice', image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=500&auto=format&fit=crop&q=60' },
      { id: 13, name: 'PINEAPPLE JUICE', price: 800, description: 'Fresh pineapple juice', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&auto=format&fit=crop&q=60' },
      { id: 14, name: 'PASSION FRUIT JUICE', price: 900, description: 'Fresh passion fruit juice', image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&auto=format&fit=crop&q=60' },
      { id: 15, name: 'MIXED FRUIT JUICE', price: 600, description: 'Blend of seasonal fruits', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop&q=60' },
      { id: 16, name: 'LIME JUICE', price: 600, description: 'Fresh lime juice', image: 'https://tse1.mm.bing.net/th/id/OIP.qJEJYPnEaPJzI2nw0PvEEwHaIV?r=0&w=720&h=810&rs=1&pid=ImgDetMain&o=7&rm=3' }
    ],
    'milkshakes': [
      { id: 17, name: 'BANANA MILKSHAKE', price: 750, description: 'Creamy banana milkshake', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&auto=format&fit=crop&q=60' },
      { id: 18, name: 'CHOCOLATE MILKSHAKE', price: 800, description: 'Rich chocolate milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60' },
      { id: 19, name: 'JOGI MILKSHAKE', price: 800, description: 'Special jogi milkshake', image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=500&auto=format&fit=crop&q=60' },
      { id: 20, name: 'COFFEE MILKSHAKE', price: 950, description: 'Coffee flavored milkshake', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format&fit=crop&q=60' },
      { id: 21, name: 'COFFEE MILKSHAKE WITH COCONUT MILK', price: 1000, description: 'Coffee milkshake with coconut milk', image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=500&auto=format&fit=crop&q=60' },
      { id: 22, name: 'MANGO LASSI WITH HONEY', price: 900, description: 'Sweet mango lassi sweetened with honey', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop&q=60' },
      { id: 23, name: 'PINEAPPLE LASSI WITH HONEY', price: 900, description: 'Creamy pineapple lassi with honey', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=60' }
    ],
    'desserts': [
      { id: 24, name: 'CHOCOLATE BANANA SPLIT', price: 900, description: 'Coconut cookies, chocolate & vanilla ice cream, banana, chocolate sauce, nuts', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=60' },
      { id: 25, name: 'GAMES OF THRONES', price: 900, description: 'Espresso coffee-soaked coconut cookies with vanilla ice cream and dried coconut slices', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60' },
      { id: 26, name: 'MANGO PASSION FRUIT PARADISE', price: 900, description: 'Coconut cookies, vanilla joghurt, vanilla ice cream, fresh mango & passion fruit, nuts', image: 'https://images.unsplash.com/photo-1511018556340-d16986a1c194?w=500&auto=format&fit=crop&q=60' },
      { id: 27, name: 'FRUIT & NUT ADVENTURE', price: 900, description: 'Coconut cookies, fresh mixed fruit, vanilla ice cream, chocolate sauce, nuts', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop&q=60' },
      { id: 28, name: 'SHADE OF GREY', price: 900, description: 'Chocolate and cream cookies, nuts, chocolate and vanilla ice cream', image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?w=500&auto=format&fit=crop&q=60' }
    ]
  };

  const categoryNames = {
    'veg-burgers': '🍔 VEGETARIAN BURGERS',
    'soft-drinks': '🥤 SOFT DRINKS',
    'milkshakes': '🥛 LASSI & MILKSHAKES',
    'desserts': '🍰 DESSERTS'
  };

  const locations = [
    { name: 'Hello Burger Hikkaduwa', address: '533 Galle Road | Opposite Royal Beach Hotel, Hikkaduwa 80240', phone: '+94 77 192 7667' },
    { name: 'Hello Burger Arugam Bay', address: 'Sinn Ullai | Pottuvil 18, Arugam Bay 32500, Sri Lanka', phone: '+94 77 192 7667' }
  ];

  if (loading) {
    return (
      <div style={styles.loaderContainer}>
        <div style={styles.loader}></div>
        <p style={styles.loaderText}>Loading Hello Burger...</p>
      </div>
    );
  }

  return (
    <div style={styles.app}>
      {/* Navbar */}
      <nav style={{ ...styles.navbar, ...(scrolled && styles.navbarScrolled) }}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>🍔</span>
            <span style={styles.logoText}>HELLO BURGER</span>
          </div>
          {/* Class names added here to make CSS Media Queries execute correctly */}
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} style={styles.navLinks}>
            <a href="#home" style={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#menu" style={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Menu</a>
            <a href="#about" style={styles.navLink} onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#locations" style={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Locations</a>
            <a href="#contact" style={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <button style={styles.orderBtn}>Order Now →</button>
          </div>
          <div className="mobile-menu" style={styles.mobileMenu} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span style={{ ...styles.menuBar, ...(mobileMenuOpen && styles.menuBarOpen1) }}></span>
            <span style={{ ...styles.menuBar, ...(mobileMenuOpen && styles.menuBarOpen2) }}></span>
            <span style={{ ...styles.menuBar, ...(mobileMenuOpen && styles.menuBarOpen3) }}></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div className="hero-container" style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <span style={styles.badge}>🏆 Certificate of Excellence since 2017</span>
            <h1 className="hero-title" style={styles.heroTitle}>
              Enjoy the best <span style={styles.highlight}>vegetarian burgers</span><br />
              in Sri Lanka
            </h1>
            <p style={styles.heroText}>
              Handcrafted with love on the shores of Narigama Beach. 
              100% vegetarian, 100% delicious. Experience burger heaven today!
            </p>
            <div className="hero-buttons" style={styles.heroButtons}>
              <button style={styles.btnPrimary} onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>
                Explore Menu →
              </button>
              <button style={styles.btnSecondary} onClick={() => document.getElementById('locations').scrollIntoView({ behavior: 'smooth' })}>📍 Find a Location</button>
            </div>
          </div>
          <div style={styles.heroImage}>
            <div style={styles.burgerCard}>
              <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60" alt="Hello Burger Main" style={styles.burgerImage} />
              <div style={{ ...styles.floatingCard, ...styles.ratingBadge }}>⭐⭐⭐⭐⭐ 4.9</div>
            </div>
          </div>
        </div>
      </section>

      {/* No WiFi Notice */}
      <div style={styles.noWifi}>
        <div style={styles.container}>
          <div style={styles.noWifiContent}>
            <span style={styles.noWifiIcon}>📵</span>
            <h3 style={styles.noWifiText}>SORRY, WE DON'T HAVE WIFI</h3>
            <p style={styles.noWifiSubtext}>Take a break and talk to each other</p>
          </div>
        </div>
      </div>

      {/* Menu Section with Categories */}
      <section id="menu" style={styles.menu}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our <span style={styles.highlight}>Menu</span></h2>
          <p style={styles.sectionSubtitle}>100% Vegetarian • Fresh Ingredients • Made with Love</p>
          
          {/* Category Filters */}
          <div className="category-filters" style={styles.categoryFilters}>
            {Object.keys(menuData).map(cat => (
              <button key={cat} style={{ ...styles.filterBtn, ...(activeCategory === cat && styles.filterBtnActive) }} onClick={() => setActiveCategory(cat)}>
                {categoryNames[cat]}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div style={styles.menuGrid}>
            {menuData[activeCategory].map(item => (
              <div key={item.id} style={styles.menuCard}>
                <img src={item.image} alt={item.name} style={styles.menuImage} />
                <div style={styles.menuInfo}>
                  <h3 style={styles.menuName}>{item.name}</h3>
                  <p style={styles.menuDesc}>{item.description}</p>
                  <div style={styles.menuFooter}>
                    <span style={styles.menuPrice}>{item.price.toLocaleString()} LKR</span>
                    <button style={styles.addBtn}>Order +</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.about}>
        <div style={styles.container}>
          <div className="about-grid" style={styles.aboutGrid}>
            <div style={styles.aboutContent}>
              <h2 style={styles.sectionTitle}>About <span style={styles.highlight}>Hello Burger</span></h2>
              <p style={styles.aboutText}>
                It all started on the sun-drenched shores of <strong>Narigama Beach in Sri Lanka</strong>. 
                Twins Mahesh and Dinesh, hustling to make ends meet through their surfboard rental 
                and surf lessons business, found themselves dreaming beyond the crashing waves. 
                The idea of Hello Burger began to sprout, a beacon of ambition born from years 
                of toil and a desire for something more.
              </p>
              <button style={styles.readMoreBtn}>Read more about us →</button>
            </div>
            <div style={styles.aboutImage}>
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60" alt="Narigama Beach Coast" style={styles.aboutImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section style={styles.testimonialHighlight}>
        <div style={styles.container}>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialQuote}>"Best western food I've had in Asia"</p>
            <p style={styles.testimonialText}>
              Awesome place, really cool vibe, friendly people, and incredible food! 
              Came here with a filthy hangover and it sorted us right out! Genuinely 
              the best burger I've ever had, hand cut fries, amazing milkshake and 
              banana split. Easily the best western food I've had in Asia 👌🤙
            </p>
            <div style={styles.testimonialBadges}>
              <span style={styles.badgeSmall}>⭐ Tripadvisor Hikkaduwa</span>
              <span style={styles.badgeSmall}>⭐ Tripadvisor Arugambay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" style={styles.locations}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our <span style={styles.highlight}>Locations</span></h2>
          <p style={styles.sectionSubtitle}>Visit us at one of our two beautiful locations in Sri Lanka</p>
          <div style={styles.locationsGrid}>
            {locations.map((location, index) => (
              <div key={index} style={styles.locationCard}>
                <div style={styles.locationIcon}>📍</div>
                <h3 style={styles.locationName}>{location.name}</h3>
                <p style={styles.locationAddress}>{location.address}</p>
                <p style={styles.locationPhone}>📞 {location.phone}</p>
                <button style={styles.locationBtn}>Get Directions →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section id="contact" style={styles.social}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Connect with <span style={styles.highlight}>Us</span></h2>
          <div style={styles.socialLinks}>
            <a href="#" style={styles.socialIcon}>📘 Facebook</a>
            <a href="#" style={styles.socialIcon}>📸 Instagram</a>
            <a href="#" style={styles.socialIcon}>🐦 Twitter</a>
            <a href="#" style={styles.socialIcon}>⭐ Tripadvisor</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerColumn}>
            <div style={styles.footerLogo}>
              <span style={styles.logoIcon}>🍔</span>
              <span style={styles.footerLogoText}>HELLO BURGER</span>
            </div>
            <p style={styles.footerText}>Serving happiness since 2017. Made with love on the shores of Sri Lanka.</p>
          </div>
          {locations.map((location, index) => (
            <div key={index} style={styles.footerColumn}>
              <h4 style={styles.footerTitle}>{location.name}</h4>
              <p style={styles.footerText}>📍 {location.address}</p>
              <p style={styles.footerText}>📞 {location.phone}</p>
            </div>
          ))}
        </div>
        <div style={styles.footerBottom}>
          <p>Copyright Hello-burger.com 2023 | Made with ❤ by Squib</p>
        </div>
      </footer>

      {/* Injected layout fixes to seamlessly interface inline objects with responsiveness */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @media (max-width: 991px) {
            .nav-links {
              position: fixed !important;
              top: 70px;
              left: -100%;
              width: 100%;
              height: calc(100vh - 70px);
              background: #fff9f0 !important;
              flex-direction: column;
              justify-content: center;
              gap: 30px;
              transition: left 0.4s ease-in-out;
              box-shadow: 0 10px 20px rgba(0,0,0,0.05);
            }
            .nav-links.active {
              left: 0 !important;
            }
            .mobile-menu {
              display: flex !important;
            }
            .hero-container, .about-grid {
              grid-template-columns: 1fr !important;
              text-align: center;
              gap: 40px !important;
            }
            .hero-buttons {
              justify-content: center;
            }
            .hero-title {
              font-size: 2.3rem !important;
            }
            .category-filters {
              flex-wrap: wrap;
            }
          }
        `
      }} />
    </div>
  );
};

const styles = {
  app: {
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    background: 'linear-gradient(135deg, #fff9f0 0%, #ffe6cc 100%)',
    color: '#2d1810',
    overflowX: 'hidden'
  },
  loaderContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#e35f21',
    color: 'white'
  },
  loader: {
    width: '60px',
    height: '60px',
    border: '5px solid #ffffff',
    borderTopColor: '#2d1810',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  loaderText: { marginTop: '20px', fontSize: '1.2rem' },
  navbar: { position: 'fixed', top: 0, width: '100%', zIndex: 1000, transition: 'all 0.3s ease', padding: '20px 0' },
  navbarScrolled: { background: 'rgba(255, 245, 235, 0.95)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', padding: '12px 0' },
  navContainer: { maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' },
  logo: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 'bold' },
  logoIcon: { fontSize: '2rem', animation: 'bounce 2s infinite' },
  logoText: { background: 'linear-gradient(135deg, #e35f21, #c2470c)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' },
  navLinks: { display: 'flex', alignItems: 'center', gap: '28px' },
  navLink: { textDecoration: 'none', color: '#2d1810', fontWeight: '500', transition: 'color 0.3s', fontSize: '0.95rem', cursor: 'pointer' },
  orderBtn: { background: '#e35f21', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '40px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s' },
  mobileMenu: { display: 'none', flexDirection: 'column', gap: '5px', cursor: 'pointer', width: '25px', height: '20px', justifyContent: 'space-between', zIndex: 1001 },
  menuBar: { width: '25px', height: '3px', background: '#2d1810', transition: '0.3s', transformOrigin: 'left center' },
  
  // Menu bar dynamic structural transformations
  menuBarOpen1: { transform: 'rotate(45deg)', transformOrigin: '2px 2px' },
  menuBarOpen2: { opacity: 0 },
  menuBarOpen3: { transform: 'rotate(-45deg)', transformOrigin: '1px 7px' },
  
  hero: { minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 0 60px' },
  heroContainer: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' },
  heroContent: { animation: 'fadeUp 0.8s ease-out' },
  badge: { display: 'inline-block', background: 'rgba(227, 95, 33, 0.1)', color: '#e35f21', padding: '8px 16px', borderRadius: '40px', fontSize: '0.875rem', fontWeight: '600', marginBottom: '24px' },
  heroTitle: { fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '20px', color: '#2d1810' },
  highlight: { color: '#e35f21', display: 'inline-block' },
  heroText: { fontSize: '1.125rem', color: '#5c3e2e', marginBottom: '32px', lineHeight: '1.6' },
  heroButtons: { display: 'flex', gap: '16px', marginBottom: '48px' },
  btnPrimary: { background: '#e35f21', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s', fontSize: '1rem' },
  btnSecondary: { background: 'transparent', border: '2px solid #e35f21', color: '#e35f21', padding: '14px 32px', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s', fontSize: '1rem' },
  heroImage: { animation: 'fadeUp 0.8s ease-out' },
  burgerCard: { position: 'relative', animation: 'float 3s ease-in-out infinite' },
  burgerImage: { width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' },
  floatingCard: { position: 'absolute', background: 'white', padding: '12px 20px', borderRadius: '50px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', fontWeight: '600' },
  ratingBadge: { bottom: '20px', left: '-20px', background: 'white', color: '#2d1810' },
  noWifi: { background: '#2d1810', color: '#ffcc00', padding: '20px 0', textAlign: 'center' },
  noWifiContent: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' },
  noWifiIcon: { fontSize: '2rem' },
  noWifiText: { fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px' },
  noWifiSubtext: { fontSize: '0.9rem', color: '#ffcc99' },
  menu: { padding: '80px 0' },
  container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
  sectionTitle: { textAlign: 'center', fontSize: '2.5rem', marginBottom: '16px', color: '#2d1810' },
  sectionSubtitle: { textAlign: 'center', color: '#5c3e2e', marginBottom: '48px', fontSize: '1.1rem' },
  categoryFilters: { display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' },
  filterBtn: { padding: '12px 24px', border: '2px solid #e35f21', color: '#e35f21', background: 'transparent', borderRadius: '40px', cursor: 'pointer', transition: 'all 0.3s', fontSize: '0.9rem', fontWeight: '500' },
  filterBtnActive: { background: '#e35f21', color: 'white' },
  menuGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' },
  menuCard: { background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', transition: 'transform 0.3s' },
  menuImage: { width: '100%', height: '220px', objectFit: 'cover' },
  menuInfo: { padding: '20px' },
  menuName: { fontSize: '1.2rem', marginBottom: '8px', color: '#e35f21' },
  menuDesc: { color: '#5c3e2e', marginBottom: '16px', fontSize: '0.85rem', lineHeight: '1.4' },
  menuFooter: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  menuPrice: { fontSize: '1.3rem', fontWeight: 'bold', color: '#e35f21' },
  addBtn: { background: '#e35f21', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '25px', cursor: 'pointer', transition: 'all 0.3s' },
  about: { padding: '80px 0', background: 'white' },
  aboutGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' },
  aboutContent: { padding: '20px' },
  aboutText: { fontSize: '1.05rem', lineHeight: '1.7', color: '#5c3e2e', marginBottom: '25px' },
  readMoreBtn: { background: 'transparent', color: '#e35f21', border: '2px solid #e35f21', padding: '12px 28px', borderRadius: '40px', fontWeight: '600', cursor: 'pointer' },
  aboutImg: { width: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
  testimonialHighlight: { padding: '60px 0', background: 'linear-gradient(135deg, #e35f21, #c2470c)', color: 'white' },
  testimonialCard: { textAlign: 'center', maxWidth: '800px', margin: '0 auto' },
  testimonialQuote: { fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' },
  testimonialText: { fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px' },
  testimonialBadges: { display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' },
  badgeSmall: { background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '40px', fontSize: '0.9rem' },
  locations: { padding: '80px 0', background: 'white' },
  locationsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  locationCard: { background: 'linear-gradient(135deg, #fff5e6 0%, #ffe6cc 100%)', padding: '30px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' },
  locationIcon: { fontSize: '3rem', marginBottom: '16px' },
  locationName: { fontSize: '1.3rem', marginBottom: '12px', color: '#e35f21' },
  locationAddress: { color: '#5c3e2e', marginBottom: '8px', fontSize: '0.9rem' },
  locationPhone: { color: '#5c3e2e', marginBottom: '20px', fontWeight: '500' },
  locationBtn: { background: '#e35f21', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '40px', cursor: 'pointer' },
  social: { padding: '60px 0', background: 'linear-gradient(135deg, #fff5e6 0%, #ffe6cc 100%)' },
  socialLinks: { display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' },
  socialIcon: { textDecoration: 'none', color: '#2d1810', fontSize: '1.1rem', fontWeight: '500', transition: 'color 0.3s', padding: '10px 20px', background: 'white', borderRadius: '40px' },
  footer: { background: '#2d1810', color: 'white', padding: '60px 0 20px' },
  footerContainer: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' },
  footerColumn: { display: 'flex', flexDirection: 'column', gap: '12px' },
  footerLogo: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' },
  footerLogoText: { fontSize: '1.2rem', fontWeight: 'bold' },
  footerText: { color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' },
  footerTitle: { marginBottom: '16px', color: '#e35f21' },
  footerBottom: { textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }
};

export default Project1;