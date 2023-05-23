import Header from "components/Header"
import "./App.css"
import { useState } from "react"
import Search from "components/Search"
import Footer from "components/Footer"
import Product from "components/Products"
// import { Button } from 'primereact/button';
import "primeicons/primeicons.css"

function App() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Молоко",
            isAdded: false
        },
        {
            id: 2,
            name: "Хлеб",
            isAdded: false
        },
        {
            id: 3,
            name: "Авокадо",
            isAdded: false
        },
        {
            id: 4,
            name: "Манго",
            isAdded: false
        },
        {
            id: 5,
            name: "Йогурт",
            isAdded: false
        }
    ])

    const deleteProduct = (id) => {
        const filteredProduct = products.filter((product) => product.id !== id)
        setProducts(filteredProduct)
    }

    const addProduct = (product) => {
        setProducts([...products, product])
    }

    const updateProducts = (id) => {
        const items = products.map((item) => {
            if (item.id === id) {
                return { ...item, isAdded: !item.isAdded }
            } else {
                return item
            }
        })
        setProducts(items)
    }

    return (
        <div className="font-serif text-sky-800 bg-sky-50 max-w-4xl m-auto">
            <Header />
            <Search addProduct={addProduct} />
            <div className="min-h-screen">
                {products.length === 0 && (
                    <div className=" text-xl text-center pt-32">
                        Нет добавленных товаров
                    </div>
                )}
                {products.length > 0 &&
                    products.map((product) => {
                        return (
                            <Product
                                key={product.id}
                                product={product}
                                deleteProduct={deleteProduct}
                                updateProducts={updateProducts}
                            />
                        )
                    })}
            </div>
            <Footer />
        </div>
    )
}

export default App
