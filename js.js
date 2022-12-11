let input = document.getElementById("taskin");
let button = document.querySelector(".button");
let tasks = document.querySelector(".tasks");

if(window.localStorage.tasks){
            JSON.parse(window.localStorage.tasks).forEach(function(e){
        
                let newdiv = document.createElement("div");
                let del = document.createElement("span")
                
                newdiv.textContent = e.Title
                newdiv.id = e.id;
                del.textContent = "Delete";
                newdiv.appendChild(del)
                tasks.appendChild(newdiv)
                // console.log(JSON.parse(window.localStorage.tasks)[0].id)
        
            });
        }





function add(){

    if(input.value.trim() === ""){
        
    }else{
        let newdiv = document.createElement("div");
        let del = document.createElement("span")
        
        newdiv.textContent = input.value
        newdiv.classList.add("id")
        del.textContent = "Delete";
        newdiv.appendChild(del)
        tasks.appendChild(newdiv)
    
    
        if(window.localStorage.tasks){
            let id = new Date().getTime();
            let obj = [{id:id, Title: input.value}]
            let newarray = JSON.parse(window.localStorage.tasks).concat(obj)
            window.localStorage.tasks = JSON.stringify(newarray)
            console.log(newarray)
            newdiv.id = id;
    
    
        }else{
            let id = new Date().getTime();
            let obj = [{id:id, Title: input.value}];
            window.localStorage.tasks = JSON.stringify(obj)
            console.log("new")
            newdiv.id = id;
    
        }
    
    
        document.querySelectorAll("span").forEach(function(e){
            e.onclick = function(){
                remove(e)
            }
        })
    
    }



}
function remove(e) {
    let delindex = ""
    for(let i = 0; i < JSON.parse(window.localStorage.tasks).length; i++){
        if(JSON.parse(window.localStorage.tasks)[i].id == e.parentElement.id){
            delindex = i;
        }
    }

    let newarray = JSON.parse(window.localStorage.tasks);
    newarray.splice(delindex,1);
    window.localStorage.tasks = JSON.stringify(newarray)
    e.parentElement.remove();
}

document.forms[0].onsubmit = function(e){
    e.preventDefault()
    add()
}

let spans = document.querySelectorAll("span")
spans.forEach(function(e){
    e.onclick = function(){
        remove(e)
    }
})
