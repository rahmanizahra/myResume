const url = "https://restcountries.com/v2/all";
// get the name of countries and their capitalls by ASYNC /AWAIT
async function getCapital() {
    const response = await fetch(url);
    const data = await response.json();
    const newData = data.map(n => n.name + ":" + n.capital);
    console.log(newData);
    st = '';
    for (n of newData) {
        st += n + "</br>";
    }
    document.getElementById("capital").innerHTML = st;
}
getCapital();

// get the name of countries and their capitalls by Promise/then


// const response = fetch(url);
// response.then(value => value.json().then(d => myFunction(d)))


// function myFunction(data) {
//     const newData = data.map(n => n.name + " : " + n.capital + "</br>");
//     document.getElementById("capital").innerHTML = newData;
// }