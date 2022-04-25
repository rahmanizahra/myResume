const url = "https://restcountries.com/v2/all";
async function getaLLcountriesName() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const newData = await data.map(n => n.name);
    let st = '';
    for (n of newData) {
        st += n + ',</br>'
    }

    document.getElementById("countries").innerHTML = `${newData.reduce(
        (previousValue, currentValue) => previousValue + ',<br/>' + currentValue,
        ''
    )}`
}

getaLLcountriesName();