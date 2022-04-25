const url = "https://restcountries.com/v2/all"
    // get name and population of all countries
async function getPopulationOfCountreis() {
    const response = await fetch(url);
    const data = await response.json();
    st = '';
    for (n of data) {
        st += n.name + ": " + n.population + "<br/>"
    }
    document.getElementById("list").innerHTML = `${st}`


}
getPopulationOfCountreis();