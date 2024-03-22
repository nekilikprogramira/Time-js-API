

async function getData(){
    let url='http://worldtimeapi.org/api/timezone/';
    url+=document.querySelector("#Continent").value;
    url+='/';
    url+=document.querySelector("#City").value;
    const response= await fetch(url)
    const data = await response.json()


    showData(data)
}



async function showData(data){

const text = document.createElement("p")

const t=document.createTextNode("Vrijeme:\n")
text.appendChild(t);
document.querySelector(".data-box").appendChild(text);

const datum = document.createTextNode(data['datetime'])
text.appendChild(datum);
document.querySelector(".data-box").appendChild(text)



}