# ATSCAF Voile Paris

Maquette de modernisation du site de l’association
[ATSCAF Voile Paris](http://www.atscaf-voile-paris.fr/).

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
  programme, adhésion et contact.
- **[Mentions légales](./mentions-legales.html)** : page dédiée avec sommaire
  et informations à compléter avant publication.
- Trois activités : croisière, compétition et permis côtier.
- Fiches d’activités ouvertes au clic, fermables par le bouton de fermeture,
  la touche Échap ou un clic en dehors de la fiche.
- Mise en page adaptée aux ordinateurs et aux mobiles.
- Survols discrets, zoom des photos et transitions douces.
- Respect de la préférence système de réduction des animations.
- Liens vers les services d’adhésion existants et contact par e-mail.

Il n’y a ni serveur applicatif, ni base de données, ni espace membre, ni
réservation ou paiement intégrés. Cette version n’utilise pas de cookies,
de traceurs ou de mesure d’audience.

## Organisation du projet

| Fichier ou dossier | Rôle |
| --- | --- |
| [index.html](./index.html) | Structure et contenu de l’accueil |
| [mentions-legales.html](./mentions-legales.html) | Informations légales et confidentialité |
| [styles.css](./styles.css) | Styles communs, adaptation mobile et animations |
| [script.js](./script.js) | Contenu et comportement des fiches d’activités |
| [assets/](./assets/) | Photographies récupérées sur le site historique du club |

Le projet utilise uniquement HTML, CSS et JavaScript, sans framework.

## Modifier le site

- Modifier les textes de l’accueil et les liens d’adhésion dans
  [index.html](./index.html).
- Modifier les descriptions détaillées des activités dans l’objet `activities`
  de [script.js](./script.js).
- Adapter les couleurs et les styles dans [styles.css](./styles.css).
  Les principales couleurs sont définies dans `:root`.
- Compléter les informations légales dans
  [mentions-legales.html](./mentions-legales.html).
- Pour modifier l’en-tête ou le pied de page, mettre à jour les deux pages :
  ces éléments sont actuellement présents dans chaque fichier HTML.

Le script des activités est chargé uniquement sur l’accueil, où se trouve
la boîte de dialogue correspondante.

## Vérifications

Il n’y a pas de suite de tests automatisés configurée. Après une modification :

1. Vérifier les deux pages sur ordinateur et mobile, sans débordement horizontal.
2. Tester les trois fiches d’activités et leurs différentes façons de se fermer.
3. Vérifier la navigation au clavier et le retour du focus après fermeture.
4. Tester les ancres, les liens entre les pages et les liens externes.
5. Vérifier le rendu avec la réduction des animations activée.

Si Node.js est installé, la syntaxe du JavaScript peut être vérifiée sans
installer de paquet :

```powershell
node --check .\script.js
```

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
- Choisir un hébergement statique avec HTTPS et publier les deux pages,
  les styles, le script et le dossier d’images en conservant leurs chemins relatifs.
- Revoir les informations de confidentialité si l’hébergement ou de nouvelles
  fonctionnalités introduisent des journaux techniques, des cookies ou des traceurs.
