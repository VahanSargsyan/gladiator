
function getRandom(from, to) {
    return Math.round(Math.random() * (to - from) + from);
}

class Gladiator {
    constructor(name) {
        this.name = name;
        this.health = getRandom(80, 100)
        this.power  = getRandom(2, 5)
        this.speed  = getRandom(1, 5)
    }
}

function factori (n) {
    let gladiators = [];
    for (let i = 0; i < n; i++) {
        let gladiator = new Gladiator(`gladiator${i}`);
        gladiators.push(gladiator)
    }
    return gladiators
}

function fight(i) {

    let enemy = gladiators[getRandom(0, gladiators.length - 1)]
    enemy.health -= gladiators[i].power
    console.log(gladiators[i].name + ' Hit '+ enemy.name + ' by ' + gladiators[i].power + ' power ' + enemy.name + 'helth is ' +enemy.health )
    for (let i =0; i < gladiators.length; i++) {
        if (gladiators[i].health <= 0) {
            if (Math.round(Math.random())) {

                gladiators.splice(i, 1);
            } else {
                gladiators[i].health = 50;
            }

        }
    }
    setTimeout(fight.bind(null, i), 5000 / gladiators[i].speed );
}


function arena() {

    for (let i = 0; i < gladiators.length; i++) {
        setTimeout(function() {
            fight(i)

        }, 500 / gladiators[i].speed)
    }
}


let gladiators = factori(5)
arena();


