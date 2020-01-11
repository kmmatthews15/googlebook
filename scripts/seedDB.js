const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
   {
         title: "The Hunger Games",
         authors: ["Suzanne Collins"],
         description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
         image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
         link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
         date: new Date(Date.now())
   },
   {
      title: "JavaScript & jQuery: The Missing Manual",
      authors: "David Sawyer McFarland",
      description: "JavaScript lets you supercharge your HTML with animation, interactivity, and visual effects—but many web designers find the language hard to learn. This easy-to-read guide not only covers JavaScript basics, but also shows you how to save time and effort with the jQuery and jQuery UI libraries of prewritten JavaScript code. You’ll build web pages that feel and act like desktop programs—with little or no programming. The important stuff you need to know: Pull back the curtain on JavaScript. Learn how to build a basic program with this language. Get up to speed on jQuery. Quickly assemble JavaScript programs that work well on multiple web browsers. Transform your user interface. Learn jQuery UI, the JavaScript library for interface features like design themes and controls. Make your pages interactive. Create JavaScript events that react to visitor actions. Use animations and effects. Build drop-down navigation menus, pop-ups, automated slideshows, and more. Collect data with web forms. Create easy-to-use forms that ensure more accurate visitor responses. Practice with living examples. Get step-by-step tutorials for web projects you can build yourself.",
      image: "http://books.google.com/books/content?id=ptiYBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      link: "https://play.google.com/store/books/details?id=ptiYBAAAQBAJ&source=gbs_api"
   },
]

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });