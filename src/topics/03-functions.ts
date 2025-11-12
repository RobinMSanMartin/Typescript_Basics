function addNumbers(a:number, b:number){
    return a+b;
}

//lambda function
const addNumberArrow = (a:number, b:number):string => {
    return `${ a + b }`;
}

function multiply(firstNumber:number, secondNumber?:number, base:number = 2){
    return firstNumber * base;
}

const result:number = addNumbers(1,2);
const result2:string = addNumberArrow(3,4);
const multiplyResult:number = multiply(3);

//console.log({result});
//console.log({result2});
//console.log({multiplyResult});

interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character:Character, amount:number)=>{
    character.hp += amount;
}

const strider: Character = {
    name:'Strider',
    hp:50,
    showHp(){
        console.log(`Puntos de Vida ${this.hp}`);
    }
}

healCharacter(strider, 20);

strider.showHp();

export{};