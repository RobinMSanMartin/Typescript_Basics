
export class Person{
    /* manera larga o clasica
    public name: string;
    private address: string;
    constructor(name:string, address:string){
        this.name = name;
        this.address = address;
    }
    */

    constructor(
        public fristName:string,
        public lastName:string,
        private address:string = 'No Address'
    ) {}
}

/*
export class Hero extends Person{
    constructor(
        public alterEgo:string,
        public age: number,
        public realName:string,
    ){
        super(realName, 'Santiago')
    }
}
*/

export class Hero{

    //public person: Person;

    constructor(
        public alterEgo:string,
        public age: number,
        public realName:string,
        public person: Person,
    ){
        //this.person = new Person(realName);
    }
}


//const persona1 = new Person('Venom','Santiago');
const venom : Person = new Person('Eddie','Brock', 'New York');
const persona1 = new Hero('Venom',45,'Eddie Brock', venom);

console.log(persona1);









