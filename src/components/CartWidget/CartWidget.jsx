import classes from './CartWidget.css'
import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <button>
        <img src={cart} className='btn'/>
            0
        </button>
    )
}

export default CartWidget