// customIcons.js
import { renderToStaticMarkup } from 'react-dom/server';
import { FaIceCream, FaCocktail } from 'react-icons/fa';
import { FaBurger, FaHotdog, FaPizzaSlice, FaBook, FaBagShopping, FaMusic } from 'react-icons/fa6';
import { MdRamenDining } from "react-icons/md";
import { GiDonut, GiChickenOven, GiDumplingBao, GiBowlOfRice, GiSadCrab, GiSushis, GiTacos } from "react-icons/gi";
import { LuSandwich } from "react-icons/lu";
import { IoIosBowtie } from "react-icons/io";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { RiTreeFill } from "react-icons/ri";
import { PiFilmReelFill } from "react-icons/pi";

const makeSvgDataUrl = (icon) =>
    `data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(icon))}`;

export const icons = {
    // Restaurants
    burgers: makeSvgDataUrl(<FaBurger size={38} color="#cc5500" />),
    breakfast: makeSvgDataUrl(<GiDonut size={38} color="#cc5500" />),
    chicken: makeSvgDataUrl(<GiChickenOven size={38} color="#cc5500" />),
    dessert: makeSvgDataUrl(<FaIceCream size={38} color="#cc5500" />),
    dumplings: makeSvgDataUrl(<GiDumplingBao size={38} color="#cc5500" />),
    hotdogs: makeSvgDataUrl(<FaHotdog size={38} color="#cc5500" />),
    pizza: makeSvgDataUrl(<FaPizzaSlice size={38} color="#cc5500" />),
    ramen: makeSvgDataUrl(<MdRamenDining size={38} color="#cc5500" />),
    rice: makeSvgDataUrl(<GiBowlOfRice size={38} color="#cc5500" />),
    sandwiches: makeSvgDataUrl(<LuSandwich size={38} color="#cc5500" />),
    seafood: makeSvgDataUrl(<GiSadCrab size={38} color="#cc5500" />),
    sushi: makeSvgDataUrl(<GiSushis size={38} color="#cc5500" />),
    tacos: makeSvgDataUrl(<GiTacos size={38} color="#cc5500" />),
    upscale: makeSvgDataUrl(<IoIosBowtie size={38} color="#cc5500" />),
    foodhalls: makeSvgDataUrl(<HiMiniBuildingLibrary size={38} color="#cc5500" />),

    // Activites
    bar: makeSvgDataUrl(<FaCocktail size={38} color="#00008B" />),    
    books: makeSvgDataUrl(<FaBook size={38} color="#AA336A" />),
    market: makeSvgDataUrl(<FaBagShopping size={38} color="#C19A6B" />),
    movies: makeSvgDataUrl(<PiFilmReelFill size={38} color="#000000" />),
    music: makeSvgDataUrl(<FaMusic size={38} color="#2E8B57" />),
    parks: makeSvgDataUrl(<RiTreeFill size={38} color="green" />),

    // Custom
};

export default icons;