// This js  sample program is for testing whether the entered number is positive,negative or zero
var name = prompt("Enter your name:");
alert("Hello," + name);
//on the line 5 i want the program to print ("nameentered", enter a number) but it isn't working as i want ,so please do help me
var number = Number (prompt ( name + ' ,Please enter a number you want'));
if (number > 0)
{
	console.log (number + " is positive");
}

else if (number = 0)
 {
	console.log(number + " is negative");
} 
else {
	console.log(number + " is zero");
}