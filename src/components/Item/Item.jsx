import classes from './Item.module.css'
import { useNavigate } from "react-router-dom"



const Item = ({ id, name, img, quantity, price }) => {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click en item')
    }

    return (
        <div onClick={handleClick}>
            <h1>{name}</h1>
            <img className={classes.images} src={img}/>
            <p>Cantidad: {quantity}</p>
            <h2>Precio: ${price}</h2>
            <button className={classes.BotonDetalle} onClick={() => navigate(`/item/${id}`)}>Detalle producto</button>
        </div>
    )
}
export default Item
