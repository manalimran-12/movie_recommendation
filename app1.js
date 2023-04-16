//IIFE immediately invoke function expression
(async function(){  
    const resposne = await fetch("./data.json");
    const data = await resposne.json();
    // console.log(data);
    const genereList = document.getElementById('slct')

    const yearDropdown = document.getElementById('year');

// Create options for year dropdown from 1900 to 2025
for (let year = 1900; year <= 2025; year++) {
	const option = document.createElement('option');
	option.value = year;
	option.text = year;
	yearDropdown.add(option);

}
function getGenere(){
    const query = genereList.value;
    const result = data.filter(function(Genere){
        return (Genere.genres.toLowerCase().includes(query) || 
        Genere.title.join(" ").toLowerCase().includes(query))
    })
    console.log(result);
}
genereList.addEventListener("click", getGenere);
const pointsDropdown = document.getElementById('Rate');
for (let i = 0; i <= 100; i++) {
    const option = document.createElement("option");
    option.value = (i / 10).toFixed(1);
    option.text = option.value;
    pointsDropdown.add(option);
}
})();
