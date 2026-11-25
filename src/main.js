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
      
        <div class="impact-card">
          <h3>147</h3>
          <p>Community Members</p>
        </div>

        <div class="impact-card">
          <h3>46</h3>
          <p>Representative Units</p>
        </div>

        <div class="impact-card">
            <h3>41</h3>
            <p>Institutions</p>
        </div>

        <div class="impact-card">
            <h3>7</h3>
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
          BRAIN-AID is a scientific and educational society dedicated to advancing neuroscience, neuroimaging and artificial intelligence through education, collaboration, research exposure and capacity development.
        </p>

        <p>
          We connect students, emerging researchers and early-career professionals with opportunities to learn, develop technical skills, engage with research and contribute to the advancement of brain science.
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

        <div class="card">

          <div class="card-icon">
            <span>02</span>
          </div>

          <h3>Technical Training Programmes</h3>

          <p>
            Practical learning opportunities designed to develop technical skills in neuroscience, neuroimaging, computational methods and artificial intelligence.
          </p>

          <a href="#" class="card-link">
            Explore Programme
          </a>

        </div>

        <div class="card">

          <div class="card-icon">
            <span>03</span>
          </div>

          <h3>Seminars & Scientific Events</h3>

          <p>
            Scientific talks, seminars and events that facilitate knowledge exchange, expose participants to emerging research and connect the neuroscience community.
          </p>

          <a href="#" class="card-link">
            Explore Programme
          </a>

        </div>

        <div class="card">

          <div class="card-icon">
            <span>04</span>
          </div>

          <h3>Research & Collaboration</h3>

          <p>
            Initiatives that promote research exposure, collaborative learning, mentorship and opportunities for emerging researchers to engage with scientific work.
          </p>

          <a href="#" class="card-link">
            Explore Programme
          </a>

        </div>

      </div>
    </div>
  </section>

  <!-- OUR COMMUNITY -->
  <section class="community" id="community">
    <div class="container">
      <div class="community-heading">
      
        <span class="community-label">OUR COMMUNITY</span>

        <h2>
          A community connected by curiosity and discovery.
        </h2>

        <p>
          Bringing together students, emerging researchers and professionals interested in neuroscience, neuroimaging, biomedical research and artificial intelligence, BRAIN-AID creates a space for learning, scientific exchange, connection and shared growth.
        </p>

      </div>

      <div class="community-grid">
        <div class="community-highlight">

          <div class="community-highlight__image">
            <img
              src="/assets/images/learning_2.jpg"
              alt="BRAIN-AID members participating in a shared learning activity"
            />
          </div>

          <div class="community-highlight__content">
            <span class="community-highlight__number">01</span>

            <h3>Learning Together</h3>

            <p>
              Through journal clubs, learning sessions and technical development initiatives, we create opportunities for members to deepen their knowledge, explore new ideas and grow together.
            </p>
          </div>
        </div>
        <div class="community-highlight">

          <div class="community-highlight__image">
            <img
              src="/assets/images/connecting_1.jpg"
              alt="Members connecting and engaging across institutions"
            />
          </div>
          
          <div class="community-highlight__content">
            <span class="community-highlight__number">02</span>

            <h3>Connecting Across Institutions</h3>

            <p>
              Through our growing community and representative network, we connect individuals across institutions collaboration, shared opportunities and a stronger scientific community.
            </p>
          </div>
        </div>
        <div class="community-highlight">

          <div class="community-highlight__image">
            <img
              src="/assets/images/science_1.jpg"
              alt="BRAIN-AID members engaging in a scientific event"
            />
          </div>
          
          <div class="community-highlight__content">
            <span class="community-highlight__number">03</span>

            <h3>Engaging with Science</h3>

            <p>
              From scientific seminars and discussions to research and conference engagement, we encourage members to participate in the wider scientific community, exchange ideas and explore emerging developments.
            </p>
          </div>
        </div>
      </div>

      <div class="community-cta">

        <h3>Be part of a growing scientific community.</h3>

        <p>
          Connect with emerging researchers and professionals, explore opportunities to learn and contribute to the advancement of neuroscience and biomedical research.
        </p>

        <a href="/community.html" class="btn btn-primary">
          Join Our Community
        </a>

      </div>

    </div>
  </section>

  <!-- SCIENTIFIC ENGAGEMENT -->
  <section class="engagement" id="engagement">
    <div class="container">

      <div class="engagement-heading">

        <span class="engagement-label">SCIENTIFIC ENGAGEMENT</span>

        <h2>
          Connecting out community to the wider scientific landscape.
        </h2>

        <p>
          We encourage scientific exchange, research exposure and collaboration by creating opportunities for our community to engage with researchers, instutions and developments across neuroscience, neuroimaging and artificial intelligence.
        </p>

      </div>

      <div class="engagement-grid">

        <div class="engagement-highlight">

          <div class="engagement-highlight__content">

            <span class ="engagement-highlight__number">01</span>

            <span class ="engagement-highlight__category">BRAIN-AID SCIENTIFIC EVENT</span>

            <h3>
              Building Cross-Institutional Collaborations and Closing Technical Skill Gaps
            </h3>

            <p>
              BRAIN-AID's inaugural scientific seminar brough together speakers and participants to explore collaboration and techincal capacity development in neuroscience and related research fields.
            </p>

            <span class ="engagement-highlight__date">13 May 2025</span>

          </div>

        </div>

        <div class="engagement-highlight">

          <div class="engagement-highlight__content">

            <span class ="engagement-highlight__number">02</span>

            <span class ="engagement-highlight__category">EXTERNAL SCIENTIFIC PRESENTATIONS</span>

            <h3>
              Presenting BRAIN-AID Research at Scientific Platforms
            </h3>

            <p>
              BRAIN-AID research teams have presented scientific work at external academic and professional platforms, including the Faculty of Clinical Sciences, University of Lagos, and the Association of Radiographers of Nigeria (ARN) 2025 conference.
            </p>

            <span class ="engagement-highlight__date">October - November 2025</span>

          </div>

        </div>

        <div class="engagement-highlight">

          <div class="engagement-highlight__content">

            <span class ="engagement-highlight__number">03</span>

            <span class ="engagement-highlight__category">RESEARCH & COLLABORATION</span>

            <h3>
              Advancing Research Through Collaboration
            </h3>

            <p>
              We encourage collaborative research development, scientific mentorship and opportunities for emerging researchers to contribute to research projects, develop techincal expertise and communicate scientific findings.
            </p>

          </div>

        </div>

      </div>

    </div>
  </section>

  <!-- NEWS & EVENTS -->
  <section class="news-events" id="news">
    <div class="container">
    
      <div class="news-events-heading">
      
        <span class="news-events-label">NEWS & EVENTS</span>

        <h2>
          Stay connected with what's happening at BRAIN-AID.
        </h2>

        <p>
          Explore upcoming activities, scientific engagements, announcements and highlights from our growing community as we continue to advance newroscience, research and technological innovation.
        </p>
      
      </div>

      <!-- UPCOMING EVENTS -->
      <div class="upcoming-events">
      
        <div class="upcoming-events-heading">
        
          <span class="news-events-label">WHAT'S COMING UP</span>

          <h2>Upcoming Events</h2>

          <p>
            Discover upcoming opportunities to learn, connect and engage with the BRAIN-AID scientific community.
          </p>
        
        </div>

        <div class="upcoming-events-grid">
        
          <article class="event-card">
          
            <div class="event-card__image">
              <!-- Event photograph or promotional graphic will go here -->
            </div>

            <div class="event-card__content">

              <span class="event-card__category">
                EVENT CATEGORY
              </span>

              <h4>Event Title</h4>

              <p>
                A brief discription of the event, its purpose and what participants can expect.
              </p>

              <div class="event-card__details">
              
                <span>Event Date</span>

                <span>Event Location</span>
              
              </div>

              <a href="#" class="card-link">
                View Event Details
              </a>

            </div>
          
          </article>
        
        </div>
      
      </div>

      <!-- LATEST NEWS & HIGHLIGHTS -->
      <div class="latest-news">
      

      
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