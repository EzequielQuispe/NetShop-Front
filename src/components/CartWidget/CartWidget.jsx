import './CartWidget.css'

export const CartWidget = () => {

    const icon = 'https://cdn-icons-png.flaticon.com/512/1413/1413908.png'

    return(
        <div className="box text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm">
            <img className="imgCart" src={icon} alt=""/>
            <strong>3</strong>
        </div>
    )
}