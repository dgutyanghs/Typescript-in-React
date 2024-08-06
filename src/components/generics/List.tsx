type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}

export const List  = <T extends {}>({items, onClick}: ListProps<T>) => {
    return (
        <div>
            <h2>list of items</h2>
            {items.map((item,index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {JSON.stringify(item)}
                    </div>
                )
            })}
        </div>
    )
}

// type ListProps<T> = {
//     items: T[]
//     onClick: (value: T) => void
//     renderItem: (item: T) => React.ReactNode
// }

// export const List  = <T extends {id: string | number}>({items, onClick, renderItem}: ListProps<T>) => {
//     return (
//         <div>
//             <h2>list of items</h2>
//             {items.map((item,index) => {
//                 return (
//                     <div key={item.id} onClick={() => onClick(item)}>
//                         {renderItem(item)}
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }