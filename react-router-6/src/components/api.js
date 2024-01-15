/* eslint-disable no-throw-literal */




export async function getData(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}


export async function getHostData(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    
    const res = await fetch(url)
    console.log("buradaki res ne", res)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    console.log("res", res)
    const data = await res.json()
    console.log("data", data)
    return data.vans
}


export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    console.log("res bu login icin", res)
    const data = await res.json()

    console.log("eeburda bisey olmuyor mu", data)


    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}