export default function degConversion(kelvin, targetDeg){
    if( targetDeg === "C"){
        let celsius = Math.round(kelvin -273.15)
        return celsius;
    } else if( targetDeg === "F"){
        let farenheit = Math.round(((kelvin-273.15)*1.8)+32)
        return farenheit;
    }
}