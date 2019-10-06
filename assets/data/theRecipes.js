//theRecipes.js
/*
   List of all recipes 
   renders with the use of recipeCard.js
*/

var listOf = [
  /* Recipes */
  {
    id: 'gingerbread-men',
    name: 'Gingerbread Men',
    description:
      'The Hummingbird Bakery gingerbread man recipe makes delicious little gingerbread men every time. ' +
      "Let's get cracking! A good gingerbread men recipe is essential to any family recipe collection. " +
      'And this one is a great addition to your cohort. To make this gingerbread men recipe, ' +
      'you don’t have to use a gingerbread man shaped cookie cutter if you don’t fancy, ' +
      'but it’s so much fun to decorate each one individually, giving each a different outfit and facial expression as you go!',
    summary: [
      {
        makes: '24',
        prep: '30 min',
        cooking: '15 min',
        skill: 'Easy'
      }
    ],
    img:
      'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/10/The-Hummingbird-Bakery-gingerbread-man-recipe-620x408.jpg',
    linkName: 'goodtoknow.co.uk',
    link:
      'https://www.goodtoknow.co.uk/recipes/the-hummingbird-bakery-gingerbread-men#Vvvgi2EtHPFD4wm7.99'
  },
  {
    id: 'christmas-pudding-cupcakes',
    name: 'Christmas Pudding Cupcakes',
    description:
      'Bake these cute little Christmas pudding cupcakes to give as festive gifts – the combination of green, ' +
      'red and white fondant makes them extra special. If you’re looking for a fun festive bake, these Christmas pudding cupcakes are what you’re after! ' +
      'Make sure you soak your dried fruit the night before for a really Christmassy bake, otherwise you’ll definitely miss out on some of the flavour!',
    summary: [
      {
        makes: '12',
        prep: '20 min',
        cooking: '30 min',
        skill: 'Easy'
      }
    ],
    img:
      'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2016/12/Christmad-pud-cupcakes-620x408.jpg',
    linkName: 'goodtoknow.co.uk',
    link:
      'https://www.goodtoknow.co.uk/recipes/christmas-pudding-cupcakes#PwJkQP2j3Os7ShEV.99'
  },
  {
    id: 'caramel-pecan-brownie-trifles',
    name: 'Caramel Pecan Brownie Trifles',
    description:
      'Caramel sauce and brownie bits are the stars of this irresistibly gooey trifle. ' +
      " It's the pecan garnish that makes this recipe truly beautiful though—along with those adorable, individual trifle bowls.",
    summary: [
      {
        makes: '10',
        prep: '40 min',
        cooking: '30 min',
        skill: 'Easy'
      }
    ],
    img:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/caramel-pecan-brownie-trifle-recipes-1565897633.jpg',
    linkName: 'Celebrating Sweets',
    link: 'https://celebratingsweets.com/caramel-pecan-brownie-trifles/'
  },
  {
    id: 'christmas-linzer-cookies',
    name: 'Christmas Linzer Cookies',
    description:
      'They got sugar, they got jam and are fun to make! Not to forget',
    summary: [
      {
        makes: '20+',
        prep: '60 min',
        cooking: '10-15 min',
        skill: 'Medium'
      }
    ],
    img:
      'https://www.anasbakingchronicles.com/wp-content/uploads/2018/11/Linzers-blog4-1-of-1.jpg',
    linkName: 'laurainthekitchen.com',
    link: 'https://www.laurainthekitchen.com/recipes/linzer-cookies/'
  },
  {
    id: 'potato-candy',
    name: 'Potato Candy',
    description:
      'This holiday treat is traditionally enjoyed in the Appalachian region of the United States.' +
      'Potatoes may seem like a strange ingredient for a candy, but in this case the potatoes work to ' +
      "create a perfectly textured dough. If you love soft treats like fudge, you're sure to enjoy this recipe! ",
    summary: [
      {
        makes: '40 slices',
        prep: '2 hrs 30 min',
        cooking: '20 min',
        skill: 'Easy'
      }
    ],
    img:
      'https://sugarspunrun.com/wp-content/uploads/2018/11/How-to-make-Potato-Candy-1-of-1-2-500x500.jpg',
    linkName: 'sugarspunrun.com',
    link: 'https://sugarspunrun.com/potato-candy/'
  },
  {
    id: 'vegan-pecan-pie',
    name: 'Vegan Friendly Pecan Pie',
    description:
      'Delicious pie for all the vegans out there or for those who want to try something different!',
    summary: [
      {
        makes: '1 pie',
        prep: '30 min',
        cooking: '35 min',
        skill: 'Easy'
      }
    ],
    img:
      'https://images.unsplash.com/photo-1546024664-9226c2d3819b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1017&q=80',
    linkName: 'Chocolate Covered Katie',
    link: 'https://chocolatecoveredkatie.com/2017/12/11/vegan-pecan-pie-recipe/'
  },
  {
    id: 'green-bean-cake',
    name: 'Green Bean Cake Pie',
    description:
      'Green bean cake is a soft, supple and deliciously nutritious cake. The feeling of eating will melt in your mouth with a rich sweetness.',
    summary: [
      {
        makes: '1 pie',
        prep: '30 min',
        cooking: '35 min',
        skill: 'Easy'
      }
    ],
    img:
      'https://images.unsplash.com/photo-1546024664-9226c2d3819b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1017&q=80',
    linkName: 'Green Bean Cake',
    link:
      'https://www.vietvisiontravel.com/wp-content/uploads/2016/05/banh-da-lon-pig-skin-pie1.jpg'
  },
  {
    id: 'banh-cam-cake',
    name: 'Banh Cam Cake Pie',
    description:
      'Banh Cam is delicious and crunchy, with bean paste inside and sesame seeds on the outside, which makes it feel good to eat.',
    summary: [
      {
        makes: '1 pie',
        prep: '30 min',
        cooking: '35 min',
        skill: 'Easy'
      }
    ],
    img:
      'https://trancongchau.vn/images/am-thuc-viet-nam/2015/302-nhung-mon-banh-dac-san-cua-mien-tay-song-nuoc-1.jpg',
    linkName: 'Banh Cam Cake',
    link:
      'https://trancongchau.vn/images/am-thuc-viet-nam/2015/302-nhung-mon-banh-dac-san-cua-mien-tay-song-nuoc-1.jpg'
  },
  {
    id: 'banh-my-cake',
    name: 'Banh My Cake Pie',
    description:
      'Banh My is a popular Vietnamese special cake with ingredients including meat, meat pate, vegetables, ' +
      "fruits, etc. If you come to Vietnam, don't miss it once in your life to enjoy it.",
    summary: [
      {
        makes: '1 pie',
        prep: '30 min',
        cooking: '20 min',
        skill: 'Easy'
      }
    ],
    img: 'http://vinhthuan.com/upload//image/banh-mi-viet-nam.jpg',
    linkName: 'Banh My Cake',
    link: 'http://vinhthuan.com/upload//image/banh-mi-viet-nam.jpg'
  },
  {
    id: 'fish-soup',
    name: 'Fishermans soup',
    description:
      'This hearty fish soup was originally prepared by fishermen along the banks of the Danube and Tisza ' +
      'Rivers, but has since become one of the most popular Christmas Eve dishes in Hungary.',
    summary: [
      {
        makes: '4',
        prep: '20 min',
        cooking: '1hr 40 min',
        skill: 'Easy'
      }
    ],
    img:
      'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/Halaszle-%28fishermans-soup%29.jpg?itok=LCVaMrbr&mtime=1386214655',
    linkName: 'www.sbs.com',
    link: 'https://www.sbs.com.au/food/recipes/fishermans-soup-halaszle'
  },
  {
    id: 'heavenly-hash',
    name: 'Heavenly Hash',
    description:
      'An easy holiday fruit salad that comes from an old family recipe. ' +
      'This delicious fruit salad is just so easy to make. You can make it a day ahead of time ' +
      'to let the fruit juices mix together with the whipped cream, but it also takes ' +
      'great if you just whipped it up before setting it on the table.',
    summary: [
      {
        makes: '10-12 servings',
        prep: '5 min',
        cooking: '5 min',
        skill: 'Easy'
      }
    ],
    img:
      'https://thetiptoefairy.com/wp-content/uploads/2013/11/heavenly-hash-label.jpg',
    linkName: 'thetiptoefairy.com',
    link: 'https://thetiptoefairy.com/holiday-recipes-heavenly-hash/'
  },
  {
    id: 'holiday-fruitcake',
    name: 'Holiday Fruitcake',
    description:
      'Fabulous holiday fruitcake! With dates, raisins, walnuts, glazed cherries, and orange zest. ' +
      'Perfect for Christmas celebrations.',
    summary: [
      {
        makes: '1 loaf',
        prep: '15 mins',
        cooking: '2 hrs',
        skill: 'Easy'
      }
    ],
    img:
      'https://www.simplyrecipes.com/wp-content/uploads/2007/11/holiday-fruitcake-horiz-a-1600.jpg',
    linkName: 'simplyrecipes.com',
    link: 'https://www.simplyrecipes.com/recipes/patricias_holiday_fruitcake/'
  }
];
