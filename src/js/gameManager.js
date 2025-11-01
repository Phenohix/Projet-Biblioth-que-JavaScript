let playing = true;
let libraryBag = library;
let random = Math.random;

let bestiary = [
    {"nom": "Gluant d'encre", "nb_livres_voles": 1, "livres_voles": [], "velocite": [2, 3]},
    {"nom": "Gobelin chariot", "nb_livres_voles": 3, "livres_voles": [], "velocite": [1, 2]},
    {"nom": "Hobegobelin chariot", "nb_livres_voles": 5, "livres_voles": [], "velocite": [2, 5]},
    {"nom": "Oeil mordeur", "nb_livres_voles": 1, "livres_voles": [], "velocite": [1, 3]}
]

function getBook() {
    let pos = floor(random()*libraryBag.length);
    book = libraryBag[pos];
    libraryBag.splice(pos, 1);

    return book;
}

function makeMonster(id = -1) {
    if (id>-1 && id<bestiary.length) { bestiary[id]; }
    else { monster = bestiary[floor(random()*bestiary.length)]; }
    
    let velocityRange = monster["velocite"];
    let velocity = floor(random()*velocityRange[1]-velocityRange[0]+1)+velocityRange[0];
    monster["velocite"] = velocity;

    for (let i=0 ; i<monster["nb_livres_voles"] ; i++) {
        monster["livres_voles"].splice(monster["livres_voles"].length, 0, getBook());
    }

    return monster;
}


function game() {
    if (!libraryBag.length) {playing = false;}
    if (!playing) {return;}

    monster = makeMonster();
}