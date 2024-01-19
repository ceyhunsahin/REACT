export async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

export async function getWeather() {
    const API_key = "b8facdfbb8a5759f15db3bb11e64e453"
    await sleep(3000)
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Ankara&appid=${API_key}`
    )
    if (!res.ok) {
        throw {
            error: "Problem getting weather info",
        }
    }
    const data = await res.json()
    console.log(data)
    return data
}