import classes from './CartWidget.module.css'
import cart from '../../../public/shopping-cart-icon.svg'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'


const CartWidget = () => {
    const { totalQuantity } = useCart()

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('./cart')}>
        <img className={classes.ImgCart} src={cart} alt="carrito de compras"/>
            {totalQuantity}
        </button>
    )
}

export default CartWidget