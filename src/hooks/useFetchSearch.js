import { useEffect, useState } from "react";
import { getSearch } from '../helpers/getSearch';


export const useFetchSearch = ( search ) => {

    const [state, setstate] = useState({
        data: [],
        categories: [],
        loading: true
    });

    useEffect( () => {

        getSearch( search )
            .then( item => {
                setstate({
                    data: item.items,
                    categories: item.categories,
                    loading: false
                });
            })

    }, [search]);

    return state;

}


