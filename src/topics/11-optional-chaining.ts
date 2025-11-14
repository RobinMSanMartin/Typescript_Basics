
export interface Passenger{
    name: string;
    children?:string[];
}

const pass1: Passenger={
    name: "Nicolas",
}

const pass2: Passenger={
    name: "Robin",
    children: ['Nicolas'],
}

const printChildren = ( passenger:Passenger)=>{
    const howManyChildren = passenger.children?.length || 0;
    //const howManyChildren = passenger.children!.length;

    console.log(howManyChildren);
    return howManyChildren;
}


printChildren(pass2);
printChildren(pass1);









