//arrayFunction
//1) Inverting a string 
//cArray.from(str) is functionally equivalent to str.split(“”),
	function strReverse(str){
   		return Array.from(str).reverse().join("");
   	};
	console.log(strReverse("JavaScript")) 
	//output : tpircSavaJ

//2 loop 
    var colors = ["red","orange","yellow","green","blue","violet"];
	colors.forEach(
    	function(obj,key){
        console.log(key+": "+obj)
    	}
	)
	//output:-
	// 0: red
	// 1: orange
 	// 2: yellow
 	// 3: green
 	// 4: blue
 	// 5: violet

//3
/* on the other hand, you want to chain functions together, a more useful Array function is the map() function, 
which takes the output of each function and adds it to a new array.*/
	colors.map(
    	function(obj,index){
        return obj[0].toUpperCase() + obj.substr(1);
        }
    )
    //output ["Red", "Orange", "Yellow", "Green", "Blue", "Violet"]

//4 Using arrays to clean up “dirty” text
  	var data = [10,12,5,9,22,18,null,21,17,null,3,12];
	data.filter(
    	function(obj,index){
        return obj != null
    	}
	)   
//output  :- [10, 12, 5, 9, 22, 18, 21, 17, 3, 12]

//5 Use find() to get the first item that satisfies a predicate.
	var data = [10, 12, 5, 9, 22, 18, 21, 17, 3, 12];
	data.find((item) => item>10);
	//output 12

//6 that if you wanted to get all items where this condition is true then simply use a filter
	var data = [10, 12, 5, 9, 22, 18, 21, 17, 3, 12];
	data.filter((item) => (item>10))
 //output :-  [12, 22, 18, 21, 18, 12]

//7 Array to CSV in JavaScript
	var fruits = ['apple', 'peaches', 'oranges', 'mangoes'];
	var str = fruits.valueOf();
	//print str: apple,peaches,oranges,mangoes 

//8 pop one element
 	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.pop();              // Removes the last element ("Mango") from fruits

//9 push one element 
 	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits	

//10 
  	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits	