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

      <a
        href="/CVSantiagoNaranjoGrajales.pdf"
        download
        className="download-link"
      >
        Télécharger mon CV
      </a>
    </div>
  );
};

export default Home;
