import { useEffect, useState } from "react";
import "./NavBar.css";
import SideButtons from "./SideButtons";
import Card from "./Card";
import Loader from "./Loader";


export default function Store() {
    const [storeData, setStoreData] = useState(null);
    const [category, setCategory] = useState("All");
    const [isAll, setAll] = useState(true);
    useEffect(() => {
        async function fakeapi() {
            const respone = await fetch('https://fakestoreapi.com/products');
            const data = await respone.json();
            setStoreData(data);

        }
        fakeapi();
    },[])
    
    const clickAllHandler = () => {
        setCategory(null);
        setAll(true);
    }

    const clickHandler = (event) => {
        setCategory(event.target.textContent.toLowerCase());
        setAll(false);
    }
    let filteredData=[];
    if(storeData != null) {
        filteredData = storeData.filter(element => element.category == category || isAll);
    }
    
    console.log(filteredData);
    return(
        <div className="flex ">
            <div className="flex flex-col gap-10 flex-1 bg-[#d6e3ff] h-[auto] sm:min-w-[250px] max-w-[250px] p-2">
                <SideButtons onClick={clickAllHandler} info={"All"} />
                <SideButtons onClick={clickHandler} info={"Men's Clothing"} />
                <SideButtons onClick={clickHandler} info={"Women's Clothing"} />
                <SideButtons onClick={clickHandler} info={"Jewelery"} />
                <SideButtons onClick={clickHandler} info={"Electronics"} />
            </div>
            <div className="flex flex-wrap justify-center items-center">
                 {storeData ? (
                    filteredData.map(element => (
                        <Card key={element.id} description={element.description} id={element.id} img={element.image} price={element.price} title={element.title} />
                    ))
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    )
}