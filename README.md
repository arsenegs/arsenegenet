# Site d'Arsène Genet Sauvage — version statique

## Fichiers

- `index.html` / `index-en.html` — page d'accueil (FR / EN) : carrousel photo, à propos, matériel
- `portfolio.html` / `portfolio-en.html` — grille des productions (FR / EN)
- `style.css` — tout le design (thème blanc, menu latéral, couleurs, typographies)
- `script.js` — fait tourner le carrousel de la page d'accueil et gère les vignettes du portfolio quand une photo manque encore
- `cv.pdf` — **à ajouter vous-même** (voir plus bas)

## Photos à ajouter

Le site est prêt à afficher vos photos, mais il n'en contient aucune pour
l'instant — il n'y avait pas de photos réutilisables sur l'ancien site
pour le carrousel, et les vignettes du portfolio pointent vers des fichiers
qui n'existent pas encore. Tant qu'une image n'est pas là, le site affiche
proprement le titre du projet à la place, donc rien n'est cassé — mais
l'effet visuel voulu (photos qui tournent, vignette par projet) n'apparaît
qu'une fois les images ajoutées.

Créez un dossier `images/` à côté des fichiers `.html`, avec :

**Carrousel de la page d'accueil** (4 photos, format large, ex. 1600×900) :
```
images/hero-1.jpg
images/hero-2.jpg
images/hero-3.jpg
images/hero-4.jpg
```

**Vignettes du portfolio** (une par projet, format **carré**), dans
`images/portfolio/` — respectez exactement ces noms de fichiers :
```
images/portfolio/guardians-of-the-land.jpg
images/portfolio/les-enfants-du-fleuve.jpg
images/portfolio/le-serment-dhippocrate.jpg
images/portfolio/go-north.jpg
images/portfolio/adonis.jpg
images/portfolio/couper-le-cordon.jpg
images/portfolio/sweetgrass.jpg
images/portfolio/hyperlieux.jpg
images/portfolio/tes-refait.jpg
images/portfolio/ca-rec.jpg
images/portfolio/moonwalk.jpg
images/portfolio/sexy-soucis.jpg
images/portfolio/thank-you-and-goodnight.jpg
```

Pour le CV : renommez votre fichier en `cv.pdf` et placez-le à côté des
fichiers `.html`.

## Ce qu'il reste à vérifier

- Le lien du projet « Thank You and Goodnight » pointe pour l'instant vers
  `#` (aucune page externe pour l'instant) — dites-moi le lien à utiliser
  une fois disponible (site du diffuseur, bande-annonce...)
- Le statut « En production » de certaines productions date peut-être —
  vérifiez si certaines sont sorties depuis
- Les liens « Voir le projet » du carrousel et les vignettes du portfolio
  pointent pour l'instant vers `#` / la page portfolio — dites-moi si vous
  voulez qu'ils mènent vers une fiche détaillée par projet, une bande-annonce,
  ou le site du diffuseur
- Le menu latéral passe en bandeau horizontal sur mobile — à tester sur
  votre téléphone une fois en ligne

## Voir le site en local

Double-cliquez sur `index.html`, ou lancez un petit serveur local :

```bash
python3 -m http.server 8000
```

puis ouvrez `http://localhost:8000`.

## Déployer sur GitHub Pages

Voir les étapes détaillées données précédemment : créer un dépôt **public**
sur GitHub, y glisser-déposer tous les fichiers de ce dossier (y compris le
dossier `images/`), puis activer Pages dans Settings → Pages.

## Modifier le contenu

Le texte est directement dans les fichiers `.html` — modifiez-le sur place.
Les couleurs, polices et espacements se règlent dans `style.css`, dans le
bloc `:root` en haut du fichier.
