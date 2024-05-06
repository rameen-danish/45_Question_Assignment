#! /usr/bin/env node

//Rameen , 5/4/2024
// This is a 45 Question Assignment 

// Question1 : Install Node.js, TypeScript and VS Code on your computer.
// Done Installation
console.log("\n \t \t Question1 \n Done Installation of Node.js, TypeScript and VS Code ");

//Question2 : Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log("\n \t \t Question2 ");
let personName : string = "Rameen";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

//Question3 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("\n \t \t Question3 ");
let Name : string = "Rameen";
console.log(Name.toLowerCase());                                          //Lower case
console.log(Name.toUpperCase());                                         // Upper case
console.log(Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase());     // Title case

// Question4 : Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("\n \t \t Question4 ");
console.log('Abraham Lincoln once said, "Whatever you are, be a good one."');

// Question5 : Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("\n \t \t Question5 ");
let famous_person : string = "Abraham Lincoln";
let message : string = `${famous_person} once said, "Whatever you are, be a good one."`;
console.log(message);

// Question6 : Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces
console.log("\n \t \t Question6 ");
let name1 : string ="\t\n Rameen \t\n";
console.log(name1);
console.log(name1.trim());

// Question7 : Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// Question8 : You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log("\n \t \t Question7 and 8 ");
console.log(4+4);         // Addition
console.log(12-4);        // Subtraction
console.log(2*4);         // Multiplication
console.log(32/4);        // Division

// Question9 : Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("\n \t \t Question9 ");
let favouriteNumber : number = 15;
let message1 = `My favourite number is ${favouriteNumber}`;
console.log(message1);

// Question10 : Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does. 
//Rameen, 5/4/2024
//This program print my favourite number
console.log("\n \t \t Question10 ");
console.log("Adding Comments")
let favourite_Number : number = 15;
let message2 = `My favourite number is ${favourite_Number}`;
console.log(message2);

// Question11 : Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("\n \t \t Question11 ");
let names : string[] = ["Ayesha","Areeba","Zaeema","Huma","Sehrish"];
for(let i=0 ; i<names.length ; i++){
console.log(names[i]);
}

//Question12 : Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("\n \t \t Question12 ");
let names1 : string[] = ["Ayesha","Areeba","Zaeema","Huma","Sehrish"];
for(let i=0 ; i<names1.length ; i++){
console.log(`Hello ${names[i]} , Would you like to learn some typescrpit today?`);
}

//Question13 : Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log("\n \t \t Question13 ");
let transport : string[] = ["Honda Motorcycle" , "Toyota Car" , "Tesla Car"];
for(let i=0;i<transport.length;i++)
    {
        console.log(`I would like to own a ${transport[i]}`);
    }

//Question14 : Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("\n \t \t Question14 ");
let guests : string[] = ["Bismah" , "Rushna" ,"Daniyal"];
guests.forEach(guests =>{
    console.log(`Dear ${guests}, would you like to join me for dinner?`)
})

