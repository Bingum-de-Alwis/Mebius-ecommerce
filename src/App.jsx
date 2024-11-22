import {Button} from "@/components/ui/button";
import Hero from "./Hero";
import Navigation from "./Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge" 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";






function App() {
  const name = "";
  const cartCount = 2;
  const avatarSrc = "https://github.com/shadcn.png"
  const accordionItems = [
    {
      title: "What products are available on the platform?",
      content:
        "Our platform offers a wide range of electronic products, including smartphones, laptops, accessories, and home appliances from top brands. New products are added regularly.",
    },
    {
      title: "How can I make a purchase?",
      content:
        "Simply browse through the product categories, add items to your cart, and proceed to checkout. You can choose from various payment options including credit cards, digital wallets, and cash on delivery.",
    },
    {
      title: "Do you offer product warranties?",
      content:
        "Yes, we offer warranties on most of the products we sell. Warranty terms and conditions may vary depending on the manufacturer and the product. Please check the product description for specific warranty information.",
    },
    {
      title: "How do I track my order?",
      content:
        "Once your order is shipped, you'll receive a tracking number via email or SMS. You can use this number on the carrier's website to track the delivery status of your order.",
    },
    {
      title: "Can I return or exchange a product?",
      content:
        "Yes, you can return or exchange products within 30 days of delivery. Please refer to our Returns & Exchanges policy for more details on how to initiate a return or exchange.",
    },
  ];

  return (
    <div>
      <Navigation name={name} cartCount={cartCount} avatarSrc={avatarSrc}/>
      <Hero />
      <div className="p-4">
        <Button>Buy Now</Button>
      </div>
      <div className="p-4 w-96">
        <Card className= "border-2">
          <CardHeader>
            <CardTitle>Product Name</CardTitle>
            <Badge className="w-fit">On Sale</Badge>
          </CardHeader>
          <CardContent>
            <CardDescription>
              This is a card description.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button>Buy Now</Button>
          </CardFooter>
        </Card>
      </div>
      <Accordion
        type="single"
        collapsible
        className="relative w-full p-8 border-2"
      >
        {accordionItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default App;