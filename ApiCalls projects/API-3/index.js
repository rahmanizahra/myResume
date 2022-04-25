const url = "https://restcountries.com/v2/all";
// Getting the name of countries who are located in Asia
async function getCountriesInAsia() {
    const response = await fetch(url);
    const data = await response.json();

    const asianCountries = await data.filter(n => n.region == "Asia");
    const asia = await asianCountries.map(n => n.name)
    console.log(asia);
    console.log(asianCountries);
    st = '';
    for (n of asia) {
        st += n + '</br>'
    }
    document.getElementById('asia').innerHTML = `${st}`

}
getCountriesInAsia();