import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
          products: [
            {
              price: 99,
              title: "Watch",
              qty: 1,
              img: "",
              id: 1,
            },
            {
              price: 990,
              title: "Mobile Phone",
              qty: 1,
              img: "",
              id: 2,
            },
            {
              price: 9900,
              title: "Car",
              qty: 1,
              img: "",
              id: 3,
            },
          ]
        };
         this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);
         this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this);
         this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    }
    handleIncreaseQuantity(product){
        const { products } = this.state || {};
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products: products
        })
    }

    handleDecreaseQuantity(product){
        const { products } = this.state || {};
        const index = products.indexOf(product);
        if(products[index].qty ==1){
          return 0;
        }
        products[index].qty -= 1;
        this.setState({
            products: products
        })
    }
    handleDeleteProduct(id){
        const { products } = this.state || {};
        const items = products.filter(item=> item.id != id);
        this.setState({
            products: items
        })
    }


 render(){
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map(product=>{
            return (
              <CartItem
                product={product}
                key={product.id}
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity}
                onhandleDeleteProduct={this.handleDeleteProduct}
              />
            );
        })}
       
      </div>
    );
 }
};

const styles ={
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default Cart;