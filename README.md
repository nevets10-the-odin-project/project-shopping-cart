# Project: Shopping Cart 

https://www.theodinproject.com/lessons/react-new-shopping-cart

---

### Introduction

By now you've come far from your React-baby days. You have tools like routers and testing frameworks under your belt but you still have a long way to go. Now is a great time to put these concepts to use with a classic project - a mock shopping cart.

### Assignment

<div class="lesson-content__panel" markdown="1">

1. Create a new React project.
1. Think about the component and the folder structure. How could you set up your application? Which components or functionalities do you need? It's a good idea to note this down somewhere you can easily get to and refer back and add to it to keep track.
1. You should have at least two pages (a home page and a shop page, which includes your shopping cart). Let the user navigate between the pages with a navigation bar, which will be shown on both pages.
1. To your homepage, you can add whatever you'd like! A few images or information will be totally fine; it doesn't have to be something fancy - it's to test the concepts taught thus far.
1. On the shopping cart page, you should have the same navigation bar that displays the number of items currently in the cart. You should also have a button next to it where you can go to the cart to checkout and pay (however we are not going to implement this logic here).
1. Build individual card elements for each of your products. Display an input field on it, which lets a user manually type in how many items they want to buy. Also, add an increment and decrement button next to it for fine-tuning. You can also display a title for each product as well as an "Add To Cart" button.
1. Fetch your shop items from [FakeStore API](https://fakestoreapi.com) or something similar.
1. Once a user has submitted their order, the amount on the cart itself should adjust accordingly.
1. Clear out any `missing in props validation` errors in your app!
1. Make sure to test your app thoroughly using the React Testing Library. Be careful not to test `react-router-dom` directly, since it is an external library and the developers working on it must have tested the library already.
1. As usual, style your application so you can show it off! You have a host of options provided already.
1. Lastly, it's time to deploy it! Depending on what hosting solution you're using, you may need some additional configuration so that your routing is handled correctly as a single page application (SPA).

---

## Brainstorming

Gonna try CSS Module

### Components
1. Item card
    - Item name, price, image, "Add to cart" button
1. shopping cart
1. Nav bar(?)

### Pages
1. Home page
1. Shop page
1. Shopping cart page
1. Fake checkout page(?)

---

## Post-project Review

This project was a lot like the previous one, Memory Card. The workflow that React uses is really nice to break up bigger components into smaller, encapsulated, pieces. I can just focus on one thing at a time and not worry about some other component breaking.

I like CSS Module. Not having to worry about class names was pretty nice, but I was still finding myself using unique names for the most part since I've gotten used to doing that. I'm also interested in Tailwind, but TOP encourages sticking with writing vanilla CSS by hand while going through the lessons, so I'll probably hold off for now.

The propType functionality was depreciated in React v19, the latest version as of March of 2025, so I didn't end up using it. The React docs just say to use something else like Typescript.