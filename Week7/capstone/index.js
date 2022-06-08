const form = document.getElementById("forms");

//GET REQUEST
axios.get("http://api.bryanuniversity.edu/sg3/list/")
.then(response => {
    
    for (let i = 0; i < response.data.length; i++) {

    //TODO LIST TEXT
    const li = document.createElement("li");
    const ul = document.getElementsByTagName("ul")[0];
    ul.prepend(li);
    li.classList = "list";

    const h2 = document.createElement("h2");
    h2.textContent = response.data[i].title;
    li.appendChild(h2);

    const h3 = document.createElement("h3");
    h3.textContent =  "- " + response.data[i].description;
    li.appendChild(h3);



    //DELETE BUTTON
    const button = document.createElement("button");
    button.textContent = "Completed";
    button.id = response.data[i]._id;
    li.appendChild(button);

    //DELETE - EVENT LISTENER
    button.addEventListener("click", (event) => {
        axios.delete("http://api.bryanuniversity.edu/sg3/list/" + event.currentTarget.id)
            .then(response => {response.data
            location.reload()
            })
            .catch(error => console.log(error))
    })

    //EDIT BUTTON
    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.style.marginLeft = "30px";
    edit.id = response.data[i]._id;
    li.appendChild(edit);

    //SUBMIT BUTTON
    const submits = document.createElement("button");
    submits.textContent = "Submit";
    submits.style.marginLeft = "30px";
    submits.id = response.data[i]._id;

    //EDIT FORM - EVENT LISTENER
    edit.addEventListener("click", (e) => {

        const x = document.getElementById("box");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "block";
        }
        
        li.appendChild(submits);
    })

    //SUBMIT EDIT - EVENT LISTENER - PUT
    submits.addEventListener("click", (event) => {
    
        let t = document.getElementById("titleInput").value;
        let d = document.getElementById("detailsInput").value;

        if (t.length === 0) {
        t = response.data[i].title;
        }
        if (d.length === 0) {
        d = response.data[i].description;
        }
       
        axios.put("http://api.bryanuniversity.edu/sg3/list/" + event.currentTarget.id, {
            title:t,
            description:d,
            })
            .then(response => {response.data 
            location.reload()
            })
            .catch(error => console.log(error))
    })

}
})
.catch(error => console.log(error))


// NEW TODO - POST
form.addEventListener("submit", function(event){
    event.preventDefault();

    const newTodo = {
        title: form.title.value,
        description: form.description.value,
    }

    axios.post("http://api.bryanuniversity.edu/sg3/list/", newTodo)
        .then(response => {response.data 
        form.reset()
        location.reload()
        })
        .catch(error => console.log(error))    
})