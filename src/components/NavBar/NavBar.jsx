import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3 style={{fontSize:40}}>Indumentaria Blare</h3>
            <div style={{fontSize:20}}>
                <button>Ropa femenina</button>
                <button>Roma masculina</button>
                <button>Sector infantil</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar