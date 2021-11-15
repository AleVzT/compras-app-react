import React from 'react';
import { useParams } from 'react-router';

import { useFetchDetail } from '../../hooks/useFetchDetail';
import { ProDetailCard } from './ProDetailCard';

export const ProDetailScreen = () => {

    const { id } = useParams();

    const { data, loading} = useFetchDetail( id );

    return (
        <div className="main">
            { loading ?
                <p>Cargando...</p> 
                :
                <div>
                    <ProDetailCard {...data} />
                </div>
            }

        </div>
    )
}
