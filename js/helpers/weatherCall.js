const URL_API = `https://api.openweathermap.org/data/2.5/`,
    KEY = `1c0d9f226cff71f2d16a5976b47e3b9f`;

export async function getWeatherByName(city){
    const response = await fetch(`${URL_API}weather?q=${city}&appid=${KEY}`);
    if (!response.ok) {
        throw new Error("Something went wrong")
    }
    const data = await response.json();
    return data;
}

export async function getWeatherByCoords(lat, lon){
    const response = await fetch(`${URL_API}weather?lat=${lat}&lon=${lon}&appid=${KEY}`);
    if (!response.ok) {
        throw new Error("Something went wrong")
    }
    const data = await response.json();
    return data;
}

export async function getWeeklyWeatherByCoords(lat, lon){
    const response = await fetch(`${URL_API}onecall?lat=${lat}&lon=${lon}&appid=${KEY}`);
    if (!response.ok) {
        throw new Error("Something went wrong")
    } 
    const data = await response.json();
    return data;
}