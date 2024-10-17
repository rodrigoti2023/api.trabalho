const nomeDDD=document.getElementById("DDD");
const form=document.querySelector("form");
const estadoDiv=document.getElementById("estado");
console.log(nomeDDD);

async function pnestado(sigla){
    return fetch(`https://brasilapi.com.br/api/ibge/uf/v1/${sigla}`)
    .then(response => response.json())
    .then((result) => {     
        return result.nome
    })
    .catch(error => console.log('error', error));
}

form.addEventListener("submit", function(event){
    event.preventDefault();

    fetch(`https://brasilapi.com.br/api/ddd/v1/${nomeDDD.value}`)
    .then(response => response.json())
    .then(async (result) => {     
        const estado=`Este DDD pertence ao Estado ${await pnestado(result.state)}`;
        const p=document.createElement("p");
        p.innerHTML=estado;
        estadoDiv.innerHTML="";
        estadoDiv.appendChild(p);

        
    })
    .catch(error => console.log('error', error));
});