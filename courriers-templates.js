const letterTemplates = {
    recours_mdph: {
        title: "Recours MDPH",
        restricted: false,
        template: `{{nom}}
{{adresse}}
{{code_postal}} {{ville}}
{{telephone}}
{{email}}

MDPH du {{departement}}
[Adresse MDPH]

{{ville}}, le {{date}}

Objet : Recours gracieux suite à la décision n°{{numero_decision}} du {{date_decision}}

Madame, Monsieur,

Par la présente, je conteste la décision n°{{numero_decision}} notifiée le {{date_notification}}, concernant ma demande auprès de la MDPH.

{{motif}}

Je vous prie de bien vouloir réexaminer ma situation et de reconsidérer votre décision.

Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

{{nom}}

Pièces jointes :
- Copie de la décision contestée
- Justificatifs médicaux`
    },

    demande_aah: {
        title: "Demande AAH",
        restricted: false,
        template: `{{nom}}
{{adresse}}
{{code_postal}} {{ville}}
{{telephone}}
{{email}}

MDPH du {{departement}}
[Adresse MDPH]

{{ville}}, le {{date}}

Objet : Demande d'Allocation aux Adultes Handicapés (AAH)

Madame, Monsieur,

Je sollicite par la présente l'attribution de l'Allocation aux Adultes Handicapés (AAH).

Ma situation actuelle :
{{description}}

Je vous joins l'ensemble des documents nécessaires à l'instruction de ma demande.

Je reste à votre disposition pour tout complément d'information.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

{{nom}}

Pièces jointes :
- Certificat médical
- Justificatif de domicile
- Pièce d'identité
- Formulaire de demande MDPH complété`
    },

    contestation_employeur: {
        title: "Contestation employeur (discrimination)",
        restricted: true,
        template: `{{nom}}
{{adresse}}
{{code_postal}} {{ville}}
{{telephone}}
{{email}}

{{nom_employeur}}
{{adresse_employeur}}

{{ville}}, le {{date}}

Objet : Contestation - Discrimination liée au handicap

Lettre recommandée avec accusé de réception

Madame, Monsieur,

Je me permets de porter à votre connaissance les faits suivants, qui constituent selon moi une discrimination fondée sur mon handicap.

Description des faits :
{{description}}

Ces agissements contreviennent aux articles L1132-1 et suivants du Code du travail, qui interdisent toute discrimination fondée sur le handicap.

Je vous demande de :
{{motif}}

À défaut de réponse satisfaisante sous 15 jours, je me verrai contraint(e) de saisir le Défenseur des droits et/ou le conseil de prud'hommes.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

{{nom}}

Copie : Défenseur des droits, Inspection du travail`
    },

    demande_pch: {
        title: "Demande PCH",
        restricted: false,
        template: `{{nom}}
{{adresse}}
{{code_postal}} {{ville}}
{{telephone}}
{{email}}

MDPH du {{departement}}
[Adresse MDPH]

{{ville}}, le {{date}}

Objet : Demande de Prestation de Compensation du Handicap (PCH)

Madame, Monsieur,

Je sollicite par la présente l'attribution de la Prestation de Compensation du Handicap (PCH).

Mes besoins en compensation :
{{description}}

Je vous joins l'ensemble des documents nécessaires à l'instruction de ma demande, notamment :
- Le certificat médical détaillé
- Les devis pour les aides techniques
- Le plan d'aide personnalisé

Je reste à votre disposition pour un entretien ou toute information complémentaire.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

{{nom}}

Pièces jointes :
- Certificat médical
- Devis aides techniques
- Plan d'aide
- Justificatif de domicile`
    },

    signalement_maltraitance: {
        title: "Signalement maltraitance en établissement",
        restricted: false,
        template: `{{nom}}
{{adresse}}
{{code_postal}} {{ville}}
{{telephone}}
{{email}}

ARS {{departement}}
[Adresse ARS]

{{ville}}, le {{date}}

Objet : Signalement de maltraitance en établissement

Lettre recommandée avec accusé de réception

Madame, Monsieur,

Je me permets de vous signaler des faits de maltraitance dont j'ai été témoin/victime au sein de l'établissement suivant :

Établissement : {{etablissement}}
Adresse : {{adresse_etablissement}}

Description des faits :
{{description}}

Ces faits constituent une atteinte grave aux droits et à la dignité des personnes en situation de handicap.

Je sollicite une intervention rapide de vos services pour faire cesser ces agissements et protéger les résidents.

Je reste à votre entière disposition pour tout complément d'information.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

{{nom}}

Copie : Défenseur des droits, Conseil départemental`
    },

    recours_tribunal: {
        title: "Recours contentieux MDPH (tribunal)",
        restricted: true,
        template: `{{nom}}
{{adresse}}
{{code_postal}} {{ville}}
{{telephone}}
{{email}}

Tribunal Administratif de [Ville]
[Adresse du tribunal]

{{ville}}, le {{date}}

Objet : Recours contentieux contre la décision MDPH n°{{numero_decision}}

Madame, Monsieur le Président,

J'ai l'honneur de former un recours contentieux contre la décision de la MDPH du {{departement}}, référence n°{{numero_decision}}, notifiée le {{date_notification}}.

Exposé des faits :
{{description}}

Moyens de droit :
{{motif}}

En conséquence, je vous prie de bien vouloir annuler la décision contestée et ordonner à la MDPH de réexaminer ma demande.

Je vous prie d'agréer, Madame, Monsieur le Président, l'expression de ma haute considération.

{{nom}}

Pièces jointes :
- Copie de la décision contestée
- Copie du recours gracieux
- Justificatifs médicaux et administratifs`
    }
};
