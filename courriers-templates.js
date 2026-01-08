// Modèles de courriers pour les démarches juridiques
// Remplacez les éléments entre crochets par vos informations personnelles

const letterTemplates = {
    'recours-mdph': {
        title: 'Recours gracieux contre une décision MDPH',
        template: `[Vos Nom et Prénom]
[Votre adresse]
[Code postal Ville]
[Téléphone]
[Email]

MDPH [Département]
[Adresse de la MDPH]

[Ville], le [Date]

Lettre recommandée avec accusé de réception

Objet : Recours gracieux contre la décision n° [numéro de la notification]

Madame, Monsieur,

Par la présente, je conteste la décision de la Commission des Droits et de l'Autonomie des Personnes Handicapées (CDAPH) du [date de la décision], notifiée le [date de notification], portant sur [préciser : refus AAH / refus PCH / orientation / etc.].

Je sollicite le réexamen de ma situation pour les raisons suivantes :

[Exposez vos arguments de manière factuelle :
- Éléments médicaux non pris en compte
- Situation sociale ou professionnelle modifiée
- Erreur d'appréciation
- Non-respect de la procédure
- Nouveaux éléments à porter à la connaissance de la commission]

À l'appui de ma demande, je joins les pièces justificatives suivantes :
- [Liste des documents joints]

Je vous rappelle que selon l'article L. 241-9 du Code de l'action sociale et des familles, ce recours gracieux doit être examiné dans un délai de deux mois. À défaut de réponse dans ce délai, le silence vaudra rejet de ma demande.

Dans l'attente d'une réponse favorable, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Signature]

Pièces jointes :
- Copie de la décision contestée
- [Autres documents]`
    },

    'demande-aah': {
        title: 'Demande d\'AAH',
        template: `[Vos Nom et Prénom]
[Votre adresse]
[Code postal Ville]
[Numéro de sécurité sociale]
[Téléphone]

MDPH [Département]
[Adresse de la MDPH]

[Ville], le [Date]

Objet : Demande d'Allocation aux Adultes Handicapés (AAH)

Madame, Monsieur,

Par la présente, je sollicite l'attribution de l'Allocation aux Adultes Handicapés (AAH) conformément aux articles L. 821-1 et suivants du Code de la sécurité sociale.

Ma situation actuelle :
- Âge : [votre âge]
- Situation familiale : [célibataire / marié(e) / pacsé(e) / etc.]
- Situation professionnelle : [sans emploi / en activité partielle / etc.]
- Nature du handicap : [brève description si vous le souhaitez]

Je remplis les conditions d'attribution de l'AAH :
- Je justifie d'un taux d'incapacité [d'au moins 80% / compris entre 50% et 79% avec RSDAE]
- Mes ressources ne dépassent pas le plafond réglementaire
- Je réside en France de manière permanente

Je joins à ce courrier :
- Le formulaire de demande MDPH dûment complété
- Un certificat médical de moins de 3 mois
- Une copie de ma pièce d'identité
- Un justificatif de domicile
- [Autres pièces demandées selon votre situation]

Je me tiens à votre disposition pour tout renseignement complémentaire et reste dans l'attente de votre réponse.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Signature]`
    },

    'demande-pch': {
        title: 'Demande de PCH',
        template: `[Vos Nom et Prénom]
[Votre adresse]
[Code postal Ville]
[Numéro de sécurité sociale]
[Téléphone]

MDPH [Département]
[Adresse de la MDPH]

[Ville], le [Date]

Objet : Demande de Prestation de Compensation du Handicap (PCH)

Madame, Monsieur,

Par la présente, je sollicite l'attribution de la Prestation de Compensation du Handicap (PCH) conformément aux articles L. 245-1 et suivants du Code de l'action sociale et des familles.

En raison de mon handicap, je rencontre des difficultés [absolues / graves] dans la réalisation des activités essentielles de la vie quotidienne, notamment :
[Listez les difficultés rencontrées : aide humaine pour les actes essentiels, besoin d'aides techniques, aménagement du logement, charges spécifiques, etc.]

Je sollicite plus particulièrement :

1. PCH - Aides humaines :
[Décrivez vos besoins en aide humaine : aide pour la toilette, l'habillage, les repas, les déplacements, etc. Estimez le nombre d'heures nécessaires]

2. PCH - Aides techniques :
[Si besoin : listez le matériel nécessaire : fauteuil roulant, matériel informatique adapté, etc.]

3. PCH - Aménagement du logement :
[Si besoin : décrivez les travaux nécessaires : élargissement des portes, installation d'une rampe, adaptation de la salle de bain, etc.]

4. PCH - Aménagement du véhicule :
[Si besoin : commandes adaptées, hayon élévateur, etc.]

5. PCH - Charges spécifiques / exceptionnelles :
[Si besoin : dépenses particulières liées au handicap]

Je joins à ce courrier :
- Le formulaire de demande MDPH complété
- Un certificat médical détaillé de moins de 3 mois
- Des devis pour [les aménagements / les aides techniques demandés]
- [Autres justificatifs]

Dans l'attente de l'évaluation de ma situation par l'équipe pluridisciplinaire, je me tiens à votre disposition pour toute information complémentaire.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Signature]`
    },

    'contestation-refus': {
        title: 'Contestation d\'un refus',
        template: `[Vos Nom et Prénom]
[Votre adresse]
[Code postal Ville]
[Téléphone]
[Email]

[Destinataire : MDPH / Organisme concerné]
[Adresse]

[Ville], le [Date]

Lettre recommandée avec accusé de réception

Objet : Contestation de la décision de refus du [date]
Référence : [numéro de la décision]

Madame, Monsieur le Président,

J'ai reçu le [date] votre courrier m'informant du rejet de ma demande de [préciser : AAH / PCH / RQTH / orientation / etc.].

Je conteste formellement cette décision pour les motifs suivants :

1. [Premier motif de contestation - Développez de manière factuelle]

2. [Deuxième motif - Exposez les éléments médicaux, sociaux ou professionnels non pris en compte]

3. [Troisième motif - Si applicable : erreur manifeste d'appréciation, violation d'une procédure, etc.]

Cette décision méconnaît [les articles de loi applicables, par exemple : l'article L. 821-1 du CSS pour l'AAH, l'article L. 245-1 du CASF pour la PCH, etc.] et ne tient pas compte de ma situation réelle.

En conséquence, je sollicite le réexamen complet de ma demande et vous demande de bien vouloir reconsidérer votre décision au regard des éléments ci-joints.

Je joins à ce courrier les pièces justificatives suivantes :
- Copie de la décision de refus
- [Certificats médicaux complémentaires]
- [Attestations diverses]
- [Tout élément nouveau ou non pris en compte]

Conformément à la réglementation, j'attends une réponse motivée dans un délai de deux mois. À défaut, je me verrai contraint(e) de saisir le tribunal compétent.

Je reste à votre disposition pour tout complément d'information et vous prie d'agréer, Madame, Monsieur le Président, l'expression de mes salutations distinguées.

[Signature]

Pièces jointes : [liste]`
    },

    'signalement-maltraitance': {
        title: 'Signalement de maltraitance',
        template: `[Vos Nom et Prénom]
[Votre adresse]
[Code postal Ville]
[Téléphone]
[Email]

[Destinataire selon la situation :
- Monsieur le Procureur de la République, Tribunal judiciaire de [ville]
- Agence Régionale de Santé [région], [adresse]
- Conseil Départemental de [département], [adresse]]

[Ville], le [Date]

Lettre recommandée avec accusé de réception

Objet : Signalement de faits de maltraitance

Madame, Monsieur [le Procureur de la République / le Directeur],

Je me permets de porter à votre connaissance des faits de maltraitance dont est victime [moi-même / M./Mme nom prénom / mon enfant] au sein de [nom de l'établissement], situé [adresse complète].

Description des faits :

Le [date], [décrivez les faits de manière chronologique, précise et factuelle : nature de la maltraitance, circonstances, personnes impliquées si vous les connaissez].

[Si plusieurs faits : répétez la description pour chaque incident avec les dates]

Nature de la maltraitance :
[Cochez ou précisez : violences physiques / violences psychologiques / négligence / violences sexuelles / atteintes aux droits / maltraitance financière]

Conséquences observées :
[Décrivez l'impact sur la personne : état psychologique, blessures physiques, changement de comportement, etc.]

Témoins éventuels :
[Si applicable : noms et coordonnées des personnes ayant assisté aux faits]

Ces faits constituent une violation caractérisée [des articles 222-7 et suivants du Code pénal pour les violences / de l'article 223-15-2 pour l'abus de vulnérabilité / etc.] et nécessitent une intervention urgente pour protéger [la victime].

En conséquence, je sollicite :
- Une enquête diligente sur ces faits
- La mise en place de mesures de protection immédiates pour [la victime]
- Des poursuites à l'encontre des auteurs de ces actes

Je joins à ce courrier :
- [Certificats médicaux constatant les blessures ou l'état psychologique]
- [Photos des blessures ou traces de maltraitance, datées]
- [Témoignages écrits]
- [Tout autre élément de preuve : courriels, enregistrements si légaux, etc.]

Je me tiens à votre entière disposition pour tout complément d'information et pour témoigner si nécessaire.

Dans l'attente de votre intervention, je vous prie d'agréer, Madame, Monsieur [le Procureur / le Directeur], l'expression de mes salutations distinguées.

[Signature]

Pièces jointes : [liste]

Copie adressée à :
- [ARS / Conseil Départemental / Défenseur des droits selon les cas]
- 3977 (Numéro national maltraitance)`
    },

    'placement-ase': {
        title: 'Recours contre un placement ASE',
        template: `[Vos Nom et Prénom]
[Votre adresse]
[Code postal Ville]
[Téléphone]
[Email]

Madame, Monsieur le Juge des Enfants
Tribunal judiciaire de [ville]
[Adresse du tribunal]

[Ville], le [Date]

Lettre recommandée avec accusé de réception

Objet : Recours contre la mesure de placement de [nom de l'enfant]
Référence du dossier : [numéro si connu]

Madame, Monsieur le Juge des Enfants,

Par ordonnance du [date], vous avez décidé le placement de mon enfant [nom, prénom, date de naissance] au titre de l'article 375 du Code civil.

Je conteste fermement cette décision qui me paraît injustifiée et disproportionnée, et sollicite la mainlevée immédiate de cette mesure de placement.

Mes arguments :

1. Absence de danger caractérisé
[Expliquez en quoi il n'y a pas de danger réel pour l'enfant. Apportez des éléments factuels : suivi médical régulier, scolarité normale, développement harmonieux, etc.]

2. Discrimination liée au handicap
[Si applicable : démontrez que le placement est fondé sur votre handicap et non sur des faits concrets. Rappelez que le handicap d'un parent ne constitue pas en soi un danger pour l'enfant.]

Ma situation de parent en situation de handicap ne m'empêche nullement d'exercer mes responsabilités parentales. Je bénéficie des compensations nécessaires [PCH parentalité / aides à domicile / soutien familial / etc.] qui me permettent de répondre aux besoins de mon enfant.

3. Absence de tentative de mesure éducative à domicile
[Si aucune aide à domicile n'a été proposée avant le placement : soulignez que le placement doit être une mesure de dernier recours, et que des aides éducatives auraient dû être tentées en priorité.]

4. Évaluation sociale discriminatoire
[Si l'évaluation sociale est biaisée : pointez les présomptions, les stéréotypes sur le handicap, l'absence de prise en compte de vos capacités réelles avec compensations.]

Éléments en ma faveur :
- [Attestations de professionnels de santé suivant l'enfant]
- [Témoignages de proches, voisins, enseignants]
- [Preuves de votre investissement parental : photos, activités partagées, etc.]
- [Justificatifs des compensations mises en place]
- [Avis d'experts indépendants si vous en avez]

Je joins à ce courrier l'ensemble de ces pièces justificatives.

Conformément à l'intérêt supérieur de mon enfant et à son droit de vivre auprès de ses parents (article 9 de la Convention internationale des droits de l'enfant), je sollicite :
- La mainlevée immédiate de la mesure de placement
- Le retour de mon enfant à mon domicile
- Si nécessaire, la mise en place d'une mesure éducative à domicile (AEMO) pour rassurer les services, mais en maintenant mon enfant auprès de moi

Je me tiens à votre disposition pour un entretien et pour apporter tout élément complémentaire.

Je vous prie d'agréer, Madame, Monsieur le Juge des Enfants, l'expression de mes salutations respectueuses.

[Signature]

Pièces jointes : [liste détaillée]

Copie adressée à :
- Monsieur/Madame le Procureur de la République
- Défenseur des droits
- [Avocat si vous en avez un]`
    }
};

// Export pour utilisation dans app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = letterTemplates;
}
