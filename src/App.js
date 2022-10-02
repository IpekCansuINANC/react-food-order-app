import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  // Cart modalını göstermek ve gizlemek için state oluşturduk.
  const [cartIsShown, setCartIsShown] = useState(false);

  //modalı göster
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  //modalı gizle
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
