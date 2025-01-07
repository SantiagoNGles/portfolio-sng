import "@react-pdf-viewer/core/lib/styles/index.css"; // Import des styles par défaut
import "./E4.css";

const E4 = () => {
  return (
    <div className="container-common e4-container">
      <h1>Épreuve E4</h1>
      <p>
        Cette page est dédiée à l&apos;épreuve E4 du BTS SIO. Elle présente les
        <br></br>
        projets développés, les technologies utilisées et les compétences mises
        <br></br>
        en avant.
      </p>
      {/* Section Rapport de Stage */}
      <div className="section">
        <h2>Rapport de Stage</h2>
        <iframe
          src="/Rapport_de_stage_20232024.pdf"
          title="Rapport de Stage"
          width="50%"
          height="1000px"
          style={{ border: "none" }}
        ></iframe>
        {/* Section Tableau de Synthèse */}
        <h2>Tableau de Synthèse</h2>
        <p>
          Le tableau de synthèse est un outil essentiel dans le cadre de
          <br></br>
          l&apos;épreuve E4 du BTS SIO. Son objectif principal est de fournir
          une vue
          <br></br>
          d&apos;ensemble des compétences mises en œuvre lors des projets ou
          <br></br>
          activités réalisés par le candidat au cours de sa formation et, en
          <br></br>
          particulier, durant son stage. Ce tableau joue un rôle clé dans
          <br></br>
          l&apos;évaluation de la capacité du candidat à mobiliser les
          compétences
          <br></br>
          techniques et organisationnelles acquises.
        </p>
        <a href="/TableauSyntheseE4.xlsx" download className="download-link">
          Télécharger le Tableau de Synthèse
        </a>
      </div>
    </div>
  );
};

export default E4;
