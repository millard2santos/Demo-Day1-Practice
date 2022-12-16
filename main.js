const array = [
    {product: "banana", price: 5},
    {product: "apple", price: 1},
    {product: "orange", price: 8},
    {product: "grapes", price: 10},
    {product: "mango", price: 9},
    ]


const arrayDev = (arr) => {
    let newArray = []
    for (i = 0; i < arr.length ; i++){
        if (arr[i].price > 6){
            newArray.push(arr[i])
        }
    }
    return newArray
}



console.log(arrayDev(array))