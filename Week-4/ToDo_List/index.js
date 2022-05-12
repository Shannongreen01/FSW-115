    axios.get('http://api.bryanuniversity.edu/sg2/list/')
    .then(response => {
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++){
                const tasks = document.getElementsByClassName("list")[i]
                tasks.textContent = response.data[i].name
                if (response.data[i].isComplete === true) {
                    tasks.style.textDecorationLine = "line-through"
                    
                }
                document.body.appendChild
                }
            })
            .catch(error => console.log(error))
