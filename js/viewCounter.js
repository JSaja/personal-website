
var hitNum;

window.onload = function() {

    const apiUrl = 'https://e8wa6k3qf5.execute-api.us-east-2.amazonaws.com/Prod';


    function callAPI() {
        const xhttp = new XMLHttpRequest();        
        xhttp.open("GET", apiUrl);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.send();

        xhttp.onreadystatechange=(e)=>{
            hitNum = xhttp.responseText;
            document.getElementById('view-count-number').innerHTML = hitNum;
        }
    }

    callAPI();
}