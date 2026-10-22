# ATSCAF Voile Paris

Site de l’association [ATSCAF Voile Paris](./index.html).

L’objectif : un site simple, accueillant et facile à maintenir, qui donne envie
de découvrir les activités et de rejoindre le club.

## Consulter la maquette

Ouvrir [index.html](./index.html) dans un navigateur récent. Sous Windows, depuis
le dossier du projet :

```powershell
Start-Process .\index.html
```

Aucune installation, compilation ou dépendance n’est nécessaire. Les pages
fonctionnent directement depuis les fichiers locaux.

## Pages et fonctionnalités

- **[Accueil](./index.html)** : présentation du club, activités, demande du
  programme, adhésion et contact. Les deux adhésions obligatoires sont
  distinguées : ATSCAF Grand Paris (cotisation séparée) et section voile
  (73 € pour 2026–2027, licence FFVoile offerte), du 1er septembre au 31 août.
  Les démarches, le règlement séparé du formulaire et la PAF par activité
  sont précisés dans la section adhésion. Les coordonnées bancaires pour le
  virement figurent dans cette même section.
- **[Croisière](./pages/croisiere.html)** : présentation de Pandora, Sun Fast 36
  de l’ASCO basé à Saint-Malo, rythme des sorties et exemples de destinations ;
  vie à bord, inscription et accès aux bulletins d’adhésion, liste d’équipement
  individuel (dont le prêt de cirés), organisation,
  budget, sécurité, entretien, formation des chefs de bord et conditions
  d’annulation.
  Le calendrier 2026 présente les bords d’automne et les croisières d’été,
  avec les périodes sans bord et le désarmement. Le planning de printemps
  n’est pas disponible. Les dates sont statiques, sans suivi des disponibilités ;
  actualiser les tableaux lors d’une modification du programme.
- **[Permis côtier](./pages/permis.html)** : parcours de formation (16 h de
  préparation, 6 h de révision et 2 h de pilotage), programme des huit séances,
  modalités de pré-inscription, pièces du dossier et liens vers les CERFA.
  Le calendrier de mars à juin 2026 est présenté comme une session passée.
  Le tarif annoncé de 275 € et les frais annexes (78 € et 30 €) sont datés de
  2026 ; les prochaines dates et le montant du règlement sont à confirmer
  auprès du club avant paiement.
  Le programme est présenté en cartes thématiques avec icônes SVG, numéros
  de séance et points clés, sur deux colonnes lorsque l’espace le permet
  et une colonne sur les écrans étroits.
- **[Compétitions](./pages/competitions.html)** : groupe d’entraînement,
  J80 au Havre et Grand Surprise à Cherbourg, coaching de Bernard (entraîneur
  fédéral), réunions techniques à Paris, prérequis sportifs et engagement annuel.
  Le calendrier présente sept rendez-vous sans année précisée.
  Les prochaines dates et les frais sont
  à confirmer auprès du club ; le bulletin d’inscription est demandé par e-mail.
- **[Mentions légales](./pages/mentions-legales.html)** : page dédiée avec sommaire
  et informations à compléter avant publication.
- Les activités possèdent chacune leur propre page et leur onglet de navigation.
  Les cartes de l’accueil mènent directement à ces pages, sans fenêtre modale.
- Navigation commune, indication de l’activité courante, fil d’Ariane et liens
  entre les activités.
- Questions pratiques dépliables avec les éléments HTML natifs `details` et `summary`.
- Calendriers à lignes alternées, texte contrasté et léger agrandissement au
  survol à la souris, désactivé si la réduction des animations est demandée.
- Mise en page adaptée aux ordinateurs et aux mobiles.
- Survols discrets, zoom des photos et transitions douces.
- Respect de la préférence système de réduction des animations.
- Liens vers les services d’adhésion existants et contact par e-mail.

Il n’y a ni serveur applicatif, ni base de données, ni espace membre, ni
réservation ou paiement intégrés. Cette version n’utilise pas de cookies,
de traceurs ou de mesure d’audience.

