// const products = [
//     { 
//         id: '1', 
//         name: 'Sweater tejido', 
//         price: 23000, 
//         category: 'ropafemenina', 
//         img:'/public/images/sweater.jpg', 
//         stock: 15, 
//         description:'Sweater tejido de muy buena calidad'
//     },
//     { 
//         id: '2', 
//         name: 'Jeans mom', 
//         price: 28000, 
//         category: 'ropafemenina', 
//         img:'/public/images/jeans.jpg', 
//         stock: 10, 
//         description:'Jeans fit tiro bajo'
//     },
//     { 
//         id: '3', 
//         name: 'Camisa cuadros', 
//         price: 15000, 
//         category: 'ropamasculina', 
//         img:'/public/images/camisa.jpg', 
//         stock: 8, 
//         description:'Camisa a cuadros slim fit'
//     },
//     { 
//         id: '4', 
//         name: 'Jeans standard', 
//         price: 45000, 
//         category: 'ropamasculina', 
//         img:'/public/images/jeans (1).jpg', 
//         stock: 12, 
//         description:'Jeans standard tiro medio'
//     },
//     { 
//         id: '5', 
//         name: 'Gorro lana', 
//         price: 800, 
//         category: 'sectorinfantil', 
//         img:'/public/images/gorro.jpg', 
//         stock: 5, 
//         description:'Gorro de lana de diferentes colores'
//     },
// ]

// export const getProducts = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products)
//         }, 500)
//     })
// }

// export const getProductById = (id) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.find(prod => prod.id === id))
//         }, 500)
//     })
// }

// export const getProductsByCategory = (categoryId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.filter(prod => prod.category === categoryId))
//         }, 500)
//     })
// }
