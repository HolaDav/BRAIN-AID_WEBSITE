import './style.css'
// import heroImg from './assets/hero.png'

document.querySelector('#app').innerHTML = `
<header class="site-header">
  <div class="container nav-container">

    <!-- BRAIN-AID Official Logo -->
    <a href="/" class="site-logo" aria-label="BRAIN-AID Home">
      <img src="/assets/brand/brain-aid-logo-blue-transparent_bg.png"/ alt="BRAIN-AID - Biomedical Research in Artificial Intelligence and Neuroimaging for Advanced Innovations and Diagnostics"/>
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
  <section class="section">
    <div class="container">
      <div class="section-heading">
        <h1>Welcome to BRAIN-AID</h1>

        <p>
          Advancing neuroscience through research, technology and collaboration.
        </p>
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