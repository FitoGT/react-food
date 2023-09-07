import React, {  useState } from "react";

const CartContext = React.createContext({
  isShown: false,
  showCart: (value)=>{}
})

export const CartContextProvider = props =>{
  const [isShown, setIsShown] = useState(false)
  const showCartHandler = value =>{
    setIsShown(value)
  }

  return(
    <CartContext.Provider
      value={{
        isShown: isShown,
        showCart: showCartHandler
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext
