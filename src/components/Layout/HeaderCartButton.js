import { useContext } from "react"
import CartContext from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
  const context = useContext(CartContext)
  const openCart = () =>{
    context.showCart(true)
  }
  return (
    <button 
      className={classes.button}
      onClick={openCart}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>
        Your Cart
      </span>
      <span className={classes.badge}>
        3
      </span>
    </button>
  )
}


export default HeaderCartButton
