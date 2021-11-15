export const getSearch = async( search ) => {

    const url = `http://localhost:8080/api/items?q=${ search }`;
    const resp = await fetch( url );
    const data = await resp.json();

    return data;

}