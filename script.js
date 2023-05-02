const menu = [
  {
    id: 1,
    category: 'starters',
    image: 'images/beer-cheese-dip.jpg',
    title: 'Beer Cheese Dip with Soft Pretzels',
    description:
      'Creamy cheese dip made with beer and served with soft, warm pretzels for dipping.',
  },

  {
    id: 2,
    category: 'starters',
    title: 'Fried Pickles with Ranch Dressing',
    description:
      'Crispy fried pickles with a tangy ranch dressing for dipping.',
  },

  {
    id: 3,
    category: 'starters',
    title: 'Buffalo Chicken Wings with Blue Cheese Sauce',
    description:
      'Spicy buffalo chicken wings served with a cool and tangy blue cheese sauce.',
  },

  {
    id: 4,
    category: 'starters',
    title: 'BBQ Pulled Pork Sliders with Coleslaw',
    description:
      'Slow-cooked pulled pork in a sweet and smoky BBQ sauce, served on mini buns with a side of tangy coleslaw.',
  },

  {
    id: 5,
    category: 'starters',
    title: 'Charcuterie Board with Assorted Meats, Cheeses, and Crackers',
    description:
      'A selection of cured meats, cheeses, crackers, and accompaniments like olives, nuts, and fruit.',
  },

  {
    id: 6,
    category: 'salads',
    title: 'Classic Caesar Salad with Grilled Chicken',
    description:
      'Crisp romaine lettuce, garlic croutons, and shaved parmesan cheese tossed in a creamy Caesar dressing and topped with grilled chicken.',
  },

  {
    id: 7,
    category: 'salads',
    title: 'Roasted Beet Salad with Goat Cheese and Candied Walnuts',
    description:
      'Roasted beets, creamy goat cheese, and candied walnuts tossed in a honey mustard vinaigrette.',
  },

  {
    id: 8,
    category: 'salads',
    title: 'Cobb Salad with Bacon, Avocado, and Egg',
    description:
      'Mixed greens topped with crispy bacon, avocado, hard-boiled egg, cherry tomatoes, and blue cheese crumbles, served with your choice of dressing.',
  },

  {
    id: 9,
    category: 'salads',
    title: 'Garden Salad with Mixed Greens, Tomatoes, Cucumbers, and Carrots',
    description:
      'A classic salad with mixed greens, cherry tomatoes, cucumbers, shredded carrots, and your choice of dressing.',
  },

  {
    id: 10,
    category: 'mains',
    title: 'Beer-Battered Fish and Chips with Tartar Sauce',
    description:
      'Flaky white fish dipped in a light beer batter and fried until golden brown, served with crispy French fries and homemade tartar sauce.',
  },

  {
    id: 11,
    category: 'mains',
    title: 'Grilled Beer Bratwurst with Sauerkraut and Mustard',
    description:
      'Grilled bratwurst served on a warm bun with tangy sauerkraut and spicy mustard.',
  },

  {
    id: 12,
    category: 'mains',
    title: 'Chicken and Waffles with Honey Butter and Hot Sauce',
    description:
      'Crispy fried chicken served on a fluffy waffle with sweet honey butter and a side of spicy hot sauce.',
  },

  {
    id: 13,
    category: 'mains',
    title: 'Veggie Burger with Avocado, Tomato, and Chipotle Aioli',
    description:
      'A plant-based patty topped with sliced avocado, tomato, and a smoky chipotle aioli, served on a toasted bun.',
  },

  {
    id: 13,
    category: 'mains',
    title: 'Grilled Cheese Sandwich with Tomato Soup',
    description:
      'A classic grilled cheese sandwich made with melty cheese and crispy bread, served with a side of creamy tomato soup for dipping.',
  },

  {
    id: 14,
    category: 'sides',
    title: 'French Fries with Garlic Aioli',
    description:
      'Crispy French fries served with a zesty garlic aioli dipping sauce.',
  },

  {
    id: 15,
    category: 'sides',
    title: 'Onion Rings with Ranch Dressing',
    description:
      'Crispy breaded onion rings served with a cool and creamy ranch dressing for dipping.',
  },

  {
    id: 16,
    category: 'sides',
    title: 'Sweet Potato Fries with Maple Mustard',
    description:
      'Sweet and savory sweet potato fries served with a sweet maple mustard dipping sauce.',
  },

  {
    id: 17,
    category: 'sides',
    title: 'Mac and Cheese with Bacon Crumbles',
    description:
      'Creamy mac and cheese made with tender pasta shells and topped with crispy bacon crumbles.',
  },

  {
    id: 18,
    category: 'sides',
    title: 'Grilled Asparagus with Lemon Butter',
    description:
      'Fresh asparagus spears grilled to perfection and served with a tangy lemon butter sauce.',
  },

  {
    id: 19,
    category: 'desserts',
    title: 'Chocolate Stout Cake with Whipped Cream',
    description:
      'Rich chocolate cake made with stout beer and topped with fluffy whipped cream.',
  },

  {
    id: 20,
    category: 'desserts',
    title: 'Apple Pie with Vanilla Ice Cream',
    description:
      'Classic apple pie served warm with a scoop of creamy vanilla ice cream.',
  },

  {
    id: 21,
    category: 'desserts',
    title: 'Brownie Sundae with Hot Fudge and Caramel Sauce',
    description:
      'Fudgy chocolate brownies served with hot fudge and caramel sauce and a scoop of vanilla ice cream.',
  },
];

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function () {
  let displayMenu = menu.map(function (item) {
    return ` <article class="menu-item">
   <div class="item-info">
     <h4 class='item-title'>${item.title}</h4>
     <p class="item-description">${item.description}</p>
   </div>
 </article>`;
  });

  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
});
