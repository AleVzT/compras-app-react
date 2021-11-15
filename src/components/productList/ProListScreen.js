import React, { useState } from 'react';
import queryString from 'query-string';
import { Link, useLocation} from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { useFetchSearch } from '../../hooks/useFetchSearch';
import BreadcrumbCategories from '../ui/Breadcrumb';

export const ProListScreen = () => {

    const [currentPage, setCurrentPage] = useState(0);

    const location = useLocation();
    const { search = '' } = queryString.parse( location.search );

    const { data: items, loading, categories } = useFetchSearch( search );

    const filteredItems = () => {
        return items.slice(currentPage , currentPage + 4);
    }

    const nextPage = () => {
        if(items.length > (currentPage + 4))
            setCurrentPage( currentPage + 4);
    }

    const prevPage = () => {
        if ( currentPage > 0)
            setCurrentPage( currentPage - 4);
    }

    return (
        <div className="main">
            { loading ? 
                <p>Cargando...</p> 
                :
                <div>
                    <BreadcrumbCategories crumbs ={ categories }/>
                    {
                        filteredItems().map( (item, index) => (
                            <Link className='text-link' to={`/items/${ item.id }`}>
                                <ProductCard 
                                        key={ index }
                                        { ...item }
                                />
                            </Link>
                        ))
                    }
                    { items.length > 4 &&
                        <div className="prolist">
                            <button
                                className="prolist__btn"
                                onClick={ prevPage }
                            >anterior</button>
                            &nbsp;
                            <button
                                className="prolist__btn"
                                onClick={ nextPage }
                            >siguiente</button>
                        </div>
                    }
                </div>
            }
        </div>
    )
}
