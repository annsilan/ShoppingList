import { Button } from "primereact/button"
import "primeicons/primeicons.css"
// import Buttons from "components/Button"

function Product(props) {
    const { product, deleteProduct, updateProducts } = props

    return (
        <div className="px-16 py-7  flex aling-center justify-between hover:bg-sky-100 ">
            <p className=" text-xl font-semibold ">{product.name}</p>
            <div>
                <button
                    onClick={() => updateProducts(product.id)}
                    className="mx-10 bg-sky-800  hover:bg-sky-500 focus:outline-none  rounded-lg text-xl font-semibold  text-white px-3 py-1 shadow-md"
                >
                    {product.isAdded === true ? "Добавлено!" : "В корзину"}
                </button>

                <Button
                    icon="pi pi-trash"
                    style={{ hover: "2rem" }}
                    onClick={() => deleteProduct(product.id)}
                />
            </div>
        </div>
    )
}
export default Product
