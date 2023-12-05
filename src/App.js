import { useState } from 'react'
import Cart from './components/cart/Cart';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartDisplayed, setisCartDisplayed] = useState(false)

  const cartDisplayHandler = () => {
    if (isCartDisplayed === true) {
      setisCartDisplayed(false)
    } else {
      setisCartDisplayed(true)
    }
  }

  return (
    <CartProvider>
      {isCartDisplayed && <Cart onCartClick={cartDisplayHandler} />}
      <Header onCartClick={cartDisplayHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
