import './NavBar.css'


export default function SideButtons({info,onClick}) {
    return(
        <button onClick={onClick} className="text-[1.2rem] sm:p-0 p-2 cursor-pointer side-btn bg-gray-100 z-0 border-2 border-black min-h-10 w-full rounded-[0.7rem]">{info}</button>
    )
}