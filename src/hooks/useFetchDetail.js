import { useEffect, useState } from "react";
import { getDetail } from "../helpers/getDetail";


export const useFetchDetail = ( id ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getDetail( id )
            .then( items => {
                setstate({
                    data: items,
                    loading: false
                });
            })

    }, [id]);

    return state;

}