//Question15 : Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
/*• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
console.log("\n \t \t Question15 ");
let unableToAttend = "Daniyal";
console.log(`${unableToAttend} was unable to attend dinner`);

let newGuest = "Faaiz";
guests[guests.indexOf(unableToAttend)] = newGuest;

guests.forEach(guests=>{
    console.log(`Dear ${guests}, would you like to join me for dinner?`);
})

/*Question16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
console.log("\n \t \t Question16 ");
let guest : string[] = ["Bismah","Rushna","Faaiz"]
console.log("Great news,I found a bigger dinner table.");

guest.unshift("Simrah");
guest.splice(guest.length/2,0,"Abeeha");
guest.push("Mairaj");
 
guest.forEach(guest => {
console.log(`Hey Dear ${guest}, you are invited for dinner`);
})

/*Question17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
console.log("\n \t \t Question17 ");
console.log("Unfortuneately , I Can invite only two people for the dinner");

while(guest.length > 2)
    {
        let removedGuest = guest.pop();
        console.log(`Sorry Dear ${removedGuest}, I can't invite you for the dinner`)
    }
guest.forEach(guest => {
        console.log(`Hey Dear ${guest}, you are still invited for the dinner `); })
guest.splice(0,guest.length)
console.log(guest);

/*Question18: Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
console.log("\n \t \t Question18 "); 
let places : string[] = ["Makkah","Madina","Turkey","Canada","Dubai"];
  console.log("Original order:",places);
  console.log("Alphabatical order:",[...places].sort());
  console.log("Original order:",places);
  console.log("Reverse Alphabetical order:",[...places].sort().reverse());
  console.log("Original order:",places);
  places.reverse();
  console.log("Reverse Order:",places);
  places.reverse();
  console.log("Original Order:",places);
  places.sort();
  console.log("Alphabetical Order:",places);
  places.reverse();
  console.log("Reverse Alphabetical Order:",places);

  //Question19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
  console.log("\n \t \t Question19 ");
  let Guest : string[] = ["Bismah","Rushna","Faaiz","Daniyal","Abeeha"]
console.log(`${Guest.length} guests are invited for the dinner.`);

//Question20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log("\n \t \t Question20 ");
let languages : string[] = ["Typescript","Javascript","HTML","CSS"];
console.log(`I would like to learn these languages : [${languages}]`);

//Question21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("\n \t \t Question21 ");
let mobile : {
    model:string ; releaseDate:string ; price:number;
}=
{
    model:"Samsung Galaxy Note 20 Ultra",
    releaseDate:"05 August 2020",
    price:219999
};
console.log(`Mobile Info:${mobile.model} was released on ${mobile.releaseDate}, and the price of this mobile is PKR ${mobile.price}`);


//Question22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log("\n \t \t Question22 ");
let iceCream : string[] = ["vanilla", "chocolate", "kulfa", "pista"]
console.log(`I would like to eat ${iceCream[4]} ice cream`);          // Intentional error: Arrays are zero-indexed, so index 4 is out of bounds.
console.log(`I would like to eat ${iceCream[1]} ice cream`);         // Correcting the error by accessing a valid index.
 
/*Question23: onditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
console.log("\n \t \t Question23 ");
let subject = 'english';
console.log("Is subject == 'english'? I predict True.")
console.log(subject == 'english')
console.log("Is subject == 'urdu'? I predict False.")
console.log(subject == 'urdu')

let animal = 'Lion';
console.log("Is animal == 'Lion'? I predict True.")
console.log(animal == 'Lion')
console.log("Is animal == 'Tiger'? I predict False.")
console.log(animal == 'Tiger')

let book = 'The Power of Habit';
console.log("Is book == 'The Power of Habit'? I predict True.")
console.log(book == 'The Power of Habit')
console.log("Is book == 'Think and Grow Rich'? I predict false.")
console.log(book == 'Think and Grow Rich')

let city = 'Karachi';
console.log("Is city == 'Karachi'? I predict True.")
console.log(city == 'Karachi')
console.log("Is city == 'Lahore'? I predict False.")
console.log(city == 'Lahore')

let country = 'Pakistan';
console.log("Is country == 'Pakistan'? I predict True.")
console.log(country == 'Pakistan')
console.log("Is country == 'China'? I predict False.")
console.log(country == 'China')

/*Question24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
s */
console.log("\n \t \t Question24 ");
// Tests for equality and inequality with string
console.log("Equality and Inequality test:");
console.log("birds"=="birds");
console.log("birds"!="birds");

//Tests using the lower case function
console.log("Lower case function Test:");
console.log("BIRDS".toLowerCase() =="birds");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical Test: ");
console.log(5==5);
console.log(5!=5);
console.log(5>2);
console.log(5<20);
console.log(5>=5);
console.log(5<=2);

//Tests using "and" and "or" operators
console.log("Logical Operator test")
let ages = 20
console.log(ages<20  && ages>10 );
console.log(ages<20 || ages>10);


//Test whether an item is in an array
console.log("Array testing")
let numbers :number[]=[2,4,6,8];
console.log("Is '2' is in an array? ");
console.log(2 in numbers);


//Test whether an item is not in a array
console.log("Is '10'  in an array?");
console.log(10 in numbers);

