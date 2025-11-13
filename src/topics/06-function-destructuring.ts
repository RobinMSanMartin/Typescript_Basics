export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}
const tablet: Product = {
    description: "Ipad Air",
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}
/*
function taxCalculation(options:TaxCalculationOptions):number[]{
    let total = 0;
    options.products.forEach(product  => {
        total += product.price;
    });
    return [total, total * options.tax];
}
*/
//function taxCalculation({tax, products}:TaxCalculationOptions):number[]{
export function taxCalculation(options:TaxCalculationOptions):number[]{
    const{tax,products}=options;
    let total = 0;

    /*
    products.forEach(product  => {
        const { price } = product;
        total += price;
    });
    */
    products.forEach(({price})  => {
        total += price;
    });

    return [total, total * tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;
/*
const result = taxCalculation({
    products: shoppingCart,
    tax:tax
});
*/
const [r1,r2]:number[] = taxCalculation({
    products: shoppingCart,
    tax:tax
});

console.log("Total: ", r1);
console.log("Tax: ", r2);




//export {};