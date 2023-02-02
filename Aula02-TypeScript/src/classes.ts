//class
//modificadores de acesso
/*
  data modifers
  public
  private
  protected
*/
class Character {
    protected name?: string;
    readonly strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    public attack(): void {
        console.log(`Attack with ${this.strength} points`);
    }
}

//Character: superclass
//Magician: subclass
class Magician extends Character {
    magicPoints: number
    constructor(
        name: string,
        strength: number,
        skill: number,
        magicPoints:number
    ) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Nasus", 75, 98);
const p2 = new Magician("Ryze", 49, 82, 100);
p2.attack();
console.log(p1);
console.log(p2);