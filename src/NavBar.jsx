import { Search, ShoppingBasket, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import './NavBar.css';



export default function NavBar({info}) {

    return(
        <div className="z-10 sticky top-0  bg-[#d6e3ff87] bg-gradient-to-b from-white to-[#d6e3ff87] backdrop-blur-2xl flex shadow-2xl h-20 w-[100%] justify-between items-center p-[10px]">
            <Link to="/">
                <div className="flex  justify-center items-center">
                <ShoppingBasket className="h-15 w-15"/>
                <h1 className="text-5xl ">Sh<span className=" text-green-800">ib</span>a</h1>
            </div>
            </Link>
            <div className="flex gap-5">
                <Link to="/" className="sm:text-3xl text-2xl animate">Home</Link>
                <Link to="store" className="sm:text-3xl text-2xl animate">Store</Link>
                <Link to="cart" className="flex"><ShoppingCart className="button-animation h-8 w-8" />{info}</Link>
            </div>
        </div>
    )
}