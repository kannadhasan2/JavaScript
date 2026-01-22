// Callback function is a function that is passed as a argument to another function 

function greeting(displayName){
    console.log("Hello")
    displayName()
    
}

function displayName(){
    console.log("Kannadhasan")
}

greeting(displayName)