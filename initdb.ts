const sql = require('better-sqlite3');

const db = sql('meals.db');

const dummyMeals = [
    {
        title: 'Juicy Cheese Burger',
        slug: 'juicy-cheese-burger',
        image: '/img/cheese-burger.jpg',
        summary: 'A mouth-watering burger with a juicy beef patty and melted',
        instructions: `
        1. Prepare the patty:
           Mix 200g of ground beef with salt and pepper. From into a
        2. Cook the patty:
           Heat a pan with a bit of oil. Cook the patty for 2-3 minutes
        3. Assemble the burger:
           Toast the burger bun halves. Place lettuce and tomato on
        4. Serve:
           Complete the assembly with the top bun and serve hot.
        `,
        creator: 'John Doe',
        creator_email: 'johndoe@example.com',
    },
    {
        title: 'Spicy Curry',
        slug: 'spicy-curry',
        image: '/img/spicy-curry.jpg',
        summary: 'A rich and spicy curry, infused with exotic spices and crea',
        instructions: `
        1. Chop vegetables:
           Cut your choice of vegetables into bite-sized pieces.
        2. Saute vegetables:
           In a pan with oil, saute the vegetables until they start
        3. Add curry paste:
           Stir in 2 tablespoons of curry paste and cook for another
        4. Simmer with coconut milk:
           Pour in 500ml of coconut milk and bring to a simmer. Let
        5. Serve:
           Enjoy this creamy curry with rice or bread.
        `,
        creator: 'Max Schwarz',
        creator_email: 'max@example.com',
    },
    {
        title: 'Homemade Dumplings',
        slug: 'homemade-dumplings',
        image: '/img/dumplings.jpg',
        summary: 'Tender dumplings filled with savory meat and vegetables,',
        instructions: `
        1. Prepare the filling:
           Mix minced meat, shredded vegetables, and spices.
        2. Fill the dumplings:
           Place a spoonful of filling in the center of each dumpling
        3. Steam the dumplings:
           Arrange dumplings in a steamer. Steam for about 10 minutes
        4. Serve:
           Enjoy these dumplings hot, with a dipping sauce of your`,
        creator: 'Emily Chen',
        creator_email: 'emilychen@example.com',
    },
    {
        title: 'Classic Mac n Cheese',
        slug: 'classic-mac-n-cheese',
        image: '/img/mac-n-cheese.jpg',
        summary: 'Creamy and cheesy macaroni, a comforting classic that\'s always',
        instructions: `
        1. Cook the macaroni:
           Boil macaroni according to package instructions until always
        2. Prepare cheese sauce:
           In a saucepan, melt butter, add flour, and gradually whis
        3. Combine:
           Mix the cheese sauce with the drained macaroni.
        4. Bake:
           Transfer to a baking dish, top with breadcrumbs, and bake
        5. Serve:
           Serve hot, garnished with parsley if desired.
        `,
        creator: 'Laura Smith',
        creator_email: 'laurasmith@example.com',
    },
    {
        title: 'Authentic Pizza',
        slug: 'authentic-pizza',
        image: '/img/authentic-pizza.jpg',
        summary: 'Hand-tossed pizza with a tangy tomato sauce, fresh toppings',
        instructions: `
        1. Prepare the dough:
           Knead pizza dough and let it rise until doubled in size.
        2. Shape and add toppings:
           Roll out the dough, spread tomato sauce, and add your favorite
        3. Bake the pizza:
           Bake in a preheated oven at 220C for about 15-20 minutes
        4. Serve:
           Slice hot and enjoy with a sprinkle of basil leaves.
        `,
        creator: 'Mario Rossi',
        creator_email: 'mariorossi@example.com',
    },
    {
        title: 'Wiener Schnitzel',
        slug: 'wiener-schnitzel',
        image: '/img/wiener-schnitzel.jpg',
        summary: 'Crispy, golden-brown breaded veal cutlet, a classic Austria',
        instructions: ``
    }
]

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL)
`).run();

async function initData() {
    const stmt = db.prepare(`
    INSERT INTO meals VALUES (
        null,
        @slug,
        @title,
        @image,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        )`)
}