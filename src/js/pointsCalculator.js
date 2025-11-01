// Calcul des points à chaque fin de partie

function getPoints(shelf) {
    let title_STREAK = 0; let title_POINTS = 0;
    let author_STREAK = 1; let author_POINTS = 0;
    let name_STREAK = 1; let name_POINTS = 0;
    let genre_STREAK = 1; let genre_POINTS = 0;
    let format_STREAK = 1; let format_POINTS = 0;

    let PointsTotal = 0;

    
}

/*
Livres:
    - Chaque livre vaut 1 point.
    - Chaque étagère est indépendante.
    - Points totaux aroundi à l'inférieur.
    - Etagère pleine, +1 point

Titres:
    - Si au moins 3 livres d'affilés sont dans le même ordre alphabétique de (ascendant), +1 point par livre
        - Titres identiques comptés comme dans l'ordre alphabétique courant
    - Si 2 livres côte à côte ont le même Titre, +1 point bonus par livre -1

Auteurs/Noms:
    - Si au moins 3 livres d'affilés avec les Noms dans le même ordre ordre alphabétique (ascendant),
      +1 point par livre
        - Noms ou Auteurs identiques comptés comme dans l'ordre alphabétique courant
    - Si 2 livres côte à côte ont le même Auteur, +1 point bonus par livre -1
    - Si tous les livres de l'étagère sont du même Auteur, +2 points

Genres:
    - Si au moins 2 livres d'affilés avec le même Genre, +1 point par livre
    - Si tous les livres de l'étagère sont du même Genre et étagère pleine, +0.5 point par livre

Littératures:
    - Si au moins 2 livres d'affilés avec la même Littérature, +1 point par livre
        - Si pas de Littérature, +0 points, casse la streak en cours

Formats:
    - Si au moins deux livres de même Format, +1.4 points par livre
 */


function playerShelves(bookShelves) {
    pointTotal=0;
    for (key in bookShelves) {
        pointTotal += getPoints(bookShelves[key]);
    }

    return pointTotal;
}