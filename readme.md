# My Houston Picks

Static website designed to share my favorite places in Houston, Texas.
hosted @ https://houstonpicks.netlify.app

Using React, Leaflet, CSS, & Slugify

## Restaurants

- Bakeries
- BBQ
- Burgers
- Burritos
- Breakfast
- Chicken
- Crawfish
- Dessert
- Dumplings
- Hotdogs
- Pasta
- Pho
- Pizza
- Poke
- Ramen
- Rice Bowl
- Salads
- Sandwiches
- Seafood
- Soup
- Steakhouses
- Sushi
- Tacos
- Upscale
- Food Halls

## Activities

- Attractions
- Bars & Lounges
- Bookstores & Libraries
- Coffee, Tea, & Boba
- Daiquiri Shops
- Markets
- Museums
- Movie Theaters
- Music Venues
- Parks
- Photo Opps

## Logic

### Adding a location
1. locations object

| key | value type |
| ------ | ----- |
| name | string |
| category | string| 
| subcategory | array of strings|
| badges | array of strings |
| coordinates | array of 2 numbers (x, y) |
| neighborhood | string |
| img | string |
| website | string |
| blurb | string |
| description | array of strings |

* subcategory[0] defines map icon
* badges should follow badge order on src/data/badges
* description should include recs or important details