import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "./store/cart-context";
import { useContext } from "react";

const App = () => {
  const context = useContext(CartContext)
  console.log(context.isShown)
  return (
    <>
      { context.isShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
