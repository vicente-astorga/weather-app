

export default function capitalize(string) {
    // string: rute || rute-two
    let id = 0, word = "", result = "", splitString = string.split("-");
    splitString.forEach(e => {
        
        // age > 18 ? location.assign("continue.html") : stop = true;
        let capital = e.charAt(0).toUpperCase();
        let rest = e.substring(1);
        let completeWord = capital + rest;
        
        id > 0 ? word = " " + completeWord : word = completeWord;
        result += word;
        
        id += 1;
    });

    return result;

}