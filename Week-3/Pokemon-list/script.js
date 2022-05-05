let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/', true);
xhr.send();



xhr.onreadystatechange = function(){;
    if(xhr.readyState === 4 && xhr.status === 200){;
        console.log(xhr.responseText);
        let data = JSON.parse(xhr.responseText);
        results(data.results);
    } else if (xhr.readyState === 4 && xhr.status !==200){;
        console.log(xhr.responseText);
    };
};
 
function results(data){;
    console.log(data);
    for (let x = 0; x < data.length; x++){;
        const pokemonName = document.createElement("h1");
        const pokemonUrl = document.createElement("h4");
        pokemonName.textContent = `Pokemon Name: ${data[x].name}`; 
        pokemonUrl.textContent = `Pokemon url: ${data[x].url}`; 
        document.body.appendChild(pokemonName);
        document.body.appendChild(pokemonUrl);
        document.body.style.width = "23%",
        document.body.style.textAlign = "center";
        document.body.style.border = "solid";
        document.body.style.fontSize = "15px";
        document.body.style.marginTop = "70px";
        document.body.style.marginRight = "70px";
        document.body.style.marginBottom = "150px";
        document.body.style.marginLeft = "55px";
        };
        };
