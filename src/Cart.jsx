import { useOutletContext } from "react-router-dom"
import CartCard from "./CartCard";
import { Frown } from "lucide-react";

export default function Cart() {
    const [cart, setCart] = useOutletContext();
    const clickHandler = (event) => {
        console.log(event.target.dataset.id);
        const newCart = cart.filter(element => element.id != event.target.dataset.id);
        setCart(newCart);    
    }
    let sum = 0;
    let dis = 0;
    if(cart.length !== 0) {
        sum = cart.reduce((sum, element) => {
        return sum + element.price;
    },0)
    sum = sum.toFixed(2);
    dis = 15;
    }
    console.log(cart);

    return(
        <div className="flex sm:flex-row flex-col bg-[#f6f6f6]  gap-10 sm:p-20 p-10">
            <div className="flex flex-1 flex-col items-center sm:overflow-hidden overflow-x-scroll h-[1000px] w-full bg-[#fdfdfd] shadow-2xl 
            rounded-2xl p-10">
                <h1 className="text-4xl self-start font-bold">My Cart:</h1>
               {(cart.length !== 0)?cart.map(element => <CartCard clickHandler={clickHandler} key={element.id} id={element.id} img={element.img} price={element.price} title={element.title} qnty={element.qnty}/>): <h1 className="text-2xl">Empty</h1>}
            </div>
            <div className="flex flex-col h-[500px] sm:w-[30%] w-full  rounded-2xl 
                shadow-2xl bg-[#fdfdfd] gap-5 p-10">
                    <h1 className="text-black text-4xl font-bold">Order Sumary</h1>
                    <div className="flex text-[1.5rem] justify-between"><span>Subtotal</span><span>${sum}</span></div>
                    <div className="flex text-[1.5rem] justify-between"><span>Discount</span><span>-${dis}</span></div>
                    <div className="flex text-[1.5rem] justify-between"><span>Delivery</span><span>$0</span></div>
                    <div className="border-b-2 border-[#dddddd] "></div>
                    <div className="flex text-[1.5rem] justify-between"><span>Total</span><span className="text-green-700">${(sum-dis).toFixed(2)}</span></div>
                    <button  className="h-14 w-full cursor-pointer hover:scale-110 transition
                         text-white text-[1.2rem] translate-z-0 rounded-[0.7rem] bg-black">Proceed to Checkout</button>
                </div>
        </div>
    )
}