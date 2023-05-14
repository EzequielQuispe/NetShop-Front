export const CartItem = ({ item, cantidad }) => {
    return (
        <div className="flex items-center space-x-4">
         <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src={item.img} alt="" />
         </div>
         <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
               {item.nombre}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
               Cantidad: {cantidad}
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-gray-400">
            ${item.precio}
         </div>
      </div>
    )
}