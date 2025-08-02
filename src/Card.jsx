import { Link } from 'react-router-dom';
import './NavBar.css';


export default function Card({id,img, price, title, description}) {
    return(
       <Link to={`${id}`} state={{id,img,price,title,description}} >
            <div className='bg-[#e0e1e3] hover:scale-105 transition m-10 shadow-md h-70 w-70 flex flex-col justify-around items-center rounded-4xl '>
            <div style={{ backgroundImage: `url(${img})` }} className="flex-2 bg-cover bg-no-repeat bg-center min-h-[176px] w-full rounded-4xl"></div>
            <div className="flex-1 p-2">
            <p className='text-[1.2rem]  overflow-ellipsis font-bold line-clamp-2'>{title}</p>
            <p className=' text-left w-full'>Price: ${price}</p>
           </div>
        </div>
       </Link>
    )
}