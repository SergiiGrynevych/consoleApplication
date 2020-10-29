// Наследование
// extends
// super

class Hero{
    constructor({name = 'hero', xp = 0} = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} получает ${this.xp} опыта`);
        this.xp += amount;
    }
}

class Warrior extends Hero{
    constructor(config) {
        super(config);

        this.weapon = config.weapon;
    }
    attack() {
        console.log(`${this.name} атакует используя ${this.weapon}`);
    }
}

const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
console.log(mango);

mango.attack();
mango.gainXp(1000);

