/* eslint-disable no-throw-literal */


export async function getData() {
    const res  = await fetch('https://fakestoreapi.com/products')
    if (!res.ok) {
        throw {
            message : "Something went wrong",
            status : res.status,
            statusText : res.statusText
        }

    }
    const data = await res.json()
    return data
}

export async function getHostData(param) {
    const res  = await fetch(`https://fakestoreapi.com/products/${param}`)
    const data = await res.json()
    return data
}