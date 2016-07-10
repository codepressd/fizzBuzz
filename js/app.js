$(document).ready(function(){

	var currNum = 0;

	for(var i = 0; i < 100; i++){

		currNum = currNum + 1; //+= wasn't working for some reason???

		if(currNum % 3 == 0 && currNum % 5 == 0){

			$(".num-list").append('<li>FizzBuzz</li>');

		}else if(currNum % 5 == 0){

			$(".num-list").append('<li>Buzz</li>');

		}else if(currNum % 3 == 0){

			$(".num-list").append('<li>Fizz</li>');

		}else {

			$(".num-list").append('<li>'+ currNum + '</li>');

		}

	}
});