import Swal from 'sweetalert2'

export const AddItemNotification = () => {
    Swal.fire({
        title: 'Producto agregado a la cesta',
        position: 'center',
        timer: 2000,
        icon: "success",
        confirmButtonColor: "#588157"
    });
}
