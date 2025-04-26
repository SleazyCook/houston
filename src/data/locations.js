// Restaurants
// Bars
// Bookstores
// Markets
// Movie Theaters
// Music Venues
// Parks
// Photo Opp
// Unique (nrg, toyota, kemah)


const locations = [
    // Restaurants
    {
        name: 'Wannabao',
        category: 'food',
        subcategory: 'dumplings',
        coordinates: [29.747720290049234, -95.38028603278978],
        neighborhood: 'Midtown',
        img: 'https://i.imgur.com/yzjy5Ek.png',
        website: 'https://wannabao.com/',
        blurb: 'Contemporary, industrial interiors & a menu of Chinese classic dishes, served family-style.',
        description: ['delicious dumplings', 'delicious tea', 'crispy bottom bao']
    },
    {
        name: 'Taste of Korea',
        category: 'food',
        subcategory: 'ricebowl',
        coordinates: [29.997460350283827, -95.19376149496405],
        neighborhood: 'Humble',
        img: 'https://i.imgur.com/vixRkWH.png',
        website: 'https://www.google.com/search?q=taste+of+korea+houston+restaurant&client=opera-gx&hs=1xJ&sca_esv=4aa7399608798402&sxsrf=AHTn8zptgKriNcwjnfSJFGJA5pfFsredLw%3A1745096166437&ei=5g0EaPy7Gta4wN4PuMiVsAc&ved=0ahUKEwj8xuXo_eSMAxVWHNAFHThkBXYQ4dUDCBI&uact=5&oq=taste+of+korea+houston+restaurant&gs_lp=Egxnd3Mtd2l6LXNlcnAiIXRhc3RlIG9mIGtvcmVhIGhvdXN0b24gcmVzdGF1cmFudDIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRirAkiBLFCrBViYK3AIeAGQAQCYAacBoAH6DKoBBDE0LjO4AQPIAQD4AQGYAhmgAuENwgIKEAAYsAMY1gQYR8ICDRAAGLADGNYEGEcYyQPCAg4QABiABBiwAxiSAxiKBcICChAjGIAEGCcYigXCAgsQLhiABBjHARivAcICBhAAGBYYHsICAhAmwgILEAAYgAQYhgMYigXCAggQABiABBiiBMICBRAAGO8FwgIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQHCAgUQABiABMICEBAuGIAEGBQYhwIYxwEYrwHCAhAQLhiABBhDGMcBGIoFGK8BwgIIEAAYgAQYyQPCAgUQIRifBZgDAIgGAZAGCboGBggBEAEYFJIHBDIxLjSgB9iXAbIHBDEzLjS4B8UN&sclient=gws-wiz-serp',
        blurb: 'Casual resource for Korean starters, soups & BBQ plus tempura, wings, shaved ice & mochi.',
        description: ['friendly owner', 'hot stone bowl', 'unreliable hours']
    },
    {
        name: 'Xiaolong Dumpling',
        category: 'food',
        subcategory: 'dumplings',
        coordinates: [29.751968194944496, -95.385205425497],
        neighborhood: 'Fourth Ward',
        img: 'https://i.imgur.com/mL0K4FI.png',
        website: 'https://pos.chowbus.com/online-ordering/store/Xiaolong-Dumpling/14867',
        blurb: 'Opened in 2024, this cozy eatery serves handmade dumplings alongside fiery Sichuan dishes.',
        description: ['friendly staff', 'soup dumplings', 'garlic cucumbers']
    },
    {
        name: 'Mensho',
        category: 'food',
        subcategory: 'ramen',
        coordinates: [29.702776279471518, -95.55277518132357],
        neighborhood: 'Chinatown',
        img: 'https://i.imgur.com/vi8bS5Z.png',
        website: 'https://mensho.com/',
        blurb: 'Creative ramen specialty store',
        description: ['michelin recommended', 'expect a wait', 'Garlic Knock Out']
    },
    {
        name: 'Blue Sushi',
        category: 'food',
        subcategory: 'sushi',
        coordinates: [29.782854094917795, -95.40735213529982],
        img: 'https://i.imgur.com/TI5ybqr.png',
        website: 'https://www.bluesushisakegrill.com/locations/m-k-t-heights',
        blurb: 'Modern, clubby restaurant featuring sushi & Japanese tapas, plus fancy mixed drinks.',
        description: ['sushi rolls', 'sake', 'Godzilla Bomb']
    },
    {
        name: 'The Taco Stand',
        category: 'food',
        subcategory: 'tacos',
        coordinates: [29.80467537187449, -95.40940911953685],
        img: 'https://i.imgur.com/iCIE0bY.png',
        website: 'https://tacostandhtx.com/',
        blurb: 'Casual, modern taco specialist using housemade tortillas, also offering drinks & an all-day menu.',
        description: ['breakfast tacos', 'brisket & egg', 'chorizo & egg']
    },
    {
        name: 'Insomnia Cookies',
        category: 'food',
        subcategory: 'dessert',
        coordinates: [29.717783381639077, -95.41698820235376],
        img: 'https://i.imgur.com/0cyEvM4.png',
        website: 'https://insomniacookies.com/',
        blurb: 'Bakery chain known for warm cookies, ice cream & late-night deliveries.',
        description: ['open late', 'deluxe cookies', 'ice cream']         
    },
    {
        name: 'The Rice Box - Heights',
        category: 'food',
        subcategory: 'ricebowl',
        coordinates: [29.80367761668916, -95.40176409739686],
        img: 'https://i.imgur.com/fBLTpv2.png',
        website: 'https://i.imgur.com/fBLTpv2.png',
        blurb: "Hip outpost offering reinvented Chinese classics such as kung pao chicken and General Tso's chicken.",
        description: ['open late', 'kung pao beef', 'chow fun']
    },
    {
        name: 'The Rice Box - Rice Village',
        category: 'food',
        subcategory: 'ricebowl',
        coordinates: [29.71659805044453, -95.41461404468372],
        img: 'https://i.imgur.com/kac6XNX.png',
        website: 'https://i.imgur.com/fBLTpv2.png',
        blurb: "Hip outpost offering reinvented Chinese classics such as kung pao chicken and General Tso's chicken.",
        description: ['open late', 'kung pao beef', 'chow fun']
    },
    {
        name: "The Monk's - Humble",
        category: 'food',
        subcategory: 'ricebowl',
        coordinates: [30.003620305655076, -95.27773996608327],
        img: 'https://i.imgur.com/X6qqegt.png',
        website: 'https://www.monkshumble.com/',
        description: ['indian', 'very spicy', 'samosas']
    },
    {
        name: 'Betelgeuse Betelgeuse - Washington',
        category: 'food',
        subcategory: 'pizza',
        coordinates: [29.767873715445898, -95.37960345473097],
        img: 'https://i.imgur.com/3EB93eb.png',
        website: 'https://www.betelgeusehou.com/',
        description: ['pizza', 'full bar', 'outdoor seating']
    },
    {
        name: 'Betelgeuse Betelgeuse - Montrose',
        category: 'food',
        subcategory: 'pizza',
        coordinates: [29.73385004922882, -95.3868317708331],
        img: 'https://i.imgur.com/3EB93eb.png',
        website: 'https://www.betelgeusehou.com/',
        description: ['pizza', 'full bar', 'outdoor seating']
    },
    {
        name: "Pepperoni's Pizza - Montrose",
        category: 'food',
        subcategory: 'pizza',
        coordinates: [29.745293850102062, -95.39171676019866],
        img: '',
        website: 'https://www.pepperonis.net',
        blurb: 'Casual pizzeria chain serving wings & New York-style pies, including vegan & gluten-free options.',
        description: ['open late', 'pizza by the slice', 'drive through']
    },
    {
        name: "Nielson's Delicatessen",
        category: 'food',
        subcategory: 'sandwiches',
        coordinates: [29.733001745772487, -95.45125833534226],
        img: 'https://i.imgur.com/2j3MCnc.png',
        website: 'https://www.nielsensdelicatessen.com/',
        description: ['historic', 'fresh sandwiches', 'quality deli meat']
    },
    {
        name: "Portillo's",
        category: 'food',
        subcategory: 'hotdogs',
        coordinates: [29.964633753145392, -95.54078033344278],
        img: '',
        website: '',
        description: ['Chicago Favorite', 'Original Beef', 'Chicago Hotdog']
    },
    {
        name: 'In & Out - Willowbrook',
        category: 'food',
        subcategory: 'burgers',
        coordinates: [29.963688061809677, -95.5421339703664],
        img: '',
        website: '',
        description: ['California Favorite', 'Flying Dutchman w/ Onions', 'Flying Ducthman w/ Tomatoes']
    },
    {
        name: 'Cheba Hut - Lower Heights',
        category: 'food',
        subcategory: 'sanwiches',
        coordinates: [29.77234244004, -95.37822662667772],
        img: '',
        website: '',
        description: ["'Toasted' Subs", 'Open Late', 'Stoner Themed']
    },
    {
        name: 'Blodgett Hall',
        category: 'food',
        subcategory: 'hall',
        coordinates: [29.722847269152375, -95.37002136428438],
        img: '',
        website: '',
        description: ['Food Hall', 'Open Late', 'BYOB']
    },
    {
        name: 'Homeslice',
        category: 'food',
        subcategory: 'pizza',
        coordinates: [29.738749524090423, -95.38015318985526],
        img: '',
        website: '',
        description: ['Austin Favorite', 'Pizza by the Slice', 'Italian Subs']
    },
    {
        name: 'Breakfast Klub',
        category: 'food',
        subcategory: 'breakfast',
        coordinates: [29.73848124453339, -95.38038932724314],
        img: '',
        website: '',
        description: ['Open Early', 'Expect a wait', 'Chicken and Waffles']
    },
    {
        name: 'Iekei',
        category: 'food',
        subcategory: 'sushi',
        coordinates: [29.935672247210096, -95.25000159496145],
        img: '',
        website: '',
        description: []
    },    
    {
        name: "Frank's Pizza",
        category: 'food',
        subcategory: 'pizza',
        coordinates: [29.761548417674607, -95.36217053914736],
        img: '',
        website: '',
        description: ['Historic', 'Pizza by the Slice', 'Open Late']
    },
    {
        name: "Tacos Aracely's",
        category: 'food',
        subcategory: 'tacos',
        coordinates: [29.840820719855106, -95.35421491888364],
        img: '',
        website: '',
        description: ['Delicious Tacos', 'Open Early', 'Mexican Potato w/ Sausage']
    },
    {
        name: "Frenchy's",
        category: 'food',
        subcategory: 'chicken',
        coordinates: [29.723491931484464, -95.35128034035448],
        img: '',
        website: '',
        description: ['Houston Favorite', 'Best Fried Chicken', 'Jalapenos']
    },
    {
        name: 'La Guadalupana',
        category: 'food',
        subcategory: 'tacos',
        coordinates: [29.75397083325556, -95.38335480760226],
        img: '',
        website: '',
        description: ['Breakfast tacos', '', '']
    },
    {
        name: 'Velvet Taco - Heights',
        category: 'food',
        subcategory: 'tacos',
        coordinates: [29.804085974827032, -95.41029345468208],
        img: '',
        website: '',
        description: []
    },
    {
        name: 'Velvet Taco - Washington Ave',
        category: 'food',
        subcategory: 'tacos',
        coordinates: [29.77027627032481, -95.41004657788817],
        img: '',
        website: '',
        description: []
    },
    {
        name: 'Velvet Taco - Rice Village',
        category: 'food',
        subcategory: 'tacos',
        coordinates: [29.717317503095316, -95.41767773335643],
        img: '',
        website: '',
        description: []
    },
    {
        name: 'Velvet Taco - Montrose',
        category: 'food',
        subcategory: 'tacos',
        coordinates: [29.744484475293824, -95.39052608843915],
        img: '',
        website: '',
        description: []
    },
    {
        name: 'Tacodeli',
        category: 'food',
        subcategory: 'tacos',
        coordinates: [29.76797814164908, -95.37732067077975],
        img: '',
        website: '',
        description: ['Austin Favorite', 'Salsa Bar', 'Grab N Go']
    },
    {
        name: 'Poppa Burger',
        category: 'food',
        subcategory: 'burgers',
        coordinates: [29.774259091292073, -95.36036566574973],
        img: '',
        website: '',
        description: ['Open Late', 'Cheap', 'Cash Only']
    },
    {
        name: 'Pluckers - Heights',
        category: 'food',
        subcategory: 'chicken',
        coordinates: [29.773607958972853, -95.40909531330995],
        img: '',
        website: '',
        blurb: 'Sports bar known for its chicken wings',
        description: ['Double fried wings', 'Fried Mozzarella', 'Request WNBA on TV']
    },
    {
        name: 'Iza Robata - Spring',
        category: 'food',
        subcategory: 'sushi',
        coordinates: [30.05598142350976, -95.57291198620665],
        img: '',
        website: '',
        blurb: 'Japanese restaurant that serves authentic and creative Japenese cuisine',
        description: ['Sake bar', '', '']
    },
    {
        name: 'Pok Pok Po',
        category: 'food',
        subcategory: 'chicken',
        coordinates: [29.742582523950063, -95.37996336798173],
        img: '',
        website: '',
        blurb: 'Fried chicken concept serving gluten free, antibiotic free, hormone free, halal chicken',
        description: []
    },
    {
        name: 'Azteca Taco House',
        category: 'food',
        subcategory: 'tacos',
        coordinates: [29.879900615131934, -95.33001824192365],
        img: '',
        website: '',
        blurb: 'Casual eatery specializing in breakfast tacos, carne guisada, and homemade flour tortillas.',
        description: []
    },
    {
        name: "Brother's Pizza Express - Spring",
        category: 'food',
        subcategory: 'pizza',
        coordinates: [30.05201190215551, -95.43342391197649],
        img: '',
        website: '',
        blurb: 'Low-key pizzeria with New York-style pies whole or by the slice, plus calzones, pastas & sandwiches',
        description: ['']
    },
    {
        name: "Brother's Pizza Express - Willowbrook",
        category: 'food',
        subcategory: 'pizza',
        coordinates: [29.958437436159638, -95.56441467471862],
        img: '',
        website: '',
        blurb: 'Mainstay for pizza & other casual Italian-inspired comfort food, including stromboli & calzones',
        description: []
    },
    {
        name: "Yoyo's Hotdog - POST",
        category: 'food',
        subcategory: 'hotdogs',
        coordinates: [29.766272186344448, -95.36461056318291],
        img: '',
        website: '',
        blurb: 'Casual spot serving hot dogs and other quick bites for lunch.',
        description: []
    },
    {
        name: "Yoyo's Hotdog - EaDo",
        category: 'food',
        subcategory: 'hotdogs',
        coordinates: [29.749426924148914, -95.35545770557285],
        img: '',
        website: '',
        blurb: 'Hot dog stand turning out quick bites in a casual atmosphere.',
        description: []
    },
    {
        name: "Yoyo's Hotdog - Washington Ave",
        category: 'food',
        subcategory: 'hotdogs',
        coordinates: [29.770734786401515, -95.40811760984687],
        img: '',
        website: '',
        blurb: 'Hot dog stand turning out quick bites in a casual atmosphere.',
        description: []
    },
    {
        name: 'Fogo de Chão',
        category: 'food',
        subcategory: 'upscale',
        coordinates: [29.738151249900074, -95.51179108918673],
        img: '',
        website: '',
        blurb: "Upscale Brazilian chain for all-you-can-eat meat carved tableside plus an extensive salad bar.",
        description: []
    },
    {
        name: 'Chama Gaúcha',
        category: 'food',
        subcategory: 'upscale',
        coordinates: [29.737575389908308, -95.48292126437322],
        img: '',
        website: '',
        blurb: 'Upscale spot featuring all-you-can-eat tableside-carved Brazilian meat & a global wine list.',
        description: []
    },
    {
        name: 'Zalat - Heights',
        category: 'food',
        subcategory: 'pizza',
        coordinates: [29.803678071023104, -95.4010202575722],
        img: '',
        website: '',
        blurb: 'Order handcrafted, unique-flavored pizzas for delivery or takeout. Open late to satisfy your cravings!',
        description: []
    },
    {
        name: 'Zalat - Washington Ave',
        category: 'food',
        subcategory: 'pizza',
        coordinates: [29.771050199341097, -95.40971992986691],
        img: '',
        website: '',
        blurb: 'Order handcrafted, unique-flavored pizzas for delivery or takeout. Open late to satisfy your cravings!',
        description: []
    },
    {
        name: 'Butter Funk Kitchen',
        category: 'food',
        subcategory: 'chicken',
        coordinates: [29.668880222117025, -95.36784422747914],
        img: '',
        website: 'https://butterfunkhtx.com/',
        blurb: 'Casual place for Southern eats, such as fried ribs, plus daiquiris and other drinks.',
        description: ['Keith Lee approved']
    },
    {
        name: "Layne's Chicken Fingers - Ella Oaks",
        category: 'food',
        subcategory: 'chicken',
        coordinates: [29.81397761857514, -95.42886442694316],
        img: '',
        website: '',
        blurb: '',
        description: []
    },
    {
        name: "Layne's Chicken Fingers - Montrose",
        category: 'food',
        subcategory: 'chicken',
        coordinates: [29.74497821979449, -95.41033020946566],
        img: '',
        website: '',
        blurb: '',
        description: []
    },
    {
        name: 'Snooze, an A.M. Eatery - Heights',
        category: 'food',
        subcategory: 'breakfast',
        coordinates: [29.801592997027548, -95.41029116058527],
        img: '',
        website: '',
        blurb: 'Vibrant, retro chain serving a seasonal menu of creative breakfast & lunch fare, plus cocktails',
        description: []
    },
    {
        name: 'Snooze, an A.M. Eatery - Montrose',
        category: 'food',
        subcategory: 'breakfast',
        coordinates: [29.744047828435875, -95.39075036458118],
        img: '',
        website: '',
        blurb: 'Vibrant, retro chain serving a seasonal menu of creative breakfast & lunch fare, plus cocktails',
        description: []
    },
    {
        name: 'Asia Market Thai Lao Food',
        category: 'food',
        coordinates: [29.79111201462518, -95.37286016530489],
        img: '',
        website: '',
        blurb: 'Established storefront supplying Asian produce & groceries, also serving a Thai lunch & dinner menu.',
        description: ''
    },
    {
        name: 'Flying Biscuit - EaDo',
        category: 'food',
        subcategory: 'breakfast',
        coordinates: [29.758003441874767, -95.34618410261355],
        img: '',
        website: '',
        blurb: 'Branch of a laid-back chain known for Southern food & all-day breakfast selections.',
        description: ['Open early', 'chicken & waffles', 'homemade biscuits']
    },
    {
        name: 'Lyric Market',
        category: 'food',
        subcategory: 'hall',
        coordinates: [29.76310881612258, -95.36456102261619],
        img: '',
        website: 'https://www.lyricmarket.com/',
        blurb: "Houston's most exciting and sophisticated food hall",
        description: []
    },
    {
        name: 'POST Market',
        category: 'food',
        subcategory: 'hall',
        coordinates: [29.766078454632144, -95.36455736258664],
        img: '',
        website: 'https://www.posthtx.com/eat',
        blurb: 'Diner styyle seating and cyberpunk vibes.',
        description: ['shopping', 'eating', 'live performances']
    },
    {
        name: 'Underground Hall',
        category: 'food',
        subcategory: 'hall',
        coordinates: [29.760386415990325, -95.36154140154935],
        img: '',
        website: 'https://www.undergroundhall.com/',
        blurb: 'Casual destination with food vendors doling out global bites, plus draft beer & happy hour specials.',
        description: []
    },
    {
        name: "BB's Tex-Orleans - Ella Oaks",
        category: 'food',
        coordinates: [29.81679853144434, -95.43075744065375],
        img: '',
        website: '',
        blurb: "Local Tex-Orleans chain serving po'boys, gumbo, fried seafood & more in a casual setting.",
        description: []
    },
    {
        name: "BB's Tex-Orleans - Heights",
        category: 'food',
        coordinates: [29.78130193379262, -95.38796849551551],
        img: '',
        website: '',
        blurb: "Local Tex-Orleans chain serving po'boys, gumbo, fried seafood & more in a casual setting.",
        description: []
    },
    {
        name: "BB's Tex-Orleans - Montrose",
        category: 'food',
        subcategory: 'seafood',
        coordinates: [29.74424519171531, -95.38841579865903],
        img: '',
        website: '',
        blurb: "Local Tex-Orleans chain serving po'boys, gumbo, fried seafood & more in a casual setting.",
        description: []
    },
    {
        name: "BB's Tex-Orleans - Richmond Ave.",
        category: 'food',
        subcategory: 'seafood',
        coordinates: [29.733773605120188, -95.4261022899225],
        img: '',
        website: '',
        blurb: "Local Tex-Orleans chain serving po'boys, gumbo, fried seafood & more in a casual setting.",
        description: []
    },
    {
        name: '7Spice',
        category: 'food',
        subcategory: 'seafood',
        coordinates: [29.936995628209772, -95.24866447987408],
        img: '',
        website: '',
        blurb: '',
        description: ''
    },
    {
        name: 'Hippo Burgers - Aldine Mail Rte',
        category: 'food',
        subcategory: 'burgers',
        coordinates: [29.902729653569942, -95.34997206587146],
        img: '',
        website: '',
        blurb: '',
        description: []
    },
    {
        name: 'Lost & Found',
        category: 'food',
        coordinates: [29.75348220171603, -95.38091870436139],
        img: '',
        website: 'https://lostandfoundmidtown.com/',
        blurb: 'Relaxed restaurant offerin cocktails, brunch & mains, plus patio dining with views of midtown.',
        description: ['happy hour', 'outdoor seating', 'hookah']
    },
    {
        name: "Morton's The Steakhouse - Downtown",
        category: 'food',
        subcategory: 'upscale',
        coordinates: [29.756924901573548, -95.36427486690646],
        img: '',
        website: 'https://www.mortons.com/location/mortons-the-steakhouse-houston-tx-downtown/?utm_source=Google&utm_medium=CPC&utm_campaign=MTHD-1163_TX-Houston-Downtown_Branded&utm_content=ch_google_adwords|trg_kwd-326515902124|crt_677467078720|kwmt_e|ps_|srct_g|trgt_|src_|devt_c|devm_|cid_894703348|lcl_9192926|fdi_&utm_term=morton%27s%20the%20steakhouse&gad_source=6&gbraid=0AAAAADpS1nmRvEaXQByQvZIHxdyzxEnHX&gclid=Cj0KCQjw2ZfABhDBARIsAHFTxGx0rTP-55xU5jOvCJ2ccmQy8kT6o6_H6koN6yNN-AH9B6SxNHBP7K0aAuUmEALw_wcB',
        blurb: 'Upscale chain for aged prime beef, seafood & other traditional steakhouse fare in a clubby space',
        description: []
    },
    {
        name: "Morton's The Steakhouse - Galleria",
        category: 'food',
        subcategory: 'upscale',
        coordinates: [29.742058565423644, -95.46245468028471],
        img: '',
        website: 'https://www.mortons.com/location/mortons-the-steakhouse-houston-tx-galleria/#menus',
        blurb: 'Upscale chain for aged prime beef, seafood & other traditional steakhouse fare in a clubby space',
        description: []
    },
    {
        name: "Hungry Howie's Pizza",
        category: 'food',
        subcategory: 'pizza',
        coordinates: [29.901736784187758, -95.553412021421],
        img: '',
        website: '',
        blurb: 'Basic, counter-serve pizzeria chain popular for its flavored crusts, such as sesame & garlic herb.',
        description: ['Flavored crusts', 'Cajun Bread', 'Onion Crust']
    },
    {
        name: 'House of Pies',
        category: 'food',
        subcategory: 'dessert',
        coordinates: [29.737118864189952, -95.41921689703939],
        img: '',
        website: 'https://houseofpies.com/',
        blurb: 'Classic 24-hour American diner serving burgers, salads, sandwiches, breakfast fare & homemade pies.',
        description: ['Lemon Meringue', 'Key Lime', 'Coconut Meringue']
    },
    {
        name: "Timmy Chan's - Greenspoint",
        category: 'food',
        subcategory: 'chicken',
        coordinates: [29.946170791694453, -95.46510803077007],
        img: '',
        website: 'https://www.timmychanshouston.com/',
        blurb: 'Utilitarian Chinese joint with a drive-thru offering fast food such as chicken wings & fried rice.',
        description: ['Kool Aid']
    },
    {
        name: "Timmy Chan's - Acres Home",
        category: 'food',
        subcategory: 'chicken',
        coordinates: [29.864652305790308, -95.40565798665216],
        img: '',
        website: 'https://www.timmychanshouston.com/',
        blurb: 'Utilitarian Chinese joint with a drive-thru offering fast food such as chicken wings & fried rice.',
        description: ['Kool Aid']
    },
    {
        name: "Timmy Chan's - Antoine Dr",
        category: 'food',
        subcategory: 'chicken',
        coordinates: [29.844238187755664, -95.47286949870724],
        img: '',
        website: 'https://www.timmychanshouston.com/',
        blurb: 'Utilitarian Chinese joint with a drive-thru offering fast food such as chicken wings & fried rice.',
        description: ['Kool Aid']
    },
    {
        name: "Spanky's ",
        category: 'food',
        subcategory: 'pizza',
        coordinates: [29.694876795984932, -95.29955061154651],
        img: '',
        website: 'https://www.spankyspizza.net/',
        blurb: 'This family-owned pizza parlor using from-scratch dough also offers burgers, pasta & a full bar.',
        description: ['oven baked wings', 'large pizzas', 'full menu']
    },
    {
        name: 'Joey Uptown',
        category: 'food',
        subcategory: 'upscale',
        coordinates: [29.74019123438663, -95.46277629362307],
        website: 'https://joeyrestaurants.com/location/joey-uptown',
        blurb: 'Relaxed, contemporary dining spot with a broad menu featuring international & regional dishes.',
        description: ['fine dining', 'full bar', 'quality steak']
    },
    {
        name: 'Thirteen',
        category: 'food',
        subcategory: 'upscale',
        coordinates: [29.752621777966795, -95.37569459231442],
        website: 'https://13htx.com',
        blurb: 'Upscale restaurant offering New American cuisine & a raw bar, plus a hookah and cocktail lounge.',
        description: ['hookah', 'full bar', 'midtown']
    },
    {
        name: 'Seafood Man Shack',
        category: 'food',
        subcategory: 'seafood',
        coordinates: [29.81584956949366, -95.32898273227359],
        website: 'https://www.instagram.com/theseafoodmanshack/',
        blurb: 'Laid-back seafood shack offering quick bites, including crawfish, shrimp, and gumbo.',
        description: ['seafood boil', 'fried seafood', 'burgers']
    },
    {
        name: 'Boil House',
        category: 'food',
        subcategory: 'seafood',
        coordinates: [29.790529597726433, -95.39167411678872],
        website: 'https://www.theboilhouse.com',
        blurb: 'Open-air counter-serve featuring Cajun crawfish & shrimp boils with corn, plus outside tables.',
        description: ['high quality', 'worth the price', 'king cake']
    },
    {
        name: 'Cantina Barba',
        category: 'food',
        subcategory: 'tacos',
        coordinates: [29.790805407102635, -95.37342269156582],
        website: 'https://www.cantinabarba.com',
        blurb: 'Unfussy joint with late-night hours crafting house-smoked meat tacos, coffee, beer & mezcal.',
        description: ['open late', 'great tacos', 'quality cocktails']
    },
    {
        name: "Culver's",
        category: 'food',
        subcategory: 'burgers',
        coordinates: [29.98801261114251, -95.1927731083066],
        website: 'https://www.culvers.com/restaurants/atascocita?utm_source=Google&utm_medium=Maps&utm_campaign=Google%20Places',
        blurb: 'Fast-food chain specializing in frozen custard & signature burgers made with Midwest beef & dairy.',
        description:['High quality fast food', 'ice cream', 'root beer']
    },
    {
        name: "Papa John's Pizza",
        category: 'food',
        subcategory: 'pizza',
        coordinates: [30.00041303571167, -95.16024942826793],
        website: 'https://locations.papajohns.com/united-states/tx/77346/atascosita-%28humble%29/7591-fm-1960-road-east?utm_source=yext-listings&utm_medium=referral&y_source=1_MTA1OTI1NDgtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
        blurb: 'Pizza take-out & delivery chain offering classic & specialty pizzas, plus wings, sides & desserts.',
        description: ['wonderful GM', 'better ingredients', 'better pizza']
    },
    {
        name: 'Luna Pizzeria',
        category: 'food',
        subcategory: 'pizza',
        coordinates: [29.77258286899414, -95.398930888628],
        img: '',
        website: 'https://www.lunapizzeria.com',
        blurb: 'Modern, family-friendly pizzeria turning out pies with creative toppings, plus salads & sandwiches.',
        description: ['prosciutto & arugala', 'spicy andouille', 'games']
    },
    // Bars
    {
        name: 'Ador',
        category: 'bar',
        coordinates: [29.753411079893684, -95.38650062691997],
        img: 'https://i.imgur.com/JTsWFwL.png',
        website: 'https://adorhouston.com/',
        blurb: 'Bohemian joint with live music & a terrace serving pizzas, burgers & wings, plus cocktails.',
        description: ['happy hour', 'hookah', 'daiquiris']
    },
    {
        name: 'CRU - Downtown',
        category: 'bar',
        coordinates: [29.762292281329156, -95.3616406517955],
        img: 'https://i.imgur.com/crlJaYk.png',
        website: 'https://crulounge.com/',
        blurb: 'Casual bar with a neon-lit vibe offering small plates & cocktails, plus hookah pipes.',
        description: ['neon lit', 'hookah', 'dj']
    },
    {
        name: 'CRU - Galleria',
        category: 'bar',
        coordinates: [29.7162290256621, -95.49744793118549],
        img: 'https://i.imgur.com/TlPjazB.png',
        website: 'https://crulounge.com/',
        blurb: 'Casual bar with a neon-lit vibe offering small plates & cocktails, plus hookah pipes.',
        description: ['neon lit', 'hookah', 'dj']
    },
    {
        name: 'Heights Bier Garten',
        category: 'bar',
        coordinates: [29.797314935102868, -95.41030956614523],
        img: '',
        website: 'https://www.heightsbiergarten.com/',
        blurb: 'Craft beer garden offering cocktails, wine, bar food, and a pet-friendly patio with fire pits.',
        description: ['beer list', 'outdoor seating', 'soft pretzel']
    },
    {
        name: 'Locker Room',
        category: 'bar',
        coordinates: [29.72193649943075, -95.36747176543562],
        img: 'https://i.imgur.com/1MXxNyt.png',
        website: 'https://www.google.com/search?q=locker+room+houston+bar&oq=locker+room+houston+bar&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhYIARAuGK8BGMcBGJECGIAEGIoFGI4FMg0IAhAAGJECGIAEGIoFMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhge0gEIMzQzMWoxajSoAgCwAgE&sourceid=chrome&ie=UTF-8',
        blurb: 'Casual bar and grill featuring comfort food, happy hours, and sports on TV, plus a patio.',
        description: ['happy hour', 'hookah', 'shots']
    },
    {
        name: 'Saint Arnold Brewing Company',
        category: 'bar',
        coordinates: [29.771212770697776, -95.34753793820126],
        img: '',
        website: 'https://www.saintarnold.com/',
        blurb: 'Established craft brewery featuring facility tours & a beer hall serving pints & pub grub for lunch.',
        description: ['Houston Brewing', 'Cider List', 'Outdoor Seating']
    },
    {
        name: "Warren's Inn",
        category: 'bar',
        coordinates: [29.76239315781994, -95.36150769972693],
        img: 'https://i.imgur.com/6eqneAi.png',
        website: 'https://www.google.com/search?q=warrens+houston&oq=warrens+houston&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDQzNDJqMWo0qAIAsAIB&sourceid=chrome&ie=UTF-8',
        blurb: 'Drinks are served at this easygoing dive bar, which has a jukebox.',
        description: ['historic bar', 'friendly staff', 'tavern feel']
    },
    {
        name: 'Cidercade',
        category: 'bar',
        coordinates: [29.7574399740177, -95.34675785219966],
        img: '',
        website: 'https://cidercade.com/houston/',
        blurb: 'Huge arcade bar with a mix of classic & modern games, plus house-made hard ciders',
        description: ['free parking', 'unlimited arcade', 'cider flights']
    },
    {
        name: 'Houston Watch Company',
        category: 'bar',
        coordinates: [29.763506399996455, -95.36059241953069],
        img: '',
        website: 'https://www.houstonwatchcompany.com/',
        blurb: 'This former watch shop is now a quaint, 2-level cocktail bar in the lobby of the Bayou Lofts.',
        description: ['historic', 'quiet seating', 'second floor']
    },
    {
        name: 'Behind Closed Doors',
        category: 'bar',
        coordinates: [29.761971390805527, -95.3611870578859],
        img: '',
        website: 'https://bcd-htx.com/',
        blurb: 'Trendy bar featuring a hidden speakeasy with music and dancing.',
        description: ['secret spaces']
    },
    {
        name: 'Cherry',
        category: 'bar',
        coordinates: [29.762068172596784, -95.3611910729658],
        img: '',
        website: 'https://cherryhtx.com',
        blurb: 'Trendy nightclub with a packed dance floor featuring retro music and cocktails.',
        description: []
    },
    {
        name: 'Notsuoh',
        category: 'bar',
        coordinates: [29.761835136484965, -95.3612382178252],
        img: '',
        website: 'https://notsuoh.com',
        blurb: 'Quirky watering hole ofering poetry readings, live music & performing artists with a funky vibe.',
        description: []
    },
    {
        name: 'Ladybirds',
        category: 'bar',
        coordinates: [29.77476119202706, -95.41842694823647],
        img: '',
        website: 'https://ladybirdsbar.com',
        blurb: 'Family-owned watering hole offering craft brews & specialty cocktails, plus a spacious patio.',
        description: []
    },
    {
        name: 'Sugar Room',
        category: 'bar',
        coordinates: [29.770604569930263, -95.41329371711167],
        img: '',
        website: '',
        blurb: 'An Upscale Speakeasy An innuendo to Prohibition days past, Sugar Room is a hidden speakeasy-inspired bar located in the heart of Houston’s bustling nightlife scene. Enjoy hand-crafted cocktails cocktails in our upscale lounge, or move the party to our outdoor patio with 2,000 square feet of space for socializing.',
        description: []
    },
    {
        name: 'Pitch 25',
        category: 'bar',
        coordinates: [29.751557482444884, -95.35468225434623],
        img: '',
        website: 'https://www.facebook.com/pitch25beerpark/menu/',
        blurb: 'Pub grub & nearly 100 draft beers in a cool, cavernous warehouse with games & lots of outdoor seats.',
        description: ['sports bar', 'dodgeball', 'axe throwing']
    },
    {
        name: 'Tejas Brewery',
        category: 'bar',
        coordinates: [29.772552031946326, -95.37956184665045],
        img: '',
        website: 'https://tejasbeer.com',
        blurb: 'Tejas Brewery is located in the heart of vibrant Sawyer Yards, offering three stories of exceptional food, handcrafted beer, creative cocktails, artisan coffee, and versatile event spaces—all with a stunning view of downtown Houston.',
        description: ['view of skyline', 'outdoor seating', 'full menu']
    },
    {
        name: 'Postino - Heights',
        category: 'bar',
        coordinates: [29.782984392258367, -95.39855598565903],
        img: '',
        website: 'https://www.postinowinecafe.com/locations/postino-heights',
        blurb: 'Hip chain in a modern-chic sapce, specializing in Italian favorites and specialty bruschetta, plus wine.',
        description: ['classy', 'wine bar', 'full menu']
    },
    {
        name: 'Postino - Montrose',
        category: 'bar',
        coordinates: [29.746522189697743, -95.39033692975383],
        img: '',
        website: 'https://www.postinowinecafe.com/locations/postino-montrose',
        blurb: 'Hip chain in a modern-chic sapce, specializing in Italian favorites and specialty bruschetta, plus wine.',
        description: ['classy', 'wine bar', 'full menu']
    },
    {
        name: 'Postino - Uptown Park',
        category: 'bar',
        coordinates: [29.75432446959847, -95.45728990091776],
        img: '',
        website: 'https://www.postinowinecafe.com/locations/postino-uptown-park',
        blurb: 'Hip chain in a modern-chic sapce, specializing in Italian favorites and specialty bruschetta, plus wine.',
        description: ['classy', 'wine bar', 'full menu']    
    },
    {
        name: "Neighbors",
        category: 'bar',
        coordinates: [29.748317085532182, -95.34099179797487],
        img: '',
        website: 'https://www.neighborspizzabar.com',
        blurb: 'Neighborhood bar offering beer, cocktails, and wine, plus live entertainment and games.',
        description: ['live music', 'card games', 'outdoor seating']
    },
    // Bookstores & Libraries
    {
        name: "Becker's Books",
        category: 'books',
        coordinates: [29.794251635722954, -95.47768854366207],
        img: '',
        website: 'https://www.beckersbooks.com/',
        blurb: 'Cozy family shop in a 3,5000-sq.-ft renovated house offers diverse used, rare & out-of-print books.',
        description: []
    },
    {
        name: 'Kaboom Books',
        category: 'books',
        coordinates: [29.786977712444614, -95.37189190882646],
        img: '',
        website: 'https://kaboombooks.com/',
        blurb: 'Homey shop featuring pre-owned books, including hard-to-find titles, also hosts events on its patio.',
        description: [],
    },
    {
        name: 'Murder By The Book',
        category: 'books',
        coordinates: [29.725750721718644, -95.41452430314608],
        img: '',
        website: 'https://murderbooks.com',
        blurb: 'Bookstore featuring new & used mystery novels, magazines, & collectibles also hosts author events.',
        description: []
    },
    {
        name: 'Quarter Price Books',
        category: 'books',
        coordinates: [29.731932134424735, -95.41079697391432],
        img: '',
        website: '',
        blurb: 'Organized store offering used and collectible books, plus many titles on Texas history.',
        description: []
    },
    {
        name: 'Kinokuniya',
        category: 'books',
        coordinates: [29.7889472043791, -95.77308058127569],
        img: '',
        website: 'https://usa.kinokuniya.com/stores-kinokuniya-katy',
        blurb: 'Japanese-based retailer known for its collection of Asian books & magazines.',
        description: ['stationery', 'fountain pens', 'book nooks'],
    },
    {
        name: 'Lanier Theological Library',
        category: 'books',
        coordinates: [29.977528244026878, -95.54897270621879],
        img: '',
        website: 'https://lanierlibraryandlearningcenter.org',
        blurb: 'Lanier Theological Library is a 17,000 sq. ft non-circulating research library located in northwest Houston, Texas. It was built by Mark Lanier, who has taught Sunday school at Champion Forest Baptist Church for more than 20 years, and is part of his 35-acre estate.',
        description: ['photogenic', '']
    },
    {
        name: 'Houston Public Library',
        category: 'books',
        coordinates: [29.759442236774625, -95.36996502172211],
        img: '',
        website: 'https://houstonlibrary.org/home',
        blurb: 'Public library offering books, computers, and passport applications, plus a parking garage.',
        description: ['downtown', '', '']
    },
    // Markets
    {
        name: 'H Mart - Katy',
        category: 'market',
        coordinates: [29.792680234069884, -95.77433038249025],
        img: '',
        website: 'https://www.hmart.com/',
        blurb: 'Asian grocery store chain supplying imported packaged foods & housewares plus ready-to-serve meals.',
        description: []
    },
    {
        name: 'Mi Tienda',
        category: 'market',
        coordinates: [29.869779060715402, -95.33290961508173],
        img: '',
        website: 'https://mitiendatx.com/?utm_source=google&utm_medium=organic&utm_campaign=gmb_stores&utm_content=mi_tienda_648',
        blurb: 'Sizable Latin grocery store with a tortilleria & a bakery, plus ready-made food court eats.',
        description: ['Mexican Market', 'Food Court', 'Fresh Produce']
    },
    {
        name: "Trader Joe's",
        category: 'market',
        coordinates: [29.73920558665379, -95.41112752066111],
        img: '',
        website: 'https://locations.traderjoes.com/tx/houston/426/?utm_source=gmb&utm_medium=organic&utm_campaign=local',
        blurb: 'Grocery chain with a variety of signature items, plus produce, dairy & more.',
        description: ['Ready to eat meals', 'wine & beer', 'seasonal foods']
    },
    {
        name: 'Phoenicia Specialty Foods - Downtown',
        category: 'market',
        coordinates: [29.75441879503811, -95.36160806283416],
        img: '',
        website: 'https://phoeniciafoods.com/locations/downtown-market/',
        blurb: 'Mediterranean market with deli & prepared foods, plus cheeses, baked goods, meats, wine & beer.',
        description: ['mediterranean', 'ready to eat snacks', 'specialty foods']
    },
    {
        name: 'Phoenicia Specialty Foods - Westheimer',
        category: 'market',
        coordinates: [29.734632883016253, -95.59485050486693],
        img: '',
        website: 'https://phoeniciafoods.com/locations/westheimer-market/',
        blurb: 'Mediterranean market with deli & prepared foods, plus cheeses, baked goods, meats, wine & beer.',
        description: ['mediterranean', 'ready to eat snacks', 'specialty foods']
    },
    {
        name: '99 Ranch Market',
        category: 'market',
        coordinates: [29.785449825593115, -95.5229681661174],
        img: '',
        website: 'https://www.99ranch.com/stores/search',
        blurb: 'Asian supermarket chain carrying imported specialty foods plus meat, seafood, produce & baked goods.',
        description: ['asian foods', 'restaurants attached', 'pricier than H Mart']
    },
    {
        name: '99 Ranch Market - Westheimer',
        category: 'market',
        coordinates: [29.737573908010656, -95.59568067398935],
        img: '',
        website: 'https://www.99ranch.com/stores/search',
        blurb: 'Asian supermarket chain carrying imported specialty foods plus meat, seafood, produce & baked goods.',
        description: ['asian foods', 'restaurants attached', 'pricier than H Mart']
    },
    {
        name: '99 Ranch Market - Katy',
        category: 'market',
        coordinates: [29.775705653355033, -95.7501533006404],
        img: '',
        website: 'https://www.99ranch.com/stores/search',
        blurb: 'Asian supermarket chain carrying imported specialty foods plus meat, seafood, produce & baked goods.',
        description: ['asian foods', 'restaurants attached', 'pricier than H Mart']
    },
    {
        name: 'Whole Foods Market - Heights',
        category: 'market',
        coordinates: [29.81378493265026, -95.39815226977178],
        img: '',
        website: 'https://www.wholefoodsmarket.com/stores/independenceheights?utm_sourc',
        blurb: 'Eco-minded chain with natural & organic grocery items, housewares & other products (most sell wine).',
        description: ['fresh pizza', 'tin fish', 'wine']
    },
    {
        name: 'H-E-B - Shepherd',
        category: 'market',
        coordinates: [29.807331827706797, -95.40907973637934],
        img: '',
        website: 'https://www.heb.com/heb-store/US/tx/houston/the-heights-h-e-b-737?utm_source=google&utm_medium=organic&utm_campaign=gmb_stores',
        blurb: 'Branch of a supermarket chain offering groceries, beer & wine, plus a deli, pharmacy & florist.',
        description: ['pharmacy', 'sushi', 'groceries']
    },
    {
        name: 'B & W Meat Company',
        category: 'market',
        coordinates: [29.835171688340367, -95.41169405321867],
        img: '',
        website: 'https://bwmeatcompany.com',
        blurb: 'Butcher shop offering high-quality meats, housemade sausage, custom cuts, deer processing & more.',
        description: ['butcher', 'oxtail', 'brisket']
    },
    {
        name: 'H Mart Houston Blalock',
        category: 'market',
        coordinates: [29.792552001430632, -95.5209030224523],
        img: '',
        website: 'https://www.hmart.com/',
        blurb: 'Asian grocery store chain supplying imported packaged foods & housewares plus ready-to-serve meals.',
        description: []
    },
    {
        name: 'H Mart Bellaire',
        category: 'market',
        coordinates: [29.706641204872156, -95.55391477248872],
        img: '',
        website: 'https://www.hmart.com/',
        blurb: 'Asian grocery store chain supplying imported packaged foods & housewares plus ready-to-serve meals.',
        description: []
    },
    {
        name: 'Sprouts',
        category: 'market',
        coordinates: [29.774566750083107, -95.40017316062348],
        img: '',
        website: 'https://www.sprouts.com/store/tx/houston/the-heights/',
        blurb: 'Specialty chain offering a range of natural & organic grocery items, including own-brand goods.',
        description: ['fresh sandwiches', 'candy', 'organic groceries']
    },
    {
        name: 'Central Market',
        category: 'market',
        coordinates: [29.740862933310016, -95.44399540235871],
        img: '',
        website: 'https://www.centralmarket.com/locations/houston?utm_source=google&utm_medium=organic&utm_campaign=cm_stores',
        blurb: 'Gourmet veggies, meats & wine, plus an in-house cafe, food events & live music in a vast space.',
        description: ['fancy H-E-B', 'cooking classes', 'premium groceries']
    },
    // Movie Theaters
    {
        name: 'AMC Willowbrook 24',
        category: 'movies',
        coordinates: [29.95353569926177, -95.54006845262985],
        img: 'https://i.imgur.com/7j18fGs.png',
        website: 'https://www.amctheatres.com/movie-theatres/houston/amc-willowbrook-24',
        blurb: '',
        description: ['premium seats', 'digital IMAX', 'Dolby Digital']
    },
    {
        name: 'AMC Deerbrook 24',
        category: 'movies',
        coordinates: [30.010016013578735, -95.27108698884724],
        img: 'https://i.imgur.com/hkIrPr8.png',
        website: 'https://www.amctheatres.com/movie-theatres/houston/amc-deerbrook-24',
        burb: '',
        description: ['premium seats', 'digital IMAX', 'Dolby Digital']
    },
    {
        name: 'AMC Houston 8',
        category: 'movies',
        coordinates: [29.761902952575078, -95.36625280604103],
        img: 'https://i.imgur.com/Ft6rlvE.png',
        website: 'https://www.amctheatres.com/movie-theatres/houston/amc-houston-8',
        burb: '',
        description: ['premium seats', 'digital IMAX', 'Dolby Digital']
    },
    {
        name: "Regal Edwards Houston Marq'E",
        category: 'movies',
        coordinates: [29.785954755242336, -95.4635497896941],
        img: '',
        website: 'https://regmovies.com',
        blurb: 'Movie theater chain known for presenting 3D films on a giant screen, including blockbusters.',
        description: []
    },
    {
       name: 'Regal Lone Star',
       category: 'movies',
       coordinates: [30.041429887488842, -95.60524921864557],
       img: '',
       website: 'http://regmovies.com',
       blurb: 'Theater complex with multiple screens featuring new release films, plush seating & concession stand.',
       description: [] 
    },
    {
        name: 'Alamo Drafthouse Cinema LaCenterra',
        category: 'movies',
        coordinates: [29.740641105182316, -95.77402693978205],
        img: '',
        website: 'https://drafthouse.com',
        blurb: 'Stylish theater chain for new & classic films features cocktails & creative bites served seat-side.',
        description: []
    },
    {
        name: 'Star Cinema Grill - HWY 249',
        category: 'movies',
        coordinates: [29.994647477255967, -95.57278076841475],
        img: '',
        website: 'https://starcinemagrill.net',
        blurb: 'Stylish theater chain for new & classic films features cocktails & creative bites served seat-side.',
        description: []
    },
    {
        name: 'Regal Edwards Greenway Grand Palace',
        category: 'movies',
        coordinates: [29.731383893300645, -95.44073989122626],
        img: '',
        website: 'https://regmovies.com',
        blurb: 'Theater complex with multiple screens featuring new release films, plush seating & concession stand.',
        description: []
    },
    {
        name: 'The River Oaks Theatre',
        category: 'movies',
        coordinates: [29.75267309523697, -95.40907147983143],
        img: '',
        website: 'https://theriveroakstheatre.com',
        blurb: 'Movie theater screening new releases as well as independent, foreign & avant-garde flicks.',
        description: ['historic', 'local', 'retro']
    },
    {
        name: 'Rooftop Cinema Club Uptown',
        category: 'movies',
        coordinates: [29.749438473419687, -95.46172275862284],
        img: '',
        website: 'https://rooftopcinemaclub.com/houston/venue/uptown/',
        blurb: 'Open-air cinema offering concessions, headphones, and city views, plus special events.',
        description: ['Rooftop', 'Outdoor seating', 'Monthly Schedules']
    },
    {
        name: 'Cinemark Katy and XD',
        category: 'movies',
        coordinates: [29.786772479707707, -95.77473708220901],
        img: '',
        blurb: 'Chain of movie theaters, some with multiple screens, stadium seats & self-service ticketing kiosks.',
        description: ['Near H-Mart', '', '']
    },
    // Music Venues
    {
        name: 'House of Blues - Houston',
        category: 'music',
        coordinates: [29.75383522265906, -95.36392444303341],
        img: 'https://i.imgur.com/k5dSSlt.png',
        website: 'https://www.livenation.com/venue/KovZpZAE6k1A/house-of-blues-houston-events?awtrc=true&c=SEM_LNVenuesAutomation_ggl_18519938348_142072537436_house%20of%20blues&GCID=0&gad_source=1&gbraid=0AAAAAC1KtUphGOVv8Rofb-wxM6BpSibhT&gclid=Cj0KCQjwtpLABhC7ARIsALBOCVoSlXtVubE-SSFspbLCjloWham5bis77jY47pOXUM-yH7Rv6b9LRIEaAhEiEALw_wcB&gclsrc=aw.ds',
        blurb: "Rock- & blues-themed restaurant & bar serving Southern-inspired dishes, plus live music.",
        description: ['house of blues', 'bronze peacock', 'foundation room']
    },
    {
        name: 'Warehouse Live',
        category: 'music',
        coordinates: [29.746012478013213, -95.3750447679838],
        img: '',
        website: 'https://www.google.com/search?q=warehouse+live&sca_esv=1568361547b35126&sxsrf=AHTn8zowcBcGXM32ZoZru3el8iKuUm81Lg%3A1745251128310&ei=OGsGaKrFEvLep84PicCx4QQ&ved=0ahUKEwiqwa-Mv-mMAxVy78kDHQlgLEwQ4dUDCBA&uact=5&oq=warehouse+live&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIg53YXJlaG91c2UgbGl2ZTITEC4YgAQYxwEYJxiKBRiOBRivATIEECMYJzIKEAAYgAQYQxiKBTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI4QxQAFjsC3AAeAGQAQCYAYIBoAHgCqoBAzguNrgBA8gBAPgBAZgCDqACowvCAgoQIxiABBgnGIoFwgITEC4YgAQYQxjHARiKBRiOBRivAcICEBAuGIAEGEMYxwEYigUYrwHCAhYQLhiABBixAxjRAxhDGIMBGMcBGIoFwgIQEAAYgAQYsQMYQxiDARiKBcICExAuGIAEGLEDGNEDGEMYxwEYigXCAg0QABiABBhDGIoFGIsDwgIZEC4YgAQYQxiYAxioAxiKBRiaAxiLAxibA8ICEBAuGIAEGLEDGEMYgwEYigXCAg0QABiABBixAxhDGIoFwgIOEC4YgAQYxwEYjgUYrwHCAgoQABiABBgUGIcCmAMAkgcDNi44oAeV6AGyBwM2Lji4B6ML&sclient=gws-wiz-serp',
        blurb: 'Various music styles are showcased at this basic general-admission concert venue with a small bar.',
        description: []
    },
    {
        name: 'White Oak Music Hall',
        category: 'music',
        coordinates: [29.786245855756498, -95.36701642980238],
        img: 'https://i.imgur.com/lh9c1Eu.png',
        website: 'https://whiteoakmusichall.com/',
        blurb: 'Performances by popular musical acts staged in an amphitheater with a lawn, plus 2 indoor spaces.',
        description: ['upstairs room', 'downstairs room', 'lawn shows']
    },
    {
        name: 'Axelrad',
        category: 'music',
        coordinates: [29.734989085866363, -95.37481472963191],
        img: '',
        website: 'https://www.axelradhouston.com/?utm_source=local&utm_medium=organic&utm_campaign=gmb',
        blurb: 'Craft beers galore offered in a laid-back outdoor setup with hammocks, food trucks & regular events.',
        description: ['concerts', 'hammocks', 'food trucks']
    },
    {
        name: '713 Music Hall',
        category: 'music',
        coordinates: [29.765904133313427, -95.36386788724305],
        img: '',
        website: 'https://www.713musichall.com/?utm_source=GMBlisting&utm_medium=organic',
        blurb: 'Venue in a former post office with a restaurant and bar, hosting a variety of artists.',
        description: ['paid parking', 'attached to POST Food Hall', 'medium to large concerts']
    },
    {
        name: 'Heights Theater',
        category: 'music',
        coordinates: [29.80306916916203, -95.40285985023765],
        img: '',
        website: 'https://theheightstheater.com',
        blurb: 'Restored early-1900s movie theater available for private events, with marquee & film projector.',
        description: ['smaller shows', 'walkable neighborhood', 'old movie theater']
    },
    {
        name: 'The Bronze Peacock',
        category: 'music',
        coordinates: [29.75390437423625, -95.36408936405562],
        img: '',
        website: 'https://locations.houseofblues.com/restaurant-and-bar/tx/houston/1204-caroline-st.',
        blurb: 'Smaller venue attached to House of Blues - Houston',
        description: ['house of blues', 'foundation room', 'cheap tickets']
    },
    {
        name: 'The Foundation Room',
        category: 'music',
        coordinates: [29.753973571962955, -95.36402390495192],
        img: '',
        website: 'https://locations.houseofblues.com/foundation-room/tx/houston/1204-caroline-st.',
        blurb: 'Upscale lounge featuring a New American restaurant, plus craft cocktails, and live music.',
        description: ['vip room', 'house of blues', 'bronze peacock']
    },
    {
        name: "Rockefeller's",
        category: 'music',
        coordinates: [29.769681526351384, -95.39680068906254],
        img: '',
        website: 'http://www.rockefellershouston.com',
        blurb: 'Intimate venue with a bar hosting live music performances, including blues and jazz, and poetry events.',
        description: ['intimate', 'less frequent concerts', 'private rentals']
    },
    {
        name: 'Eldorado Ballroom',
        category: 'music',
        coordinates: [29.734460962203446, -95.36542150051352],
        img: '',
        website: 'https://www.theeldoradoballroom.com',
        blurb: 'Eldorado Ballroom is a former nightclub in the Third Ward, Houston, on the other side of the road from Emancipation Park.',
        description: ['intimate', 'private events', 'historic']
    },
    {
        name: 'The Hobby Center for Performing Arts',
        category: 'music',
        coordinates: [29.76164086726989, -95.36966571708332],
        img: '',
        website: 'https://www.thehobbycenter.org',
        blurb: 'Modern spot with 2 theaters, a 3-story grand lobby with French styling & views of the city skyline.',
        description: ['downtown', 'proximity to Buffalo Bayou park', 'promiximity to bars']
    },
    {
        name: 'Toyota Center',
        category: 'music',
        coordinates: [29.75072566656762, -95.36205637080953],
        img: '',
        website: 'https://www.toyotacenter.com',
        blurb: 'Toyota Center is an indoor arena located in Houston, Texas, United States. It is named after the Japanese automobile manufacturer Toyota.',
        description: ['Home of the Rockets', 'large concerts', '']
    },
    // Parks
    {
        name: 'Hermann Park',
        category: 'park',
        coordinates: [29.717301075222434, -95.3909421495944],
        img: '',
        website: '',
        blurb: 'Expansive park featuring a golf course, Japanese garden, a natrual science museum & a kiddie train.',
        description: ['houston zoo', 'proximity to museums', 'japanese garden']
    },
    {
        name: 'McGovern Centennial Gardens',
        category: 'park',
        coordinates: [29.720893009262795, -95.38748097934554],
        img: '',
        website: '',
        blurb: 'An 8-acre site featuring themed gardens, a sculpture promenade & a 30-foot mount with city views.',
        description: []
    },
    {
        name: 'Japanese Garden',
        category: 'park',
        coordinates: [29.719023089618833, -95.3922959042466],
        img: '',
        website: '',
        blurb: 'Tranquil Japanese garden in Hermann Park featuring plants, ponds & rocks, plus a teahouse.',
        description: []
    },
    {
        name: 'Gerald D. Hines Waterfall Park',
        category: 'park',
        coordinates: [29.736395850451597, -95.46129776187128],
        img: '',
        website: '',
        blurb: 'Park whose centerpiece is a 64-ft.-tall fountain circulating 11,000 gallons per minute.',
        description: []        
    },
    {
        name: 'West Lake Park',
        category: 'park',
        coordinates: [29.921505793676292, -95.20916263040671],
        img: '',
        website: '',
        blurb: 'Unpaved, tree-lined trail with a pond for wildlife viewing and a solid walking bridge.',
        description: ['great for walking', 'beatiful lake', 'bridges over lake']
    },
    {
        name: 'Jesse Jones',
        category: 'park',
        coordinates: [30.026748418753336, -95.29677063305253],
        img: '',
        website: '',
        blurb: 'This large tract features play & fishing areas, an educational facility & a network of trails.',
        description: []
    },
    {
        name: 'Eleanor Tinsley Park',
        category: 'park',
        coordinates: [29.761374885269195, -95.37885567530404],
        img: '',
        website: '',
        blurb: 'Park popular for its running trails, lush green hills & playing host to multiple annual festivals.',
        description: ['connects to downtown', 'beach volleyball', 'view of skyline']
    },
    {
        name: 'Buffalou Bayou Park Cistern',
        category: 'park',
        coordinates: [29.762086622873017, -95.37651349958786],
        img: '',
        website: '',
        blurb: 'This decommissioned underground reservoir was built in 1926 & now features art installations.',
        description: ''
    },
    {
        name: 'Buffalo Bayou Park',
        category: 'park',
        coordinates: [29.761675749675707, -95.38298771065615],
        img: '',
        website: '',
        blurb: 'Winding 160-acre green space featuring views of the Houston skyline plus a fountain & skate park.',
        description: ['Jane Gregory Garden', 'Tolerance (Plensa) Statues', 'Spindle Sculpture']
    },
    {
        name: 'Houston Arboretum & Nature Center',
        category: 'park',
        coordinates: [29.764528595602318, -95.45235240872859],
        img: '',
        website: '',
        blurb: '155-acre urban green space offering nature trails, exhibits, workshops & events in various habitats.',
        description: ['beatiful trails', '', '']
    },
    {
        name: 'Memorial Park Mountain Biking Trails',
        category: 'park',
        coordinates: [29.76200492007245, -95.44252415394965],
        img: '',
        website: '',
        blurb: '',
        description: []
    },
    {
        name: 'Clay Family Eastern Glades',
        category: 'park',
        coordinates: [29.76671697995398, -95.43031888718707],
        img: '',
        website: '',
        blurb: '',
        description: []
    },
    {
        name: 'Memorial Park',
        category: 'park',
        coordinates: [29.767614728267546, -95.43987406688974],
        img: '',
        website: '',
        blurb: 'Expansive city park with lush natural features, popular running trail, golf course & lots of shade.',
        description: []
    },
    {
        name: 'Keith-Wiess Park',
        category: 'park',
        coordinates: [29.89209916399693, -95.34494706745201],
        img: '',
        website: '',
        blurb: 'This expansive park features ball fields & tennis courts, plus trails & picnic areas.',
        description: ['walking trails', 'natural ponds', '1-2 hour walk']
    },
    {
        name: 'George Bush Park Boardwalk',
        category: 'park',
        coordinates: [29.737655260492083, -95.70020706442541],
        img: '',
        website: '',
        blurb: '',
        description: ['long walk to boardwalk', 'large alligators', 'walking trais']
    },
    {
        name: 'Smither Park',
        category: 'park',
        coordinates: [29.71685018952467, -95.32464507168103],
        img: '',
        website: 'https://orangeshow.com',
        blurb: 'Urban green space with a quirky collection of large mosaic sculptures created by local artists.',
        description: ['artistic', 'local culture', 'quirky']
    },
    {
        name: 'Clear Lake Park',
        category: 'park',
        coordinates: [29.564997477711, -95.0675657604324],
        img: '',
        website: '',
        blurb: 'Park with archaeological features on 59 acres with fishing pier, boat launch, playground & trails.',
        description: ['close to Kemah', 'relaxing', 'great lake view']
    },
    {
        name: 'Sheldon Lake State Park',
        category: 'park',
        coordinates: [29.860423185296234, -95.16076925862397],
        img: '',
        website: 'https://tpwd.texas.gov',
        blurb: 'State park with wetlands, lake & ponds for fishing & wildlife watching, plus educational exhibits.',
        description: ['observation tower', 'wetlands walking trails', 'lush ponds']
    },
    {
        name: 'Sam Houston Park',
        category: 'park',
        coordinates: [29.760128161149296, -95.37212300100511],
        img: '',
        website: 'https://www.houstontx.gov/abouthouston/samhoustonpark.html',
        blurb: 'Historically focused park featuring guided tours of old structures dating back to the 1800s.',
        description: ['downtown', 'frequent events', 'access to Buffalo Bayou']
    },
    {
        name: 'Market Square Park',
        category: 'park',
        coordinates: [29.76261811690755, -95.36235930384555],
        img: '',
        website: '',
        blurb: 'Historic public space with outdoor movies, walkways, a dog run & an open-air Greek restaurant.',
        description: ['movies in the park', 'proximity to bars', 'proximity to restaurants']
    },
    {
        name: 'Discovery Green',
        category: 'park',
        coordinates: [29.753051375319636, -95.35957755310606],
        img: '',
        website: 'https://www.discoverygreen.com/',
        blurb: 'Park with live music, public art, restaurants, playground, pong for kayaking & exercise classes.',
        description: []
    },
    {
        name: 'Guadalupe Plaza Park',
        category: 'park',
        coordinates: [29.75992389270082, -95.34570820433815],
        img: '',
        website: 'https://www.eastenddistrict.com/capital-projects/guadalupe-plaza-park-nears-completion/',
        blurb: 'Public park known for hosting events, including wine festivals.',
        description: []
    },
    {
        name: 'Woodland Park Bird Sanctuary',
        category: 'park',
        coordinates: [29.781623738438856, -95.37042159415712],
        img: '',
        website: '',
        blurb: '',
        description:[]
    },
    {
        name: 'Levy Park',
        category: 'park',
        coordinates: [29.732625704956543, -95.42328805641604],
        img: '',
        website: 'https://www.levyparkhouston.org',
        blurb: 'This classic green space features a asoftball field & playground, plus a community garden & dog park.',
        description: ['food trucks', 'short walking trails', 'artistic']
    },
    {
        name: 'Bagby Park',
        category: 'park',
        coordinates: [29.75183245570911, -95.37602483396185],
        img: '',
        website: '',
        blurb: 'Combat urban green space featuring a historic fountain, plus a trail, chess tables & public art.',
        description: ['small park', 'la calle tacos', 'large fountain']
    },
    {
        name: 'Midtown Park',
        category: 'park',
        coordinates: [29.743629216217624, -95.37615072468216],
        img: '',
        website: 'https://midtownhouston.com/project/midtown-park/',
        blurb: 'Urban space & events site with a dog park, a playground, sports courts & a wetland trail.',
        description: ['ponds', 'paved walking trails', 'artistic']
    },
    {
        name: 'Emancipation Park',
        category: 'park',
        coordinates: [29.73568063718464, -95.36524382995843],
        img: '',
        website: 'https://epconservancy.org',
        blurb: 'Historic park dedicated to the end of slavery offers a pool, athletic fields & a large playground.',
        description: ['community center', 'pool', 'memorials']
    },


    // Photo Opp

    // Attractions (nrg, toyota, kemah, shell, houston zoo, punchline, meow wolf)

]

export default locations;