## Organisation du projet

```text
atscaf-voiles/
|-- index.html
|-- README.md
|-- pages/
|   |-- croisiere.html
|   |-- permis.html
|   |-- competitions.html
|   `-- mentions-legales.html
`-- assets/
    |-- css/
    |   |-- styles.css
    |   `-- activities.css
    |-- icons/
    |   |-- favicon.svg
    |   `-- compass.svg
    `-- images/
        |-- croisiere.jpg
        |-- navigation.jpg
        `-- regate.jpg
```

- [pages/](./pages/) contient les pages annexes.
- [styles.css](./assets/css/styles.css) définit la direction artistique commune,
  l’accueil, les mentions légales et leurs adaptations mobiles.
- [activities.css](./assets/css/activities.css) contient les styles propres
  aux pages d’activités ; il est chargé uniquement sur ces trois pages.
- [icons/](./assets/icons/) regroupe les illustrations SVG et le favicon partagé.
- [images/](./assets/images/) contient les photographies de navigation du club.

Le site utilise uniquement HTML et CSS, sans framework ni JavaScript.
La navigation et les questions dépliables fonctionnent nativement dans le navigateur.

## Modifier le site

- Modifier les textes de l’accueil et les liens d’adhésion dans
  [index.html](./index.html).
- Modifier les informations de chaque activité directement dans sa page HTML
  du dossier [pages/](./pages/).
- Adapter les couleurs et les styles communs dans
  [styles.css](./assets/css/styles.css).
  Les principales couleurs sont définies dans `:root`.
- Adapter les mises en page propres aux activités dans
  [activities.css](./assets/css/activities.css).
- Compléter les informations légales dans
  [mentions-legales.html](./pages/mentions-legales.html).
- Pour modifier l’en-tête ou le pied de page, mettre à jour les cinq pages :
  ces éléments sont volontairement présents dans chaque fichier HTML pour garder
  un site statique sans outil de compilation ni injection JavaScript.
- Indiquer l’onglet actif avec `aria-current="page"` sur chaque page d’activité.

Les liens sont relatifs : depuis l’accueil, utiliser `pages/…` et `assets/…` ;
depuis une page annexe, utiliser `../index.html`, `../assets/…` et le nom de
fichier pour une autre page du même dossier.

## Vérifications

Il n’y a pas de suite de tests automatisés configurée. Après une modification :

1. Vérifier les cinq pages sur ordinateur et mobile, sans débordement horizontal.
2. Tester chaque onglet, les cartes de l’accueil, le retour à l’accueil et les
   liens vers les autres activités.
3. Vérifier la navigation au clavier, les questions dépliables et l’onglet actif.
4. Tester les ancres, les liens externes et le chargement des images et des styles.
5. Vérifier le rendu avec la réduction des animations activée.

Les anciennes fenêtres modales et leur script ont été supprimés : aucun environnement
Node.js n’est nécessaire pour consulter ou modifier le site.

## Avant la mise en ligne

**Le projet reste une maquette, pas une version prête à publier.**

- Faire valider les contenus, tarifs, dates et modalités d’adhésion par le club.
- Compléter et faire valider les mentions légales : éditeur juridiquement
  responsable, adresse du siège, direction de publication, futur hébergeur
  et informations relatives aux traitements de données personnelles.
- Confirmer les droits de publication des photos, les éventuels crédits et
  les autorisations concernant les personnes reconnaissables.
- Retirer l’encart provisoire et la directive `noindex` de la page des mentions
  légales une fois son contenu finalisé et validé.
- Retirer les libellés de maquette et vérifier les formulaires d’adhésion liés.
- Choisir un hébergement statique avec HTTPS et publier [index.html](./index.html)
  ainsi que les dossiers [pages/](./pages/) et [assets/](./assets/) en conservant
  leurs chemins relatifs.
- Revoir les informations de confidentialité si l’hébergement ou de nouvelles
  fonctionnalités introduisent des journaux techniques, des cookies ou des traceurs.
