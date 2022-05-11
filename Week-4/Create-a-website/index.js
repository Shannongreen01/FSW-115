document.getElementById('find_out').addEventListener('click', Data);
function Data(){
    axios.get('https://api.chucknorris.io/jokes/random')
    .then(response => {
        console.log(response.data)
        const chuck = response.data.value;
        let Div1 = document.getElementById('Div1');
        let pic = document.getElementById('myImg').src = `https://cdna.artstation.com/p/assets/images/images/035/710/734/medium/martin-schwella-chucknorris.jpg?1615694772`;
        Div1.textContent = `Chuck Says: ${chuck}`;
        document.append(Div1); 
        document.append(pic);
      
        
    })
    .catch(error => console.log(error))
}

