let gameOn = true;
let libraryBag = copy(library);
let random = Math.random;
SHELF_SIZE = 10;
BASE_VELOCITY = 7;

let bestiary = [
    {"nom": "Gluant d'encre", "nb_livres_voles": 1, "livres_voles": [], "velocite": [2, 3], "position": [-615,0,-615]},
    {"nom": "Gobelin chariot", "nb_livres_voles": 3, "livres_voles": [], "velocite": [1, 2], "position": [-615,0,-615]},
    {"nom": "Double Gobelin chariot", "nb_livres_voles": 3, "livres_voles": [], "velocite": [2, 4], "position": [-615,0,-615]},
    {"nom": "Hobegobelin chariot", "nb_livres_voles": 5, "livres_voles": [], "velocite": [2, 5], "position": [-615,0,-615]},
    {"nom": "Oeil mordeur", "nb_livres_voles": 1, "livres_voles": [], "velocite": [1, 3], "position": [-615,0,-6150]}
];

function getBook() {
    let pos = floor(random()*libraryBag.length);
    book = copy(libraryBag[pos]);
    libraryBag.splice(pos, 1);

    return book;
}

function makeMonster(id = -1) {
    if (id>-1 && id<bestiary.length) { monster = copy(bestiary[id]); }
    else { monster = copy(bestiary[floor(random()*bestiary.length)]); }
    
    let velocityMin = monster["velocite"][0];
    let velocityMax = monster["velocite"][1];
    let velocity = floor(random()*(velocityMax-velocityMin+1))+velocityMin || 2;
    monster["velocite"] = copy(velocity);

    if (monster["livres_voles"].length>0) { monster["livres_voles"]=[]; }
    for (let i=0 ; i<monster["nb_livres_voles"] ; i++) {
        monster["livres_voles"].push(getBook());
    }

    return monster;
}


function game(timerOut=false) {
    if (!libraryBag.length || timerOut) {gameOn = false;}
    if (!gameOn) {return false;}

    // monster = makeMonster();
    return gameOn;
}