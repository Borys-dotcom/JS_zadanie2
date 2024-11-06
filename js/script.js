let stringToChange = "Akademia108";
let orderedString = "";

function orderString(inputString){ 
    return inputString.split('').sort().join('');
}

console.log(orderString(stringToChange));