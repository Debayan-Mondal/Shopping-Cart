import { useLocation, useParams } from "react-router-dom"

export default function ProductPage() {
    const location = useLocation();
    const {id,img,price,title,description} = location.state;
    return(
        <>
        <div className="flex flex-col sm:flex-row h-180 w-auto gap-10">
            <div style={{backgroundImage: `url(${img})`}} 
            className="flex-1  border-4 ml-20 mt-20 border-black rounded-3xl bg-contain bg-no-repeat bg-center h-[75%] w-[75%]"></div>
            <div className="flex-1 flex gap-10 flex-col pt-20 pl-10 pr-10">
                <div className="text-4xl ">{title}</div>
                <div className="text-2xl">${price}</div>
                
                <div className="bg-"><h1 className="font-bold text-2xl">Description:</h1>
                {description}
                </div>
                <input type="number" name="quantity" id="quantity" min={'1'} className="border-4  w-50"/>
                <button className=" text-amber-50 self-end hover:scale-110 cursor-pointer transition h-10 w-30 rounded-2xl shadow-md bg-green-700">Buy</button>
            </div>
        </div>
        </>
    )
}