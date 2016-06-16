//1 ) serach string in a an string 
	var str = "Please locate where 'locate' occurs!";
	var pos = str.search("locate");
	//output 7 

//2 
	var str = "apple, peaches, oranges, mangoes";
	var fruitsArray = str.split(",");
	//print fruitsArray[0]: apple

//3 String Builder
   var str = ['A','B','C'].join('');
   		//output :- ABC

 //4 substr()
 	var str = "Apple, Banana, Kiwi";
	var res = str.substr(7,6);
	//output:-  Banana   	

//5 
	var str = "Hello world, welcome to the universe.";
	var n = str.includes("world");
	//OUTPUT true