// //Chapter 1
// //task 1
// // alert("Error! Please Enter a valid password")


// //task 2
// // alert("Wlecome To JS Land \n Happy Coding")

// //task3
// // alert("Wlecome To JS Land")


// // alert("Happy Codig")

// //task 4 played in console




// //chapter 2
// //task 1 
// // var username ="Mohsin"
// // var myName="Ali"
// // alert(username+" "+myName)

// //task 2
// // var message;
// // message="Hello World";
// // alert(message)

// //task3
// // var name="Mohsin Ali"
// // var age="15 Years Old"
// // var cert="Mobile Web Application Certified"
// // alert(name)
// // alert(age)
// // alert(cert)

// //task4
// // var pizza="PIZZA \n PIZZ \n PIZ\n PI\n P"
// // alert(pizza)

// //task5
// // var email = "Example@example.com"
// // alert("My Email Adress is "+email)

// //task6
// // var book ="A smarter way to learn JavaScript"
// // alert("I am Trying To learn"+book+".")

// //task7
// // document.write("Yah! i can write html content through JavaScript now")

// //task8
// // alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

// //chapter 3
// //taxk1
// // var age=15;
// // alert("i am "+age+" years Old")

// //task2
// // var n=14
// // alert("you have visited our sited "+n+" Times")


// // task3
// // var mybirth=2001
// // document.write("My Birth Year is "+ mybirth)
// // document.write("<br>")
// // document.write("Data type of my declared variable is number")

// //task 4
// // var visitorname=prompt("Enter Your Name")
// // var producttittle=prompt("Enter your Product")
// // var quantity=prompt("Enter Numbers")

// // document.write(visitorname+" ordered "+quantity+producttittle+"(s) on xyz clothing store")

// //chapter4
// var name,age,count;
// name="mohsin"
// age="20"
// count="123"
// alert("three variable in one row"+name+age+count)

//task2
// document.write("Variable names can only contain Numbers, $ and _ .  For example $my_1stVariable")
// document.write("<br>")
// document.write("Variables must begin with a Letter, $ or. _ . For example $name, _name or name")
// document.write("<br>")
// document.write("Variable names are case Sensitive")
// document.write("<br>")
// document.write("Variable names should not be JS Reserved Keywords")



// chapter 5 task 1
// var a=prompt("Enter The First Value","0")
// num1=parseInt(a)
// var b=prompt("Enter The 2nd Value","0")
// num2=parseInt(b)
// sum=num1+num2
// document.write("The Sum Of  "+num1+" and "+num2+" is "+sum)



//task2
// chapter 5 task2 
// var a=prompt("Enter The First Value","0")
// num1=parseInt(a)
// var b=prompt("Enter The 2nd Value","0")
// num2=parseInt(b)
// sum=num1-num2
// document.write("The Subtraction Of  "+num1+" and "+num2+" is "+sum)

// chapter 5 task 2
// var a=prompt("Enter The First Value","0")
// num1=parseInt(a)
// var b=prompt("Enter The 2nd Value","0")
// num2=parseInt(b)
// sum=num1*num2
// document.write("The Multiplication Of  "+num1+" and "+num2+" is "+sum)


// chapter 5 task 2
// var a=prompt("Enter The First Value","0")
// num1=parseInt(a)
// var b=prompt("Enter The 2nd Value","0")
// num2=parseInt(b)
// sum=num1/num2
// document.write("The division Of  "+num1+" and "+num2+" is "+sum)



//task3

// var a = 5;
// var b=a++;
// c=a+7
// d=c--;
// e=c%a;
// document.write("intial value is"+b)
// document.write("<br>")
// document.write("after increament value is"+a)
// document.write("<br>")
// document.write("value after addition is "+d)
// document.write("<br>")
// document.write("value after decreament is "+c)
// document.write("<br>")
// document.write("The reminder is "+c+"%"+a+"="+e)

//task4
// var tick1=600;
// var total=tick1*5;
// document.write("One Ticket is "+tick1+"PKR")
// document.write("<br>")
// document.write("The Cost to Buy 5 tickets to a movie is "+total+"PKR")


//task5

// var a=prompt("Enter a Nummber to print Table","0")
// num1=parseInt(a)
// for(var i=1; i<=10; i++){
// 	document.write(num1+"x"+i+"="+num1*i)
// 	document.write("<br>")
// }


//task6

// var a=prompt("Enter The Tempreture in Fehrinhiet","0")
// f=parseInt(a)
// c=(f-32)*5/9
// document.write(+f+"F is"+c+"C")


// var a=prompt("Enter The Tempreture in Celcius","0")
// c=parseInt(a)
// f=(c*9/5)+32
// document.write(+c+"C is"+f+"F")

