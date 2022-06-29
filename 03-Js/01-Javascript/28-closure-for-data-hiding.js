/**
 *  "MODULE PATTERN "
 */

function getCart(){
    /**
     *  cart object's add() and show() are inner function's of getCart()
     * 
     *  items : this variable is accessible only to the cart object's add() and show()
     * 
     */
    const items =[];

    cart = {
        // items:[],
        add( item ){
            items.push( item );
        },
        show(){
            console.log( items );
        }
    };

    return cart;
}

const shoppingCart = getCart();

shoppingCart.add( "Soap");
shoppingCart.add( "Detergents");
shoppingCart.add( "Shampoo");

shoppingCart.show();
