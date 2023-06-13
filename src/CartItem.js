import React from 'react';

class CartItem extends React.Component {

 
  render() {
    const { price, title, qty } = this.props.product;

    const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onhandleDeleteProduct,
     } = this.props;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div>Rs {price}</div>
          <div>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/256/992/992651.png"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/256/992/992683.png"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/256/3976/3976961.png"
              onClick={() => onhandleDeleteProduct(product.id)}
            />
          </div>
        </div>
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
export default CartItem;