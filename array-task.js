// 1 task.....
// 1. Declare an array
// 1.Declare an array with 5 elements containing fruits
// 2.console log the 3rd index element
// 3.change the value of the 2nd index element to jambura
// 4.console log the final array

const fruits = ['Apple', 'Orange', 'Banana', 'Aner', 'lico', 'Komla'];
// console.log(fruits[3]);
fruits[2] = 'jambora';
// console.log(fruits);


// 2 task.....
// 2. Add or remove elements
// 1.Declare an array of 3 tourist destinations
// 2.Add a new tourist destination to your tourist array
// 3.Add two more to your array
// 4.Remove the last tourist destination you have added
// 5.display the final array as output

const torist = ['Bandorbon', 'KocBazer', 'Cajek'];

// add 1 element
torist.push('kolkta');
// console.log(torist);

// add 2 element 
torist.push('kasmir', 'tajmohol');
// console.log(torist);

// pop 1 element
torist.pop();
// console.log(torist);

// task 3.....
// 3. Checking Array Membership with ‘includes’
// Instructions:
// 1.Create an array of books containing different book.
// 2.Use the includes method to check if the array contains a javascript book.
// 3.Print a message to the console indicating whether the element is present in the array or not.

const books = ['Bangla', 'Eanglish', 'Math', 'Ecounumich', 'Histre'];

// console.log(books.includes('javacipt'));

if(books.includes('Bangla')){
    // console.log('I am reading a Bangoli book.');
}
else{
    // console.log('I am reading a javacipt book.');
}

// task 4
// 4.Checking if it's an Array
// Instructions:
// 1.Create different variables, each containing either an array or a non-array value.
// 2.Now use isArray to check if each variable is an array.
// 3.Print a message to the console indicating whether each variable is an array or not.

const friends = ['Abul', 'Babul', 'kabul', 'jabul', 'kabul'];
// console.log(Array.isArray(friends));

if(Array.isArray(friends)){
    // console.log('Yes, This is Array.');
}
else{
    // console.log('No, It is not Array.')
}

// task 5
// 5. Combining Arrays
// Instructions:
// 1.Create two arrays of your choice.
// 2.Use the concat method to combine the two arrays into a new array.
// 3.Print both the original arrays and the combined array using console.log().

const firatLine = ['We recite from'];

const listLine = ['the Holy Quran'];

const fulLine = firatLine.concat(listLine);
console.log(fulLine);