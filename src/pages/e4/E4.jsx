import "@react-pdf-viewer/core/lib/styles/index.css"; // Import des styles par défaut
import "./E4.css";

const E4 = () => {
  return (
    <div className="container-common e4-container">
      <h1>Épreuve E4</h1>
      <p>
        Cette page est dédiée à l&apos;épreuve E4 du BTS SIO. Elle présente les
        <br />
        projets développés, les technologies utilisées et les compétences mises
        <br />
        en avant.
      </p>
      <div className="rapports">
        <h2>Rapport de stage de première année</h2>
        <iframe
          src="/Rapport_de_stage_20232024.pdf"
          title="Rapport de Stage de première année"
          style={{ border: "solid 1px rgb(66, 201, 133)" }}
        ></iframe>
        <h2>Rapport de stage de deuxième année</h2>
        <iframe
          src="/Rapport_de_stage_20232024.pdf"
          title="Rapport de Stage de deuxième année"
          style={{ border: "solid 1px #42c5c9" }}
        ></iframe>
        <h2>Tableau de Synthèse</h2>
        <p>
          Le tableau de synthèse est un outil essentiel dans le cadre de
          <br />
          l&apos;épreuve E4 du BTS SIO. Son objectif principal est de fournir
          une vue
          <br />
          d&apos;ensemble des compétences mises en œuvre lors des projets ou
          <br />
          activités réalisés par le candidat au cours de sa formation et, en
          <br />
          particulier, durant son stage. Ce tableau joue un rôle clé dans
          <br />
          l&apos;évaluation de la capacité du candidat à mobiliser les
          compétences
          <br />
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
