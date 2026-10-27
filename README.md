# ATSCAF Voile Paris

Site de l’association [ATSCAF Voile Paris](./index.html).

L’objectif : un site simple, accueillant et facile à maintenir, qui donne envie
de découvrir les activités et de rejoindre le club.

## Consulter le site

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
  La session 2027 est prévue sur un ou deux week-ends entre fin janvier et
  mi-février, à Paris ; les dates précises et le lieu sont à confirmer.
  Le tarif de la session 2027 est de 300 €, dont la moitié (150 €) est à régler
  à l’inscription. Avec les frais annexes (78 € et 30 €), le budget indicatif
  est de 408 € hors adhésions. La session nécessite au moins 10 candidats :
  si ce minimum n’est pas atteint à la clôture des inscriptions, elle est
  annulée et l’intégralité des sommes avancées est remboursée sans frais.
  Les prochaines dates, les frais annexes et les modalités de règlement
  sont à confirmer auprès du club avant paiement.
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
- **[Retours d’expérience](./pages/retours-experience.html)** : quatre publications
  du club (croisière, Chausey, voile légère et permis pratique), avec
  résumés et liens vers les albums et activités. Les archives sont distinguées du
  programme actuel. Quatre albums dépliables présentent 26 images, agrandissables
  dans une fenêtre superposée refermable avec la croix, Échap ou un clic à
  l’extérieur, sans changer de page ; la photo de croisière complète cette sélection.
  Les flèches latérales et les touches gauche/droite parcourent les photos du
  même album, avec un compteur et des boutons désactivés aux deux extrémités.
  Les albums affichent leurs photos en mosaïque sur trois, deux ou une colonne
  selon la largeur, dans leurs proportions naturelles et sans bandes ajoutées.
  L’ordre de lecture suit chaque colonne de haut en bas. Les en-têtes présentent
  le titre, une courte description et le nombre d’images. Le curseur prend la
  forme d’une main au survol des photos, sans icône superposée.
  La visionneuse présente les images sans recadrage sur fond sombre, avec des
  commandes SVG circulaires. Le focus initial est placé sur la fenêtre plutôt
  que sur la fermeture ; les boutons conservent un focus visible au clavier et
  ne permettent pas la sélection de texte ni l’affichage d’un curseur de saisie.
  L’onglet est accessible sur toutes les pages, depuis « Le club » sur l’accueil
  et depuis les pages croisière et permis.
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
- Pied de page commun avec une rangée discrète de liens vers FFVoile, Windguru (prévisions de vent)
  et PassageWeather (météo marine). Les logos sont conservés localement dans
  [outils/](./assets/images/outils/), séparément des albums, et les liens utilisent HTTPS.

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
|   |-- retours-experience.html
|   `-- mentions-legales.html
|-- partials/
|   |-- header.html
|   `-- footer.html
|-- scripts/
|   |-- generate-albums.mjs
|   |-- generate-albums.test.mjs
|   |-- generate-layout.mjs
|   `-- generate-layout.test.mjs
`-- assets/
    |-- css/
    |   |-- styles.css
    |   |-- journal.css
    |   `-- activities.css
    |-- icons/
    |   |-- favicon.svg
    |   `-- compass.svg
    |-- js/
    |   |-- albums.generated.js
    |   `-- journal.js
    `-- images/
        |-- outils/
        |   |-- ffv.jpg
        |   |-- windguru.png
        |   `-- passageweather.png
        |-- site/
        |   |-- croisiere.jpg
        |   `-- regate.jpg
        `-- albums/
            |-- chausey/
            |-- saint-quentin/
            |-- journal-de-bord/
            `-- permis-pratique/
```

- [pages/](./pages/) contient les pages annexes.
- [styles.css](./assets/css/styles.css) définit la direction artistique commune,
  l’accueil, les mentions légales et leurs adaptations mobiles.
- [activities.css](./assets/css/activities.css) contient les styles propres
  aux pages d’activités ; les retours d’expérience réutilisent aussi ses styles
  d’introduction, de fil d’Ariane et d’albums dépliables.
- [icons/](./assets/icons/) regroupe les illustrations SVG et le favicon partagé.
- [images/](./assets/images/) contient les photographies de navigation du club.
- [journal.css](./assets/css/journal.css) définit les cartes et albums de la page
  des retours d’expérience, en complément des styles communs et d’activités.
- [site/](./assets/images/site/) contient les photos de présentation partagées
  par les pages. La copie identique de la photo de croisière a été supprimée.
- [albums/](./assets/images/albums/) conserve les 26 images des quatre albums,
  regroupées par sortie ou thème. Les noms des fichiers sont précédés d’un numéro
  pour conserver leur ordre ; l’image du tournage est nommée `02-tournage-paris.jpg`.
  Chaque dossier contient un fichier `album.json` pour le titre, la description,
  l’ordre d’affichage et les éventuels textes propres à certaines photos.
  Les images sont locales, sans chargement distant ni lecteur vidéo intégré.
  Les droits de publication ont été confirmés par le responsable du projet ;
  conserver les autorisations et compléter les crédits lorsque ceux-ci sont connus.

Le site utilise HTML, CSS et JavaScript sans framework.
[header.html](./partials/header.html) et [footer.html](./partials/footer.html)
définissent les éléments communs une seule fois. Le générateur
[generate-layout.mjs](./scripts/generate-layout.mjs) les intègre dans les pages
entre les commentaires `shared:header:start/end` et `shared:footer:start/end`.
Le résultat est du **HTML statique complet** : navigation, contact et outils
fonctionnent immédiatement, même sans JavaScript et en ouverture locale.
Les chemins sont adaptés à chaque page, sans URL absolue liée à l’hébergement.
L’onglet courant et le lien des mentions légales reçoivent automatiquement
`aria-current="page"` ; les liens du club et de l’adhésion restent des ancres
locales sur l’accueil.

[journal.js](./assets/js/journal.js) génère les albums et les photos avec des
boucles à partir de [albums.generated.js](./assets/js/albums.generated.js).
Le HTML ne contient que deux modèles `template`, pas une liste de photos.
Ces scripts classiques fonctionnent aussi en ouvrant directement la page locale,
sans `fetch`, serveur ni module JavaScript côté navigateur.
La fenêtre native `dialog` conserve le focus au clavier et le restitue à la
photo après fermeture. Sans JavaScript, un message invite à l’activer pour consulter les albums.
Les questions dépliables fonctionnent nativement dans le navigateur.

## Ajouter ou retirer des photos

Le navigateur ne peut pas lister un dossier local. Le script JavaScript
[generate-albums.mjs](./scripts/generate-albums.mjs) scanne les dossiers et écrit
l’inventaire, puis le navigateur construit les galeries à partir de cet inventaire.

1. Ajouter, retirer ou renommer les photos dans le dossier concerné sous
   [albums/](./assets/images/albums/). Formats acceptés : JPEG (`.jpg`, `.jpeg`)
   et PNG. Préfixer les noms par `01-`, `02-`, etc. pour maîtriser leur ordre.
2. Depuis la racine du projet, avec **Node.js 18 ou plus récent**, exécuter :

   ```powershell
   node .\scripts\generate-albums.mjs
   ```

3. Recharger la page. Les photos, dimensions, légendes numérotées et compteurs
   sont actualisés automatiquement, sans modifier le HTML ni le JavaScript.
4. Publier les photos et l’inventaire régénéré avec le reste du site.
   Ne pas modifier [albums.generated.js](./assets/js/albums.generated.js) à la main.

Pour créer un album, ajouter un dossier contenant les photos et un fichier
`album.json`, par exemple :

```json
{
  "id": "nouvelle-sortie",
  "title": "Notre nouvelle sortie",
  "description": "Les souvenirs de notre navigation",
  "label": "photo",
  "order": 5,
  "open": false
}
```

L’identifiant doit être unique dans la page. `label` vaut `photo` ou `image`.
`order` et `open` sont facultatifs. Les fichiers sont triés par nom avec prise
en compte des nombres. Pour une légende ou un texte alternatif spécifique,
ajouter une entrée facultative `images` au fichier descriptif :

```json
{
  "images": {
    "01-notre-escale.jpg": {
      "alt": "Le voilier au mouillage devant le port",
      "caption": "Notre escale au petit matin"
    }
  }
}
```

Cette propriété complète les autres champs du fichier ; elle ne constitue pas
la liste des photos à afficher. Toutes les images du dossier sont découvertes,
même sans entrée descriptive. Un album vide affiche un message explicite.
Le script signale les métadonnées manquantes, identifiants dupliqués, images
illisibles et formats non pris en charge, sans écraser l’inventaire existant.
Les sous-dossiers imbriqués ne sont pas pris en charge.

## Modifier le site

- Modifier les textes de l’accueil et les liens d’adhésion dans
  [index.html](./index.html).
- Modifier les informations de chaque activité directement dans sa page HTML
  du dossier [pages/](./pages/).
- Ajouter ou modifier les récits et albums dans
  [retours-experience.html](./pages/retours-experience.html), en conservant les
  liens internes et les dates d’archives. Les récits restent dans le HTML ; les
  albums et photos se gèrent dans [albums/](./assets/images/albums/) puis avec
  le générateur, comme expliqué ci-dessus.
- Adapter les couleurs et les styles communs dans
  [styles.css](./assets/css/styles.css).
  Les principales couleurs sont définies dans `:root`.
- Adapter les mises en page propres aux activités dans
  [activities.css](./assets/css/activities.css).
- Compléter les informations légales dans
  [mentions-legales.html](./pages/mentions-legales.html).
- Pour modifier l’en-tête ou le pied de page, éditer uniquement
  [header.html](./partials/header.html) ou [footer.html](./partials/footer.html),
  puis exécuter :

  ```powershell
  node .\scripts\generate-layout.mjs
  ```

  Dans les fichiers communs, écrire les liens et les chemins d’images depuis la
  racine du projet (`pages/…`, `assets/…`, `index.html#club`). Le générateur les
  rend relatifs à chaque page. Ne pas modifier les blocs générés directement :
  leurs changements seraient écrasés lors de la prochaine génération.
