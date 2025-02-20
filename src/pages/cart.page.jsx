import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/Navigation";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function CartPage() {
  const cart = useSelector((state) => state.cart.value);

  return (
    <main className="px-8">
      <h2 className="text-4xl font-bold">My Cart</h2>
      <div className="mt-4 grid grid-cols-2 w-1/2 gap-x-4">
        {cart.map((item, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center space-x-4">
              <img
                src={item.product.image || "/placeholder.svg"}
                alt={item.product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-medium">{item.product.name}</p>
                <p className="text-muted-foreground">${item.product.price}</p>
                <p className="text-sm">Quantity: {item.quantity}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-4">
        <Button asChild>
          <Link to="/shop/checkout">Proceed to Checkout</Link>
        </Button>
      </div>
    </main>
  );
}

export default CartPage;
