const reverseString = function(string) {
    let arr = [];
    for (let i = 0; string.length >= i; i++) {
        arr[i] = string.charAt(string.length-i);
    }
    
    let newString = ""
    for (let i = 0; i < arr.length; i++) {
        newString = newString + arr[i];
    }
    return newString;
};