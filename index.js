const date = document.getElementById("date");
const clear = document.querySelector(".clear");
const List = document.getElementById("list");
const input = document.getElementById("input");

//add the job attributes classes
const Unchecked = "fa-circle-thin";
const Checked = "fa-check-circle";
const Line_Through = "linethrough";

//create variables
let LIST = [],
id = 0;

//create the date 
const options = {weekday:"short", month:"long", day:"numeric"};
const today = new Date();
 
date.innerHTML = today.toLocaleDateString("en-US", options);

//add a to-do function
const TODO = (todo, id, done, thrash) => {
    if(thrash){return ''};

    const DONE = done? Checked: Unchecked;
    const LINE_THROUGH = done? Line_Through: '';

    const text = `
    <li class="item">
    <i class="check fa ${DONE}" job="complete" id=${id}></i>
    <p class="text ${LINE_THROUGH}">${todo}</p>
    <i class="del fa fa-trash-o" job="delete" id=${id}></i>
    </li>
    `

    const position = "beforeend";

    List.insertAdjacentHTML(position, text);
 }

 // add an event listener to the input field
 document.addEventListener("keyup", function(event){
   if(event.keyCode == 13){
    const toDo = input.value;

    if(toDo) {
        TODO(toDo, id, false, false);

        LIST.push({
            name: toDo,
            id: id,
            done: false,
            thrash: false,
        })
        localStorage.setItem("SET",JSON.stringify(LIST));
        id++;
    }
    input.value = '';
   }
   
 })

//add a function when the TODO task is completed
 
const completeTODO = (element) => {
    element.classList.toggle(Checked);
    element.classList.toggle(Unchecked);
    element.parentNode.querySelector(".text").classList.toggle(Line_Through);

    const Check = LIST[element.id].done;
    Check ? false: true;

}

//add a function to remove a TODO task

const removeTODO = (element) => {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

//add an event listener to our TODO tasks

List.addEventListener("click", (event) => {
    const element = event.target;
    const elementJob = element.attributes.job.value;
    LIST[element.id].done = LIST[element.id].done? false: true;
    

    if (elementJob == "complete") {
        completeTODO(element);

    } else if (elementJob === "delete") {
        removeTODO(element);
    } 
    localStorage.setItem("SET",JSON.stringify(LIST));
});

//create a local storage 

let data = localStorage.getItem("SET");

const loadToDo = (array) => {
    array.forEach(function(item){
        TODO(item.name, item.id, item.done, item.thrash)
    })
}

if(data){
    LIST = JSON.parse(data);
    loadToDo(LIST);
    id = LIST.length;
} else {
    LIST = [];
    id = 0;
}

//to clear the local storage

clear.addEventListener("click", () => {
    clear.classList.add("rotate");
    localStorage.clear();
    location.reload();
})