import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

import './NavBar.css'

const NavBar = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handlesSubmit = (e) => {
        e.preventDefault()
        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <BiCameraMovie></BiCameraMovie> Movies
                </Link>
            </h2>
            <form onSubmit={handlesSubmit}>
                <input 
                type="text" 
                placeholder="Busque um filme" 
                onChange={(e) => setSearch(e.target.value)} 
                value={search}
                />
                <button type="submit">
                    <BiSearchAlt2></BiSearchAlt2>
                </button>
            </form>
        </nav>
    )
}

export default NavBar