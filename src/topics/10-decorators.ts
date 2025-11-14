function classDecorator<T extends {new (...args:any[]):{}}>(
    constructor: T
){
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass{
    public myProperty: string = 'Abc123';

    print(){
        console.log('Hola Mundo');
    }
}


console.log( SuperClass );//imprime definicion de la clase

const myClass = new SuperClass();
console.log(myClass);








