function Buttons(props) {
    const { title, onClick, type } = props

    return (
        <button
            type={type}
            onClick={(event) => onClick(event)}
            className="mx-10 bg-sky-800  hover:bg-sky-500 focus:outline-none  rounded-lg text-xl font-semibold  text-white px-3 py-1 shadow-md"
        >
            {title}
        </button>
    )
}
export default Buttons
