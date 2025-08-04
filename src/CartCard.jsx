import { Recycle } from "lucide-react";
import { useOutletContext } from "react-router-dom";


export default function CartCard({id, img, price, title, qnty, clickHandler}) {
    return (
        <div className="flex p-10 gap-5  h-[176px] w-full overflow-hidden justify-between items-center">
            <div className="min-h-[150px] min-w-[150px] bg-no-repeat bg-contain rounded-2xl border-2 border-black bg-center" style={{backgroundImage: `url(${img})`}}></div>
            <div className="flex flex-1 flex-col gap-5">
                <div className="text-2xl ">{title}</div>
                <div className="border-2 text-center w-7 border-black">X{qnty}</div>
                <div className=" flex text-2xl justify-between">Price: <span className="text-green-700 font-bold">${price}</span></div>
            </div>
            <button onClick={clickHandler} data-id={id} className="flex bg-red-500 h-10 w-10 justify-center items-center rounded-full shadow-2xl transition hover:scale-110 cursor-pointer"></button>
        </div>
    )
}