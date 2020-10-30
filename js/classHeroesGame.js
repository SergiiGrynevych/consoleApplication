// // Наследование
// // extends
// // super

// class Hero{
//     constructor({name = 'hero', xp = 0} = {}) {
//         this.name = name;
//         this.xp = xp;
//     }

//     gainXp(amount) {
//         console.log(`${this.name} получает ${this.xp} опыта`);
//         this.xp += amount;
//     }
// }

// class Warrior extends Hero{
//     constructor(config) {
//         super(config);

//         this.weapon = config.weapon;
//     }
//     attack() {
//         console.log(`${this.name} атакует используя ${this.weapon}`);
//     }
// }

// class Mage extends Hero{
//     constructor(config) {
//         super(config);

//         this.spells = config.spells;
//     }

//     cast() {
//         console.log(`${this.name} кастует ${this.spells}`);
//     }

//     npcAttack(npc, health) {
//         console.log(`Вы встретили ${npc}, он сильно агрессивно настроен и прыгает на Вас`);
//         this.cast();
//         let healthOfNpc = health;
//         // let randomDamage = 0;
//         // let healthOfNpcAfteAttack = 0; // = healthOfNpc -= randomDamage;
//         // let summOfDamage = 0;
//         const damageNpc = function (min, max) {
//             const randomDamage = Math.round(Math.random() * (max - min) + min);
//             console.log(`Вы нанесли ${randomDamage} урона, у ${npc} осталось ${healthOfNpc} жизней`);
//             healthOfNpc -= randomDamage;
//             return healthOfNpc;
//         };
//         damageNpc(1, 99);
//         console.log(healthOfNpc);
//     }



// }


// const mango = new Warrior({ name: 'Mango', xp: 1000, weapon: 'алебарда' });
// console.log(mango);

// mango.attack();
// mango.gainXp(1000);

// const superMage = new Mage({ name: 'Gengalf', xp: 500, spells: 'огненный шар' });
// superMage.npcAttack('гоблин', 250);
// // superMage.cast();
// superMage.gainXp(500);




class Hero{
    constructor({name = 'hero', xp = 0} = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} получает ${this.xp} опыта за убийство ${this.npc}`);
        this.xp += amount;
    }
}

class Mage extends Hero{
    constructor(config) {
        super(config);
        this.spells = config.spells;
        this.npc = config.npc;
    }
    
    cast() {
        const arrayRandElement = function (arr) {
            const rand = Math.floor(Math.random() * arr.length);
            return arr[rand];
        };
        console.log(`${this.name} кастует ${arrayRandElement(this.spells)}`);
    }

    npcAttack(health) {
        console.log(`Вы встретили ${this.npc}, он агрессивно настроен и прыгает на Вас`);
        this.cast();
        let healthOfNpc = health;
        let damageToNpc = 0;

        let i = 0;
        do {
            const randomDamage = Math.round(Math.random() * (99 - 1) + 1);
            if (healthOfNpc >= 0) {
                healthOfNpc -= randomDamage;
                damageToNpc += randomDamage;
                this.cast();
                console.log(`Ты нанес ${this.npc}, ${Number(damageToNpc)} урона`);
                if (healthOfNpc <= 0) {
                    console.log(`Вы нанесли ${randomDamage} урона, у ${this.npc} осталось ${healthOfNpc} жизней`);
                    break;
                }
            } 
            console.log(`Вы нанесли ${randomDamage} урона, у ${this.npc} осталось ${healthOfNpc} жизней`);
        } while (i++ < 10);

        // const damageNpc = function (min, max) {
        //     const randomDamage = Math.round(Math.random() * (max - min) + min);
        //     healthOfNpc -= randomDamage;
        //     console.log(`Вы нанесли ${randomDamage} урона, у ${npc} осталось ${healthOfNpc} жизней`);
        //     return healthOfNpc;
        // };
        // damageNpc(1, 99);
        
        // console.log(healthOfNpc);
    }
}

const superMage = new Mage({ name: 'Gengalf', xp: 500, spells: ['огненный шар', 'морозная волна', 'ледяная глыба', 'огненная стрела', 'огненная волна'], npc: 'гоблин' });
superMage.npcAttack(250);
// superMage.cast();
superMage.gainXp(500);
// console.log(`${superMage.gainXp()}`);


