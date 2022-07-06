let favFruit = prompt("What is you favorite fruit?");
console.log(favFruit);

function capitalize() {
    favFruitCap = favFruit.charAt(0).toUpperCase();
    favFruit = favFruitCap + favFruit.slice(1);
}

if (favFruit == null) {
    favFruit = prompt("Don't have one? You'll get scurvy! You gotta like something?");
}

function askColor() {
    if (favColor == "pink") {
        capitalize();
        document.write(favFruit + "? really? really? really? I guessssss");
    } else if (favFruit == "blue" || favFruit == "red" || favFruit == "black") {
        capitalize();
        document.write(favColor + "? I love those too!");
    } else if (favFruit == "silver" || favFruit == "orange" || favFruit == "purple" || favFruit == "white" || favFruit == "GOLD") {
        capitalize();
        document.write(favFruit + "? VERY MICE!");
    } else {
        capitalize();
        favColor = prompt(favColor + "? That one's not on the list, might've forgot to add that to the database. Try another!");
        askColor();
    }
}

askColor();

function colorRec() {
    let userNumber = prompt("Pick a number between 1-10");
    if (userNumber > 5) {
        userNumber = 0;
        fruitRec();
    }
    for (let i = 1; i <= userNumber; i++){
        document.write("<a href="https://www.google.com">
    <img src="spiderman.jpg" style="height:400px; width:400px"> 
</a>
' />");
    }

    return userNumber;
}

colorRec();
