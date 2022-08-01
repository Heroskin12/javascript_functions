const repeatString = function(str, num) {
    let string = "";
    if (num < 0) return "ERROR";
    for (let i = 0; i < num; i++) {
        string = str + string;
    }
    return string;

};