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

            <h3>Vos droits essentiels</h3>
            <p><strong>Délai de traitement :</strong> 4 mois maximum à compter du dépôt du dossier complet. Au-delà, le silence vaut acceptation pour certaines demandes, ou vous pouvez saisir le tribunal administratif.</p>
            
            <p><strong>Droit au recours :</strong> Vous disposez de 2 mois à compter de la notification pour contester une décision de la CDAPH. Le recours peut être gracieux (devant la MDPH), ou contentieux (devant le tribunal).</p>
            
            <p><strong>Droit à l'accompagnement :</strong> Vous pouvez vous faire assister par une personne de votre choix, une association, ou un professionnel lors de vos démarches et lors de la Commission.</p>

            <h3>Recours possibles</h3>
            <p><strong>Recours administratif préalable obligatoire (RAPO) :</strong> Depuis 2019, pour certaines décisions, vous devez d'abord former un recours administratif avant de saisir le tribunal.</p>
            
            <p><strong>Tribunal compétent :</strong> Selon la nature de la décision contestée, ce sera soit le tribunal judiciaire (contentieux de la sécurité sociale), soit le tribunal administratif.</p>
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

            <h3>Conditions d'attribution</h3>
            <p><strong>Taux d'incapacité :</strong> Au moins 80%, ou entre 50% et 79% avec restriction substantielle et durable d'accès à l'emploi (RSDAE).</p>
            <p><strong>Âge :</strong> Au moins 20 ans, ou 16 ans si vous n'êtes plus considéré à charge.</p>
            <p><strong>Résidence :</strong> Résider en France de façon permanente et régulière.</p>

            <h3>Cumuls possibles</h3>
            <p>L'AAH peut être cumulée avec des revenus professionnels. Majoration pour la vie autonome (MVA) possible sous conditions.</p>
        `
    },

    pch: {
        title: 'PCH - Prestation de Compensation du Handicap',
        content: `
            <h3>Qu'est-ce que la PCH ?</h3>
            <p>La Prestation de Compensation du Handicap est une aide financière destinée à compenser les surcoûts liés au handicap dans la vie quotidienne.</p>

            <h3>Les 5 volets de la PCH</h3>
            <p><strong>1. Aides humaines</strong> - Aide dans les actes essentiels de la vie quotidienne</p>
            <p><strong>2. Aides techniques</strong> - Équipements adaptés</p>
            <p><strong>3. Aménagement du logement et du véhicule</strong> - Travaux d'adaptation</p>
            <p><strong>4. Charges spécifiques</strong> - Dépenses liées au handicap</p>
            <p><strong>5. Aides animalières</strong> - Chiens d'assistance</p>

            <h3>PCH et parentalité</h3>
            <p>Depuis 2021, la PCH parentalité permet de compenser les besoins liés à l'exercice de la parentalité.</p>
        `
    },
    invalidite: {
        title: 'Pension d\'invalidité',
        content: `
            <h3>Qu'est-ce que la pension d'invalidité ?</h3>
            <p>La pension d'invalidité est une prestation versée par l'Assurance Maladie pour compenser une perte de capacité de travail ou de gain.</p>

            <h3>Les 3 catégories d'invalidité</h3>
            <p><strong>Catégorie 1 :</strong> Invalides capables d'exercer une activité rémunérée (30% du SAM)</p>
            <p><strong>Catégorie 2 :</strong> Invalides incapables d'exercer une activité professionnelle (50% du SAM)</p>
            <p><strong>Catégorie 3 :</strong> Invalides nécessitant l'assistance d'une tierce personne (50% du SAM + MTP)</p>

            <h3>Cumul avec d'autres prestations</h3>
            <p>Pas de cumul intégral avec l'AAH. Si votre pension d'invalidité est inférieure à l'AAH, vous pouvez percevoir l'AAH en complément.</p>
        `
    },

    retraite: {
        title: 'Retraite anticipée pour handicap',
        content: `
            <h3>Retraite anticipée pour handicap</h3>
            <p>Les personnes en situation de handicap peuvent partir à la retraite dès 55 ans, sous certaines conditions. Cette retraite est calculée au taux plein sans décote.</p>

            <h3>Conditions</h3>
            <p>Vous devez justifier d'une durée minimale d'assurance totale et cotisée, avec un taux d'incapacité d'au moins 50% ou une RQTH pendant toute la durée requise.</p>

            <h3>Avantages</h3>
            <ul>
                <li>Départ anticipé à la retraite</li>
                <li>Retraite au taux plein sans décote</li>
                <li>Majoration de la pension possible</li>
            </ul>
        `
    },

    emploi: {
        title: 'Emploi et RQTH',
        content: `
            <h3>Reconnaissance de la Qualité de Travailleur Handicapé</h3>
            <p>La RQTH ouvre droit à des mesures favorisant l'insertion professionnelle et le maintien dans l'emploi.</p>

            <h3>Avantages de la RQTH</h3>
            <ul>
                <li>Aménagements de poste et d'horaires</li>
                <li>Accompagnement Cap emploi</li>
                <li>Accès aux entreprises adaptées</li>
                <li>Retraite anticipée sous conditions</li>
            </ul>

            <h3>Protection contre la discrimination</h3>
            <p>Toute discrimination fondée sur le handicap est interdite et sanctionnée (3 ans d'emprisonnement et 45 000 euros d'amende).</p>

            <h3>Recours en cas de discrimination</h3>
            <ul>
                <li>Défenseur des droits</li>
                <li>Inspection du travail</li>
                <li>Conseil de prud'hommes</li>
            </ul>
        `
    },

    scolarite: {
        title: 'Scolarisation et parcours scolaire',
        content: `
            <h3>Droit à la scolarisation</h3>
            <p>Tout enfant en situation de handicap a droit à une scolarisation en milieu ordinaire, au plus près de son domicile.</p>

            <h3>Le Projet Personnalisé de Scolarisation (PPS)</h3>
            <p>Le PPS définit les modalités de scolarisation et les mesures d'accompagnement nécessaires. Il précise les objectifs pédagogiques, les aménagements et l'attribution d'un AESH si nécessaire.</p>

            <h3>Les AESH</h3>
            <p>Les Accompagnants d'Élèves en Situation de Handicap apportent un soutien humain pour favoriser l'autonomie de l'élève.</p>

            <h3>Aménagements d'examens</h3>
            <p>Tiers temps supplémentaire, secrétaire, ordinateur, salle séparée, adaptations de sujets possibles.</p>

            <h3>Recours</h3>
            <p>En cas de refus de scolarisation ou d'absence d'AESH, vous pouvez saisir le Défenseur des droits ou le tribunal administratif.</p>
        `
    },

    parentalite: {
        title: 'Parentalité et handicap',
        content: `
            <h3>Être parent en situation de handicap</h3>
            <p>Les parents en situation de handicap ont les mêmes droits que tous les parents. Ils peuvent bénéficier d'aides spécifiques pour compenser les besoins liés à l'exercice de leur parentalité.</p>

            <h3>PCH parentalité</h3>
            <p>Depuis 2021, la PCH peut financer les besoins liés à l'exercice de la parentalité : aide pour s'occuper de ses enfants.</p>

            <h3>Lutte contre les discriminations</h3>
            <p>Aucune décision concernant un enfant ne peut être fondée uniquement sur le handicap d'un parent. Toute décision doit être motivée par l'intérêt supérieur de l'enfant.</p>
        `
    },
    ase: {
        title: 'ASE et placements abusifs',
        content: `
            <h3>Principe fondamental</h3>
            <div class="alert-box">
                <strong>Le handicap d'un parent n'est jamais, à lui seul, un motif de placement d'enfant.</strong>
            </div>

            <h3>Vos droits face à l'ASE</h3>
            <p>Droit à être entendu, droit à l'assistance, droit à la compensation avant tout placement.</p>

            <h3>Recours contre un placement abusif</h3>
            <ul>
                <li>Contester devant le juge des enfants</li>
                <li>Saisir le Défenseur des droits</li>
                <li>Contacter des associations spécialisées</li>
            </ul>
        `
    },

    accessibilite: {
        title: 'Accessibilité et logement',
        content: `
            <h3>Droit à l'accessibilité</h3>
            <p>Le principe d'accessibilité universelle garantit l'accès aux bâtiments, transports, voirie et espaces publics.</p>

            <h3>Signaler un manquement</h3>
            <ul>
                <li>Mairie ou préfecture</li>
                <li>Commission d'Accessibilité</li>
                <li>Défenseur des droits</li>
            </ul>
        `
    },

    braille: {
        title: 'Braille et supports accessibles',
        content: `
            <h3>Droit à l'information en braille</h3>
            <p>Les administrations doivent fournir les documents en format accessible sur demande : braille, gros caractères, fichiers numériques.</p>
        `
    },

    lsf: {
        title: 'LSF et interprétariat',
        content: `
            <h3>Langue des Signes Française</h3>
            <p>La LSF est reconnue comme une langue à part entière depuis 2005.</p>

            <h3>Droit à l'interprète</h3>
            <p>Dans les démarches administratives, procédures judiciaires, soins médicaux, scolarité.</p>
        `
    },

    chiens: {
        title: 'Chiens d\'assistance',
        content: `
            <h3>Chiens d'assistance et d'accompagnement</h3>
            <p>Les chiens d'assistance ont un droit d'accès garanti dans tous les lieux publics.</p>

            <h3>Refus illégaux</h3>
            <p>Tout refus est illégal et constitue une discrimination passible d'une amende de 450 euros minimum.</p>

            <h3>En cas de refus</h3>
            <ul>
                <li>Contactez la police sur place</li>
                <li>Déposez plainte</li>
                <li>Saisissez le Défenseur des droits</li>
            </ul>
        `
    },

    numerique: {
        title: 'Accessibilité numérique',
        content: `
            <h3>Accessibilité numérique</h3>
            <p>Les sites publics et des grandes entreprises doivent être conformes au RGAA.</p>

            <h3>Signaler un site non accessible</h3>
            <p>Contactez le responsable du site, puis le Défenseur des droits si pas de réponse.</p>
        `
    },
    arnaques: {
        title: 'Arnaques et fausses médecines',
        content: `
            <div class="alert-box">
                <strong>Attention aux pseudo-traitements miracles et pratiques dangereuses.</strong>
            </div>

            <h3>Javel / MMS</h3>
            <p>C'est un poison. Son ingestion est extrêmement dangereuse. Si ingestion, appelez le 15 immédiatement.</p>

            <h3>ABA coercitive</h3>
            <p>Méthode comportementaliste coercive utilisant punitions et contrôle excessif. Cause stress post-traumatique.</p>

            <h3>Packing</h3>
            <p>Envelopper dans des linges humides et froids. Considéré comme de la maltraitance.</p>

            <h3>Signaler</h3>
            <ul>
                <li>ARS</li>
                <li>MIVILUDES</li>
                <li>Déposer plainte si nécessaire</li>
            </ul>
        `
    },

    maltraitance: {
        title: 'Maltraitance institutionnelle',
        content: `
            <h3>Maltraitance institutionnelle</h3>
            <p>Toute forme de violence, négligence ou atteinte aux droits en ESMS, hôpitaux psychiatriques, etc.</p>

            <h3>Que faire ?</h3>
            <p><strong>Urgence :</strong> Appelez le 17 ou le 15</p>
            <p><strong>Signalement :</strong> ARS, Conseil Départemental, Procureur, ou 3977</p>

            <h3>Recours</h3>
            <ul>
                <li>Associations de victimes</li>
                <li>Défenseur des droits</li>
                <li>Avocat spécialisé</li>
            </ul>
        `
    },

    'asso-gestionnaires': {
        title: 'Associations gestionnaires',
        content: `
            <div class="alert-box">
                <strong>Les associations gestionnaires ne sont PAS les amies des personnes handicapées.</strong>
                Leur logique est avant tout gestionnaire et économique, pas militante.
            </div>

            <h3>Conflits d'intérêts</h3>
            <p>Elles gèrent des établissements ET se présentent comme associations de défense des droits. Conflit d'intérêts structurel.</p>

            <h3>Ne pas confondre</h3>
            <p>Associations gestionnaires ≠ Associations d'auto-représentation (dirigées PAR des personnes handicapées).</p>
        `
    },

    discrimination: {
        title: 'Discrimination et recours',
        content: `
            <h3>Discrimination</h3>
            <p>Traitement défavorable fondé sur le handicap. Interdite et sanctionnée : 3 ans de prison et 45 000 euros d'amende.</p>

            <h3>Recours possibles</h3>
            <p><strong>1. Défenseur des droits</strong> - Gratuit, saisine en ligne</p>
            <p><strong>2. Juridictions :</strong> Prud'hommes, tribunal judiciaire, tribunal correctionnel</p>
        `
    },

    'cartographie-asso': {
        title: 'Cartographie des associations gestionnaires',
        content: `
            <h3>Cartographie interactive</h3>
            <p>Visualisation de l'implantation des associations gestionnaires d'ESMS en France.</p>
            <p>Lien à venir</p>
        `
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = themeData;
}
