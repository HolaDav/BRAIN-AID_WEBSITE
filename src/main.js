import './style.css'
// import heroImg from './assets/hero.png'

document.querySelector('#app').innerHTML = `
<header class="section">
  <div class="container">
    <h1>BRAIN-AID</h1>
    <p> Biomedical Research in Artificial Intelligence and NeuroImaging for Advanced Innovations and Diagnostics</p>
  </div>
</header>

<main>
  <section class="section">
    <div class="container">
      <div class="section-heading">
      <h2>Who We Are</h2>
      <p>
        BRAIN-AID is a scientific and educational society advancing neuroscience, neuroimaging and artificial intelligence through education, collaboration and research.
      </p>
      </div>
    </div>
  </section>

  <section class="section section--soft">
    <div class="container">
      <div class="section-heading">

        <a href="#" class="btn btn-primary">
          Explor Our Programmes
        </a>

        <p>
          We create structured learning and research opportunities for students and early-career professionals.
        </p>

        <a href="#" class="btn btn-secondary">
          Join Our Community
        </a>
        
      </div>
    </div>
  </section>
</main>
`
