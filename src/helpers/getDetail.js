export const getDetail = async( id ) => {

    const url = `http://localhost:8080/api/items/${ id }`;
    const resp = await fetch( url );
    const data = await resp.json();

    return data;

}