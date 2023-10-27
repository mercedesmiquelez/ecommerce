const products = [
    { 
        id: '1', 
        name: 'Sweater tejido', 
        price: 23000, 
        category: 'ropafemenina', 
        img:'/public/images/sweater.jpg', 
        stock: 15, 
        description:'Descripcion de Sweater'
    },
    { 
        id: '2', 
        name: 'Jeans mom', 
        price: 28000, 
        category: 'ropafemenina', 
        img:'/public/images/jeans.jpg', 
        stock: 10, 
        description:'Descripcion de Jeans'
    },
    { 
        id: '3', 
        name: 'Camisa cuadros', 
        price: 15000, 
        category: 'ropamasculina', 
        img:'/public/images/camisa.jpg', 
        stock: 8, 
        description:'Descripcion de Camisa'
    },
    { 
        id: '4', 
        name: 'Jeans standard', 
        price: 45000, 
        category: 'ropamasculina', 
        img:'/public/images/jeans (1).jpg', 
        stock: 12, 
        description:'Descripcion de Jeans'
    },
    { 
        id: '5', 
        name: 'Gorro lana', 
        price: 800, 
        category: 'sectorinfantil', 
        img:'/public/images/gorro.jpg', 
        stock: 5, 
        description:'Descripcion de Gorro'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
