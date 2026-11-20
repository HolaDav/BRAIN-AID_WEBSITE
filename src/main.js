import './style.css'
// import heroImg from './assets/hero.png'

document.querySelector('#app').innerHTML = `
<header class="site-header">
  <div class="container nav-container">

    <!-- BRAIN-AID Official Logo -->
    <a href="/" class="site-logo" aria-label="BRAIN-AID Home">
      <img src="/assets/brand/brain-aid-logo-blue-transparent_bg.png" alt="BRAIN-AID - Biomedical Research in Artificial Intelligence and Neuroimaging for Advanced Innovations and Diagnostics"/>
    </a>

    <!-- Mobile Menu Button -->
    <button class="menu-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-navigation">
      Menu
    </button>

    <nav class="nav-links" id="primary-navigation" aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/about.html">About</a>
      <a href="/programmes.html">Programmes</a>
      <a href="/activities.html">News & Events</a>
      <a href="/community.html">Community</a>
      <a href="/contact.html" class="btn btn-primary nav-cta">Get Involved</a>
    </nav>
  </div>
</header>

<main>
  <section class="hero">
    <div class="container hero-container">
      <!-- HERO TEXT -->
      <div class="hero-content">
        <span class="hero-label">
          Biomedical Research in AI & Neuroimaging
        </span>

        <h1>
          Advancing neuroscience through research, technology and collaboration.
        </h1>

        <p class="hero-description">
          BRAIN-AID is a scientific and educational society building capacity, connecting emerging researchers and expanding opportunities in neuroscience, biomedical imaging and artificial intelligence, particularly in resource-constrained settings.
        </p>

        <div class="hero-actions">
          <a href="#programmes" class="btn btn-primary">
            Explore Our Programmes
          </a>
          <a href="/community.html" class="btn btn-secondary">
            Join Our Community
          </a>
        </div>
      </div>

      <!-- HERO VISUAL PLACEHOLDER -->
      <div class="hero-visual">
        <img
          src="/assets/images/brain-aid-scientific-collaboration.jpg"
          alt="Participants collaborating during a scientific and technical learning activity"
          class="hero__image"
        />
        <!-- <div class="hero-visual-content"> -->
          <!-- <span class="hero-visual-icon">🧠</span> -->

          <!-- <h2>Neuroscience. Imaging. AI.</h2> -->

          <!-- <p> -->
            <!-- Connecting knowledge, technology and people to advance brain research. -->
          <!-- </p> -->
        <!-- </div> -->
      </div>
    </div>
  </section>

  <!-- IMPACT & COMMUNITY SNAPSHOT -->
  <section class="impact">
    <div class="container">
      <div class="impact-heading">
        <span class="impact-label">OUR GROWING COMMUNITY</span>

        <h2>Connecting people, institutions and ideas.</h2>

        <p>
          A growing community of emerging researchers, students and professionals working to expand opportunities in neuroscience, neuroimaging and artificial intelligence.
        </p>
      </div>
      <div class="impact-grid">
      
        <div class=" impact-card">
          <h3>141+</h3>
          <p>Community Members</p>
        </div>

        <div class="impact-card">
          <h3>42</h3>
          <p>Representative Units</p>
        </div>

        <div class="impact-card">
            <h3>37</h3>
            <p>Institutions</p>
        </div>

        <div class="impact-card">
            <h3>6</h3>
            <p>Countries</p>
        </div>

      </div>
    </div>
  </section>

  <!-- WHO WE ARE -->
  <section class="about-preview">
    <div class="container">
      <div class="about-preview__content">

        <span class="about-preview__label">WHO WE ARE</span>

        <h2>
          Building capacity for the future of neuroscience.
        </h2>

        <p>
          BRAIN-AID is a scientific and educational society dedicated to advancing neuroscieice, neuroimaging and artificial intelligence through education, collaboration, research exposure and capacity development.
        </p>

        <p>
          We connect students, emerging researchers and early-career professionals with opportunities to learn, develop techincal skills, engage with research and contribute to the advancement of brain science.
        </p>

        <a href="/about.html" class="btn btn-secondary">
          Learn More About BRAIN-AID
        </a>

      </div>
    </div>
  </section>

  <!-- OUR PROGRAMMES -->
  <section class="programmes" id="programmes">
    <div class="container">
      <div class="programmes-heading">

        <span class="programmes-label">WHAT WE DO</span>

        <h2>
          Opportunities to learn, connect and grow.
        </h2>

        <p>
          Through structured learning, scientific engagement and collaborative initiatives, we equip emerging researchers and professionals with the knowledge, skills and networks to contribute to neuroscience and biomedical research.
        </p>

      </div>

      <div class="programmes-grid">
        <div class="card">
          
          <div class="card-icon">
            <span>01</span>
          </div>

          <h3>Journal Club</h3>

          <p>
            A platform for scientific discussion, critical appraisal of research literature and the development of evidence-based thinking.
          </p>

          <a href="#" class="card-link">
            Explore Programme
          </a>

        </div>
      </div>
    </div>
  </section>

</main>
`

// MOBILE MENU INTERACTION

const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.nav-links')

menuToggle.addEventListener('click', () => {

  const isOpen = navigation.classList.toggle('is-open')

  menuToggle.setAttribute('aria-expanded', isOpen)
  menuToggle.setAttribute(
    'aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu'
  )

  menuToggle.textContent = isOpen ? 'Close' : 'Menu'
})

// CLOSE MENU AFTER SELECTING A LINK

navigation.querySelectorAll('a').forEach(link => {

  link.addEventListener('click', () => {

    navigation.classList.remove('is-open')

    menuToggle.setAttribute('aria-expanded', 'false')

    menuToggle.setAttribute('aria-label', 'Open navigation menu')

    menuToggle.textContent = 'Menu'

  })

})