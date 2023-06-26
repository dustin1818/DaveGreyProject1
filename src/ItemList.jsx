import React from "react"

const ItemList = ({data}) => {
  return (
    <div className="mt-5">
        {data.map((json,index) =>
        <ul key={index}>
            <li className="mb-3">{JSON.stringify(json)}</li>
        </ul>
        )}
    </div>
  )
}

export default ItemList