/*Question25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/
console.log("\n \t \t Question25 ");
let alien_color = "green";
if(alien_color==="green"){
    console.log("You earned 5 points");
}
alien_color = "red";
if(alien_color == "red"){
}

/*Question26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/
console.log("\n \t \t Question26 ");
alien_color = "green";
if(alien_color=="green")
    {
        console.log("You earned 5 pionts for shooting the alien");
    }
else
  {
    console.log("You earned 10 points");
  }  
  alien_color = "red";
if(alien_color=="green")
    {
        console.log("You earned 5 pionts for shooting the alien");
    }
else
  {
    console.log("You earned 10 points");
  }  
  /*Question27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
//first version for green colour alien
console.log("\n \t \t Question27 ");
alien_color = "green";
if(alien_color=="green")
    {
        console.log("You earned 5 pionts");
    }
else if(alien_color=="yellow")
  {
    console.log("You earned 10 points");
  }  
  else if (alien_color=="red")
 {
    console.log("you earned 15 points")
  }
  //second version of yellow colour alien
  alien_color = "yellow";
if(alien_color=="green")
    {
        console.log("You earned 5 pionts");
    }
else if(alien_color=="yellow")
  {
    console.log("You earned 10 points");
  }  
  else if (alien_color=="red")
 {
    console.log("you earned 15 points")
  }
  //third version for red colour alien
  alien_color = "red";
if(alien_color=="green")
    {
        console.log("You earned 5 pionts");
    }
else if(alien_color=="yellow")
  {
    console.log("You earned 10 points");
  }  
  else if (alien_color=="red")
 {
    console.log("you earned 15 points")
  }

  /*Question28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/
console.log("\n \t \t Question28 ");
let age = 66;
if(age<2){
    console.log("The person is a baby");
}
else if(age<4){
    console.log("The person is a toddler");
}
else if(age<13){
    console.log("The person is a kid");
}
else if(age<20){
    console.log("The person is a teenager");
}
else if(age<65){
    console.log("The person is an adult");
}
else {
    console.log("The person is an elder");
}
/*Question29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
console.log("\n \t \t Question29 ");
let favourite_fruits : string[] = ["Mango","Pear","Strawberry","Apple","Orange"];
if(favourite_fruits[0] === "Mango"){
    console.log("I really like Mango.");
}
else {
    console.log("I did'nt like Mango.")
}
if(favourite_fruits[1] === "Pear"){
    console.log("I really like Pear.");
}else{
    console.log("I did'nt like Pear.")
}
if(favourite_fruits[2] === "Grapes"){
    console.log("I really like Grapes.");
}
else{
    console.log("I did'nt like Grapes.")
}
if(favourite_fruits[3] === "Melon"){
    console.log("I really like Melon.");
}else{
    console.log("I did'nt like Melon.")
}
if(favourite_fruits[4] === "Orange"){
    console.log("I really like Orange.");
}
else{
    console.log("I did'nt like Orange.")
}
/*Question30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
console.log("\n \t \t Question30 ");
let user_names :string[]=["John","Eric","Admin","Charles","William"];
user_names.forEach(user_names => {
    if(user_names === "Admin"){
        console.log("Hello Admin, would you like to see a status report?");
    }
    else{
        console.log(`Hello ${user_names},thank you for logging in again.`);
    }
})

/*Question31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
console.log("\n \t \t Question31 ");
let user_name : string[] = [];
if(user_name.length === 0){
    console.log("We need to find some users!");
}
else
console.log("Thank you for login");

/*Question32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
console.log("\n \t \t Question32 ");
let current_users : string[] = ["John","Eric","Admin","Charles","William"]
let new_users : string[] = ["ADmin","Vicky","Pascal","Eric","John"]
new_users.forEach(newUsers => {
if(current_users.some(currentUsers => currentUsers.toLowerCase() === newUsers.toLowerCase())){
    console.log(`'${newUsers}' you will need to enter a new user name.`);
}
else{
    console.log(`'${newUsers}' is available.`)
}
})

/*Question33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/
console.log("\n \t \t Question33 ");
let ordinal : number[] = [1,2,3,4,5,6,7,8,9];
ordinal.forEach(ordinal => {
    let suffix = 'th';
    if(ordinal === 1 ){
        suffix = "st";
    }
    else if(ordinal === 2){
        suffix = "nd";
    }
    else if(ordinal === 3){
        suffix = "rd";
    }
    console.log(`${ordinal}${suffix}`)
})

/*Question34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
console.log("\n \t \t Question34 ");
let pizza: string[] = ["Fajita","Afghani","Cheesy"];
pizza.forEach(pizza =>
    {
        console.log(`I like ${pizza} pizza.`)
    }
)
console.log("I really love pizza.")

/*Question35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!*/
console.log("\n \t \t Question35 ");
let animals : string[] = ["Dog","Cat","Cow"]
animals.forEach(animals =>
    {
        console.log(`A ${animals} would make a great pet.`);
    }
)
console.log("Any of these animals would make a great pet!");