//task8
// var a=prompt("Enter The Total marks","0")
// total=parseInt(a)

// var b=prompt("Enter The Marks Obtained","0")
// obtained=parseInt(b)

// Percentage=(obtained*100)/total

// document.write("Total Marks"+total)
// document.write("<br>")
// document.write("obtained Marks"+obtained)
// document.write("<br>")
// document.write("Total Percentage"+Percentage)


//task11

// var b=prompt("Enter Birth year","0")
// byear=parseInt(b)

// var a=prompt("Enter Current year","0")
// cyear=parseInt(a)

// age=cyear-byear
// document.write("The Current year is"+cyear)
// document.write("<br>")
// document.write("The Birth year is"+byear)
// document.write("<br>")
// document.write("The Total Age is"+age)



//task12

// var b=prompt("Enter The Radius of Circle","0")
// radius=parseInt(b)
// var circum=2*radius*3.142;
// var area=3.142*radius*radius;
// document.write("the radius of circle is "+radius)
// document.write("<br>")
// document.write("the Circumference of circle is "+circum)
// document.write("<br>")

// document.write("the area of circle is "+area)


//task13

//  var fvtsnacks=prompt("Enter You Favourite Snacks")

//  var b=prompt("Enter Current age","0")
//  age=parseInt(b)

//  var a=prompt("Enter Estimated Maximum age","0")
//  esage=parseInt(a)

//  var c=prompt("Enter Amount of snacks per day","0")
//  snacks=parseInt(c)

// var total=(esage-age)*snacks

// document.write("Favourite Snacks : "+fvtsnacks)
// document.write("<br>")

// document.write("Current age : "+age)
// document.write("<br>")


// document.write("Estimated maximum age : "+esage)
// document.write("<br>")

// document.write("snacks per day : "+snacks)
// document.write("<br>")

// document.write("You Wil Need "+total+" "+fvtsnacks+"to Last you untill the rip old age"+esage)







//CHAPTER 6 to 9 
//task1

// var a=10;
// document.write("the value of a is"+a)
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")
// ++a;



// document.write("the value of ++a is now "+a)
// document.write("<br>")
// document.write("now the value of a is  "+a)

// document.write("<br>")
// document.write("<br>")

// b=a++;
// document.write("the value of a++ is now "+b)
// document.write("<br>")
// document.write("now the value of a is  "+a)




//task 2
// var greetname=prompt("Enter Your Name Please ")
// document.write("ASSALAM O ALAIKUM  "+greetname+" HOW ARE YOU?")

//task3
// 	var a=prompt("Enter a Nummber to print Table","0")
//  	num1=parseInt(a)
// if (a>0) {
//  	for(var i=1; i<=10; i++){
//  	document.write(num1+"x"+i+"="+num1*i)
//  	document.write("<br>")
// }
// }
// else{
// 	var num2=5;
// 	for(var i=1; i<=10; i++){
//  	document.write(num2+"x"+i+"="+num2*i)
//  	document.write("<br>")
// }
// }



//chapter9 to 11

//task1
// var cityname = prompt("Enter City Name"."Lowercase")

// if (cityname === "karachi") {
// 	alert("WELCOME TO THE CITY OF LIGHTS")
// }

//task2

// var gender=prompt("Please Enter Your Gender")
// if (gender === "male") {
// 	alert("GOOD MORNING SIR")
// }

// else if (gender === "female") {
// 	alert("GOOD MORNING MA'AM !")
// }

// else{
// 	alert("Please Enter Valid Gender")
// }


//task3

// var color=prompt("Please Enter COLOUR")
// if (color === "yellow") {
// 	alert("READY TO MOVE")
// }

// else if (color === "green") {
// 	alert("MOVE ON !")
// }

// else if (color === "red") {
// 	alert("MUST STOP    !")
// }

// else{
// 	alert("Please Enter Valid Color!!!!!")
// }



//task4

// var litres=prompt("Please Enter Car FUEL in Litres")
// if (litres < 1) {
// 	alert("PLEASE REFILL THE FUEL")
// }

// if (litres >= 1) {
// 	alert("FUEL IS OKAY KINDLY CHECK AFTER 10mins  ! ")
// }

// else{
// 	alert("Please Enter FUEL IN LITERES!!!!!")
// }


//task5

// var a=prompt("Enter total Marks")
// totalmarks=parseInt(a)

// var b=prompt("Enter Obtained Marks")
// obtainedmarks=parseInt(b)

// percentagemarks=(obtainedmarks*100)/totalmarks
//  document.write("TOTAL MARKS ARE : "+totalmarks)
//  document.write("<br>")
//  document.write("OBTAINED MARKS ARE : "+obtainedmarks)
//  document.write("<br>")
//  document.write("TOTAL PERCENTAGE : "+percentagemarks)
//  document.write("<br>")

