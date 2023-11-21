import classes from './ItemCount.module.css'
import { useCount } from "../../hooks/useCount"

const ItemCount = ({ onAdd, stock }) => {
    const { count, decrement, increment } = useCount((stock>0 ? 1 : 0), stock)


    return (
        <>
            <h1>{count}</h1>
            <button className={classes.niceButton} onClick={decrement}>-</button>
            <button className={classes.niceButton} onClick={increment}>+</button>
            <button className={classes.niceButton} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount