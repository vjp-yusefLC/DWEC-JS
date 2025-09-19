let arrayNum = [2, 4, 6, 3, 2, 33];

function funcionRest(...arrayNum) {
    if ((arrayNum.every(elem => !isNaN(elem)))) {
        let numMayor = Math.max(...arrayNum);
        return numMayor;
    }
    else {
        return undefined;
    }
}

console.log(funcionRest(...arrayNum));