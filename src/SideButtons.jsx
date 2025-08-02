import './NavBar.css'


export default function SideButtons({info,onClick}) {
    return(
        <button onClick={onClick} className="text-[1.4rem] cursor-pointer side-btn bg-gray-100 z-0 border-2 border-white h-10 w-full rounded-2xl">{info}</button>
    )
}