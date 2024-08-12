import React from 'react';

const About = () => {
  return (
    <section className="bg-[#40c901] text-white m-8 py-12 max-h-[30rem] overflow-scroll" id='about'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <p className="text-lg text-justify mx-auto max-w-3xl">
          Welcome to <span className="font-bold">GreenGrocer</span>, your one-stop online destination for fresh produce and groceries delivered straight to your door. Our mission is to offer a seamless shopping experience, combining quality products with convenience and exceptional customer service. 
          <br /><br />
          At GreenGrocer, we understand the importance of fresh and high-quality ingredients in your daily life. That’s why we meticulously source our products to ensure that every item in your cart is of the highest standard. From fruits and vegetables to dairy and bakery items, we are committed to bringing you the best that nature has to offer.
          <br /><br />
          Our easy-to-use online platform allows you to shop for your groceries with just a few clicks. Enjoy the convenience of browsing our extensive catalog, placing orders, and having everything delivered right to your doorstep. Our dedicated team works tirelessly to ensure prompt and reliable service, so you can focus on what matters most.
          <br /><br />
          Thank you for choosing GreenGrocer. We look forward to serving you and making your grocery shopping experience as enjoyable and effortless as possible.
        </p>
      </div>
    </section>
  );
};

export default About;
