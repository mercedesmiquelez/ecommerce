import classes from './ContactForm.module.css'
import { useState } from "react"

const ContactForm = ({ onCreate }) => {
    const [Name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate({ Name, lastName, email, phoneNumber })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.formStyle}><input value={Name} placeholder="Nombre" onChange={(e) => setName(e.target.value)} /></div>
            <div className={classes.formStyle}><input value={lastName} placeholder="Apellido" onChange={(e) => setLastName(e.target.value)} /></div>
            <div className={classes.formStyle}><input value={email} placeholder="Correo electronico" onChange={(e) => setEmail(e.target.value)} /></div>
            <div className={classes.formStyle}><input value={phoneNumber} placeholder="Telefono" onChange={(e) => setPhoneNumber(e.target.value)} /></div>
            <div className={classes.formStyle}><input type="submit" value="Generar orden de compra" /></div>
        </form>
    )
}

export default ContactForm