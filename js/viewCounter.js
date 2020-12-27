

console.log("Hello world from viewCounter.js");

window.onload = function() {
    // apiUrl = 'https://e8wa6k3qf5.execute-api.us-east-2.amazonaws.com/Prod';
    //Call API
    // fetch('https://e8wa6k3qf5.execute-api.us-east-2.amazonaws.com/Prod')
    // .then(response => {
    //     console.log("API RESPONSE\n");
    //     console.log(response.json);
    //     return response.json();
    // });

    // fetch(
    //     'https://e8wa6k3qf5.execute-api.us-east-2.amazonaws.com/Prod')
    //     .then(response => response.json())
    //     .then(data => console.log(data));

    function callAPI() {
        const xhttp = new XMLHttpRequest();
        const apiUrl = 'https://e8wa6k3qf5.execute-api.us-east-2.amazonaws.com/Prod';
        xhttp.open("GET", apiUrl);
        xhttp.send();

        xhttp.onreadystatechange=(e)=>{
            console.log("TEST" + xhttp.responseText);
        }
    }

    callAPI();


    //Retrieve value

    //Print to console
}