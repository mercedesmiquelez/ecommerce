import classes from "./Cart.module.css"
import { useCart } from '../../context/CartContext'
import { Link } from "react-router-dom"
import Item from '../Item/Item'

const Cart = () => {
    const { cart, clearCart, total } = useCart()

    const handleClearCart = (e) => {
        e.stopPropagation()
        clearCart()
    }

    return (
        <div className={classes.ProductStyle}>
            <h1>Mi productos seleccionados</h1>
            <div>
                {
                    cart.map(prod => <Item key={prod.id} {...prod}/>)
                }
            </div>
            <footer className={classes.ProductStyle}>
                {
                    cart.length !== 0 ? 
                    <div className={classes.cartIconPosition}>
                        <h2>Total: ${total}</h2>
                        <Link to='/checkout' className={classes.SimilBoton}>Finalizar Compra</Link>
                        <Link className={classes.comprarmas} to='/'>Seguir comprando</Link>
                        <button onClick={handleClearCart}><img src="../public/basura.png" className={classes.Basura} alt="eliminar compra"/></button>
                    </div> :
                    <>
                        <h2>Su cesta de compras se encuentra vacía</h2>
                        <h3>Vuelva a nuestra tienda para mirar otros productos</h3>
                    </>
                }
            </footer>
        </div>
    )
}

export default Cart
