import "./Certif.css";

const Certif = () => {
  return (
    <div className="container-common certif-container">
      <h1>Certification</h1>
      <p>
        Cette page présente les informations liées à la certification obtenue ou
        à obtenir.
      </p>
      <ul>
        <li>
          Nom de la certification : <strong>Exemple Certification</strong>
        </li>
        <li>
          Date d&apos;obtention : <strong>XX/XX/XXXX</strong>
        </li>
        <li>
          Description :{" "}
          <strong>Une courte description de la certification.</strong>
        </li>
      </ul>
    </div>
  );
};

export default Certif;
