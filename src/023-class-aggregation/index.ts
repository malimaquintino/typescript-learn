export class ShoppingCart {
    private readonly products:Product[] =[];

    addProducts(...products:Product[]):void{
        for (const product of products){
            this.products.push(product);
        }
    }

    cartQuantity():number{
        return this.products.length;
    }

    cartTotal():number{
        return this.products.reduce((sum, prod)=>sum+=prod.price,0);
    }
}

export class Product {
    constructor(private _name:string, private _price:number){}

    get name():string{
        return this._name;
    }

    set name(name:string) {
        this._name = name;
    }

    get price():number{
        return this._price;
    }

    set price(price:number) {
        this._price = price;
    }
}

const prod1 = new Product('TV', 1550.99);
const prod2 = new Product('Radio', 349.99);

const cart = new ShoppingCart();
cart.addProducts(prod1, prod2);
console.log(cart);
console.log(cart.cartQuantity());
console.log(cart.cartTotal());
