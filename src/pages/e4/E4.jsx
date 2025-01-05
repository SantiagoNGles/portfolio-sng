import "./E4.css";

const E4 = () => {
  return (
    <div className="container-common e4-container">
      <h1>Épreuve E4</h1>
      <p>
        Cette page est dédiée à l&apos;épreuve E4 du BTS SIO. Elle présente les
        projets développés, les technologies utilisées et les compétences mises
        en avant.
      </p>
      <div className="list-e4-container">
        <h2>Projets présentés</h2>
        <ul>
          <li>Projet 1 : Gestion de stock (Java, MySQL)</li>
          <li>Projet 2 : Application mobile de réservation (React Native)</li>
        </ul>
        <h2>Technologies utilisées</h2>
        <ul>
          <li>Java</li>
          <li>MySQL</li>
          <li>React Native</li>
          <li>Node.js</li>
        </ul>
      </div>
    </div>
  );
};

export default E4;
