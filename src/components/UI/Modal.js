import { createPortal } from 'react-dom'
import classes from './Modal.module.css'
import React, { useContext, useEffect } from 'react'
import CartContext from '../../store/cart-context'

const Backdrop = props => {
  const context = useContext(CartContext)
  const closeCart = () => {
    context.showCart(false)
  }  
  return <div onClick={closeCart} className={classes.backdrop}></div>
}

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  )
}

const element = document.getElementById('overlays')

const Modal = props => {
  const context = useContext(CartContext)
 
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === 'Escape') {
        context.showCart(false)
      }
    }
  
    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [])
  return(
    <>
      {createPortal(<Backdrop/>, element)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, element)}
    </>
  )
}

export default Modal