- Pour une nouvelle page, reprendre les deux paires de commentaires `shared`
  d’une page existante et conserver le contenu spécifique en dehors de ces blocs.
  Le générateur traite l’accueil et tous les fichiers HTML directement sous
  [pages/](./pages/). Ajouter son éventuel lien dans le fichier d’en-tête commun,
  puis régénérer. Ne pas renseigner `aria-current` dans les fichiers communs.

Les liens sont relatifs : depuis l’accueil, utiliser `pages/…` et `assets/…` ;
depuis une page annexe, utiliser `../index.html`, `../assets/…` et le nom de
fichier pour une autre page du même dossier.

## Vérifications

Les tests des générateurs utilisent uniquement les outils intégrés à Node.js :

```powershell
node --test .\scripts\generate-albums.test.mjs .\scripts\generate-layout.test.mjs
```

Ils vérifient notamment la découverte des ajouts et suppressions, les dimensions,
le tri, les noms contenant des espaces et les erreurs de fichiers ou de métadonnées.
Ils contrôlent aussi les liens relatifs, l’onglet actif, la mise à jour de toutes
les pages depuis un fichier commun et la stabilité des générations successives.
Après une modification :

1. Vérifier les six pages sur ordinateur et mobile, sans débordement horizontal.
2. Tester chaque onglet, les cartes de l’accueil, le retour à l’accueil et les
   liens vers les autres activités.
3. Vérifier la navigation au clavier, les questions dépliables et l’onglet actif.
4. Tester les ancres, les liens externes et le chargement des images et des styles.
5. Vérifier le rendu avec la réduction des animations activée.
6. Vérifier les blocs communs, l’onglet actif et les logos des outils en
   ouverture locale et après hébergement dans un sous-dossier. Sans JavaScript,
   vérifier que la navigation, le contact et les outils restent disponibles.

Les anciennes fenêtres modales des activités ont été supprimées. Seul
l’agrandissement des photos utilise une fenêtre superposée ; aucun environnement
Node.js n’est nécessaire pour consulter le site. Node.js sert uniquement à
régénérer les albums et les blocs communs et à exécuter leurs tests, pas à l’hébergement.

## Avant la mise en ligne

**Les informations légales doivent être complétées avant publication.**

- Faire valider les contenus, tarifs, dates et modalités d’adhésion par le club.
- Compléter et faire valider les mentions légales : éditeur juridiquement
  responsable, adresse du siège, direction de publication, futur hébergeur
  et informations relatives aux traitements de données personnelles.
- Confirmer les droits de publication des photos, les éventuels crédits et
  les autorisations concernant les personnes reconnaissables.
- Retirer l’encart provisoire et la directive `noindex` de la page des mentions
  légales une fois son contenu finalisé et validé.
- Vérifier les formulaires d’adhésion liés.
- Choisir un hébergement statique avec HTTPS et publier [index.html](./index.html)
  ainsi que les dossiers [pages/](./pages/) et [assets/](./assets/) en conservant
  leurs chemins relatifs. Régénérer les albums si les photos ou leurs descriptions
  ont changé, et les blocs communs si l’en-tête ou le pied de page ont changé.
  Les dossiers [partials/](./partials/) et [scripts/](./scripts/) ne sont pas
  nécessaires sur l’hébergement.
- Revoir les informations de confidentialité si l’hébergement ou de nouvelles
  fonctionnalités introduisent des journaux techniques, des cookies ou des traceurs.
