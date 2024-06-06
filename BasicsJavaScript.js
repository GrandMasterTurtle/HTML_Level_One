//alert("Hello World");
// Output: Hello World

var a = 10;
var b = 20;
var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a % b;
var h = a ** b;
// Output: 30
// Output: -10
// Output: 200
// Output: 0.5
// Output: 0
// Output: 100000000000000000000

//boolean
var x = true;
var y = false;
// Output: true
// Output: false

//string
var userName = "John";
var userAge = 30;
// Output: John
// Output: 30
// Output: John, Age: 30

function bankAccount() {
    console.log("Welcome to your bank")
    var deposit = prompt("How much would you like to deposit?")
    console.log("You've deposited: " + deposit)

    return deposit;
}

function personObject() {
    var person = {
        name: "John",
        age: 30,
        city: "New York",
        ageRange : function()
        {
            if(this.age < 18) 
            {
                return "Minor"
            } 
            else 
            {
                return "Adult"
            }
        }
    };
    console.log(person.name)
    console.log(person.age)
    console.log(person.city)
    console.log(person.ageRange())
    console.dir(person)

    for(key in person) {
        console.log(key + ": " + person[key])
    }

    return person;
}

function clearConsole() {
    console.log("Console cleared")
    console.clear();
}

function returnElement() 
{
    var headingOne = document.querySelector("#one")
    var headingTwo = document.querySelector("#two")
    var headingThree = document.querySelector("#three")
    var paragraph = document.querySelectorAll("p")
    var link = document.querySelector("#Google_Link")

    return [headingOne, headingTwo,headingThree, paragraph, link]
}

function getRandomColor()
{
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) 
    {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeElementColorRandom()
{
    var [headingOne, headingTwo, headingThree, paragraph, link] = returnElement() //runs the function

    colorInput = getRandomColor()
    console.log(colorInput)
    headingOne.style.color = colorInput
    headingTwo.style.color = colorInput
    paragraph[0].style.color = colorInput
    paragraph[1].style.color = colorInput
}

function changeText() 
{
    var [headingOne, headingTwo, headingThree, paragraph, link] = returnElement() //runs the function

    headingOne.textContent = "Heading One"
    headingTwo.textContent = "Heading Two"
    paragraph[0].textContent = "Simple Text One"
    paragraph[0].innerHTML = "<b>Bold Text One</b>"
    paragraph[1].textContent = "Simple Text Two"

    link.textContent = "Click Me, Google"
    var attribute = link.getAttribute("href")
    console.log("Attribute: " + attribute)
    link.setAttribute("href", "https://www.amazon.com")

}

function addEventListeners() 
{
    var [headingOne, headingTwo, headingThree, paragraph, link] = returnElement() //runs the function

    headingOne.addEventListener("mouseover", function() {
        headingOne.textContent = "Mouse Currently Over"
        headingOne.style.color = getRandomColor()
    })

    headingOne.addEventListener("mouseout", function() 
    {
        headingOne.textContent = "Heading One"
        headingOne.style.color = "black"
    })

    headingTwo.addEventListener("click", function() {
        headingTwo.textContent = "Heading Two Clicked"
        headingTwo.style.color = getRandomColor()
    })

    headingTwo.addEventListener("mousedown", function() {
        headingTwo.textContent = "Heading Two"
        headingOne.style.color = "black"
    })

    headingThree.addEventListener("dblclick", function() {
        headingThree.textContent = "Heading Three Double Clicked"
        headingThree.style.color = getRandomColor()
    })

    headingThree.addEventListener("mousedown", function() {
        headingTwo.textContent = "Heading Three"
        headingOne.style.color = "black"
    })

}

function jqueryExample() 
{
    var x = $("h1") //selects the h1 element
    x.css("color", "red") //changes the color

    x.text("Changed Text") //changes the text

    x.html("<em>Changed Text</em>") //changes the text to italic
    var newCSS = 
    {
        'color': 'blue',
        'font-size': '20px',
        'background-color': 'green',
        'font-family': 'Arial',
        'font-weight': 'bold',
        'border': '1px solid black'
    }

    var listItems = $("li")
    listItems.css("color", "red") //changes all the list items to red

    listItems.eq(0).css("color", "blue") //changes the first list item to blue
    listItems.eq(-1).css("color", "green") //changes the last list item to green

    x.css(newCSS)
}

var returnDeposit = bankAccount() //runs the function

var person = personObject() //runs the function
person.age = 40 //changes the age

clearConsole() //clears the console

changeText() //changes the text
addEventListeners() //adds event listeners
jqueryExample() //runs the jquery example
