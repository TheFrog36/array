const array_of_numbers = [1, 4, 5, 2, 24];
array_of_numbers.push(3)
array_of_numbers.unshift(37)
console.log(array_of_numbers)
const element = array_of_numbers.pop() // pop rimuove l'ultimo elemento
const element_2 = array_of_numbers.shift() // shift rimuove il primo elemento
console.log(element)
console.log(element_2)
console.log(array_of_numbers);
console.log('il terz0 elemento è', array_of_numbers[2])
array_of_numbers[3] = 1342
console.log('ho modificato il quarto elemento', array_of_numbers)

for(let i = 0; i < array_of_numbers.length; i++){
    const item  = array_of_numbers[i];
    console.log(i, item);
}

for (const item of array_of_numbers) {
    console.log('forof', item)
}

function max_num(our_array){
    let max_number = our_array[0]  //posso inserire anche -infinity come primo valore 
    for (const item of our_array) {
        if(item > max_number) max_number = item;
    }
    return max_number
}
console.log("il numer o più grande è", max_num(array_of_numbers))

function new_array_plus_1(my_array){
    const new_array = []
    for (const item of my_array) {
        new_array.push(item + 1)
    }
    return new_array
}
console.log('array vecchio aumentato di 1', new_array_plus_1(array_of_numbers))

function find_even(my_array){
    const even_array = []
    for (const item of my_array) {
        if(!(item % 2)) even_array.push(item)
    }
    return even_array
}
console.log('array con solo numeri pari', find_even(array_of_numbers))

function sumAll(my_array){
    let tot = 0;
    for (const iterator of my_array) {
        tot += iterator
    }
    return tot
}
console.log(sumAll(array_of_numbers))