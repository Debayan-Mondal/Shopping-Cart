import './NavBar.css'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
            <div className="hero-image h-183 w-full
            bg-[url('https://images.unsplash.com/photo-1532781914607-2031eca2f00d?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
            bg-no-repeat bg-cover bg-top">
                <Link to="store"><button className="explore-btn text-2xl text-white rounded-2xl border-3 border-white h-15 w-40 
                absolute bottom-10 left-10 z-0 cursor-pointer">Explore</button></Link>
            </div>
    )
}