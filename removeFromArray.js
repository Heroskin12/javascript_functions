const removeFromArray = function(array, number) {
    let confirm = Array.isArray(array);
    if (confirm !== true) return "ERROR";
    const newArray = [];
    
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === arguments[i]) {
                newArray = array.splice(j, 1);
            }
        }
    }

    return array;
};