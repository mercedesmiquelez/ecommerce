import classes from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'

import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {

    const { addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {  
        const productToAdd = {
            id, name, price, quantity, img
        }

        addItem(productToAdd)
    }

    return (
        <article className={classes.ItemDetailClass}>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section className={classes.ItemDetailPrice}>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <h1>
                    Precio: $ {price}
                </h1>
                <p>
                    Stock: {stock}
                </p>
            </section>           
            <footer className={classes.ItemDetailFooter}>
                <div className={classes.Items}>
                {
                    isInCart(id) ? (
                        <Link to='/cart'>Finalizar Compra</Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                </div>
                <div className={classes.Items}>
                <Link to='/' className={classes.seguirComprando}>Seguir comprando</Link>
                </div>
            </footer>
        </article>
    )
}

export default ItemDetail