import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'
const Cart = props => {
  const context = useContext(CartContext)
  const cartItems = [
    {
      id: "c1",
      name: "sushi",
      amount: 2,
      price: 12.00
    }
  ].map((item)=><li key={item.id}>{item.name}</li>)
  const closeCart = () => {
    context.showCart(false)
  }
  return (
    <Modal>
      <ul className={classes['cart-items']}>
        {cartItems}
      </ul>
      <div className={classes.total}>
        <span>Total</span>
        <span>35</span>
      </div>
      <div className={classes.actions}>
        <button onClick={closeCart} className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
