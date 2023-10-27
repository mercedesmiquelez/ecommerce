import classes from './Item.css'
import { Link, useNavigate } from "react-router-dom"

const Item = ({ id, name, img, price }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click en item')
    }

    return (
        <div onClick={handleClick} className={`${classes.divs}`}>
            <h1>{name}</h1>
            <img src={img}/>
            <h2>${price}</h2>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}
export default Item