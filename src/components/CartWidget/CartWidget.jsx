import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <button style={{fontSize:16}}>
            <img src={cart} style={{width:40}} alt="cart-widget" />
            0
        </button>
    )
}

export default CartWidget