var grille = [
    [0,1,1,0,0],
    [1,1,1,0,0],
    [0,0,0,0,0],
    [0,0,0,0,1],
    [0,0,0,1,1],
];

function getNombreCellulesMortes(x, y) {
    var _dead = 0;
    var _maxX = grille.length - 1;
    var _maxY = grille[0].length - 1;

    if (x > 0 && y > 0 && grille[x-1][y-1] == 0)
        _dead++;
    if (y > 0 && grille[x][y-1] == 0)
        _dead++;    
    if (x < _maxX && y > 0 && grille[x+1][y-1] == 0)
        _dead++;
    if (x > 0 && grille[x-1][y] == 0)
        _dead++; 
    if (x < _maxX && grille[x+1][y] == 0)
        _dead++;
    if (x > 0 && y < _maxY && grille[x-1][y+1] == 0)
        _dead++;
    if (y < _maxY && grille[x][y+1] == 0)
        _dead++;    
    if (y < _maxY && x < _maxX && grille[x+1][y+1] == 0)
        _dead++;

    return _dead;
}

// On parcours la grille
for (indexLigne = 0; indexLigne < 5; indexLigne++) {
    for (indexColonne = 0; indexColonne < 5; indexColonne++) {
        grille[indexLigne][indexColonne] = livingCell(indexLigne, indexColonne);
        console.log(grille);
    }
}

function livingCell(x, y){
    if (grille[x][y] === 1){
        if (getNombreCellulesMortes(x, y) === 5 || getNombreCellulesMortes(x, y) === 6){
            return 1
        } else {
            return 0
        }
    }
}
<<<<<<< HEAD

function Function2(){
    
}
=======
>>>>>>> 622d0123a8cd9fb2c0fa15c4cbbb6e9d700b69a1
