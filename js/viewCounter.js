

console.log("Hello world from viewCounter.js");

window.onload = function() {
    //Call API
    fetch('https://e8wa6k3qf5.execute-api.us-east-2.amazonaws.com/Prod')
    .then(response => {
        console.log("API RESPONSE\n");
        console.log(response.json);
        return response.json();
    });


    //Retrieve value

    //Print to console
}