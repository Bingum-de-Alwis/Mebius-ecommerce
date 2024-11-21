function Hero() {
  return (
    <section className="py-8 mx-16">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-md min-h-[60vh] bg-gray-100">
        <div className="flex flex-col justify-center p-16 gap-4">
          <span className="inline-block rounded-full py-1 px-2 text-xs w-fit bg-yellow-500">
            WEEKLY DISCOUNT
          </span>
          <h1 className="text-6xl font-semibold leading-none text-black mb-4">
            Premium Product Online Shop
          </h1>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            suscipit est autem quia? Voluptatem?
          </p>
          <a href="/shop" className="py-2 px-4 text-white font-medium bg-black rounded-md inline-block w-fit">
              Shop Now
          </a>
        </div>
        <div className="relative">
          <img
            src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;