import Buttons from "components/Button"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

function Search({ addProduct }) {
    
    const [name, setName] = useState("")

    const onClick = (event) => {
        event.preventDefault()

        const newProduct = {
            id : uuidv4(),
            name
        }
        addProduct(newProduct)
        
        setName("")
    }

    return (
        <div className="my-8 flex justify-center">
            <form>
                <input
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    name="name"
                    type="text"
                    className="pl-2 border-solid border-2 rounded-md border-blue-200 hover:border-blue-400  focus:outline-none  focus:border-blue-400 "
                ></input>
                <Buttons title="Добавить" onClick={onClick} type="submit" />
            </form>
        </div>
    )
}
export default Search
