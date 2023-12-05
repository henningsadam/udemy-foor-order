import React, { useContext } from 'react';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import Modal from '../ui/Modal';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const sampleCartItems = [
    { id: 1, name: 'Cart Item #1', price: '10', quantity: '2', summary: '20' },
    { id: 2, name: 'Cart Item #2', price: '20', quantity: '4', summary: '80' },
  ];

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartContext.addItem(item);
  };
  const cartItemRemoveHandler = (id) => {};

  const cartItems = cartContext.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      summary={item.summary}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));

  return (
    <Modal onClick={props.onCartClick}>
      <ul className={styles['cart-items']}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onCartClick}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
