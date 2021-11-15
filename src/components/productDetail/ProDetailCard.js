import React from 'react'

export const ProDetailCard = ( props ) => {

    
    const { item } = props;

    function formatNumber(price) {
        return new Intl.NumberFormat("es-AR", {
            style: 'currency',
            currency: price.currency
        }).format(price.amount)
    }

    function statusProduct(status) {
        return status === 'new' ? 'nuevo': 'usado';
    }

    return (

        <div className="detailcard">

            <div className="detailcard__header">
                <img src={ item.picture[0].url }  className="detailcard__image" alt={ item.picture[0].url } />
            </div>

            <div className="detailcard__body">
                <span className="detailcard__status">
                    { statusProduct(item.condition)} - {item.sold_quantity} vendidos
                </span>
                <span className="detailcard__title">
                    { item.title }
                </span>
                <span className="detailcard__price">
                    { formatNumber( item.price )} 
                </span>
                <div>
                    <button className="detailcard__buttom">Comprar</button>
                </div>
            </div>
            <div className="detailcard__description">
                <p className="detailcard__description__title">Descripción del producto</p>
                <span className="detailcard__description__desc">
                    { item.description }
                </span>
            </div>

        </div>
    )

}
