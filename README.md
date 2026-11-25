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

Un bandeau d’actualité sous la navigation, commun à toutes les pages, annonce les pré-inscriptions
au permis côtier (session 2027), avant le 30 novembre 2026, avec un lien direct
vers les modalités d’inscription. Son contenu se modifie dans
[le header partagé](./partials/header.html) ; régénérer les blocs communs après
modification. Actualiser ou retirer cette annonce après l’échéance.

- **[Et aussi...](./pages/et-aussi.html)** : page accessible après « Retours
  d’expérience » dans le menu, consacrée à la régate virtuelle, aux stages de
  voile légère en partenariat avec le Club Nautique de Viry-Châtillon et aux
  rencontres conviviales sur les bords de Seine. La voile légère est organisée
  et encadrée par le partenaire, et non par la section voile de l’ATSCAF.
  Les horaires de l’école de voile (mercredi 14 h–17 h, samedi 10 h–13 h
  ou 14 h–17 h) proviennent de sa
  [page officielle pour 2026–2027](https://viryvoile.com/ecole-de-voile/),
  consultée le 14 novembre 2026. Le lien permet de vérifier le calendrier,
  les disponibilités, les tarifs et les modalités d’inscription auprès de Viry.

- **[Accueil / Le club](./index.html)** : présentation de l’association et de la
  vie en équipage avec la photo de Pandora sous spi, puis activités, adhésion, fonctionnement
  de la section et contact. L’introduction précise la saison de navigation de fin
  mars à novembre, les relèves estivales et le partenariat avec le Club de Voile
  de l’ASCO (ONERA), propriétaire de Pandora. La section « Le fonctionnement de la section »,
  accessible depuis la présentation du club, rappelle le principe du bénévolat,
  décrit l’organisation et présente les six membres du bureau et leurs fonctions.
  Elle reprend aussi le projet présenté à l’assemblée générale du 21 novembre 2019 :
  quatre objectifs (accessibilité, progression technique, accès à la voile en région
  parisienne et compétition) et six dimensions complémentaires (croisière, école de
  voile habitable, voile légère, compétition, permis et vie du club).
  Les liens « Nos retours d’expérience » et « Les albums photo » se trouvent sous
  les cartes de la section « Les activités du club ».
  La photo d’accueil reprend `assets/images/site/croisiere.jpg`,
  également utilisée sur la page Croisière.
  Les modalités d’inscription sont regroupées dans le bandeau vert, à la place
  de l’ancien appel à demander le programme. « Le club » est le premier onglet du menu
  sur toutes les pages et indique la page courante sur l’accueil.
  Les accroches promotionnelles de l’introduction, des activités et du club,
  ainsi que le bouton de demande du programme, ont été retirés.
  Les deux adhésions obligatoires sont
  distinguées : ATSCAF Grand Paris (cotisation séparée) et section voile
  (73 € pour 2026–2027, licence FFVoile incluse), du 1er septembre au 31 août.
  Les deux démarches d’adhésion et le règlement séparé du formulaire sont précisés
  dans la section adhésion. Une courte note renvoie aux pages des activités pour
  leurs éventuels frais supplémentaires. Les coordonnées bancaires pour le
  virement figurent dans cette même section.
- L’ancienne adresse [club.html](./pages/club.html) redirige vers l’accueil
  pour préserver les liens existants.
- **[Croisière](./pages/croisiere.html)** : présentation de Pandora, Sun Fast 36
  de l’ASCO basé à Saint-Malo, rythme des sorties et exemples de destinations ;
  vie à bord, lien vers les démarches d’adhésion sur l’accueil, liste d’équipement
  individuel (dont le prêt de cirés), organisation,
  budget, sécurité, entretien, formation des chefs de bord et conditions
  d’annulation.
  Les conseils d’équipement et l’entretien de Pandora ont chacun une rubrique dépliable des
  « Questions pratiques ».
  La rubrique budget distingue la PAF, la caisse de bord partagée (nourriture et
  port) et les dépenses personnelles, dont le transport.
  Le déroulement d’un week-end précise la nuit à bord le vendredi, le départ le
  samedi selon la marée, la nuit dans un autre port ou au mouillage, puis le retour
  le dimanche après-midi et le nettoyage pour le bord suivant.
  Les questions pratiques détaillent le covoiturage (camionnette ASCO sous réserve
  de disponibilité ou voitures des équipiers), les rendez-vous et le départ
  conseillé au plus tard à 17 h le vendredi, ainsi que l’avitaillement et les repas.
  Elles rappellent les vêtements chauds même l’été et le prêt de cirés sous réserve
  de disponibilité. La vie à bord décrit les tâches partagées, l’espace réduit et
  le confort rustique du voilier de 11 m, sous la responsabilité d’un chef de bord qualifié.
  Le calendrier 2026 présente les bords d’automne et les croisières d’été,
  précédés d’une présentation du rythme annuel : week-ends de printemps et
  d’automne, de fin mars à novembre au départ de Saint-Malo, hivernage et croisières estivales généralement
  d’une semaine, parfois hors de France.
  Il indique aussi les périodes sans bord et le désarmement. Le planning de printemps
  n’est pas disponible. Les dates sont statiques, sans suivi des disponibilités ;
  actualiser les tableaux lors d’une modification du programme.
- **[Formation](./pages/permis.html)** : présentation succincte du permis côtier,
  avec un lien vers sa page dédiée, préparation au permis hauturier (travail sur
  la carte et calcul de marée) et école de voile habitable. Cette dernière propose
  cinq jours pour travailler les fondamentaux et aider les adhérents à se perfectionner,
  sur des bateaux plus maniables que Pandora, encadrés par les moniteurs FFV du club.
  Les dates, disponibilités et tarifs sont à confirmer auprès du club.
- **[Permis côtier](./pages/permis-cotier.html)** : parcours de formation (16 h de
  préparation, 6 h de révision et 2 h de pilotage), programme des huit séances,
  modalités de pré-inscription, pièces du dossier et liens vers les CERFA.
  Cette page est accessible depuis la page Formation et les liens consacrés au
  permis côtier, mais n’a pas d’onglet dans la navigation principale.
  Selon la fiche Word « Fiche info Permis Cotier 2027 - revu Z.docx », la session
  2027 comprend sept séances regroupées sur deux jours, sur un ou deux week-ends,
  au CISP Kellermann, à Paris 13e. La période envisagée est le dernier week-end
  de janvier ou un week-end de la deuxième quinzaine de février ; les dates
  précises restent à confirmer. La révision avec le bateau-école est prévue
  à partir de fin février, en semaine, au port de l’Arsenal.
  Le tarif de 290 € inclut un code Vagnon. L’acompte de 150 € valide l’inscription ;
  le solde de 140 € et le dossier complet sont attendus avant le 10 janvier 2027.
  La pré-inscription par e-mail doit être demandée avant le 30 novembre 2026.
  Les règlements se font par virement ; l’acompte n’est pas remboursable en cas
  de désistement du candidat. Le certificat médical doit utiliser le CERFA
  imprimé en recto-verso. Avec les frais annexes (78 € et 30 €), le budget
  indicatif est de 398 € hors adhésions. La session nécessite au moins 8 candidats :
  si ce minimum n’est pas atteint à la clôture des inscriptions, elle est
  annulée et l’intégralité des sommes avancées est remboursée sans frais.
  Les prochaines dates, les frais annexes et les modalités de règlement
  sont à confirmer auprès du club avant paiement.
  Le programme est présenté en cartes thématiques avec icônes SVG, numéros
  de thème et points clés, sur deux colonnes lorsque l’espace le permet
  et une colonne sur les écrans étroits.
  La photo « Permis bateau » illustre le poste de pilotage en introduction.
  Les photos de cartes marines et de bouées cardinales sont présentées dans
  un bandeau au début du programme, hors des cartes des séances.
  Leurs proportions sont conservées sans recadrage ; elles sont côte à côte
  sur grand écran et empilées sur mobile.
  La carte de l’accueil reprend la photo des cartes marines.
  Ces photos d’illustration ne représentent pas les formations du club.
  La photo du poste de pilotage remplace aussi le bateau en papier dans le récit
  de Christian et son album du permis pratique ; sa légende précise qu’il ne
  s’agit pas d’une photo de sa formation.
- **[Régates](./pages/competitions.html)** : groupe d’entraînement,
  J80 au Havre et Grand Surprise à Cherbourg, coaching de Bernard (entraîneur
  fédéral), réunions techniques à Paris, prérequis sportifs et engagement annuel.
  Une section met en valeur la 3e place au championnat de France entreprise
  et la 2e place au challenge FFSE. Elle présente la photo fournie « Régate.jpg »,
  conservée dans `regate-championnat-france.jpg`, sans recadrage ni suppression
  de la signature de Patrick Deroualle.
  Le calendrier présente sept rendez-vous sans année précisée.
  Les prochaines dates et les frais sont
  à confirmer auprès du club ; le bulletin d’inscription est demandé par e-mail.
- **[Mentions légales](./pages/mentions-legales.html)** : page dédiée avec sommaire
  et informations à compléter avant publication. L’hébergeur est renseigné :
  SARL E-monsite, 19, rue Lamartine, 80000 Amiens, France. Les coordonnées
  téléphoniques et le tarif de l’appel sont affichés en texte.
- **[Retours d’expérience](./pages/retours-experience.html)** : trois publications
  du club (croisière, Chausey et permis pratique), avec
  résumés et liens vers les albums et activités. Les archives sont distinguées du
  programme actuel.
  Le permis pratique présente le récit complet de Christian, signé le 29 avril
  2017, publié le 4 mai 2017 et mis à jour le 19 février 2021, dans une section
  repliée par défaut, accessible avec « Lire le récit de Christian ».
  Deux albums dépliables présentent 20 images, agrandissables
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
  L’onglet est accessible sur toutes les pages, depuis la page « Le club »
  et depuis les pages croisière et permis.
- Les activités possèdent chacune leur propre page et leur onglet de navigation.
  Les cartes de l’accueil mènent directement à ces pages, sans fenêtre modale.
  Les liens vers les autres activités en bas des pages croisière, permis et régates
  reprennent ces cartes et leurs photos, sur deux colonnes puis une sur mobile.
- Navigation commune, indication de l’activité courante, fil d’Ariane et liens
  entre les activités.
- Logo officiel ATSCAF Grand Paris dans l’en-tête de toutes les pages, avec
  un lien vers l’accueil et une taille adaptée aux mobiles.
- Questions pratiques dépliables avec les éléments HTML natifs `details` et `summary`.
- Calendriers à lignes alternées, texte contrasté et léger agrandissement au
  survol à la souris, désactivé si la réduction des animations est demandée.
- Mise en page adaptée aux ordinateurs et aux mobiles.
- Paragraphes descriptifs justifiés sur toutes les pages, sans modifier
  l’alignement des titres, des menus ou des boutons.
- Survols discrets, zoom des photos et transitions douces.
- Respect de la préférence système de réduction des animations.
- Liens vers les services d’adhésion existants et contact par e-mail.
- Pied de page commun avec deux groupes de liens : « Affiliation » pour FFVoile
  et [FFSE](https://ffse.fr/), puis « Les outils du navigateur » pour Windguru
  (prévisions de vent) et PassageWeather (météo marine). Les logos sont conservés localement dans
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
|   |-- permis-cotier.html
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
            `-- journal-de-bord/
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
  `logo-atscaf-voile.png` provient de l’image intégrée au document fourni
  « Fiche info Permis Cotier 2027 - revu Z.docx », plus nette que « Logo.png ».
  Seules les marges blanches superflues ont été retirées ; le dessin et ses
  proportions sont conservés.
  Trois photos fournies depuis le dossier « Images site ATSCAF VOILE » du Bureau
  sont conservées en JPEG redimensionnés et compressés, sans modifier les originaux :
  `permis-bateau.jpg` (« Permis bateau.jpg », Tahir Osman, Pexels 12059895),
  `permis-carte-marine.jpg` (« Cartes marines.jpg », cottonbro, Pexels 5302807) et
  `permis-balisage.jpg` (« Balisage.jpg », Pasha, Pexels 39511104).
  Les crédits et les liens sources figurent dans les mentions légales.
  Elles restent séparées des albums de sorties réelles du club.
- [albums/](./assets/images/albums/) conserve les 20 images des deux albums,
  regroupées par sortie ou thème. Les noms des fichiers sont précédés d’un numéro
  pour conserver leur ordre.
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
`aria-current="page"`, tout comme l’onglet « Le club » sur l’accueil.
Les liens d’adhésion restent des ancres locales sur l’accueil.

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
  racine du projet (`pages/…`, `assets/…`, `index.html#adherer`). Le générateur les
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
