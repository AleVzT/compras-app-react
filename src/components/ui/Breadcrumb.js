import React from 'react';

const BreadcrumbCategories = (props) => {
    
    function isLast(index) {
        return index === props.crumbs.length - 1;
    }
    
    return (
        <nav>
            <ol className="breadcrumb">
            {
                props.crumbs.map((crumb, ci) => {
                
                    return (
                        <>
                            <span className="breadcrumb__txt">{ crumb }</span>{ !isLast(ci) && <i className="fa fa-angle-right"></i> }
                        </>
                    );
                })
            }
            </ol>
        </nav>
    );
}

export default BreadcrumbCategories


