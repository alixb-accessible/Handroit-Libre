// Base de données des thématiques juridiques
// Chaque thème contient son titre et son contenu en HTML

const themeData = {
    mdph: {
        title: 'MDPH et droits fondamentaux',
        content: `
            <h3>Qu'est-ce que la MDPH ?</h3>
            <p>La Maison Départementale des Personnes Handicapées est le guichet unique pour toutes vos démarches liées au handicap. Créée par la loi du 11 février 2005, elle centralise l'accueil, l'information, l'accompagnement et le conseil des personnes handicapées.</p>

            <h3>Textes de référence</h3>
            <div class="text-reference">
                <strong>Loi n° 2005-102 du 11 février 2005</strong>
                Pour l'égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées. Cette loi pose le principe de compensation du handicap et crée les MDPH.
                Articles L. 146-3 à L. 146-9 du Code de l'action sociale et des familles (CASF)
            </div>

            <div class="text-reference">
                <strong>Article L. 241-6 du CASF</strong>
                Définit la composition et le fonctionnement de la Commission des Droits et de l'Autonomie des Personnes Handicapées (CDAPH), qui prend toutes les décisions concernant les droits de la personne handicapée.
            </div>

            <div class="text-reference">
                <strong>Décret n° 2005-1587 du 19 décembre 2005</strong>
                Relatif à la MDPH et fixe les modalités d'organisation et de fonctionnement.
            </div>

            <h3>Vos droits essentiels</h3>
            <p><strong>Délai de traitement :</strong> 4 mois maximum à compter du dépôt du dossier complet. Au-delà, le silence vaut acceptation pour certaines demandes, ou vous pouvez saisir le tribunal administratif.</p>
            
            <p><strong>Droit au recours :</strong> Vous disposez de 2 mois à compter de la notification pour contester une décision de la CDAPH. Le recours peut être gracieux (devant la MDPH), ou contentieux (devant le tribunal).</p>
            
            <p><strong>Droit à l'accompagnement :</strong> Vous pouvez vous faire assister par une personne de votre choix, une association, ou un professionnel lors de vos démarches et lors de la Commission.</p>

            <p><strong>Droit à l'information :</strong> La MDPH doit vous informer sur vos droits, les prestations existantes, et vous accompagner dans la constitution de votre dossier.</p>

            <h3>Les décisions de la CDAPH</h3>
            <p>La CDAPH est compétente pour reconnaître la qualité de travailleur handicapé (RQTH), attribuer l'AAH, la PCH, la carte mobilité inclusion, orienter vers un établissement ou service, etc.</p>

            <h3>Recours possibles</h3>
            <p><strong>Recours administratif préalable obligatoire (RAPO) :</strong> Depuis 2019, pour certaines décisions, vous devez d'abord former un recours administratif avant de saisir le tribunal.</p>
            
            <p><strong>Tribunal compétent :</strong> Selon la nature de la décision contestée, ce sera soit le tribunal judiciaire (contentieux de la sécurité sociale), soit le tribunal administratif.</p>

            <h3>Ressources utiles</h3>
            <p>Annuaire des MDPH : <a href="https://www.cnsa.fr/vous-etes-une-personne-handicapee-ou-un-proche/vous-cherchez-des-reponses-a-vos-questions/ou-sadresser" target="_blank" rel="noopener noreferrer">CNSA - Annuaire</a></p>
        `
    },

    aah: {
        title: 'AAH - Allocation aux Adultes Handicapés',
        content: `
            <h3>Qu'est-ce que l'AAH ?</h3>
            <p>L'Allocation aux Adultes Handicapés garantit un revenu minimum aux personnes en situation de handicap ayant des ressources modestes. Elle est versée par la CAF ou la MSA, mais c'est la CDAPH qui décide de son attribution.</p>

            <h3>Textes de référence</h3>
            <div class="text-reference">
                <strong>Articles L. 821-1 à L. 821-10 du Code de la sécurité sociale</strong>
                Définissent les conditions d'attribution, le montant et les modalités de versement de l'AAH.
            </div>

            <div class="text-reference">
                <strong>Articles R. 821-1 à R. 821-11 du CSS</strong>
                Précisent les conditions de ressources, les plafonds et les règles de cumul avec d'autres revenus.
            </div>

            <div class="text-reference">
                <strong>Décret n° 2022-570 du 19 avril 2022</strong>
                Déconjugalisation partielle de l'AAH : suppression de la prise en compte des revenus du conjoint dans certains cas.
            </div>

            <h3>Conditions d'attribution</h3>
            <p><strong>Taux d'incapacité :</strong></p>
            <ul>
                <li>Au moins 80%, ou</li>
                <li>Entre 50% et 79% avec une restriction substantielle et durable d'accès à l'emploi (RSDAE). La RSDAE implique des difficultés importantes d'accès à l'emploi ne pouvant être compensées par des aménagements.</li>
            </ul>

            <p><strong>Âge :</strong> Au moins 20 ans, ou 16 ans si vous n'êtes plus considéré à charge pour le bénéfice des prestations familiales.</p>

            <p><strong>Résidence :</strong> Résider en France de façon permanente et régulière.</p>

            <p><strong>Ressources :</strong> Vos ressources ne doivent pas dépasser un plafond annuel qui varie selon votre situation familiale.</p>

            <h3>Montant de l'AAH</h3>
            <p>Le montant maximal de l'AAH est révisé chaque année. En 2025, vérifiez le montant actuel sur le site de la CAF. L'AAH peut être versée en totalité (taux plein) ou en complément d'autres ressources (AAH différentielle).</p>

            <h3>Durée d'attribution</h3>
            <p>L'AAH peut être attribuée pour 1 à 10 ans selon votre situation. Si votre handicap n'est pas susceptible d'évoluer favorablement, l'AAH peut être attribuée à vie (sans limitation de durée) pour les personnes ayant un taux d'incapacité d'au moins 80%.</p>

            <h3>Cumuls possibles</h3>
            <p><strong>Avec des revenus d'activité :</strong> L'AAH peut être cumulée avec des revenus professionnels. Un mécanisme de calcul spécifique permet un cumul partiel pour encourager le retour à l'emploi.</p>

            <p><strong>Majoration pour la vie autonome (MVA) :</strong> Complément de 104,77 euros par mois (montant 2024) sous conditions : percevoir l'AAH à taux plein, avoir un logement indépendant, percevoir une aide au logement.</p>

            <p><strong>Complément de ressources :</strong> Supprimé depuis le 1er décembre 2019 pour les nouvelles demandes, mais maintenu pour les bénéficiaires antérieurs.</p>

            <h3>AAH et vie de couple</h3>
            <p>Depuis le 1er octobre 2023, l'AAH est partiellement déconjugalisée : un abattement forfaitaire est appliqué sur les revenus du conjoint, ce qui améliore le montant perçu par de nombreux bénéficiaires en couple.</p>
        `
    },

    pch: {
        title: 'PCH - Prestation de Compensation du Handicap',
        content: `
            <h3>Qu'est-ce que la PCH ?</h3>
            <p>La Prestation de Compensation du Handicap est une aide financière destinée à compenser les surcoûts liés au handicap dans la vie quotidienne. Elle finance des besoins très variés : aides humaines, techniques, aménagement du logement et du véhicule, charges spécifiques, aides animalières.</p>

            <h3>Textes de référence</h3>
            <div class="text-reference">
                <strong>Articles L. 245-1 à L. 245-14 du CASF</strong>
                Définissent les conditions d'attribution et les différents volets de la PCH.
            </div>

            <div class="text-reference">
                <strong>Articles R. 245-1 à R. 245-70 du CASF</strong>
                Précisent les modalités de calcul, les montants maximaux et les conditions d'attribution de chaque volet.
            </div>

            <div class="text-reference">
                <strong>Décret n° 2020-1826 du 31 décembre 2020</strong>
                Élargissement de la PCH à de nouveaux bénéficiaires, notamment les personnes ayant une altération de fonctions psychiques, mentales ou cognitives.
            </div>

            <h3>Conditions d'attribution</h3>
            <p>Pour bénéficier de la PCH, vous devez présenter :</p>
            <ul>
                <li>Une difficulté absolue pour la réalisation d'au moins une activité essentielle de la vie quotidienne, OU</li>
                <li>Une difficulté grave pour la réalisation d'au moins deux activités essentielles</li>
            </ul>

            <p>Ces difficultés doivent être définitives ou d'une durée prévisible d'au moins un an.</p>

            <p><strong>Âge :</strong> La demande doit être faite avant 60 ans (ou avant 75 ans si vous remplissiez les conditions avant 60 ans).</p>

            <h3>Les 5 volets de la PCH</h3>

            <h4>1. Aides humaines</h4>
            <p>Compense le besoin d'aide dans les actes essentiels de la vie quotidienne (toilette, habillage, alimentation, déplacements, etc.). Vous pouvez employer un aidant familial, un service prestataire, ou recourir au dédommagement d'un aidant familial.</p>

            <h4>2. Aides techniques</h4>
            <p>Équipements conçus ou adaptés pour compenser le handicap : fauteuil roulant, appareil auditif, matériel informatique adapté, etc. Plafond : 13 200 euros sur 10 ans (renouvelable).</p>

            <h4>3. Aménagement du logement et du véhicule</h4>
            <p>Travaux d'adaptation du logement (élargissement des portes, installation d'une rampe, douche accessible...) et aménagement du véhicule (commandes adaptées, hayon...). Plafonds différents selon la nature des travaux.</p>

            <h4>4. Charges spécifiques</h4>
            <p>Dépenses permanentes et prévisibles liées au handicap et non prises en charge par d'autres financements (entretien de matériel spécifique, abonnements spéciaux...). Plafond : 100 euros par mois.</p>

            <h4>5. Aides animalières</h4>
            <p>Acquisition et entretien d'un animal spécialement éduqué (chien d'assistance, chien guide...). Plafond : 3 000 euros par période de 10 ans pour l'acquisition, 50 euros par mois pour l'entretien.</p>

            <h3>PCH et parentalité</h3>
            <p>Depuis 2021, la PCH parentalité permet de compenser les besoins liés à l'exercice de la parentalité pour les parents en situation de handicap (aide pour s'occuper de ses enfants).</p>

            <h3>Taux de prise en charge</h3>
            <p>Le taux de prise en charge dépend de vos ressources :</p>
            <ul>
                <li>100% si vos ressources sont inférieures à 28 621,40 euros par an (montant 2024)</li>
                <li>80% au-delà de ce plafond</li>
            </ul>

            <h3>PCH vs autres aides</h3>
            <p>La PCH n'est pas cumulable avec l'Allocation Compensatrice pour Tierce Personne (ACTP), mais vous pouvez choisir celle qui vous est la plus favorable. La PCH peut se cumuler avec l'AAH.</p>
        `
    },

    invalidite: {
        title: 'Pension d\'invalidité',
        content: `
            <h3>Qu'est-ce que la pension d'invalidité ?</h3>
            <p>La pension d'invalidité est une prestation versée par l'Assurance Maladie pour compenser une perte de capacité de travail ou de gain, suite à un accident ou une maladie d'origine non professionnelle. Elle est distincte de l'AAH.</p>

            <h3>Textes de référence</h3>
            <div class="text-reference">
                <strong>Articles L. 341-1 à L. 341-16 du Code de la sécurité sociale</strong>
                Définissent les conditions d'attribution et les catégories d'invalidité.
            </div>

            <div class="text-reference">
                <strong>Articles R. 341-1 à R. 341-28 du CSS</strong>
                Précisent les modalités de calcul, les barèmes et les conditions de révision.
            </div>

            <h3>Conditions d'attribution</h3>
            <ul>
                <li>Avoir moins de 62 ans</li>
                <li>Être affilié à la Sécurité sociale depuis au moins 12 mois</li>
                <li>Avoir cotisé sur une rémunération au moins égale à 2 030 fois le SMIC horaire au cours des 12 mois précédents</li>
                <li>Présenter une invalidité réduisant d'au moins 2/3 votre capacité de travail ou de gain</li>
            </ul>

            <h3>Les 3 catégories d'invalidité</h3>

            <h4>Catégorie 1</h4>
            <p>Invalides capables d'exercer une activité rémunérée. Montant : 30% du salaire annuel moyen (SAM). Possibilité de cumuler la pension avec un salaire.</p>

            <h4>Catégorie 2</h4>
            <p>Invalides incapables d'exercer une activité professionnelle. Montant : 50% du SAM. Ce sont les situations les plus fréquentes.</p>

            <h4>Catégorie 3</h4>
            <p>Invalides incapables d'exercer une activité ET nécessitant l'assistance d'une tierce personne pour les actes essentiels de la vie. Montant : 50% du SAM + majoration pour tierce personne (MTP) de 1 152,74 euros par mois en 2024.</p>

            <h3>Calcul de la pension</h3>
            <p>La pension est calculée sur la base de votre salaire annuel moyen (SAM) des 10 meilleures années de cotisation. Il existe un montant minimal et un montant maximal.</p>

            <h3>Cumul avec d'autres prestations</h3>

            <p><strong>Pension d'invalidité et AAH :</strong> Pas de cumul intégral. Si vous percevez une pension d'invalidité inférieure au montant de l'AAH, vous pouvez percevoir l'AAH en complément (AAH différentielle), sous conditions de ressources.</p>

            <p><strong>Pension d'invalidité et PCH :</strong> Cumul possible. La PCH compense les besoins liés au handicap, la pension d'invalidité compense la perte de revenus.</p>

            <h3>Révision et suspension</h3>
            <p>Votre pension peut être révisée à tout moment par le médecin-conseil de l'Assurance Maladie si votre état de santé s'améliore ou s'aggrave. Vous devez signaler tout changement (reprise d'activité, amélioration de l'état de santé).</p>

            <h3>Passage en retraite</h3>
            <p>À partir de l'âge légal de départ à la retraite, votre pension d'invalidité est automatiquement transformée en pension de retraite pour inaptitude au travail. Cette retraite est calculée au taux plein, quel que soit votre nombre de trimestres cotisés.</p>
        `
    },

    retraite: {
        title: 'Retraite anticipée pour handicap',
        content: `
            <h3>Qu'est-ce que la retraite anticipée pour handicap ?</h3>
            <p>Les personnes en situation de handicap peuvent partir à la retraite avant l'âge légal, dès 55 ans, sous certaines conditions. Cette retraite est calculée au taux plein sans décote.</p>

            <h3>Textes de référence</h3>
            <div class="text-reference">
                <strong>Article L. 351-1-3 du Code de la sécurité sociale</strong>
                Définit les conditions de la retraite anticipée pour les assurés handicapés.
            </div>

            <div class="text-reference">
                <strong>Décret n° 2014-1702 du 30 décembre 2014</strong>
                Assouplit les conditions d'accès : la reconnaissance de travailleur handicapé (RQTH) suffit désormais pour les périodes antérieures à 2016.
            </div>

            <h3>Conditions d'attribution</h3>

            <p><strong>Durée d'assurance :</strong> Vous devez justifier d'une durée minimale d'assurance totale et d'une durée d'assurance cotisée, qui varient selon votre âge de départ et votre année de naissance.</p>

            <p><strong>Taux d'incapacité ou RQTH :</strong></p>
            <ul>
                <li>Pour les périodes depuis 2016 : taux d'incapacité permanente d'au moins 50%</li>
                <li>Pour les périodes avant 2016 : RQTH ou taux d'incapacité d'au moins 50%</li>
            </ul>

            <p>Le handicap doit avoir été présent pendant toute la durée d'assurance requise (ou concomitant à l'activité professionnelle).</p>

            <h3>Âge de départ possible</h3>
            <p>Selon votre situation, vous pouvez partir entre 55 et 59 ans. Plus vous partez tôt, plus la durée d'assurance requise est élevée.</p>

            <h3>Avantages</h3>
            <ul>
                <li>Départ anticipé à la retraite</li>
                <li>Retraite calculée au taux plein (50%) sans décote</li>
                <li>Majoration de la pension si la durée d'assurance est inférieure à la durée requise pour le taux plein</li>
            </ul>

            <h3>Constitution du dossier</h3>
            <p>Vous devez rassembler tous les justificatifs prouvant votre handicap pendant les périodes d'activité : notifications MDPH, décisions RQTH, attestations de taux d'incapacité, etc.</p>

            <p><strong>Conseil :</strong> Anticipez votre demande, car la reconstitution de carrière peut être longue, surtout si certains documents anciens sont difficiles à obtenir.</p>

            <h3>Démarches</h3>
            <p>Contactez votre caisse de retraite (CARSAT, MSA, etc.) au moins 6 mois avant la date souhaitée de départ. Ils vous fourniront un dossier spécifique et vous aideront à constituer votre demande.</p>

            <h3>Recours</h3>
            <p>Si votre demande est refusée, vous pouvez former un recours auprès de la Commission de recours amiable (CRA) de votre caisse, puis devant le tribunal judiciaire (pôle social) en cas de désaccord persistant.</p>
        `
    },

    emploi: {
        title: 'Emploi et RQTH',
        content: `
            <h3>Reconnaissance de la Qualité de Travailleur Handicapé (RQTH)</h3>
            <p>La RQTH ouvre droit à des mesures favorisant l'insertion professionnelle et le maintien dans l'emploi des personnes en situation de handicap.</p>

            <h3>Textes de référence</h3>
            <div class="text-reference">
                <strong>Articles L. 5213-1 à L. 5213-5 du Code du travail</strong>
                Définissent la RQTH et les droits associés.
            </div>

            <div class="text-reference">
                <strong>Article L. 5212-13 du Code du travail</strong>
                Obligation d'emploi des travailleurs handicapés (OETH) : 6% de l'effectif pour les entreprises de 20 salariés et plus.
            </div>

            <div class="text-reference">
                <strong>Loi n° 2018-771 du 5 septembre 2018</strong>
                Réforme l'obligation d'emploi et crée de nouveaux dispositifs d'accompagnement.
            </div>

            <h3>Qu'est-ce que la RQTH ?</h3>
            <p>Est considérée comme travailleur handicapé toute personne dont les possibilités d'obtenir ou de conserver un emploi sont effectivement réduites par suite de l'altération d'une ou plusieurs fonctions physique, sensorielle, mentale ou psychique.</p>

            <h3>Avantages de la RQTH</h3>
            <ul>
                <li>Accès à des aménagements de poste et d'horaires</li>
                <li>Accès à des dispositifs spécifiques d'accompagnement (Cap emploi)</li>
                <li>Priorité en cas de mutation ou de licenciement économique</li>
                <li>Accès aux entreprises adaptées (EA) et aux ESAT</li>
                <li>Accès à des formations professionnelles adaptées</li>
                <li>Retraite anticipée sous conditions</li>
            </ul>

            <h3>Aménagements du poste de travail</h3>
            <p>L'employeur a l'obligation de prendre des mesures appropriées pour permettre aux travailleurs handicapés d'accéder, de participer et de progresser dans l'emploi, ou pour qu'une formation leur soit dispensée.</p>

            <p>Ces aménagements peuvent être matériels (logiciels spécifiques, mobilier adapté), organisationnels (horaires aménagés, télétravail), ou humains (tutorat, accompagnement).</p>

            <p>Des aides financières existent pour financer ces aménagements : AGEFIPH (secteur privé), FIPHFP (fonction publique).</p>

            <h3>Obligation d'emploi (OETH)</h3>
            <p>Les entreprises de 20 salariés et plus doivent employer au moins 6% de travailleurs handicapés. En cas de non-respect, elles doivent verser une contribution à l'AGEFIPH ou au FIPHFP.</p>

            <h3>Protection contre la discrimination</h3>
            <div class="text-reference">
                <strong>Articles L. 1132-1 et suivants du Code du travail</strong>
                Interdisent toute discrimination fondée sur le handicap dans l'emploi (embauche, formation, promotion, rémunération, licenciement).
            </div>

            <p>Toute discrimination est sanctionnée pénalement (3 ans d'emprisonnement et 45 000 euros d'amende) et civilement (dommages et intérêts).</p>

            <h3>Licenciement et handicap</h3>
            <p>Un travailleur handicapé bénéficie d'une durée de préavis doublée (dans la limite de 3 mois). Le licenciement pour inaptitude doit respecter une procédure stricte, avec obligation de reclassement.</p>

            <h3>Recours en cas de discrimination</h3>
            <ul>
                <li>Saisir le Défenseur des droits</li>
                <li>Saisir l'inspection du travail</li>
                <li>Saisir le Conseil de prud'hommes</li>
                <li>Déposer plainte auprès du Procureur de la République</li>
            </ul>
        `
    },

    scolarite: {
        title: 'Scolarisation et parcours scolaire',
        content: `
            <h3>Droit à la scolarisation</h3>
            <p>Tout enfant en situation de handicap a droit à une scolarisation en milieu ordinaire, au plus près de son domicile, dans son établissement de référence. C'est un droit fondamental garanti par la loi.</p>

            <h3>Textes de référence</h3>
            <div class="text-reference">
                <strong>Article L. 111-1 du Code de l'éducation</strong>
                Affirme le droit à l'éducation pour tous les enfants, quels que soient leurs besoins particuliers.
            </div>

            <div class="text-reference">
                <strong>Articles L. 112-1 et suivants du Code de l'éducation</strong>
                Définissent les modalités de scolarisation des élèves en situation de handicap et le principe d'accessibilité.
            </div>

            <div class="text-reference">
                <strong>Loi n° 2005-102 du 11 février 2005</strong>
                Pose le principe de scolarisation prioritaire en milieu ordinaire et crée le Projet Personnalisé de Scolarisation (PPS).
            </div>

            <h3>Le Projet Personnalisé de Scolarisation (PPS)</h3>
            <p>Le PPS définit les modalités de scolarisation et les mesures d'accompagnement nécessaires. Il est élaboré par l'Équipe Pluridisciplinaire d'Évaluation (EPE) de la MDPH, en concertation avec la famille, et validé par la CDAPH.</p>

            <p>Le PPS précise :</p>
            <ul>
                <li>Les objectifs pédagogiques adaptés</li>
                <li>Les aménagements nécessaires (matériel, humain, pédagogique)</li>
                <li>L'attribution d'un Accompagnant d'Élèves en Situation de Handicap (AESH)</li>
                <li>L'orientation vers un dispositif adapté si besoin (ULIS, SEGPA...)</li>
            </ul>

            <h3>Les Accompagnants d'Élèves en Situation de Handicap (AESH)</h3>
            <p>Les AESH apportent un soutien humain pour favoriser l'autonomie de l'élève et faciliter sa scolarisation. L'accompagnement peut être :</p>
            <ul>
                <li><strong>Individuel :</strong> l'AESH est affecté à un seul élève</li>
                <li><strong>Mutualisé :</strong> l'AESH accompagne plusieurs élèves selon leurs besoins</li>
                <li><strong>Collectif :</strong> dans les dispositifs ULIS</li>
            </ul>

            <p>Les missions de l'AESH : aide aux actes de la vie quotidienne, aide à l'accès aux activités d'apprentissage, aide aux activités de la vie sociale et relationnelle.</p>

            <h3>Aménagements d'examens</h3>
            <p>Des aménagements sont possibles pour tous les examens et concours : tiers temps supplémentaire, secrétaire, ordinateur, salle séparée, adaptations de sujets, etc.</p>

            <p>La demande se fait auprès de la MDPH et du médecin désigné par la CDAPH. Les aménagements doivent être demandés suffisamment tôt (plusieurs mois avant les épreuves).</p>

            <h3>Dispositifs spécifiques</h3>
            <p><strong>ULIS (Unités Localisées pour l'Inclusion Scolaire) :</strong> Dispositif collectif au sein d'un établissement ordinaire, offrant un enseignement adapté.</p>

            <p><strong>SEGPA (Section d'Enseignement Général et Professionnel Adapté) :</strong> Pour les élèves présentant des difficultés scolaires graves et durables.</p>

            <h3>Recours</h3>
            <p>En cas de refus de scolarisation, d'absence d'AESH, ou d'aménagements insuffisants, vous pouvez saisir le Défenseur des droits, le médiateur de l'Éducation nationale, ou le tribunal administratif.</p>
        `
    },

    parentalite: {
        title: 'Parentalité et handicap',
        content: `
            <h3>Être parent en situation de handicap</h3>
            <p>Les parents en situation de handicap ont les mêmes droits que tous les parents. Ils peuvent bénéficier d'aides spécifiques pour compenser les besoins liés à l'exercice de leur parentalité.</p>

            <h3>PCH parentalité</h3>
            <p>Depuis 2021, la PCH peut financer les besoins liés à l'exercice de la parentalité : aide pour s'occuper de ses enfants (toilette, habillage, repas, accompagnement aux activités, surveillance...).</p>

            <div class="text-reference">
                <strong>Décret n° 2020-1826 du 31 décembre 2020</strong>
                Crée la PCH parentalité et définit les besoins compensables.
            </div>

            <p>La PCH parentalité peut couvrir jusqu'à 900 heures par an (pour un enfant de 0-3 ans) ou 450 heures par an (pour un enfant de 3-7 ans).</p>

            <h3>Lutte contre les discriminations</h3>
            <p>Aucune décision concernant un enfant (placement, orientation, autorité parentale) ne peut être fondée uniquement sur le handicap d'un parent. Toute décision doit être motivée par l'intérêt supérieur de l'enfant et reposer sur des éléments concrets et objectifs.</p>

            <h3>Protection contre les présomptions</h3>
            <p>Il est illégal de présumer qu'un parent handicapé est moins capable d'éduquer son enfant. Les services sociaux et judiciaires doivent évaluer les capacités parentales réelles, avec les compensations mises en place, et non le handicap en lui-même.</p>

            <h3>Recours</h3>
            <p>En cas de discrimination liée au handicap dans l'exercice de la parentalité, vous pouvez saisir le Défenseur des droits, contacter des associations spécialisées, ou engager un recours juridique.</p>
        `
    },

    ase: {
        title: 'ASE et placements abusifs',
        content: `
            <h3>Aide Sociale à l'Enfance et handicap</h3>
            <p>L'Aide Sociale à l'Enfance (ASE) intervient lorsqu'un enfant est en danger ou risque de l'être. Cependant, le handicap d'un parent ne constitue PAS en soi un danger pour l'enfant.</p>

            <h3>Principe fondamental</h3>
            <div class="alert-box">
                <strong>Le handicap d'un parent n'est jamais, à lui seul, un motif de placement d'enfant.</strong>
                Toute décision de placement doit être fondée sur des éléments concrets démontrant un danger réel pour l'enfant, et non sur des présomptions liées au handicap.
            </div>

            <h3>Textes de référence</h3>
            <div class="text-reference">
                <strong>Article 375 du Code civil</strong>
                Les mesures d'assistance éducative ne peuvent être ordonnées que si la santé, la sécurité ou la moralité d'un mineur sont en danger, ou si les conditions de son éducation sont gravement compromises.
            </div>

            <div class="text-reference">
                <strong>Convention internationale des droits de l'enfant (CIDE)</strong>
                Article 9 : L'enfant ne doit être séparé de ses parents que si cette séparation est nécessaire dans l'intérêt supérieur de l'enfant.
            </div>

            <h3>Placements abusifs : réalité alarmante</h3>
            <p>De nombreux parents handicapés sont victimes de placements abusifs fondés sur des présomptions de maltraitance ou d'incapacité parentale liées à leur handicap. Ces situations constituent des violations graves des droits fondamentaux.</p>

            <p><strong>Situations fréquentes :</strong></p>
            <ul>
                <li>Signalements basés uniquement sur le handicap, sans faits concrets</li>
                <li>Évaluations sociales discriminatoires ne tenant pas compte des compensations</li>
                <li>Refus de mise en place d'aides adaptées (PCH parentalité, accompagnement)</li>
                <li>Présomption que le handicap empêche d'être un bon parent</li>
            </ul>

            <h3>Vos droits face à l'ASE</h3>
            <p><strong>Droit à être entendu :</strong> Vous devez pouvoir vous exprimer et être écouté dans toute procédure vous concernant.</p>

            <p><strong>Droit à l'assistance :</strong> Vous pouvez vous faire accompagner par un avocat, une association, ou une personne de confiance.</p>

            <p><strong>Droit à la compensation :</strong> L'ASE et le juge doivent envisager la mise en place de compensations (PCH parentalité, aide éducative à domicile) avant d'envisager un placement.</p>

            <h3>Recours contre un placement abusif</h3>
            <p><strong>Devant le juge des enfants :</strong> Contester la mesure, demander la mainlevée du placement, faire appel de la décision.</p>

            <p><strong>Défenseur des droits :</strong> Saisir le Défenseur des droits en cas de discrimination liée au handicap.</p>

            <p><strong>Associations spécialisées :</strong> Contacter des associations de défense des droits des parents handicapés et des familles.</p>

            <h3>Constitution du dossier</h3>
            <p>Rassemblez tous les éléments prouvant vos capacités parentales : attestations de professionnels, témoignages, photos/vidéos de moments avec votre enfant, preuves de mise en place de compensations, certificats médicaux si nécessaire.</p>

            <h3>Signalements abusifs</h3>
            <p>Si vous êtes victime d'un signalement abusif à l'ASE basé sur votre handicap, documentez tout, conservez tous les échanges écrits, et faites-vous accompagner juridiquement dès le début de la procédure.</p>
        `
    },

    accessibilite: {
        title: 'Accessibilité et logement',
        content: `
            <h3>Droit à l'accessibilité</h3>
            <p>Le principe d'accessibilité universelle garantit à toute personne, quelles que soient ses capacités, l'accès aux bâtiments, aux transports, à la voirie et aux espaces publics.</p>

            <h3>Textes de référence</h3>
            <div class="text-reference">
                <strong>Loi n° 2005-102 du 11 février 2005</strong>
                Pose le principe d'accessibilité généralisée. Les établissements recevant du public (ERP) et les transports doivent être accessibles.
            </div>

            <div class="text-reference">
                <strong>Articles L. 111-7 et suivants du Code de la construction et de l'habitation</strong>
                Normes d'accessibilité des bâtiments neufs et existants recevant du public.
            </div>

            <div class="text-reference">
                <strong>Ordonnance n° 2014-1090 du 26 septembre 2014</strong>
                Création des Agendas d'Accessibilité Programmée (Ad'AP) pour la mise en conformité progressive des ERP existants.
            </div>

            <h3>Accessibilité des ERP</h3>
            <p>Les Établissements Recevant du Public doivent respecter des normes d'accessibilité : cheminement extérieur, entrée, accueil, circulations intérieures, sanitaires, signalétique...</p>

            <p>En cas de non-conformité, le propriétaire peut être sanctionné (fermeture administrative, amende).</p>

            <h3>Logement et aménagements</h3>
            <p><strong>Logements neufs :</strong> Depuis 2007, tous les logements neufs doivent respecter des normes d'accessibilité strictes.</p>

            <p><strong>Logements existants :</strong> Des aides financières existent pour réaliser des travaux d'adaptation : PCH (volet aménagement du logement), aides de l'ANAH, crédit d'impôt, prêts spécifiques.</p>

            <h3>Voirie et espaces publics</h3>
            <p>La voirie, les espaces publics et les transports en commun doivent être accessibles : passages piétons, trottoirs, places de stationnement réservées, rampes, ascenseurs...</p>

            <h3>Signaler un manquement</h3>
            <p>En cas de non-respect des règles d'accessibilité, vous pouvez :</p>
            <ul>
                <li>Signaler à la mairie ou à la préfecture</li>
                <li>Saisir la Commission Communale ou Intercommunale d'Accessibilité</li>
                <li>Saisir le Défenseur des droits</li>
                <li>Déposer une plainte si le manquement est grave</li>
            </ul>

            <h3>Carte mobilité inclusion (CMI)</h3>
            <p>La CMI remplace depuis 2017 les anciennes cartes (carte d'invalidité, carte de priorité, carte de stationnement). Elle comporte 3 mentions possibles : invalidité, priorité, stationnement.</p>
        `
    },

    braille: {
        title: 'Braille et supports accessibles',
        content: `
            <h3>Droit à l'information en braille</h3>
            <p>Les personnes aveugles ou malvoyantes ont le droit d'accéder à l'information dans un format qui leur est accessible, notamment en braille.</p>

            <h3>Textes de référence</h3>
            <div class="text-reference">
                <strong>Article 47 de la loi n° 2005-102 du 11 février 2005</strong>
                Garantit l'accès aux informations et documents administratifs en formats accessibles.
            </div>

            <h3>Documents administratifs</h3>
            <p>Les administrations doivent fournir les documents dans un format accessible sur demande : braille, gros caractères, fichiers numériques compatibles avec les lecteurs d'écran.</p>

            <h3>Édition et bibliothèques</h3>
            <p>De nombreux ouvrages sont disponibles en braille ou en audio via des associations et bibliothèques spécialisées. L'exception handicap au droit d'auteur permet l'adaptation d'œuvres protégées pour les personnes empêchées de lire.</p>

            <h3>Signalétique</h3>
            <p>Les lieux publics et les transports doivent comporter une signalétique accessible : plans en relief, indications en braille, bandes podotactiles.</p>

            <h3>Recours</h3>
            <p>Si une administration refuse de vous fournir un document en format accessible, vous pouvez saisir le Défenseur des droits.</p>
        `
    },

    lsf: {
        title: 'LSF et interprétariat',
        content: `
            <h3>Langue des Signes Française</h3>
            <p>La Langue des Signes Française est reconnue comme une langue à part entière depuis la loi du 11 février 2005.</p>

            <h3>Textes de référence</h3>
            <div class="text-reference">
                <strong>Article L. 312-9-1 du Code de l'éducation</strong>
                Reconnaît la LSF comme une langue à part entière et garantit son enseignement.
            </div>

            <h3>Droit à l'interprète</h3>
            <p>Dans certaines situations, vous avez droit à un interprète en LSF :</p>
            <ul>
                <li>Démarches administratives importantes</li>
                <li>Procédures judiciaires</li>
                <li>Soins médicaux</li>
                <li>Scolarité et enseignement supérieur</li>
                <li>Formations professionnelles</li>
            </ul>

            <h3>Financement de l'interprétariat</h3>
            <p>La PCH peut financer des heures d'interprétariat. Certaines administrations et établissements doivent également financer l'interprète pour garantir l'accessibilité de leurs services.</p>

            <h3>Accessibilité des services publics</h3>
            <p>Les services publics doivent proposer des solutions d'accessibilité pour les personnes sourdes : interprètes, visio-interprétation, transcription écrite...</p>

            <h3>Recours</h3>
            <p>En cas de refus d'interprète ou d'absence d'accessibilité, saisissez le Défenseur des droits ou l'association représentative compétente.</p>
        `
    },

    chiens: {
        title: 'Chiens d\'assistance et d\'accompagnement</h3>
            <p>Les chiens d'assistance (chiens guides d'aveugles, chiens d'assistance pour personnes à mobilité réduite, chiens d'éveil pour enfants autistes...) ont un droit d'accès garanti dans tous les lieux publics.</p>

            <h3>Textes de référence</h3>
            <div class="text-reference">
                <strong>Article L. 241-3-2 du CASF et L. 515-6 du Code pénal</strong>
                Interdiction de refuser l'accès à un lieu ouvert au public à une personne accompagnée d'un chien guide ou d'assistance.
            </div>

            <div class="text-reference">
                <strong>Loi n° 87-588 du 30 juillet 1987</strong>
                Facilite l'exercice des personnes handicapées accompagnées de chiens d'assistance.</div>

            <h3>Droits d'accès</h3>
            <p>Votre chien d'assistance peut vous accompagner partout où le public est admis : commerces, restaurants, transports en commun, hôpitaux, administrations, lieux de travail, établissements scolaires...</p>

            <p><strong>Sans supplément, sans muselière, sans obligation de le tenir en laisse courte si cela n'est pas compatible avec son travail.</strong></p>

            <h3>Refus illégaux</h3>
            <p>Tout refus d'accès fondé sur la présence du chien d'assistance est illégal et constitue une discrimination passible de sanctions pénales :</p>
            <ul>
                <li>Amende de 450 euros (contravention de 4e classe)</li>
                <li>En cas de récidive ou circonstances aggravantes : peines plus lourdes</li>
            </ul>

            <h3>Justificatifs</h3>
            <p>Vous pouvez présenter la carte d'identification du chien délivrée par l'association éducatrice. Mais légalement, aucun justificatif n'est obligatoire : le refus est illégal même sans présentation de carte.</p>

            <h3>En cas de refus</h3>
            <ul>
                <li>Expliquez calmement vos droits</li>
                <li>Demandez l'identité de la personne refusant l'accès</li>
                <li>Contactez la police ou la gendarmerie sur place</li>
                <li>Déposez plainte auprès du Procureur ou en ligne</li>
                <li>Saisissez le Défenseur des droits</li>
                <li>Signalez à l'association éducatrice de votre chien</li>
            </ul>
        `
    },

    numerique: {
        title: 'Accessibilité numérique',
        content: `
            <h3>Qu'est-ce que l'accessibilité numérique ?</h3>
            <p>L'accessibilité numérique consiste à rendre les sites web, applications mobiles et documents numériques utilisables par tous, y compris les personnes en situation de handicap.</p>

            <h3>Textes de référence</h3>
            <div class="text-reference">
                <strong>Article 47 de la loi n° 2005-102 du 11 février 2005</strong>
                Impose l'accessibilité des services de communication publique en ligne.
            </div>

            <div class="text-reference">
                <strong>RGAA (Référentiel Général d'Amélioration de l'Accessibilité)</strong>
                Définit les critères techniques d'accessibilité applicables en France, en conformité avec les standards internationaux (WCAG).
            </div>

            <h3>Qui est concerné ?</h3>
            <p>Les sites web et applications mobiles des organismes publics (État, collectivités, établissements publics) et des entreprises dont le chiffre d'affaires dépasse 250 millions d'euros doivent être accessibles.</p>

            <h3>Obligations</h3>
            <ul>
                <li>Conformité aux normes du RGAA</li>
                <li>Publication d'une déclaration d'accessibilité</li>
                <li>Mise en place d'un mécanisme de contact et de retour</li>
                <li>Publication d'un schéma pluriannuel de mise en accessibilité</li>
            </ul>

            <h3>Critères d'accessibilité</h3>
            <p>Les principaux critères concernent : les alternatives textuelles aux images, la structure et la navigation, les couleurs et contrastes, la compatibilité avec les technologies d'assistance (lecteurs d'écran), la possibilité de naviguer au clavier, etc.</p>

            <h3>Signaler un site non accessible</h3>
            <p>Si un site obligé d'être accessible ne l'est pas :</p>
            <ul>
                <li>Contactez le responsable du site via le mécanisme de retour prévu</li>
                <li>Si pas de réponse ou réponse insatisfaisante, saisissez le Défenseur des droits</li>
                <li>Signalez à l'ARCOM (ex-CSA) pour les services de communication audiovisuelle</li>
            </ul>

            <h3>Sanctions</h3>
            <p>Le non-respect des obligations d'accessibilité numérique peut entraîner des sanctions financières pouvant atteindre 20 000 euros par an.</p>
        `
    },

    arnaques: {
        title: 'Arnaques et fausses médecines',
        content: `
            <h3>Alerte : pratiques dangereuses</h3>
            <div class="alert-box">
                <strong>Attention aux pseudo-traitements miracles et aux pratiques dangereuses ciblant les personnes handicapées et leurs familles.</strong>
            </div>

            <h3>Javel / MMS (Miracle Mineral Solution)</h3>
            <p>Le MMS est une solution de dioxyde de chlore (eau de Javel industrielle) présentée comme un remède contre l'autisme et d'autres handicaps. <strong>C'est un poison. Son ingestion est extrêmement dangereuse.</strong></p>

            <p>Le MMS provoque : brûlures digestives graves, vomissements, diarrhées sévères, déshydratation, insuffisance rénale, décès dans les cas les plus graves.</p>

            <p><strong>Si vous ou votre enfant avez ingéré du MMS, contactez immédiatement le 15 ou le centre antipoison.</strong></p>

            <h3>ABA coercitive</h3>
            <p>L'Applied Behavior Analysis (ABA) est une méthode comportementaliste. Dans sa version coercitive, elle utilise des punitions, le contrôle excessif, la suppression des comportements d'auto-stimulation (stimming), et vise à "normaliser" la personne autiste.</p>

            <p><strong>Problèmes de l'ABA coercitive :</strong></p>
            <ul>
                <li>Stress post-traumatique chez de nombreux adultes autistes ayant subi cette méthode</li>
                <li>Suppression de l'expression de soi et des besoins</li>
                <li>Apprentissage de la compliance au détriment de l'autonomie réelle</li>
                <li>Non-respect de la neurodiversité</li>
            </ul>

            <p>L'ABA éthique existe, mais méfiez-vous des pratiques intensives (40h/semaine pour un jeune enfant), punitives, ou refusant d'adapter les objectifs aux besoins réels de la personne.</p>

            <h3>TEACCH détourné</h3>
            <p>Le programme TEACCH (Treatment and Education of Autistic and Related Communication Handicapped Children) est à la base une méthode éducative structurée. Cependant, certaines applications dévoyées le transforment en sur-structuration pathologique, infantilisation permanente, ou enfermement dans des routines rigides.</p>

            <h3>Packing</h3>
            <p>Le packing consiste à envelopper une personne autiste dans des linges humides et froids. Cette pratique, encore défendue par certains en France, est considérée comme de la maltraitance par la plupart des instances internationales et les associations de personnes autistes.</p>

            <p><strong>Le packing n'a aucune efficacité démontrée et constitue une atteinte à la dignité.</strong></p>

            <h3>Autres arnaques fréquentes</h3>
            <ul>
                <li>Régimes alimentaires restrictifs non justifiés médicalement</li>
                <li>Compléments alimentaires "miracles" hors de prix</li>
                <li>Thérapies "énergétiques" sans fondement scientifique</li>
                <li>Promesses de "guérison" du handicap</li>
            </ul>

            <h3>Comment se protéger ?</h3>
            <ul>
                <li>Méfiez-vous des promesses de guérison rapide ou miraculeuse</li>
                <li>Vérifiez les diplômes et qualifications des praticiens</li>
                <li>Demandez l'avis de plusieurs professionnels de santé reconnus</li>
                <li>Renseignez-vous auprès d'associations de personnes concernées (pas d'associations de parents uniquement)</li>
                <li>Écoutez les adultes handicapés qui témoignent de ces pratiques</li>
            </ul>

            <h3>Signaler</h3>
            <p>Si vous êtes témoin ou victime de pratiques dangereuses :</p>
            <ul>
                <li>Signalez à l'Agence Régionale de Santé (ARS)</li>
                <li>Contactez la MIVILUDES (Mission interministérielle de vigilance et de lutte contre les dérives sectaires)</li>
                <li>Déposez plainte si nécessaire</li>
                <li>Alertez les associations de défense des droits</li>
            </ul>
        `
    },

    maltraitance: {
        title: 'Maltraitance institutionnelle',
        content: `
            <h3>Qu'est-ce que la maltraitance institutionnelle ?</h3>
            <p>La maltraitance institutionnelle désigne toute forme de violence, négligence ou atteinte aux droits se produisant dans un cadre institutionnel : ESMS (foyers, IME, ESAT...), hôpitaux psychiatriques, services à domicile...</p>

            <h3>Formes de maltraitance</h3>
            <ul>
                <li><strong>Violences physiques :</strong> coups, contention abusive, enfermement</li>
                <li><strong>Violences psychologiques :</strong> humiliations, menaces, isolement</li>
                <li><strong>Négligence :</strong> manque de soins, d'hygiène, de nourriture</li>
                <li><strong>Violences sexuelles :</strong> attouchements, viols</li>
                <li><strong>Violences financières :</strong> vol, extorsion</li>
                <li><strong>Atteintes aux droits :</strong> privation de liberté injustifiée, absence d'intimité, non-respect du consentement</li>
            </ul>

            <h3>Signes d'alerte</h3>
            <ul>
                <li>Changement de comportement brutal</li>
                <li>Peur d'un professionnel ou d'un lieu précis</li>
                <li>Marques physiques inexpliquées</li>
                <li>Refus de parler de l'établissement</li>
                <li>Régression ou repli sur soi</li>
                <li>Manque d'hygiène ou de soins</li>
            </ul>

            <h3>Que faire en cas de maltraitance ?</h3>

            <p><strong>Urgence :</strong> Si danger immédiat, appelez le 17 (police/gendarmerie) ou le 15 (SAMU).</p>

            <p><strong>Signalement :</strong></p>
            <ul>
                <li>Au directeur de l'établissement</li>
                <li>À l'Agence Régionale de Santé (ARS)</li>
                <li>Au Conseil Départemental (pour les ESMS)</li>
                <li>Au Procureur de la République (signalement judiciaire)</li>
                <li>Au numéro national 3977 (maltraitance des personnes vulnérables)</li>
            </ul>

            <p><strong>Plainte pénale :</strong> Vous pouvez déposer plainte auprès du commissariat, de la gendarmerie, ou directement auprès du Procureur.</p>

            <h3>Protection de la victime</h3>
            <p>Dès le signalement, des mesures de protection doivent être mises en place : changement d'établissement, mesures conservatoires, accompagnement psychologique...</p>

            <h3>Recours et associations</h3>
            <p>Vous pouvez être accompagné par :</p>
            <ul>
                <li>Des associations de victimes</li>
                <li>Des associations de défense des droits des personnes handicapées</li>
                <li>Le Défenseur des droits</li>
                <li>Un avocat spécialisé</li>
            </ul>

            <h3>Textes de référence</h3>
            <div class="text-reference">
                <strong>Article 434-3 du Code pénal</strong>
                Obligation de signalement pour toute personne ayant connaissance de mauvais traitements infligés à une personne vulnérable.
            </div>

            <div class="text-reference">
                <strong>Article 223-15-2 du Code pénal</strong>
                Abus de vulnérabilité, sanctionné de 3 ans d'emprisonnement et 375 000 euros d'amende.
            </div>
        `
    },

    'asso-gestionnaires': {
        title: 'Associations gestionnaires',
        content: `
            <h3>Ce que sont vraiment les associations gestionnaires</h3>
            <div class="alert-box">
                <strong>Les associations gestionnaires ne sont PAS les amies des personnes handicapées.</strong>
                Ce sont des structures qui gèrent des établissements et services médico-sociaux (ESMS). Leur logique est avant tout gestionnaire et économique, pas militante.
            </div>

            <h3>Qu'est-ce qu'une association gestionnaire ?</h3>
            <p>Les associations gestionnaires (APF France handicap, ADAPEI/UNAPEI, Croix-Rouge, Fondation John Bost, etc.) sont des personnes morales de droit privé qui gèrent des établissements et services pour personnes handicapées : foyers, IME, ESAT, SAVS, SAMSAH...</p>

            <p>Elles perçoivent des financements publics massifs (ARS, Conseils Départementaux) pour faire fonctionner ces structures.</p>

            <h3>Conflits d'intérêts</h3>
            <p><strong>Le problème majeur :</strong> Ces associations se présentent souvent comme des associations de défense des droits, tout en gérant des établissements. Cela crée un conflit d'intérêts structurel :</p>

            <ul>
                <li>Elles ont intérêt au maintien du système institutionnel (qui les finance)</li>
                <li>Elles ne peuvent pas critiquer objectivement leurs propres pratiques</li>
                <li>Leur "militantisme" se limite souvent à demander plus de moyens... pour elles-mêmes</li>
                <li>Elles peuvent faire pression sur les familles qui les critiquent</li>
            </ul>

            <h3>Logique gestionnaire vs droits des personnes</h3>
            <p>La logique gestionnaire privilégie :</p>
            <ul>
                <li>La rentabilité économique</li>
                <li>Le fonctionnement collectif standardisé</li>
                <li>Le respect des normes administratives</li>
                <li>Le maintien des effectifs (pour les financements)</li>
            </ul>

            <p>Cela entre souvent en conflit avec les droits et besoins individuels des personnes accueillies.</p>

            <h3>Problèmes récurrents</h3>
            <ul>
                <li>Sous-effectifs chroniques en personnel qualifié</li>
                <li>Formation insuffisante des professionnels</li>
                <li>Gestion opaque des fonds publics</li>
                <li>Difficultés à sanctionner en cas de maltraitance (corporatisme)</li>
                <li>Lobbying pour maintenir l'existant plutôt que réformer</li>
            </ul>

            <h3>Ne pas confondre</h3>
            <p><strong>Associations gestionnaires ≠ Associations d'auto-représentation</strong></p>

            <p>Les associations d'auto-représentation (dirigées PAR des personnes handicapées) défendent réellement les droits sans conflits d'intérêts. Exemples : CLE Autistes, Collectif Lutte et Handicaps pour l'Égalité et l'Émancipation, etc.</p>

            <h3>Cartographie des associations gestionnaires</h3>
            <p>Une cartographie interactive permet de visualiser l'implantation des principales associations gestionnaires en France.</p>
            <p><a href="#" id="carto-link">Accéder à la cartographie</a></p>
            <!-- TODO: Ajouter le lien de la cartographie GitHub Pages ici -->

            <h3>Que faire si vous avez un problème avec une association gestionnaire ?</h3>
            <ul>
                <li>Documentez tous les incidents et manquements</li>
                <li>Contactez l'ARS et le Conseil Départemental</li>
                <li>Saisissez le Défenseur des droits</li>
                <li>Contactez des associations indépendantes d'auto-représentation</li>
                <li>Envisagez un recours juridique si nécessaire</li>
            </ul>
        `
    },

    discrimination: {
        title: 'Discrimination et recours',
        content: `
            <h3>Qu'est-ce que la discrimination ?</h3>
            <p>La discrimination est un traitement défavorable fondé sur un critère prohibé, comme le handicap. Elle est interdite et sanctionnée dans tous les domaines : emploi, logement, accès aux biens et services, éducation, santé...</p>

            <h3>Textes de référence</h3>
            <div class="text-reference">
                <strong>Articles 225-1 à 225-4 du Code pénal</strong>
                Définissent et sanctionnent les discriminations. Peines encourues : 3 ans d'emprisonnement et 45 000 euros d'amende (voire 5 ans et 75 000 euros en circonstances aggravantes).
            </div>

            <div class="text-reference">
                <strong>Articles L. 1132-1 et suivants du Code du travail</strong>
                Interdisent les discriminations dans l'emploi.
            </div>

            <h3>Formes de discrimination</h3>
            <p><strong>Discrimination directe :</strong> Traitement défavorable explicitement fondé sur le handicap.</p>

            <p><strong>Discrimination indirecte :</strong> Mesure apparemment neutre mais désavantageant particulièrement les personnes handicapées.</p>

            <p><strong>Refus d'aménagement raisonnable :</strong> Ne pas mettre en place des aménagements permettant l'accès égal, alors que c'est possible et proportionné.</p>

            <p><strong>Harcèlement discriminatoire :</strong> Comportements répétés liés au handicap créant un environnement hostile.</p>

            <h3>Exemples concrets</h3>
            <ul>
                <li>Refus d'embauche en raison du handicap</li>
                <li>Refus d'accès à un restaurant avec un chien d'assistance</li>
                <li>Refus de location d'un logement</li>
                <li>Refus d'inscription scolaire</li>
                <li>Refus de soins par un médecin</li>
                <li>Licenciement lié au handicap</li>
            </ul>

            <h3>Comment prouver une discrimination ?</h3>
            <p>En matière de discrimination, le régime de la preuve est aménagé : vous devez présenter des éléments laissant supposer une discrimination, puis c'est à l'autre partie de prouver que sa décision était justifiée et non discriminatoire.</p>

            <p><strong>Éléments de preuve :</strong></p>
            <ul>
                <li>Témoignages</li>
                <li>Courriels, SMS, enregistrements</li>
                <li>Testing (envoi de candidatures comparables)</li>
                <li>Statistiques démontrant un traitement différencié</li>
            </ul>

            <h3>Recours possibles</h3>

            <h4>1. Le Défenseur des droits</h4>
            <p>Autorité indépendante gratuite. Peut mener une enquête, émettre des recommandations, proposer une médiation, ou saisir le Procureur.</p>
            <p>Saisine en ligne : <a href="https://www.defenseurdesdroits.fr" target="_blank" rel="noopener noreferrer">defenseurdesdroits.fr</a></p>

            <h4>2. Juridictions compétentes</h4>
            <ul>
                <li><strong>Conseil de prud'hommes</strong> pour les discriminations dans l'emploi</li>
                <li><strong>Tribunal judiciaire</strong> pour les autres discriminations civiles</li>
                <li><strong>Tribunal correctionnel</strong> pour les discriminations pénales</li>
            </ul>

            <h4>3. Associations</h4>
            <p>Certaines associations peuvent vous accompagner ou se porter partie civile dans votre procédure.</p>

            <h3>Délais</h3>
            <p><strong>Action civile :</strong> 5 ans à compter de la révélation des faits</p>
            <p><strong>Action pénale :</strong> 6 ans à compter des faits (3 ans pour les contraventions)</p>
            <p><strong>Prud'hommes :</strong> Pas de délai de prescription spécifique pour l'action en discrimination</p>

            <h3>Sanctions</h3>
            <ul>
                <li>Dommages et intérêts pour la victime</li>
                <li>Sanctions pénales pour l'auteur (amendes, emprisonnement)</li>
                <li>Publication de la décision</li>
                <li>Nullité des actes discriminatoires</li>
            </ul>
        `
    },

    'cartographie-asso': {
        title: 'Cartographie des associations gestionnaires',
        content: `
            <h3>Cartographie interactive</h3>
            <p>Cette cartographie permet de visualiser l'implantation des principales associations gestionnaires d'établissements et services médico-sociaux (ESMS) en France.</p>

            <div class="alert-box">
                <strong>Rappel :</strong> Ces associations ne sont pas les amies des personnes handicapées. Elles gèrent des établissements avec une logique avant tout gestionnaire et économique.
            </div>

            <h3>Accéder à la cartographie</h3>
            <p>La cartographie est en cours de finalisation.</p>
            <!-- TODO: Remplacer ce paragraphe par le lien réel une fois la cartographie publiée -->
            <p><a href="#" target="_blank" rel="noopener noreferrer">Lien vers la cartographie (à venir)</a></p>

            <h3>Utilité de cette cartographie</h3>
            <ul>
                <li>Identifier les acteurs présents dans votre département</li>
                <li>Comprendre les rapports de force locaux</li>
                <li>Repérer les zones de monopole</li>
                <li>Mieux connaître le paysage institutionnel</li>
            </ul>

            <h3>Principales associations gestionnaires</h3>
            <p>APF France handicap, UNAPEI et ses ADAPEI, APAJH, Croix-Rouge française, Fondation John Bost, Œuvre Falret, et de nombreuses autres associations locales ou spécialisées.</p>

            <h3>Pour aller plus loin</h3>
            <p>Consultez les rapports d'activité et financiers de ces associations, souvent disponibles en ligne. Analysez les budgets, les ratios personnel/résidents, les cas de maltraitance signalés.</p>
        `
    }
};

// Export pour utilisation dans app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = themeData;
}
