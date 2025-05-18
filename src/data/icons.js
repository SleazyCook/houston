// customIcons.js

import { renderToStaticMarkup } from 'react-dom/server';
import { BsJoystick, BsCameraFill } from "react-icons/bs";
import { FaIceCream, FaCocktail} from 'react-icons/fa';
import { FaBurger, FaHotdog, FaPizzaSlice, FaBook, FaBagShopping, FaMusic } from 'react-icons/fa6';
import { GiDonut, GiChickenOven, GiDumplingBao, GiBowlOfRice, GiSadCrab, GiSushis, GiTacos, GiSoccerBall, GiBasketballBall, GiTigerHead, GiAmericanFootballBall, GiSausage } from "react-icons/gi";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { IoIosBowtie } from "react-icons/io";
import { LuSandwich, LuFerrisWheel } from "react-icons/lu";
import { MdRamenDining, MdTheaterComedy, MdMuseum } from "react-icons/md";
import { PiFilmReelFill, PiCatFill, PiBaseballHelmetFill  } from "react-icons/pi";
import { RiTreeFill } from "react-icons/ri";
import { SiBuymeacoffee } from "react-icons/si";

const makeSvgDataUrl = (icon) =>
    `data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(icon))}`;

export const icons = {
    // Restaurants
    bbq: makeSvgDataUrl(<GiSausage size={38} color="#cc5500" />),
    burgers: makeSvgDataUrl(<FaBurger size={38} color="#cc5500" />),
    breakfast: makeSvgDataUrl(<GiDonut size={38} color="#cc5500" />),
    chicken: makeSvgDataUrl(<GiChickenOven size={38} color="#cc5500" />),
    dessert: makeSvgDataUrl(<FaIceCream size={38} color="#cc5500" />),
    dumplings: makeSvgDataUrl(<GiDumplingBao size={38} color="#cc5500" />),
    hotdogs: makeSvgDataUrl(<FaHotdog size={38} color="#cc5500" />),
    pho: makeSvgDataUrl(<MdRamenDining size={38} color="#cc5500" />),
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
    coffee: makeSvgDataUrl(<SiBuymeacoffee size={38} color="#A52A2A" />),
    market: makeSvgDataUrl(<FaBagShopping size={38} color="#C19A6B" />),
    movies: makeSvgDataUrl(<PiFilmReelFill size={38} color="#000000" />),
    museums: makeSvgDataUrl(<MdMuseum size={38} color="#800020" />),
    music: makeSvgDataUrl(<FaMusic size={38} color="#2E8B57" />),
    parks: makeSvgDataUrl(<RiTreeFill size={38} color="green" />),
    photo: makeSvgDataUrl(<BsCameraFill size={38} color="#000000" />),

    // Custom
    soccer: makeSvgDataUrl(<GiSoccerBall size={38} color="#222222"  />),
    baseball: makeSvgDataUrl(<PiBaseballHelmetFill size={38} color="#222222"  />),
    kemah: makeSvgDataUrl(<LuFerrisWheel size={38} color="#222222"  />),
    gokart: makeSvgDataUrl(<BsJoystick size={38} color="#222222"  />),
    meow: makeSvgDataUrl(<PiCatFill size={38} color="#222222"  />),
    basketball: makeSvgDataUrl(<GiBasketballBall size={38} color="#222222"  />),
    zoo: makeSvgDataUrl(<GiTigerHead size={38} color="#222222"  />),
    comedy: makeSvgDataUrl(<MdTheaterComedy size={38} color="#222222"  />),
    football: makeSvgDataUrl(<GiAmericanFootballBall size={38} color="#222222"  />),
    
};

export default icons;