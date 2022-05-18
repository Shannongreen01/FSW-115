const form = document.getElementById("forms");

//get request
axios.get("http://api.bryanuniversity.edu/sg2/list/")
.then(response => {
    
    for (let i = 0; i < response.data.length; i++) {

    const li = document.createElement("li");
    const ul = document.getElementsByTagName("ul")[0]
    ul.append(li);
    li.classList = "list";

    const h2 = document.createElement("h2");
    h2.textContent = response.data[i].name;
    li.appendChild(h2);



    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.id = response.data[i]._id;
    if (response.data[i].isComplete === true) {
        checkbox.checked = true;
        h2.style.textDecorationLine = "line-through";  
    }
    li.appendChild(checkbox);
    
    checkbox.addEventListener("click", (event) => {
        let updates;
        if (checkbox.checked) {
            updates = true;
        } else {
            updates = false;
        }
        axios.put("http://api.bryanuniversity.edu/sg2/list/" + event.currentTarget.id, {completed:updates})
        .then(response => (response.data))
        .catch(error => console.log(error))
    })

    //delete
    const button = document.createElement("button")
        button.textContent = "Delete";
        button.id = response.data[i]._id
        button.style.marginLeft = "px";
        button.style.paddingRight = "125px";
        li.appendChild(button);
        button.addEventListener("click", (event) => {
        axios.delete("http://api.bryanuniversity.edu/sg2/list/" + event.currentTarget.id)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
     })
     
}
})
.catch(error => console.log(error))

// post
form.addEventListener("submit", function(event){
    event.preventDefault()

    const newTodo = {
        name: form.title.value,
        isComplete: form.isThisComplete.value,

    }
    axios.post("http://api.bryanuniversity.edu/sg2/list/", newTodo)
        .then(response => {response.data 
        form.reset()})
        .catch(error => console.log(error))
       
})
