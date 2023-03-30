import './CartWidget.css'

export const CartWidget = () => {

    const icon = 'https://cdn-icons-png.flaticon.com/512/1413/1413908.png'

    return(
        <div>
            <img className="imgCart" src={icon} alt=""/>
            <strong>3</strong>
        </div>
    )
}