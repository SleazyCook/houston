// This file is strictly for the controls on the Restaurant page
const buttonData = [
    {
      label: 'All',
      title: 'All Restaurants',
      value: 'food',
      img: 'https://i.imgur.com/VrrbAR3.png',
      description: "Houston’s culinary scene is a vibrant blend of flavors from around the world. From sizzling Tex-Mex to authentic Vietnamese pho, you’ll find something to satisfy every craving. Local chefs embrace diverse cultures and unique ingredients, creating dishes that are both innovative and comforting. Whether you're in the mood for fine dining or casual bites, Houston's restaurants never disappoint with their variety and bold tastes."
    },
    {
      label: 'Bakeries',
      value: 'bakery',
      img: 'https://i.imgur.com/VODXZX1.png',
      description: "Houston’s bakeries are a sweet reflection of the city’s cultural diversity and culinary creativity. From flaky French croissants to fluffy tres leches cakes and kolaches packed with Texas flair, each treat tells a story. Local bakers blend traditional techniques with bold flavors, offering everything from artisan sourdough to mochi donuts. Whether you’re after a cozy neighborhood café or a standout pastry shop, Houston serves up baked goods that are as memorable as they are delicious."
    },
    {
      label: 'BBQ',
      value: 'bbq',
      img: 'https://i.imgur.com/Hd4m9tA.png',
      description: "Houston’s BBQ scene is a true Texas treasure, offering a mouthwatering array of smoky, tender meats. From slow-cooked brisket to savory ribs, every bite is packed with flavor. Local spots like Triple J's Smokehouse and Gatlin's BBQ showcase regional techniques, blending wood and spices for that perfect charred finish. Whether you prefer it tangy or with a spicy kick, Houston’s BBQ never disappoints."
    },
    {
      label: 'Burgers',
      value: 'burgers',
      img: 'https://i.imgur.com/UQw5V20.png',
      description: "Houston’s burger scene is as bold and diverse as the city itself. From classic cheeseburgers to gourmet creations with unique toppings, local spots like The Burger Joint and Lankford Grocery serve up some of the best bites in town. Whether you crave a juicy patty stacked high with fresh ingredients or a creative twist on the classic, Houston’s burgers are always satisfying."
    },
    {
      label: 'Burritos',
      value: 'burritos',
      img: 'https://i.imgur.com/vJRLz2q.png',
      description: "Houston's burrito scene blends Tex-Mex tradition with bold, global influences—think brisket-stuffed wraps, kimchi additions, and breakfast burritos that pack a punch. From food trucks to taquerías, the city serves burritos that are hearty, inventive, and unmistakably Houston."
    },
    {
      label: 'Breakfast',
      value: 'breakfast',
      img: 'https://i.imgur.com/uRCxldb.png',
      description: "Houston’s breakfast scene offers a delicious variety to start your day right. From classic Texas-style breakfast tacos to fluffy pancakes and savory biscuits, local favorites like Baby Barnaby's and The Breakfast Klub serve up hearty, flavorful dishes. Whether you're in the mood for a quick bite or a leisurely brunch, Houston's breakfast spots offer something for every taste and every morning craving."
    },
    {
      label: 'Chicken',
      title: 'Fried Chicken & Wings',
      value: 'chicken',
      img: 'https://i.imgur.com/pcpFRIn.png',
      description: "Houston’s fried chicken and wing scene is a flavorful mix of crispy perfection and bold spices. Whether you’re craving classic Southern fried chicken or tangy buffalo wings, local favorites like Frenchy’s and The Wing Boss deliver mouthwatering bites. With crispy coatings, juicy meat, and a variety of sauces, Houston’s chicken spots are sure to satisfy any craving for crispy, savory goodness."
    },
    {
      label: 'Crawfish',
      value: 'crawfish',
      img: 'https://i.imgur.com/zdZ1s6B.png',
      description: 'In Houston, crawfish season typically starts in late winter, around February or March, and continues through early summer, usually ending in June or July. The peak season, when crawfish are at their biggest and most flavorful, is generally from March to May. Order these spicy mudbugs by the pound with seasoned butter, potatoes and corn.'
    },
    {
      label: 'Dessert',
      value: 'dessert',
      img: 'https://i.imgur.com/hBs26Dr.png',
      description: "Houston’s dessert scene is a sweet treat for every craving. From decadent chocolate cakes to creamy pies, local spots like House of Pies and Common Bond Bakery offer indulgent delights. With unique twists on classics and fresh, local ingredients, Houston’s desserts satisfy every sweet tooth, making it a must-visit for dessert lovers."
    },
    {
      label: 'Dumplings',
      value: 'dumplings',
      img: 'https://i.imgur.com/ydkrUFi.png',
      description: "Houston’s dumpling scene is a fusion of flavor and tradition. Whether you’re craving Chinese potstickers, Japanese gyoza, or Korean mandu, places like Dumpling Haus and The Dumpling King serve up delicious, handcrafted bites. With tender wrappers and savory fillings, Houston’s dumplings offer a satisfying taste of diverse culinary cultures."
    },
    {
      label: 'Hotdogs',
      value: 'hotdogs',
      img: 'https://i.imgur.com/RopOANW.png',
      description: "Houston’s hot dog and Korean corn dog scene is a mix of classic and creative flavors. From traditional all-beef dogs at local favorites like Midwest Coney Connection to the crispy, cheesy Korean corn dogs at places like Two Hands, there's something for every craving. With unique toppings and innovative twists, these bites are a must-try for street food enthusiasts."
    },
    {
      label: 'Pasta',
      value: 'pasta',
      img: 'https://i.imgur.com/NQnVVrW.png',
      description: ""
    },
    {
      label: 'Pho',
      value: 'pho',
      img: 'https://i.imgur.com/jYWMhf4.png',
      description: "Houston’s pho scene is a flavorful journey through rich broths and tender meats. Local spots like Pho Binh and Pho Saigon offer steaming bowls of this Vietnamese classic, with aromatic herbs and fresh ingredients. Whether you're a fan of pho with beef, chicken, or tofu, Houston’s pho will warm your soul with every satisfying slurp."
    },
    {
      label: 'Pizza',
      value: 'pizza',
      img: 'https://i.imgur.com/3ldP3aV.png',
      description: "Houston’s pizza scene is a delicious mix of styles, from Neapolitan to New York-style. Local favorites like Pizaro’s and The Original Italian Pie serve up mouthwatering pies with crispy crusts, fresh toppings, and rich sauces. Whether you prefer a classic Margherita or a creative topping combination, Houston's pizzerias have something to satisfy every pizza lover."
    },
    {
      label: 'Ramen',
      value: 'ramen',
      img: 'https://i.imgur.com/gHZfdBT.png',
      description: "Houston’s ramen scene is a flavorful adventure for noodle lovers. With spots like Ramen Tatsu-ya and Kokoro Ramen serving up rich broths and perfectly cooked noodles, the city offers an array of options for every taste. From spicy miso to savory tonkotsu, Houston’s ramen will leave you slurping and savoring every bite."
    },
    {
      label: 'Rice Bowl',
      title: 'Rice & Noodles',
      value: 'rice',
      img: 'https://i.imgur.com/GOy3BqA.png',
      description: "Houston’s rice and noodle dishes are a vibrant blend of flavors, from the savory stir-fries of Indian Chinese to the fresh pho noodles of Vietnam. Local spots like Bombay Sweets and Pho 24 offer an array of delicious options—whether it's fragrant fried rice, spicy schezwan noodles, or delicate vermicelli. These dishes are a perfect mix of bold spices, fresh ingredients, and satisfying textures."
    },
    {
      label: 'Salads',
      value: 'salads',
      img: 'https://i.imgur.com/888rMoY.png',
      description: "Houston’s salad offerings are far from boring, featuring fresh Gulf seafood, smoked meats, and international dressings that reflect the city’s diverse flavors. Whether at a health-focused café or upscale bistro, salads here balance crunch, color, and creativity."
    },
    {
      label: 'Sandwiches',
      value: 'sandwiches',
      img: 'https://i.imgur.com/OiGaE5C.png',
      description: "Houston’s sandwich scene is a flavorful mix of classic and creative options. From juicy burgers at spots like The Burger Joint to authentic po'boys at The Original Po'Boy Factory, the city offers a variety of hearty, satisfying bites. Whether you crave a tender brisket sandwich or a unique twist on a classic, Houston's sandwich shops deliver bold flavors and fresh ingredients."
    },
    {
      label: 'Seafood',
      value: 'seafood',
      img: 'https://i.imgur.com/69ms5xi.png',
      description: "Houston’s seafood scene is a feast for the senses, offering everything from crispy fried shrimp to flavorful boiled crawfish. Local favorites like The Boiling Crab and Pappadeaux’s serve up fresh catches with bold seasonings and mouthwatering sauces. Whether you’re in the mood for fried catfish, spicy crab legs, or grilled oysters, Houston’s seafood spots deliver savory, ocean-fresh goodness."
    },
    {
      label: 'Soup',
      value: 'soup',
      img: 'https://i.imgur.com/ymyN9gF.png',
      description: ""
    },
    {
      label: 'Steakhouses',
      value: 'steak',
      img: 'https://i.imgur.com/pnayRwZ.png',
      description: "Houston’s steakhouses serve up tender, perfectly cooked cuts of meat in a range of styles. Iconic spots like Pappas Bros. Steakhouse and Brennan’s of Houston offer rich, juicy steaks with top-notch sides and an upscale atmosphere. Whether you’re craving a classic ribeye or a sizzling filet mignon, Houston’s steakhouses deliver a memorable dining experience for any steak lover."
    },
    {
      label: 'Sushi',
      value: 'sushi',
      img: 'https://i.imgur.com/eVvDrQl.png',
      description: "Houston’s sushi scene is a fresh and flavorful experience, blending traditional and innovative creations. Popular spots like Sushi Raku and Nobu serve up expertly crafted rolls, sashimi, and nigiri with high-quality fish. Whether you prefer classic tuna or adventurous specialty rolls, Houston’s sushi restaurants offer a perfect balance of freshness and creativity."
    },
    {
      label: 'Tacos',
      value: 'tacos',
      img: 'https://i.imgur.com/QognkLZ.png',
      description: "Houston’s taco scene is a delicious fusion of flavors, from traditional Mexican tacos to creative fusion bites. Local favorites like Velvet Taco and Taqueria El Costeño offer everything from juicy al pastor to flavorful fish tacos. With fresh tortillas, bold salsas, and unique fillings, Houston’s tacos are a must-try for any taco lover."
    },
    {
      label: 'Upscale',
      value: 'upscale',
      img: 'https://i.imgur.com/kJEzg3X.png',
      description: "Houston’s upscale restaurant scene is a culinary delight, offering fine dining experiences with world-class flavors. Renowned spots like Brennan’s of Houston and Taste of Texas serve exquisite dishes, from perfectly seared steaks to inventive seafood creations. With elegant atmospheres and exceptional service, these restaurants offer a refined dining experience that’s perfect for special occasions."
    },
    {
      label: 'Food Halls',
      value: 'halls',
      img: 'https://i.imgur.com/0PuUgm6.png',
      description: "Houston’s food halls are a culinary paradise, offering diverse flavors all in one place. With spots like POST Houston and Finn Hall, you can sample everything from Thai street food to Korean BBQ and Mexican tacos. Whether you're craving a quick bite or a leisurely meal, these vibrant spaces, featuring local vendors and craft drinks, deliver a tasty experience for every palate."
    }
]

export default buttonData;