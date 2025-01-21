// import React from "react";
import "./VeilleInfo.css";

const VeilleInfo = () => {
  return (
    <div className="container-common veille-info-container">
      <h1>Le spear phishing dans les entreprises</h1>

      <h4>Sujet de veille informatique</h4>

      <div className="paragraphe-1">
        <p>
          L&apos;ère du numérique, dans laquelle nous vivons, nous a apporté
          beaucoup d&apos;avantages mais aussi son lot d&apos;inconvéniants et
          de risques. En effet, nous faisons face à une augmentation constante
          du nombre de cyberattaques, rendant parfois impossible aux
          organisations d&apos;être à jour sur les nouveaux risques et
          vulnérabilités. Aujourd&apos;hui, aucune organisation ne peut nous
          garantir une protection absolue face à ces menaces qui sont de plus en
          plus sophistiquées, certaines sont mêmes capable de cibler
          précisemment leur victime. Par ailleurs, les particuliers ne sont pas
          les seuls qui peuvent être victimes de ces cyberattaques, les
          entreprises sont elles aussi grandement <strong>ciblées</strong>.
          <br />
          <br />
          C&apos;est pourquoi cette petite veille informatique traite donc
          d&apos;une de ces cyberattaques sophistiquées qui ciblent les
          entreprises : le &quot;spear phishing&quot;, ou hameçonnage ciblé.
          Comment fonctionne cette attaque ? Quels sont les risques associés ?
          Quels sont les moyens de s&apos;en protéger ?
        </p>
      </div>

      <div className="paragraphe-2">
        <h2>Qu&apos;est-ce que le spear phishing ?</h2>

        <p>
          Le terme &quot;phishing&quot; est de plus en plus populaire, tandis
          que le terme &quot;spear phishing&quot; semble encore moins familier.
          L&apos;Agence nationale de la sécurité des systèmes d&apos;information
          (ANSSI) définit le hameçonnage ciblé ou spear phishing comme une
          méthode de piratage qui « repose généralement sur une usurpation de
          l&apos;identité de l&apos;expéditeur, et procède par ingénierie
          sociale (ou piratage psychologique) forte afin de lier l&apos;objet du
          courriel et le corps du message à l&apos;activité de la personne ou de
          l&apos;organisation ciblée ».
        </p>

        <div className="paragraphe-2-1">
          <p>
            En d&apos;autres termes, les attaquants tentent de se faire passer
            pour une personne ou organisation que vous connaissez. Ils créent
            des e-mails trompeurs qui semblent légitimes pour vous faire baisser
            votre garde et vous pousser à ouvrir une pièce jointe corrompue ou
            un lien vers un site malveillant. L’objectif est d’inciter la
            victime à divulguer des informations sensibles, telles que des
            identifiants de connexion, des mots de passe ou des informations
            financières.
          </p>

          <img
            src="/sp-fonctionnement.jpg"
            alt="Fonctionnement du spear phishing"
            className="phishing-img"
          />
        </div>
      </div>

      <div className="paragraphe-3">
        <h2>La différence entre le hameçonnages et le spear phishing</h2>
        <div className="paragraphe-3-1">
          <p>
            Le phishing est une attaque en masse où des e-mails génériques sont
            envoyés à un grand nombre de personnes dans l&apos;espoir que
            quelqu&apos;un se fasse piégé, sans ciblage spécifique. Le spear
            phishing, en revanche, est plus ciblé et personnalisé. Les
            attaquants effectuent des recherches approfondies sur leurs victimes
            potentielles pour créer des e-mails qui semblent authentiques et
            crédibles.
          </p>
          <img
            src="/sp-diff.png"
            alt="Différence entre le phishing et le spear phishing"
            className="phishing-img"
          />
        </div>
      </div>

      <div className="paragraphe-4">
        <h2>
          Les conséquences d&apos;une attaque de spear phishing pour les
          entreprises
        </h2>

        <p>
          Les attaques de spear phishing peuvent entraîner des vols de données
          sensibles, des pertes financières significatives, et une atteinte à la
          réputation de l&apos;entreprise. Ces incidents peuvent également
          provoquer des perturbations opérationnelles majeures, affectant la
          productivité et la confiance des clients. Les conséquences d&apos;une
          attaque de spear phishing peuvent être dévastatrices pour une
          entreprise. Voici les principaux impacts.
        </p>

        <div className="paragraphe-4-1">
          <ul>
            <li>
              <h3>Pertes financières</h3>
              <p>
                Les attaques réussies peuvent entraîner le vol de fonds directs
                via des transactions frauduleuses ou des coûts de réponse.
              </p>
            </li>

            <li>
              <h3>Violation de données</h3>
              <p>
                Une fuite d&apos;informations sensibles comme les données des
                clients, les finances de l&apos;entreprise ou ses secrets
                commerciaux, ce qui peut avoir des répercussions légales et
                financières graves.
              </p>
            </li>

            <li>
              <h3>Impact sur la réputation</h3>
              <p>
                La perte de confiance des clients, partenaires et investisseurs
                peut nuire durablement à la réputation de l&apos;entreprise,
                rendant difficile la reconstruction de la crédibilité.
              </p>
            </li>

            <li>
              <h3>Perturbations opérationnelles</h3>
              <p>
                Les attaques peuvent provoquer des interruptions de service et
                la compromission de systèmes critiques, affectant la continuité
                des opérations et la productivité de l&apos;entreprise.
              </p>
            </li>

            <li>
              <h3>Conséquences légales</h3>
              <p>
                Les entreprises peuvent faire face à des poursuites judiciaires
                et des sanctions réglementaires en cas de non-conformité aux
                régulations en matière de protection des données et de
                cybersécurité.
              </p>
            </li>

            <li>
              <h3>Risques accrus d&apos;attaques futures</h3>
              <p>
                Les informations obtenues lors d&apos;une attaque peuvent être
                utilisées pour mener d&apos;autres attaques ciblées, augmentant
                les risques de compromission future.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="paragraphe-5">
        <h2>
          Les conséquences d&apos;une attaque de spear phishing pour les
          entreprises
        </h2>

        <p>
          Pour se prémunir contre le spear phishing, les entreprises doivent
          adopter une approche multidimensionnelle combinant sensibilisation,
          technologies de sécurité et expertise spécialisée. Afin de protéger
          votre entreprise d&apos;une attaque par hameçonnage ciblé, respectez
          ces quelques conseils et sensibilisez vos salariés à ces pratiques
        </p>

        <div className="paragraphe-5-1">
          <ul>
            <li>
              <h3>Maintenir à jour les correctifs pour plus de sécurité.</h3>
              <p>
                Il est essentiel de s’assurer que tous les logiciels internes,
                outils réseau, systèmes d’exploitation et applications sont à
                jour et sécurisés. Pour ce faire, l’entreprise peut déployer des
                logiciels de protection contre les malwares et les pourriels.
              </p>
            </li>

            <li>
              <h3>Faire attention aux mails que l&apos;ont reçoit</h3>
              <p>
                Se méfier des liens et des extensions de pièces jointes qui
                semblent douteuses est une pratique simple mais nécessaire. En
                effet, certains mails peuvent contenir des codes malveillants
              </p>
            </li>

            <li>
              <h3>Logiciels anti-phishing</h3>
              <p>
                Des solutions techniques robustes peuvent renforcer la défense
                contre les attaques de spear phishing : antivirus, pare-feu,
                logiciels anti-phishing pour filtrer les emails malveillants
                avant qu&apos;ils n&apos;atteignent les utilisateurs. Outils
                d&apos;analyse comportementale des emails pour détecter les
                anomalies et les tentatives de fraude. Authentification
                multifactorielle (MFA) pour sécuriser l&apos;accès aux systèmes
                sensibles.
              </p>
            </li>

            <li>
              <h3>
                Collaboration avec des experts en cybersécurité et
                sensibilisation des collaborateurs
              </h3>
              <p>
                La sensibilisation des collaborateurs est essentielle pour
                détecter et éviter les tentatives de spear phishing. Cela inclut
                : des programmes de formation réguliers sur les techniques de
                phishing et les bonnes pratiques de sécurité ; des simulations
                d&apos;attaques pour évaluer la vigilance des employés et
                identifier les faiblesses ; l&apos;encouragement à la vigilance
                et à la vérification des sources des communications suspectes.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="paragraphe-6">
        <h2>Sources</h2>

        <ul>
          <li>
            <h3>
              https://www.economie.gouv.fr/entreprises/hameconnage-spearphishing
            </h3>
          </li>
          <li>
            <h3>
              https://www.journaldunet.com/cybersecurite/1509995-spear-phishing-phishing-
              ransomware-toutes-des-menaces-et-autant-de-techniques-de-defense-a-mettre-en-place/
            </h3>
          </li>
          <li>
            <h3>https://www.altospam.com/glossaire/spear-phishing/</h3>
          </li>
          <li>
            <h3>
              https://bigmedia.bpifrance.fr/nos-dossiers/spear-phishing-lattaque-par-hameconnage-
              cible#:~:text=Les%20attaques%20de%20spear%20phishing,et%20la%20confiance%20des%20clients.
            </h3>
          </li>
          <li>
            <h3>
              https://bigmedia.bpifrance.fr/nos-dossiers/spear-phishing-lattaque-par-hameconnage-
              cible#:~:text=Les%20attaques%20de%20spear%20phishing,et%20la%20confiance%20des%20clients.
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VeilleInfo;
