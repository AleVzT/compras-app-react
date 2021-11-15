import React from 'react';

export const ProductCard = ( props ) => {

    function formatNumber(price) {
        return new Intl.NumberFormat("es-AR", {
            style: 'currency',
            currency: price.currency
        }).format(price.amount)
    }

    return (
        <div className="procard">

            <div className="procard__header">
                <img width="160" height="160" src={ props.picture }  className="procard__image" alt={ props.picture }/>
            </div>

            <div className="procard__body">
                <h2 className="procard__title">
                    { formatNumber( props.price )} 
                    { props.free_shipping &&
                        <div className="procard__shipping">
                            <i className="fa fa-truck procard__icon"></i>
                        </div>
                    }
                </h2>
                <p className="procard__intro">
                    { props.title } 
                </p>
            </div>
            <div className="procard__location">
                <span>
                    { props.address?.name }
                </span>
            </div>

        </div>
    )
}