//   if (percentagemarks>=80) {
//   	document.write("GRADE : 'A+' ")
//   	document.write("<br>")
//   	document.write("REMARKS: EXCELLENT ")
//   }

//  else if (percentagemarks>=70) {
//   	document.write("GRADE : 'A' ")
//   	document.write("<br>")
//   	document.write("REMARKS: GOOD ")
//   }


//  else if (percentagemarks>=60) {
//   	document.write("GRADE : 'B' ")
//   	document.write("<br>")
//   	document.write("REMARKS: YOU NEED TO IMPROVE ")
//   }

//  else if (percentagemarks<=59) {
//   	document.write("GRADE : 'Fail' ")
//   	document.write("<br>")
//   	document.write("REMARKS: SORRY ! ")
//   }


//chapter 12 13
//task1
// var ch=prompt("Enter a Alphabet")
// if (ch >= 'A' && ch <= 'Z') 
//          alert(" is an UpperCase character") 
  
//     else if (ch >= 'a' && ch <= 'z') 
//    alert("is an LowerCase character") 


//task2
// var a=prompt("Enter a first Number")
// number1=parseInt(a)
// var b=prompt("Enter a 2nd Number")
// number2=parseInt(b)
// if (number1>number2) {
// 	alert(number1+" IS GREATER !")
// }

// else if (number2>number1) {
// 	alert(number2+" IS GREATER !")
// }

// else if (number2==number1) {
// 	alert(" Both Numbers are equal !")
// }

// else{
// 	alert(" Enter valid number!")
// }






//task3
// var z=prompt("Enter a first Number")
// zero=parseInt(z)

// if (zero>0) {
// 	alert(zero+" IS POSITIVE !")
// }

// else if (zero<0) {
// 	alert(zero+" IS NEGATIVE !")
// }

// else if (zero==0) {
// 	alert(" NUMBER IS 0 !")
// }

// else{
// 	alert(" Enter valid number!")
// }


//task4

// var vowel=prompt("ENTER A ALPHABET TO KNOW THE VOWEl")
// if (vowel=="a" || vowel=="e" || vowel=="i" || vowel=="o" || vowel=="u" ) {
// 	alert(vowel+"TRUE!!! IT IS VOWEL !")
// }
// else{
// 	alert("FALSE!!!   NOT A VOWEL ! ITS CONSONANT")
// }


//task6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting)
// }
// else{
// greeting = "Good evening";
// alert(greeting)
// }



//CHAPTER 14 t0 16
//task 1
// var initarratArray=[, "", "","" , "","" ]
// var initarratArray=[, "", "","" , "","" ]
// var stringarrArray=["mohsin","mohsin","mohsin"]
// var numbersarrArray=[1,3,4,5,6,7,8,]
// var booleanarrArray=[true , false]
// var mixedArray = [1, "Bob", "Now is", true];
// var qualificationArray=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"]
// document.write("QUALIFICATION")
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")
// document.write("1) "+qualificationArray[0])
// document.write("<br>")
// document.write("2) "+qualificationArray[1])
// document.write("<br>")
// document.write("3) "+qualificationArray[2])
// document.write("<br>")
// document.write("4) "+qualificationArray[3])
// document.write("<br>")
// document.write("5) "+qualificationArray[4])
// document.write("<br>")
// document.write("6) "+qualificationArray[5])
// document.write("<br>")
// document.write("7) "+qualificationArray[6])
// document.write("<br>")
// document.write("8) "+qualificationArray[7])





//CHAPTER 17 TO 20

//TASK1
// for (var i= 1; i < 11; i++) {
// 	document.write(i)
// 	document.write("<br>")
// }

//task2
// var a=prompt("Enter a Nummber to print Table","0")
//  	num1=parseInt(a)
// var b=prompt("ENTER ENDING NUMBER")
// num2=parseInt(b)
//  	for(var i=1; i<=b; i++){
//  	document.write(num1+"x"+i+"="+num1*i)
//  	document.write("<br>")
// }

//task3

// for(var i=1; i<=15; i++){
// 	document.write(i+", ")
// }


//task4
// for(var i=10; i>=1; i--){
// 	document.write(i+", ")
// }

//task5
// for(var i=1; i<=20; i/2){
// 	document.write(i+", ")
// }

//task6
// for(var i=1; i<=100; i*5){
// 	document.write(i+", ")
// }





//I AM VERRY SORRY SIR PLEASE ACCEPT SOMEQUESTIONS I CANT UNDERSTOOD PLEASE ACCEPT MY ASSIGNMENT