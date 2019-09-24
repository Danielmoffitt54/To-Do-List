/*
    * Make references to the HTML elements that we want to interact with through JS.
    * Add in the ability to add a new list item.
    * Add in the ablility to remove a list item.
    * Add in the ability to mark a list item as done.
*/

var submitButton = document.getElementById("submit");
var input = document.getElementById("userInput");
var ul = document. querySelector("ul"); // querySelector gets the first instance of a particular element type. Since we only have one ul, this will create a reference to the ul.

function createListElement() {
    // create a new li element 
    var li = document.createElement("li");

    // Add content to it
    li.innerHTML = input.value;

    // Add it to our ul
    ul.appendChild(li);

    // Clear input line
    input.value = "";

    // Function to handle showing a list item as complete.
    function markDone() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", markDone);

    var deleteBtn = document.createElement("button");
        // ^ Create a delete button

    deleteBtn.innerText = "X";
        // ^ Give button value of X

    li.appendChild(deleteBtn);
        // ^ Delete li when clicked
    
    // funciton is called whenever delete buttin is clicked
    function deleteLi() {
        //Add the delete to the list item
        li.classList.add("delete");
    }

    deleteBtn.addEventListener("click", deleteLi);
}

/* This is going to be used to create a list element when the submit button is tapped */
function createListItemSubmitBtn() {
    if (input.value.length > 0) {
        createListElement();
    }
}

// This is used to create a list element when the enter key is pressed.
function createListItemEnterKey(event) {
    console.log(event.keyCode)

    if (input.value.length > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// Make it to that when submit button is clicked, the createListItemSubmitBtn function is called.
submitButton.addEventListener("click", createListItemSubmitBtn)

// This event listener will detect when keys are pressed while the input is active;
input.addEventListener("keypress", createListItemEnterKey);