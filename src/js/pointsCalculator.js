// Calcul des points à chaque fin de partie

function perfectStreak(streak) {
    if (streak == SHELF_SIZE) { return 2; }
    else { return 0; }
}

function getPoints(shelf) {
    console.log(shelf)
    let pointsTotaux = shelf.length;
    if (shelf.length == 0) { return 0; }
    else if (shelf.length == SHELF_SIZE) { pointsTotaux += 1; }
    

    let title_STREAK = 1; let title_SAME = 0;
    let name_STREAK = 1; let author_SAME = 0;
    let genre_STREAK = 1;
    let litterature_STREAK = 1;
    let format_STREAK = 1;


    let i = 0; let previousBook = shelf[0];
    for (let i = 1; i < shelf.length; i++) {
        let currentBook = shelf[i]; let tempPoints;

        // TITRE //
        if (currentBook["titre"] >= previousBook["titre"]) {
            title_STREAK++;
            if (currentBook["titre"] == previousBook["titre"]) {
                title_SAME++;
            } else {
                pointsTotaux += title_SAME;
                title_SAME = 0; }
        } else if (title_STREAK > 1) {
            pointsTotaux += title_STREAK + title_SAME;
            title_STREAK = 1; title_SAME = 0;
        }

        // NOM/AUTEUR //
        if (currentBook["nom"] >= previousBook["nom"]) {
            name_STREAK++;
            if (currentBook["auteur"] == previousBook["auteur"]) {
                author_SAME++;
            } else {
                pointsTotaux += author_SAME;
                author_SAME = 0; }
        } else if (name_STREAK > 1) {
            pointsTotaux += name_STREAK + author_SAME;
            name_STREAK = 1; author_SAME = 0;
        }

        // GENRES //
        if (currentBook["genre"] == previousBook["littérature"]) { genre_STREAK++; }
        else if (genre_STREAK > 1) {
            pointsTotaux += genre_STREAK;
            genre_STREAK = 1;
        }

        // LITTERATURES //
        if (currentBook["littérature"] == previousBook["littérature"]) { litterature_STREAK++; }
        else if (litterature_STREAK > 1) {
            pointsTotaux += floor(litterature_STREAK*1.2);
            litterature_STREAK = 1;
        }

        // FORMATS //
        if (currentBook["format"] == previousBook["format"]) { format_STREAK++; }
        else if (format_STREAK > 1) {
            pointsTotaux += format_STREAK;
            litterature_STREAK = 1;
        }
    }

    if (title_STREAK > 1) { pointsTotaux += title_STREAK + title_SAME + perfectStreak(title_STREAK); }
    if (name_STREAK > 1) { pointsTotaux += name_STREAK + author_SAME + perfectStreak(name_STREAK); }
    if (genre_STREAK > 1) { pointsTotaux += genre_STREAK + ((perfectStreak(genre_STREAK))?(shelf.length*0.5):(0)); }
    if (litterature_STREAK > 1) { pointsTotaux += floor(litterature_STREAK*1.2) + perfectStreak(litterature_STREAK); }
    if (format_STREAK > 1) { pointsTotaux += format_STREAK + perfectStreak(format_STREAK); }
    
    return floor(pointsTotaux);
}

// Pense bête
{/*
Livres:
    - Chaque livre vaut 1 point.
    - Chaque étagère est indépendante.
    - Points totaux aroundi à l'inférieur.
    - Etagère pleine, +1 point
    - Si une streak est parfaite (tailleStreak==ShelfSize), +2 points bonus

Titres:
    - Si au moins 2 livres d'affilés sont dans le même ordre alphabétique de (ascendant), +1 point par livre
        - Titres identiques comptés comme dans l'ordre alphabétique courant
    - Si 2 livres côte à côte ont le même Titre, +1 point bonus par livre -1

Auteurs/Noms:
    - Si au moins 2 livres d'affilés avec les Noms dans le même ordre ordre alphabétique (ascendant),
      +1 point par livre
        - Noms ou Auteurs identiques comptés comme dans l'ordre alphabétique courant
    - Si 2 livres côte à côte ont le même Auteur, +1 point bonus par livre -1
    - Si tous les livres de l'étagère sont du même Auteur, +2 points

Genres:
    - Si au moins 2 livres d'affilés avec le même Genre, +1 point par livre
    - Si tous les livres de l'étagère sont du même Genre et étagère pleine, +0.5 point par livre

Littératures:
    - Si au moins 2 livres d'affilés avec la même Littérature, +1 (*1.2 floor) point par livre
        - Si pas de Littérature, +0 points, casse la streak en cours

Formats:
    - Si au moins deux livres de même Format, +1 points par livre
 */}


function playerShelves(bookShelves) {
    pointTotal=0;
    for (key in bookShelves) {
        pointTotal += getPoints(bookShelves[key]);
    }

    return pointTotal;
}