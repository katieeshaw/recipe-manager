function Recipes() {
  return (
    <div>
        <section className="home-container" id="top">
            <div className="sidebar">
                <a href="https://github.com/katieeshaw" target="_blank" rel="noopener noreferrer"><img src="./images/github-ico.png" alt="Icon 2" className="home-hero__social-icon" /></a>
                <a href="https://linkedin.com/in/katie-e-shaw" target="_blank" rel="noopener noreferrer"><img src="./images/linkedin-ico.png" alt="Icon 1" className="home-hero__social-icon" /></a>
                <a href="mailto:katieshaw0509@gmail.com" target="_blank" rel="noopener noreferrer"><img src="./images/email-image.webp" alt="Icon 1" /></a>
            </div>

            <section className="intro">
                <h1>Hey, I'm Katie Shaw</h1>
                <p className="intro-text">I'm a software engineer who loves building web apps and solving problems to create real, practical solutions.</p>
            </section>
        </section>
    </div>
  );
}

export default Recipes;