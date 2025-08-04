import { useEffect, useState } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom"

export default function ProductPage() {
    const location = useLocation();
    const {id,img,price,title,description} = location.state;
    const [qnty, setQnty] = useState(1);
    const [cart, setCart] = useOutletContext();
    const handleChange = (event) => {
        setQnty(parseInt((event.target.value)));
    }
    const onClick = () => {
        const isExist = cart.find(element => element.id == id);
        if(isExist) {
            const newList = cart.map(element => {
                if(element.id == isExist.id) {
                    return {...element, qnty: qnty};
                }
                return element;
            })
            setCart(newList);
        } else {
            setCart([...cart, {id,img,price,title, qnty: qnty}]);
        }
        
    }

    return(
        <>
        <div className="flex flex-col sm:flex-row h-180 w-auto gap-10">
            <div style={{backgroundImage: `url(${img})`}} 
            className="flex-1 min-h-[200px] border-4 ml-20 mt-20 border-black rounded-3xl bg-contain bg-no-repeat bg-center h-[75%] w-[75%]"></div>
            <div className="flex-1 flex gap-10 flex-col pt-20 pl-10 pr-10">
                <div className="text-4xl ">{title}</div>
                <div className="text-2xl">${price}</div>
                
                <div className="bg-"><h1 className="font-bold text-2xl">Description:</h1>
                {description}
                </div>
                <input type="number" name="quantity" onChange={handleChange} id="quantity" min={1} value={qnty} className="border-4  w-50"/>
                <button onClick={onClick} className=" text-amber-50 self-end active:scale-90 hover:scale-110 cursor-pointer transition h-10 w-30 rounded-2xl shadow-md bg-green-700">Buy</button>
            </div>
        </div>
        </>
    )
}