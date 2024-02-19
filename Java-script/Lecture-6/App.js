class animal {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }

    thisAnimalMakesSound() {
        return `${this.name} makes this specificy ${this.sound}`
    }
}

class cat extends animal {
    thisAnimalMakesSound () {
        return `${this.name} makes this specificy ${this.sound}`
    }
}

const result = new cat ('Frey', 'meaw')
result.thisAnimalMakesSound()
console.log(result);
console.log(result.thisAnimalMakesSound());
