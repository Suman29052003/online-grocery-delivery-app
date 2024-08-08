


const groceryItems = [
    {
      id: 1,
      name: "Organic Bananas",
      image: '/banana.jpg',
      price: 0.99,
      description: "Fresh organic bananas, perfect for a healthy snack.",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Almond Milk",
      image: "/almond-milk.jpg",
      price: 2.99,
      description: "Unsweetened almond milk, dairy-free and delicious.",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Whole Wheat Bread",
      image: "/whole-wheat-bread.jpg",
      price: 3.49,
      description: "Soft and healthy whole wheat bread, great for sandwiches.",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Eggs (Dozen)",
      image: "/eggs.jpg",
      price: 2.79,
      description: "Cage-free eggs, rich in protein and essential nutrients.",
      rating: 4.9,
    },
    {
      id: 5,
      name: "Greek Yogurt",
      image: "/green-yogurt.jpg",
      price: 1.99,
      description: "Thick and creamy Greek yogurt, high in protein.",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Chicken Breast",
      image: "/chicken-breasth.jpg",
      price: 5.99,
      description: "Boneless, skinless chicken breast, lean and healthy.",
      rating: 4.7,
    },
    {
      id: 7,
      name: "Broccoli",
      image: "/brocoil.jpg",
      price: 1.69,
      description: "Fresh broccoli florets, perfect for steaming or roasting.",
      rating: 4.8,
    },
    {
      id: 8,
      name: "Cheddar Cheese",
      image: "/cheddar-cheese.jpg",
      price: 4.49,
      description: "Sharp cheddar cheese, great for sandwiches and snacks.",
      rating: 4.7,
    },
    {
      id: 9,
      name: "Peanut Butter",
      image: "/peanut-butter.jpg",
      price: 3.99,
      description: "Creamy peanut butter, perfect for spreading on toast.",
      rating: 4.6,
    },
    {
      id: 10,
      name: "Apples (Fuji)",
      image: "/apples.jpg",
      price: 1.29,
      description: "Crisp and sweet Fuji apples, great for snacking.",
      rating: 4.8,
    },
    {
      id: 11,
      name: "Quinoa",
      image: "/quinoa.jpg",
      price: 4.29,
      description: "Organic quinoa, a healthy alternative to rice.",
      rating: 4.7,
    },
    {
      id: 12,
      name: "Spinach",
      image: "/spincach.jpg",
      price: 2.49,
      description: "Fresh spinach leaves, packed with iron and vitamins.",
      rating: 4.8,
    },
    {
      id: 13,
      name: "Salmon Fillet",
      image: "/salmon-fillet.jpg",
      price: 9.99,
      description: "Wild-caught salmon fillet, rich in omega-3 fatty acids.",
      rating: 4.9,
    },
    {
      id: 14,
      name: "Avocado",
      image: "https://example.com/images/avocado.jpg",
      price: 1.49,
      description: "Creamy avocado, perfect for toast and salads.",
      rating: 4.8,
    },
    {
      id: 15,
      name: "Brown Rice",
      image: "https://example.com/images/brown-rice.jpg",
      price: 2.79,
      description: "Whole grain brown rice, a healthy side dish option.",
      rating: 4.6,
    },
    {
      id: 16,
      name: "Almonds",
      image: "https://example.com/images/almonds.jpg",
      price: 6.99,
      description: "Raw almonds, a great source of healthy fats.",
      rating: 4.7,
    },
    {
      id: 17,
      name: "Carrots",
      image: "https://example.com/images/carrots.jpg",
      price: 1.29,
      description: "Fresh carrots, perfect for snacking or cooking.",
      rating: 4.8,
    },
    {
      id: 18,
      name: "Tomato Sauce",
      image: "https://example.com/images/tomato-sauce.jpg",
      price: 2.49,
      description: "Rich and flavorful tomato sauce, ideal for pasta dishes.",
      rating: 4.6,
    },
    {
      id: 19,
      name: "Frozen Blueberries",
      image: "https://example.com/images/blueberries.jpg",
      price: 3.99,
      description: "Frozen organic blueberries, perfect for smoothies.",
      rating: 4.8,
    },
    {
      id: 20,
      name: "Oats",
      image: "https://example.com/images/oats.jpg",
      price: 2.49,
      description: "Whole rolled oats, great for a healthy breakfast.",
      rating: 4.7,
    },
    {
      id: 21,
      name: "Pasta (Whole Wheat)",
      image: "https://example.com/images/pasta.jpg",
      price: 1.99,
      description: "Whole wheat pasta, a healthier alternative to regular pasta.",
      rating: 4.6,
    },
    {
      id: 22,
      name: "Honey",
      image: "https://example.com/images/honey.jpg",
      price: 5.49,
      description: "Organic honey, perfect for sweetening tea or yogurt.",
      rating: 4.8,
    },
    {
      id: 23,
      name: "Cucumber",
      image: "https://example.com/images/cucumber.jpg",
      price: 0.99,
      description: "Fresh cucumber, crisp and hydrating.",
      rating: 4.7,
    },
    {
      id: 24,
      name: "Mixed Nuts",
      image: "https://example.com/images/mixed-nuts.jpg",
      price: 8.99,
      description: "A blend of almonds, cashews, and walnuts.",
      rating: 4.8,
    },
    {
      id: 25,
      name: "Dark Chocolate",
      image: "https://example.com/images/dark-chocolate.jpg",
      price: 3.49,
      description: "Rich dark chocolate, perfect for a sweet treat.",
      rating: 4.9,
    },
    {
      id: 26,
      name: "Butter",
      image: "https://example.com/images/butter.jpg",
      price: 3.79,
      description: "Unsalted butter, great for baking and cooking.",
      rating: 4.7,
    },
    {
      id: 27,
      name: "Lettuce",
      image: "https://example.com/images/lettuce.jpg",
      price: 1.29,
      description: "Crisp lettuce, ideal for salads and sandwiches.",
      rating: 4.6,
    },
    {
      id: 28,
      name: "Strawberries",
      image: "https://example.com/images/strawberries.jpg",
      price: 4.99,
      description: "Fresh strawberries, sweet and juicy.",
      rating: 4.8,
    },
    {
      id: 29,
      name: "Olive Oil",
      image: "https://example.com/images/olive-oil.jpg",
      price: 6.49,
      description: "Extra virgin olive oil, perfect for cooking and dressing.",
      rating: 4.9,
    },
    {
      id: 30,
      name: "Oranges",
      image: "https://example.com/images/oranges.jpg",
      price: 0.89,
      description: "Fresh oranges, rich in vitamin C.",
      rating: 4.8,
    },
    {
      id: 31,
      name: "Sweet Potatoes",
      image: "https://example.com/images/sweet-potatoes.jpg",
      price: 1.49,
      description: "Sweet and nutritious sweet potatoes, great for roasting.",
      rating: 4.7,
    },
    {
      id: 32,
      name: "Chia Seeds",
      image: "https://example.com/images/chia-seeds.jpg",
      price: 4.29,
      description: "Superfood chia seeds, perfect for adding to smoothies.",
      rating: 4.8,
    },
    {
      id: 33,
      name: "Chicken Thighs",
      image: "https://example.com/images/chicken-thighs.jpg",
      price: 4.99,
      description: "Juicy chicken thighs, perfect for grilling or roasting.",
      rating: 4.7,
    },
    {
      id: 34,
      name: "Zucchini",
      image: "https://example.com/images/zucchini.jpg",
      price: 1.29,
      description: "Fresh zucchini, great for grilling or adding to stir-fry.",
      rating: 4.6,
    },
    {
      id: 35,
      name: "Coconut Water",
      image: "https://example.com/images/coconut-water.jpg",
      price: 2.99,
      description: "Hydrating coconut water, great for post-workout recovery.",
      rating: 4.7,
    },
    {
      id: 36,
      name: "Ground Beef",
      image: "https://example.com/images/ground-beef.jpg",
      price: 7.99,
      description: "Lean ground beef, perfect for burgers and meatballs.",
      rating: 4.8,
    },
    {
      id: 37,
      name: "Bell Peppers",
      image: "https://example.com/images/bell-peppers.jpg",
      price: 1.99,
      description: "Fresh bell peppers, great for salads and stir-fry.",
      rating: 4.7,
    },
    {
      id: 38,
      name: "Yogurt (Vanilla)",
      image: "https://example.com/images/vanilla-yogurt.jpg",
      price: 1.69,
      description: "Creamy vanilla yogurt, perfect for a healthy snack.",
      rating: 4.6,
    },
    {
      id: 39,
      name: "Whole Milk",
      image: "https://example.com/images/whole-milk.jpg",
      price: 2.99,
      description: "Rich and creamy whole milk, great for drinking and cooking.",
      rating: 4.7,
    },
    {
      id: 40,
      name: "Frozen Peas",
      image: "https://example.com/images/frozen-peas.jpg",
      price: 2.49,
      description: "Frozen green peas, perfect for adding to soups and stews.",
      rating: 4.8,
    },
    {
      id: 41,
      name: "Rice Cakes",
      image: "https://example.com/images/rice-cakes.jpg",
      price: 2.29,
      description: "Light and crispy rice cakes, great for snacking.",
      rating: 4.6,
    },
    {
      id: 42,
      name: "Tomatoes (Roma)",
      image: "https://example.com/images/roma-tomatoes.jpg",
      price: 1.49,
      description: "Juicy Roma tomatoes, perfect for salads and sauces.",
      rating: 4.7,
    },
    {
      id: 43,
      name: "Canned Tuna",
      image: "https://example.com/images/canned-tuna.jpg",
      price: 2.29,
      description: "Sustainably caught tuna, packed in water.",
      rating: 4.7,
    },
    {
      id: 44,
      name: "Cilantro",
      image: "https://example.com/images/cilantro.jpg",
      price: 0.89,
      description: "Fresh cilantro, great for adding flavor to dishes.",
      rating: 4.6,
    },
    {
      id: 45,
      name: "Cereal (Oats)",
      image: "https://example.com/images/oat-cereal.jpg",
      price: 3.99,
      description: "Healthy oat cereal, perfect for breakfast.",
      rating: 4.7,
    },
    {
      id: 46,
      name: "Soy Sauce",
      image: "https://example.com/images/soy-sauce.jpg",
      price: 2.49,
      description: "Rich soy sauce, great for seasoning and marinades.",
      rating: 4.7,
    },
    {
      id: 47,
      name: "Garlic",
      image: "https://example.com/images/garlic.jpg",
      price: 0.99,
      description: "Fresh garlic, essential for cooking flavorful dishes.",
      rating: 4.8,
    },
    {
      id: 48,
      name: "Frozen Pizza",
      image: "https://example.com/images/frozen-pizza.jpg",
      price: 5.99,
      description: "Delicious frozen pizza, ready in minutes.",
      rating: 4.6,
    },
    {
      id: 49,
      name: "Chocolate Milk",
      image: "https://example.com/images/chocolate-milk.jpg",
      price: 2.69,
      description: "Creamy chocolate milk, a tasty treat.",
      rating: 4.7,
    },
    {
      id: 50,
      name: "Butter Lettuce",
      image: "https://example.com/images/butter-lettuce.jpg",
      price: 1.99,
      description: "Tender butter lettuce, great for salads and wraps.",
      rating: 4.8,
    }
  ];

  export default groceryItems;