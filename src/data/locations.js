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
        coordinates: [29.803866550751028, -95.40101375817602],
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
        coordinates: [29.72911471639174, -95.33228021691421],
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
        subcategory: 'steak',
        coordinates: [29.738151249900074, -95.51179108918673],
        img: '',
        website: '',
        blurb: "Upscale Brazilian chain for all-you-can-eat meat carved tableside plus an extensive salad bar.",
        description: []
    },
    {
        name: 'Chama Gaúcha',
        category: 'food',
        subcategory: 'steak',
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
        subcategory: 'steak',
        coordinates: [29.756924901573548, -95.36427486690646],
        img: '',
        website: 'https://www.mortons.com/location/mortons-the-steakhouse-houston-tx-downtown/?utm_source=Google&utm_medium=CPC&utm_campaign=MTHD-1163_TX-Houston-Downtown_Branded&utm_content=ch_google_adwords|trg_kwd-326515902124|crt_677467078720|kwmt_e|ps_|srct_g|trgt_|src_|devt_c|devm_|cid_894703348|lcl_9192926|fdi_&utm_term=morton%27s%20the%20steakhouse&gad_source=6&gbraid=0AAAAADpS1nmRvEaXQByQvZIHxdyzxEnHX&gclid=Cj0KCQjw2ZfABhDBARIsAHFTxGx0rTP-55xU5jOvCJ2ccmQy8kT6o6_H6koN6yNN-AH9B6SxNHBP7K0aAuUmEALw_wcB',
        blurb: 'Upscale chain for aged prime beef, seafood & other traditional steakhouse fare in a clubby space',
        description: []
    },
    {
        name: "Morton's The Steakhouse - Galleria",
        category: 'food',
        subcategory: 'steak',
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
        name: 'Heights Bier Garden',
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
    // Bookstores
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
        coordinates: [29.754012620241973, -95.36330400949777],
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

    // Parks

    // Photo Opp

    // Unique (nrg, toyota)

    // bookstores

    // markets
]

export default locations;
