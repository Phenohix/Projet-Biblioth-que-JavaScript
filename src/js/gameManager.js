let playing = true;
let libraryBag = copy(library);
let random = Math.random;
SHELF_SIZE = 10;
BASE_VELOCITY = 50;

let bestiary = [
    {"nom": "Gluant d'encre", "nb_livres_voles": 1, "livres_voles": [], "velocite": [2, 3], "position": [0,0]},
    {"nom": "Gobelin chariot", "nb_livres_voles": 3, "livres_voles": [], "velocite": [1, 2], "position": [0,0]},
    {"nom": "Double Gobelin chariot", "nb_livres_voles": 3, "livres_voles": [], "velocite": [2, 4], "position": [0,0]},
    {"nom": "Hobegobelin chariot", "nb_livres_voles": 5, "livres_voles": [], "velocite": [2, 5], "position": [0,0]},
    {"nom": "Oeil mordeur", "nb_livres_voles": 1, "livres_voles": [], "velocite": [1, 3], "position": [0,0]}
]

function getBook() {
    let pos = floor(random()*libraryBag.length);
    book = libraryBag[pos];
    libraryBag.splice(pos, 1);

    return book;
}

function makeMonster(id = -1) {
    if (id>-1 && id<bestiary.length) { monster = bestiary[id]; }
    else { monster = bestiary[floor(random()*bestiary.length)]; }
    
    let velocityMin = monster["velocite"][0];
    let velocityMax = monster["velocite"][1];
    let velocity = floor(random()*(velocityMax-velocityMin+1))+velocityMin;
    monster["velocite"] = velocity;

    for (let i=0 ; i<monster["nb_livres_voles"] ; i++) {
        monster["livres_voles"].splice(monster["livres_voles"].length, 0, getBook());
    }

    monster["vitesse"] = monster["velocite"] * BASE_VELOCITY;

    return monster;
}


function game() {
    if (!libraryBag.length) {playing = false;}
    if (!playing) {return;}

    monster = makeMonster();
}