/*Question36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/
console.log("\n \t \t Question36 ");
function make_shirts(size:string ,message:string){
    console.log(`Make a '${size}' size shirt and print a message '${message}' on the front side of the shirt.`)
}
make_shirts("Medium","Karachi Kings")

/*Question37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
console.log("\n \t \t Question37 ");
function make_shirt(size:string = "large",message:string ="I Love Typescript"){
    console.log(`Make a '${size}' size shirt and print a message '${message}' on the front side of the shirt.`)
}
make_shirt()                               //Default Large , default message
make_shirt("Medium")                       //medium , default message
make_shirt("small","Karachi Kings")         //custom size , custom message

/*Question38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.*/
console.log("\n \t \t Question38 ");
function describe_city(city:string,country:string="Pakistan"){
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi")
describe_city("Islamabad")
describe_city("Macca","Saudi Arab")

/*Question39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
console.log("\n \t \t Question39 ");
function city_country(city:string , country:string) : string {
    return `'${city}, ${country}'`
}
console.log(city_country("Karachi","Pakistan"));
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Paris","France"));

/*Question40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.*/
console.log("\n \t \t Question40 ");
function make_album(artist_name:string , album_title:string , Tracks?:number) {
    let album = {
        artist_name , album_title , Tracks
    };
    if(Tracks){
        album["Tracks"]  = Tracks;
    }
    return album
    }
    console.log(make_album("Thriller","Michael Jackson"));
    console.log(make_album("Never Mind","Nirvana"));
    console.log(make_album("Revolver","The Beatles",14));
    
    /*Question41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array*/
    console.log("\n \t \t Question41 ");
    let magicians_name : string[] = ["David","John","Chris","Max"]
    function show_magicians(magicians_name : string[]){
    magicians_name.forEach(magicians_name => {
        console.log(magicians_name);
    });
    }
    show_magicians(magicians_name);
    
    /*Question42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
    console.log("\n \t \t Question42 ");
    function make_great(magicians_name:string[]){
        for(let i=0; i<magicians_name.length; i++){
            magicians_name[i] = magicians_name[i] + " The Great Magician"
        }
    }
    make_great(magicians_name)
    
    show_magicians(magicians_name)
    
/*Question43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
console.log("\n \t \t Question43 "); 
magicians_name = ["David","John","Chris","Max"];
function show_magician(magicians_name : string[]){
    magicians_name.forEach(magicians_name => {
        console.log(magicians_name);
    });}
function makes_great(magicians_name:string[]):string[] {
    let greatMagician : string[] = [];
    magicians_name.forEach(magicians_name =>{
greatMagician.push(`${magicians_name} , the Great Magician`);
    });
    return greatMagician;
}
let greatMagician = makes_great(magicians_name.slice());         //creates a new modified array
console.log("Original Magicians :");
show_magician(magicians_name);                                 // shows original array
console.log("Great Magician :");
show_magician(greatMagician);                                  //shows modified array

/*Question44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
console.log("\n \t \t Question44 ");
function make_sandwich(...items: string[]){
    console.log(`Making a Sandwich with: ${items.join(',')}.`)
}
make_sandwich("Cheese","Mayo","Chicken")
make_sandwich("lettuce","chilli sauce","Butter")
make_sandwich("musturd","mayo","Cheese")

/*Question45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/
console.log("\n \t \t Question45 ");
function make_car(manufacturer:string, model:string , ...option : [string,any][]) : Object {
let car = {manufacturer,model};
option.forEach(([key,value]) => car[key] = value);
return car;
}
console.log(make_car("Toyota","Corolla",["color","Black"],["year",2024]));
console.log(make_car("Ford","Fiesta",["color","Grey"],["sunroof",true]));    
