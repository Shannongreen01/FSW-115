document.getElementById('find_out').addEventListener('click', Data);
function Data(){
    axios.get('https://game-of-thrones-quotes.herokuapp.com/v1/random')
    .then(response => {
        console.log(response.data)
        const Rick = response.data.sentence;
        let Div1 = document.getElementById('Div1');
        let pic = document.getElementById('myImg').src = `https://cdn.vox-cdn.com/thumbor/YPmxV5wHi-tcK9AjvDWTSIaclr8=/0x0:1100x619/920x613/filters:focal(462x222:638x398):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63864011/game_of_thrones.0.jpg`;
        Div1.textContent = `${Rick}`;
        document.append(Div1); 
        document.append(pic);
        
    })
    .catch(error => console.log(error))
}
