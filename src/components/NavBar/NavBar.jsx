import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className={classes.container}>
            <h1 onClick={() => navigate('/')}>Indumentaria Blare</h1>
            <section className={classes.choices}>
                <NavLink to='/category/ropafemenina' className={({ isActive }) => isActive ? classes.active : ''}>Ropa femenina</NavLink>
                <NavLink to='/category/ropamasculina' className={({ isActive }) => isActive ? classes.active : ''}>Ropa masculina</NavLink>
                <NavLink to='/category/sectorinfantil' className={({ isActive }) => isActive ? classes.active : ''}>Sector infantil</NavLink>
            </section>
            <CartWidget />
        </nav>
    )
} 

export default Navbar