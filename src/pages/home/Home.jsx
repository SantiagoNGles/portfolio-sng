import "./Home.css"; // Ajoutez un fichier CSS pour styliser cette page

const Home = () => {
  return (
    <div className="container-common home-container">
      <h1>Bienvenue sur mon portfolio</h1>

      <p>
        Bonjour, je m&apos;appelle Santiago Naranjo Henao Grajales Ladino et je
        <br />
        suis étudiant en BTS SIO (Services Informatiques aux Organisations)
        <br />
        option SLAM (Solutions Logicielles et Applications Métiers)
      </p>

      <svg
        className="arrow-down"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#16af20" />
            <stop offset="100%" stopColor="#0697ff" />
          </linearGradient>
        </defs>
        <path
          d="M50 5 L50 75 M30 55 L50 75 L70 55"
          stroke="url(#arrowGradient)"
          strokeWidth="5"
          fill="none"
        />
      </svg>

      <div className="cv">
        <h2>Mon CV</h2>
        <iframe
          src="/CVSantiagoNaranjoGrajales.pdf"
          alt="CV"
          className="cv-img"
          title="CV Santiago Naranjo Grajales"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
