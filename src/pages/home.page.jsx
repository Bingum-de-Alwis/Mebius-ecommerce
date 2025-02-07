import Hero from "./../Hero";
import Navigation from "./../Navigation";
import Products from "./../Products";
import { useState } from "react";

function HomePage() {
  const name = null;
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const foundItem = cart.find((item) => item.product._id === product._id);
    if (foundItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      return;
    }
    setCart([...cart, { product: product, quantity: 1 }]);
  };

  const getCartQuantity = () => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    return count;
  };

  return (
    <div>
      <Navigation name={name} cartCount={getCartQuantity()} />
      <Hero />
      <Products handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default HomePage;
