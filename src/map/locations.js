// Restaurants
// Bars
// Movie Theaters
// Music Venues
// Parks
// Photo Opp
// Unique (nrg, toyota, kemah)
// Bookstores
// Markets

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
        subcategory: 'chicken',
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
        name: 'Velvet Taco - Rice Village',
        category: 'food',
        subcategory: 'tacos',
        coordinates: [29.77027627032481, -95.41004657788817],
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
    // Bars
    {
        name: 'Ador',
        category: 'bar',
        coordinates: [29.753411079893684, -95.38650062691997],
        img: 'https://i.imgur.com/JTsWFwL.png',
        website: 'https://adorhouston.com/',
        description: ['happy hour', 'hookah', 'daiquiris']
    },
    {
        name: 'Locker Room',
        category: 'bar',
        coordinates: [29.72193649943075, -95.36747176543562],
        img: 'https://i.imgur.com/1MXxNyt.png',
        website: 'https://www.google.com/search?q=locker+room+houston+bar&oq=locker+room+houston+bar&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhYIARAuGK8BGMcBGJECGIAEGIoFGI4FMg0IAhAAGJECGIAEGIoFMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhge0gEIMzQzMWoxajSoAgCwAgE&sourceid=chrome&ie=UTF-8',
        description: ['happy hour', 'hookah', 'shots']
    },
    {
        name: 'CRU - Downtown',
        category: 'bar',
        coordinates: [29.762292281329156, -95.3616406517955],
        img: 'https://i.imgur.com/crlJaYk.png',
        website: 'https://crulounge.com/',
        description: ['neon lit', 'hookah', 'dj']
    },
    {
        name: 'CRU - Galleria',
        category: 'bar',
        coordinates: [29.7162290256621, -95.49744793118549],
        img: 'https://i.imgur.com/TlPjazB.png',
        website: 'https://crulounge.com/',
        description: ['neon lit', 'hookah', 'dj']
    },
    {
        name: "Warren's Inn",
        category: 'bar',
        coordinates: [29.76239315781994, -95.36150769972693],
        img: 'https://i.imgur.com/6eqneAi.png',
        website: 'https://www.google.com/search?q=warrens+houston&oq=warrens+houston&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDQzNDJqMWo0qAIAsAIB&sourceid=chrome&ie=UTF-8',
        description: ['historic bar', 'friendly staff', 'tavern feel']
    },
    // Movie Theaters
    {
        name: 'AMC Willowbrook 24',
        category: 'movies',
        coordinates: [29.95353569926177, -95.54006845262985],
        img: 'https://i.imgur.com/7j18fGs.png',
        website: 'https://www.amctheatres.com/movie-theatres/houston/amc-willowbrook-24',
        description: ['premium seats', 'digital IMAX', 'Dolby Digital']
    },
    {
        name: 'AMC Deerbrook 24',
        category: 'movies',
        coordinates: [30.010016013578735, -95.27108698884724],
        img: 'https://i.imgur.com/hkIrPr8.png',
        website: 'https://www.amctheatres.com/movie-theatres/houston/amc-deerbrook-24',
        description: ['premium seats', 'digital IMAX', 'Dolby Digital']
    },
    {
        name: 'AMC Houston 8',
        category: 'movies',
        coordinates: [29.761902952575078, -95.36625280604103],
        img: 'https://i.imgur.com/Ft6rlvE.png',
        website: 'https://www.amctheatres.com/movie-theatres/houston/amc-houston-8',
        description: ['premium seats', 'digital IMAX', 'Dolby Digital']
    },
    // Music Venues
    {
        name: 'White Oak Music Hall',
        category: 'music',
        coordinates: [29.786245855756498, -95.36701642980238],
        img: 'https://i.imgur.com/lh9c1Eu.png',
        website: 'https://whiteoakmusichall.com/',
        description: ['upstairs room', 'downstairs room', 'lawn shows']
    },
    {
        name: 'House of Blues - Houston',
        category: 'music',
        coordinates: [29.754012620241973, -95.36330400949777],
        img: 'https://i.imgur.com/k5dSSlt.png',
        website: 'https://www.livenation.com/venue/KovZpZAE6k1A/house-of-blues-houston-events?awtrc=true&c=SEM_LNVenuesAutomation_ggl_18519938348_142072537436_house%20of%20blues&GCID=0&gad_source=1&gbraid=0AAAAAC1KtUphGOVv8Rofb-wxM6BpSibhT&gclid=Cj0KCQjwtpLABhC7ARIsALBOCVoSlXtVubE-SSFspbLCjloWham5bis77jY47pOXUM-yH7Rv6b9LRIEaAhEiEALw_wcB&gclsrc=aw.ds',
        description: ['house of blues', 'bronze peacock', 'foundation room']
    },
    {
        name: 'Warehouse Live',
        category: 'music',
        coordinates: [29.746012478013213, -95.3750447679838],
        img: '',
        website: '',
        description: []
    },

    // Parks

    // Photo Opp

    // Unique (nrg, toyota)

    // bookstores

    // markets
]

export default locations;
