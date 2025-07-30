import { Search, ShoppingBasket, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import './NavBar.css';


export default function NavBar() {
    return(
        <div className="z-10 sticky top-0 bg-white flex shadow-2xl h-20 w-full justify-between items-center pl-[30px] pr-[30px]">
            <div className="flex justify-center items-center">
                <ShoppingBasket className="h-15 w-15"/>
                <h1 className="text-4xl ">Sh<span className=" text-green-800">ib</span>a</h1>
            </div>
            <div className="flex gap-5">
                <Link to="/" className="text-3xl animate">Home</Link>
                <Link to="store" className="text-3xl animate">Store</Link>
                <Link to="store"><ShoppingCart className="button-animation h-8 w-8" /></Link>
            </div>
        </div>
    )
}