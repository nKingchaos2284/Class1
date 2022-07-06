let favColor = prompt("What is you favorite color?");
console.log(favColor);

function capitalize() {
    favColorCap = favColor.charAt(0).toUpperCase();
    favColor = favColorCap + favColor.slice(1);
}

if (favColor == null) {
    favColor = prompt("Don't have one? Are you color blind? You gotta like something?");
}

function askColor() {
    if (favColor == "pink") {
        capitalize();
        document.write(favColor + "? really? really? really? I guessssss");
    } else if (favColor == "blue" || favColor == "red" || favColor == "black") {
        capitalize();
        document.write(favColor + "? I love those too!");
    } else if (favColor == "silver" || favColor == "orange" || favColor == "purple" || favColor == "white" || favColor == "GOLD") {
        capitalize();
        document.write(favColor + "? VERY MICE!");
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
