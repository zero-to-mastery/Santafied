//theRecipes.js
/*
   List of all recipes
   renders with the use of recipeCard.js
*/

var listOf = [
  /* Recipes */
  {
    id: "gingerbread-men",
    name: "Gingerbread Men",
    description:
      "The Hummingbird Bakery gingerbread man recipe makes delicious little gingerbread men every time. " +
      "Let's get cracking! A good gingerbread men recipe is essential to any family recipe collection. " +
      "And this one is a great addition to your cohort. To make this gingerbread men recipe, " +
      "you don’t have to use a gingerbread man shaped cookie cutter if you don’t fancy, " +
      "but it’s so much fun to decorate each one individually, giving each a different outfit and facial expression as you go!",
    summary: [
      {
        makes: "24",
        prep: "30 min",
        cooking: "15 min",
        skill: "Easy"
      }
    ],
    img:
      "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/10/The-Hummingbird-Bakery-gingerbread-man-recipe-620x408.jpg",
    link:
      "https://www.goodtoknow.co.uk/recipes/the-hummingbird-bakery-gingerbread-men#Vvvgi2EtHPFD4wm7.99"
  },
  {
    id: "christmas-pudding-cupcakes",
    name: "Christmas Pudding Cupcakes",
    description:
      "Bake these cute little Christmas pudding cupcakes to give as festive gifts – the combination of green, " +
      "red and white fondant makes them extra special. If you’re looking for a fun festive bake, these Christmas pudding cupcakes are what you’re after! " +
      "Make sure you soak your dried fruit the night before for a really Christmassy bake, otherwise you’ll definitely miss out on some of the flavour!",
    summary: [
      {
        makes: "12",
        prep: "20 min",
        cooking: "30 min",
        skill: "Easy"
      }
    ],
    img:
      "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2016/12/Christmad-pud-cupcakes-620x408.jpg",
    link:
      "https://www.goodtoknow.co.uk/recipes/christmas-pudding-cupcakes#PwJkQP2j3Os7ShEV.99"
  },
  {
    id: "snowman-biscuits",
    name: "Snowman Biscuits",
    description:
      "Get little ones to help decorate these festive snowman biscuits. " +
      "You can bake and freeze the biscuits ahead, then bring them out for a winter’s day activity",
    summary: [
      {
        makes: "20",
        prep: "60 min",
        cooking: "14 min",
        skill: "Easy"
      }
    ],
    img:
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/10/snowman-biscuits.jpg",
    link:
      "https://www.bbcgoodfood.com/recipes/snowman-biscuits"
  },
  {
    id: "caramel-pecan-brownie-trifles",
    name: "Caramel Pecan Brownie Trifles",
    description:
      "Caramel sauce and brownie bits are the stars of this irresistibly gooey trifle. " +
      " It's the pecan garnish that makes this recipe truly beautiful though—along with those adorable, individual trifle bowls.",
    summary: [
      {
        makes: "10",
        prep: "40 min",
        cooking: "30 min",
        skill: "Easy"
      }
    ],
    img:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/caramel-pecan-brownie-trifle-recipes-1565897633.jpg",
    link: "https://celebratingsweets.com/caramel-pecan-brownie-trifles/"
  },
  {
    id: "christmas-linzer-cookies",
    name: "Christmas Linzer Cookies",
    description:
      "They got sugar, they got jam and are fun to make! Not to forget",
    summary: [
      {
        makes: "20+",
        prep: "60 min",
        cooking: "10-15 min",
        skill: "Medium"
      }
    ],
    img:
      "https://www.anasbakingchronicles.com/wp-content/uploads/2018/11/Linzers-blog4-1-of-1.jpg",
    link: "https://www.laurainthekitchen.com/recipes/linzer-cookies/"
  },
  {
    id: "honey-spice-cookies",
    name: "Honey and Spice Cookies",
    description:
      "More than just gingerbread, these Christmas cookies have our special festive spice mix and are dipped in dark chocolate. Get the kids involved in baking them",
    summary: [
      {
        makes: "35+",
        prep: "30 min",
        cooking: "12 min",
        skill: "Easy"
      }
    ],
    img:
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/12/spiced-biscuits.jpg?itok=b032mBjw",
    link: "https://www.bbcgoodfood.com/recipes/honey-spice-cookies"
  },
  {
    id: "potato-candy",
    name: "Potato Candy",
    description:
      "This holiday treat is traditionally enjoyed in the Appalachian region of the United States." +
      "Potatoes may seem like a strange ingredient for a candy, but in this case the potatoes work to " +
      "create a perfectly textured dough. If you love soft treats like fudge, you're sure to enjoy this recipe! ",
    summary: [
      {
        makes: "40 slices",
        prep: "2 hrs 30 min",
        cooking: "20 min",
        skill: "Easy"
      }
    ],
    img:
      "https://sugarspunrun.com/wp-content/uploads/2018/11/How-to-make-Potato-Candy-1-of-1-2-500x500.jpg",
    link: "https://sugarspunrun.com/potato-candy/"
  },
  {
    id: "vegan-pecan-pie",
    name: "Vegan Friendly Pecan Pie",
    description:
      "Delicious pie for all the vegans out there or for those who want to try something different!",
    summary: [
      {
        makes: "1 pie",
        prep: "30 min",
        cooking: "35 min",
        skill: "Easy"
      }
    ],
    img:
      "https://images.unsplash.com/photo-1546024664-9226c2d3819b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1017&q=80",
    link: "https://chocolatecoveredkatie.com/2017/12/11/vegan-pecan-pie-recipe/"
  },
  {
    id: "green-bean-cake",
    name: "Green Bean Cake Pie",
    description:
      "Green bean cake is a soft, supple and deliciously nutritious cake. The feeling of eating will melt in your mouth with a rich sweetness.",
    summary: [
      {
        makes: "1 pie",
        prep: "30 min",
        cooking: "35 min",
        skill: "Easy"
      }
    ],
    img:
      "https://images.unsplash.com/photo-1546024664-9226c2d3819b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1017&q=80",
    link:
      "https://www.vietvisiontravel.com/wp-content/uploads/2016/05/banh-da-lon-pig-skin-pie1.jpg"
  },
  {
    id: "banh-cam-cake",
    name: "Banh Cam Cake Pie",
    description:
      "Banh Cam is delicious and crunchy, with bean paste inside and sesame seeds on the outside, which makes it feel good to eat.",
    summary: [
      {
        makes: "1 pie",
        prep: "30 min",
        cooking: "35 min",
        skill: "Easy"
      }
    ],
    img:
      "https://trancongchau.vn/images/am-thuc-viet-nam/2015/302-nhung-mon-banh-dac-san-cua-mien-tay-song-nuoc-1.jpg",
    link:
      "https://trancongchau.vn/images/am-thuc-viet-nam/2015/302-nhung-mon-banh-dac-san-cua-mien-tay-song-nuoc-1.jpg"
  },
  {
    id: "banh-my-cake",
    name: "Banh My Cake Pie",
    description:
      "Banh My is a popular Vietnamese special cake with ingredients including meat, meat pate, vegetables, " +
      "fruits, etc. If you come to Vietnam, don't miss it once in your life to enjoy it.",
    summary: [
      {
        makes: "1 pie",
        prep: "30 min",
        cooking: "20 min",
        skill: "Easy"
      }
    ],
    img: "http://vinhthuan.com/upload//image/banh-mi-viet-nam.jpg",
    link: "http://vinhthuan.com/upload//image/banh-mi-viet-nam.jpg"
  },
  {
    id: "banh-xoai-cake",
    name: "Banh Xoai Cake Pie",
    description:
      "Mango cake is cooked from ripe mangoes and dried, " +
      " when eaten, it will create a sweet and sour feeling",
    summary: [
      {
        makes: "1 pie",
        prep: "30 min",
        cooking: "20 min",
        skill: "Easy"
      }
    ],
    img: "http://gl.amthuc365.vn/uploads/i/Tin_Tuc/2015/15-7/0abanhxoai15.jpg",
    link: "http://gl.amthuc365.vn/uploads/i/Tin_Tuc/2015/15-7/0abanhxoai15.jpg"
  },
  {
    id: "fish-soup",
    name: "Fishermans soup",
    description:
      "This hearty fish soup was originally prepared by fishermen along the banks of the Danube and Tisza " +
      "Rivers, but has since become one of the most popular Christmas Eve dishes in Hungary.",
    summary: [
      {
        makes: "4",
        prep: "20 min",
        cooking: "1hr 40 min",
        skill: "Easy"
      }
    ],
    img:
      "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/Halaszle-%28fishermans-soup%29.jpg?itok=LCVaMrbr&mtime=1386214655",
    link: "https://www.sbs.com.au/food/recipes/fishermans-soup-halaszle"
  },
  {
    id: "heavenly-hash",
    name: "Heavenly Hash",
    description:
      "An easy holiday fruit salad that comes from an old family recipe. " +
      "This delicious fruit salad is just so easy to make. You can make it a day ahead of time " +
      "to let the fruit juices mix together with the whipped cream, but it also takes " +
      "great if you just whipped it up before setting it on the table.",
    summary: [
      {
        makes: "10-12 servings",
        prep: "5 min",
        cooking: "5 min",
        skill: "Easy"
      }
    ],
    img:
      "https://thetiptoefairy.com/wp-content/uploads/2013/11/heavenly-hash-label.jpg",
    link: "https://thetiptoefairy.com/holiday-recipes-heavenly-hash/"
  },
  {
    id: "holiday-fruitcake",
    name: "Holiday Fruitcake",
    description:
      "Fabulous holiday fruitcake! With dates, raisins, walnuts, glazed cherries, and orange zest. " +
      "Perfect for Christmas celebrations.",
    summary: [
      {
        makes: "1 loaf",
        prep: "15 mins",
        cooking: "2 hrs",
        skill: "Easy"
      }
    ],
    img:
      "https://www.simplyrecipes.com/wp-content/uploads/2007/11/holiday-fruitcake-horiz-a-1600.jpg",
    link: "https://www.simplyrecipes.com/recipes/patricias_holiday_fruitcake/"
  },
  {
    id: "reindeer-food",
    name: "Reindeer Food",
    description:
      "Reindeer food (also sometimes called magic reindeer food or magic reindeer dust) is for Santa's reindeer. After all, they get hungry on Christmas Eve, too. The theory behind the magic dust is that if it's sprinkled outside your house, the starlight shining on the sugar will guide the reindeer to you for their present drop and give them a munch of oats to keep up their stamina for the next stop on their journey.",
    summary: [
      {
        makes: "6 Servings",
        prep: "15 mins",
        cooking: "40 mins",
        skill: "Easy"
      }
    ],
    img:
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/10/reindeer-food.jpg?itok=lMTKFQGF",
    link: "https://www.bbcgoodfood.com/recipes/reindeer-food"
  },
  {
    id: "pecan-rolls",
    name: "Overnight Caramel Pecan Rolls",
    description:
      "These are easy and very good! " +
      "They can be made and then cooked in the morning and make great hot rolls for special mornings (like Christmas) " +
      "Everyone will think that you got up very early to make these rolls because they are hot in the morning!  ",
    summary: [
      {
        makes: "12",
        prep: "1 Hour 30 mins",
        cooking: "30 min",
        skill: "Easy"
      }
    ],
    img:
      "https://images.media-allrecipes.com/userphotos/720x405/6173565.jpg",
    link:
      "https://www.allrecipes.com/recipe/24574/overnight-caramel-pecan-rolls/?internalSource=rotd&referringId=945&referringContentType=Recipe%20Hub"
  },
  {
    id: "puff-pastry",
    name: "Savory Puff Pastry Christmas Tree",
    description:
      "Fun and easy to make, this savory puff pastry Christmas tree is filled with a combination of creamy goat cheese and sun-dried tomato pesto. " +
      "It's so much easier to make than it looks and is guaranteed to get lots of oohs and aahs from guests!  ",
    summary: [
      {
        makes: "1",
        prep: "35 min",
        cooking: "20 min",
        skill: "Easy"
      }
    ],
    img:
      "https://images.media-allrecipes.com/userphotos/720x405/4594095.jpg",
    link:
      "https://www.allrecipes.com/recipe/261802/savory-puff-pastry-christmas-tree/?internalSource=staff%20pick&referringId=932&referringContentType=Recipe%20Hub"
  },
  {
    id: "Bibingka",
    name: "Bibingka",
    description:
      "Bibingka is a type of rice cake native to the Philippines. This is traditionally made from galapong (milled glutinous rice), coconut milk, margarine, and sugar. During dawn masses on Christmas season, side street vendors are a common sight preparing and selling this delicious rice cake along with 'puto bumbong'" +
      "The traditional way of cooking Bibingka is unique and quite time consuming. The mixture is poured on a clay pot lined with pre-cut banana leaf. A special clay oven known as “Bibingka oven” is needed to bake this rice cake. The clay pot is placed between the layers of the Bibingka oven and lit charcoals (locally known as 'uling') are placed below and above the clay pot to evenly cook the mixture",
    summary: [
      {
        makes: "1",
        prep: "10 min",
        cooking: "35 min",
        skill: "Easy"
      }
    ],
    img:
      "https://panlasangpinoy.com/wp-content/uploads/2011/10/bibingka-Front-360x361.jpg",
    link:
      "https://panlasangpinoy.com/rice-cake-bibingka-recipe/"
  },
  {
    id: "Eggnog",
    name: "Eggnog",
    description:
      "Eggnog is a classic holiday drink made of cream, milk, egg whites, and sometimes bourbon ;)" +
      "Combine and beat ingredients together until smooth. Serve chilled.",
    summary: [
      {
        makes: "8",
        prep: "10 min",
        cooking: "none",
        skill: "Easy"
      }
    ],
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eggnog2.jpg/400px-Eggnog2.jpg",
    link:
      "https://www.jamieoliver.com/features/best-eggnog-recipe/"
  },
  {
    id: "russian-tea-cake",
    name: "Russian Tea Cake or Mexican Wedding Cookie",
    description:
      "My family's favorite christmas cookie! Light, sweet, full of nuts and coated in powdered sugar.",
    summary: [
      {
        makes: "36",
        prep: "15 min",
        cooking: "12 -17 min",
        skill: "Easy"
      }
    ],
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Russianteacakes.jpg/600px-Russianteacakes.jpg",
    link:
      "https://joyofbaking.com/Mexican%20Wedding%20Cakes.html"
  },
  {
    id: "hot-crossbuns",
    name: "Hot Crossbuns",
    description:
      "A classic British breakfast bun, tender dough is loaded with diced apple, raisins, citrus zest, cinnamon and currants. After rising and formed into balls, it rises once more then a flour and water paste gets piped across the top of the dough before baking to form the perfect looking Hot Cross Buns. Once baked the buns are glazed with an apricot jam and are ready to eat.",
    summary: [
      {
        makes: "16",
        prep: "20 min",
        cooking: "20 min",
        skill: "Easy"
      }
    ],
    img:
      "https://foodnessgracious.com/wp-content/uploads/2013/03/hot-cross-buns2-085.jpg",
    link:
      "https://www.allrecipes.com/recipe/7073/hot-cross-buns-i/"
  },
  {
    id: "Puto-Bumbong",
    name: "Puto-Bumbong",
    description:
      "Puto bumbong is a type of Filipino purple rice cake which is prepared by steaming ground purple rice mixture inside a bamboo tube. The tube is referred to as “bumbong ng kawayan” in Filipino. This might have been the reason why this was named as such.",
    summary: [
      {
        makes: "6",
        prep: "2 days",
        cooking: "3 min",
        skill: "Easy"
      }
    ],
    img:
      "https://panlasangpinoy.com/wp-content/uploads/2017/12/Puto-Bumbong.jpg",
    link:
      "https://panlasangpinoy.com/puto-bumbong-recipe/"
  },
  {
    id: "panettone",
    name: "Panettone",
    description:
      "Italian Christmas bread, with a brioche-like dough infused with a vanilla bean and studded with rum-soaked raisins and candied orange peel.",
    summary: [
      {
        makes: "12 servings",
        prep: "1 hour",
        cooking: "1 hour",
        skill: "Easy"
      }
    ],
    img:
      "https://www.ilgiornaledelcibo.it/wp-content/uploads/2017/12/panettoni-artigianali.jpg",
    link:
      "https://www.browneyedbaker.com/panettone-recipe/"
  },
  //
  {
    id: "salpicao-de-frango",
    name: "Salpicao Simples de Frango - Easy Brazilian Chicken Salad",
    description:
      "A Brazilian version of Chicken Salad. This refreshing salad can be enjoyed with white rice, as main or side dish. Salpicao de frango is a very popular dish in Brazil during Christmas time. Enjoy!",
    summary: [
      {
        makes: "8 Portions",
        prep: "20 Min",
        cooking: "15 min",
        skill: "Easy"
      }
    ],
    img:
      "https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_581,h_327/v1/img/recipes/10/79/14/picozfR1g.jpg",
    link:
      "https://www.food.com/recipe/brazilian-chicken-salad-aka-salpicao-especial-de-galinha-107914"
  },
  //
  {
    id: "spinach",
    name: "Spinach Phyllo Roll-Ups",
    description:
      "Keep Make-Ahead Spinach Phyllo Roll-Ups in the freezer and pop one in the oven for a quick appetizer later. These spinach phyllo roll-ups are delicious.",
    summary: [
      {
        makes: "6 servings",
        prep: "25 Min",
        cooking: "40 hour",
        skill: "Easy"
      }
    ],
    img:
      "https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/image/kraft/athenos/420/Make-Ahead-Spinach-Phyllo-RollUps_420.jpg?itok=sqI-LwbD",
    link:
      "https://www.myfoodandfamily.com/recipe/062581/make-ahead-spinach-phyllo-roll-ups?categoryid=734"
  },
  {
    id: "yorkshire-pudding",
    name: "Yorkshire Pudding",
    description:
      "Yorkshire pudding and prime rib go together like cookies and milk, especially on Christmas. And with just four ingredients and in only 30 minutes, you'll have a delicious side dish made, grand and burnished like a crown.",
    summary: [
      {
        makes: "6 servings",
        prep: "10 Min",
        cooking: "20 hour",
        skill: "Easy"
      }
    ],
    img:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/6/19/1/BW2D14_Yorkshire-Pudding_s4x3.jpg.rend.hgtvcom.826.620.suffix/1403627915429.jpeg",
    link:
      "https://www.foodnetwork.com/recipes/tyler-florence/yorkshire-pudding-recipe-1943597"
  },
  {
    id: "ham-puff-pastry",
    name: "Christmas Ham Wrapped in Puff Pastry",
    description:
      "A riff on the iconic glazed ham covered with pineapple rings and cherries, this showstopping main course offers flaky pastry and salty ham topped with sweet pineapple sauce in every slice.",
    summary: [
      {
        makes: "14 servings",
        prep: "25 Min",
        cooking: "2 hr 20 min",
        skill: "Easy"
      }
    ],
    img:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/9/8/0/FN_Christmas-Puff-Pastry-Ham-v2-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1504917403503.jpeg",
    link:
      "https://www.foodnetwork.com/recipes/food-network-kitchen/christmas-ham-wrapped-in-puff-pastry-3887317"
  },
  {
    id: "stuffing-bacon",
    name: "Christmas Stuffing with Bacon",
    description:
      "Giada's Christmas stuffing uses two types of rice as an alternative to bread. The pearl onions, Brussels sprouts, hazelnuts and chopped bacon add sweet and savory flavors.",
    summary: [
      {
        makes: "8 servings",
        prep: "30 Min",
        cooking: "1 hr",
        skill: "Easy"
      }
    ],
    img:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/22/1/GH0503H_christmas-stuffing-with-bacon-recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382545867835.jpeg",
    link:
      "https://www.foodnetwork.com/recipes/giada-de-laurentiis/christmas-stuffing-with-bacon-recipe-2048968"
  },
  //
  {
    id: "reindeer-brownies",
    name: "Christmas Reindeer Brownies",
    description:
      "Candy canes, marshmallows and wafer cookies turn fudgy brownies into a festive holiday dessert. These brownies are so easy the kids can help make them!",
    summary: [
      {
        makes: "16 Brownies",
        prep: "30 Min",
        cooking: "1 hr 10 min",
        skill: "Easy"
      }
    ],
    img:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/7/21/4/FNK_Reindeer-Brownies_s4x3.jpg.rend.hgtvcom.966.725.suffix/1470277984103.jpeg",
    link:
      "https://www.foodnetwork.com/recipes/food-network-kitchen/christmas-reindeer-brownies-3561587"
  },
  {
    id: "coquito",
    name: "Coquito",
    description:
      "Tropical coconut eggnog made with spices and white rum. A traditional Puerto Rican holiday beverage. Feliz Navidad!",
    summary: [
      {
        makes: "4 drinks",
        prep: "10 Min",
        cooking: "15 min",
        skill: "Easy"
      }
    ],
    img:
      "https://thenoshery.com/wp-content/uploads/2016/12/Coquito-4.jpg",
    link:
      "https://www.allrecipes.com/recipe/44187/coquito/"
  },
  {
    id: "reindeer-cupcakes",
    name: "Reindeer Cupcakes",
    description:
      "Cute reindeer cupcakes for Christmas that the kids will absolutely adore. These cupcakes are great anytime of year, however, simply skip the reindeer decorating! -rasckus",
    summary: [
      {
        makes: "12 cupcakes",
        prep: "1 hr",
        cooking: "18 mins",
        skill: "Medium"
      }
    ],
    img:
      "https://images.media-allrecipes.com/userphotos/720x405/4561717.jpg",
    link:
      "https://www.allrecipes.com/recipe/260313/christmas-reindeer-cupcakes/?internalSource=staff%20pick&referringId=187&referringContentType=Recipe%20Hub"
  },
  {
    id: "saladg",
    name: "Goat’s cheese, pear & candied pecan salad",
    description:
      "This extra-special vegetarian starter is bursting with contrasting flavours and textures, such as spiralized pear, crunchy roasted nuts and creamy cheese",
    summary: [
      {
        serves: "4",
        prep: "20 mins",
        cooking: "7 mins - 10 mins",
        skill: "Easy"
      }
    ],
    img:
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/goats-cheese-pear-candied-pecan-salad.jpg?itok=crbFk6UI",
    link:
      "https://www.bbcgoodfood.com/recipes/goats-cheese-pear-candied-pecan-salad"
  },
  {
    id: "giant-jam-tart",
    name: "Giant Jam Tart",
    description:
      "This giant jam tart will go down a storm at a party. They're so easy to make, you can bake serveral at once, and get the kids to help you decorate them",
    summary: [
      {
        serves: "6",
        prep: "20 mins",
        cooking: "40 mins",
        skill: "Easy"
      }
    ],
    img:
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/11/jam-tarts.jpg?itok=TjG_K-cw",
    link:
      "https://www.bbcgoodfood.com/recipes/giant-jam-tart"
  },

  {
    id: "keto-cookies",
    name: "5-Ingredient Keto Christmas Cookies",
    description:
      "These keto cookies are for everyone who likes to have a crispy treat with their coffee. They are quick, easy to make and freezable. One cookie contains 25% of your your daily magnesium requirement - a delicious way to beat keto-flu!",
    summary: [
      {
        serves: "12",
        prep: "10 mins",
        cooking: "15 mins",
        skill: "Easy"
      }
    ],
    img:
      "https://files.ketodietapp.com/Blog/files/2016/03/5IngredientKetoChocolateCookies7.jpg",
    link:
      "https://ketodietapp.com/Blog/lchf/5-ingredient-keto-chocolate-cookies"
  },
  {
    id: "roasted-duck",
    name: "Traditional Roasted Duck",
    description:
      "Duck is great to have when I ran late to the store and could not buy the turkey or after I burnt the turkey.",
    summary: [
      {
        serves: "4",
        prep: "20 mins",
        cooking: "30 mins",
        skill: "Intermediate"
      }
    ],
    img:
      "https://www.thespruceeats.com/thmb/iQMW5TDys1o7gewHbxi-tW0h1io=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-893098978-2-5be9b37646e0fb00511182ed.jpg",
    link:
      "https://www.thespruceeats.com/roast-duck-perfect-for-the-holidays-913046"
  },
  {
    id: "peanut-brittle",
    name: "Peanut Brittle",
    description:
      "Peanut brittle is a buttery, crispy treat filled with roasted peanuts. It is the perfect edible gift during Christmas time. If you love crunchy treats, you will definitely love this recipe!",
    summary: [
      {
        serves: "24",
        prep: "10 mins",
        cooking: "35 mins",
        skill: "Easy"
      }
    ],
    img:
      "https://www.dinneratthezoo.com/wp-content/uploads/2018/10/peanut-brittle-2-150x150.jpg",
    link:
      "https://www.dinneratthezoo.com/peanut-brittle"
  },
];
