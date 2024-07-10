const box = document.getElementById("input-box");
const box1 = document.getElementById("list-container");

function addTask() {
    if (box.value.trim() === '') {
        alert('You must write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = box.value;
        box1.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
        box.value = '';
        save();
    }
}

box1.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save();
    }
},false)

function save(){
    localStorage.setItem("data",box1.innerHTML);
}


function show(){
    box1.innerHTML=localStorage.getItem("data");
}
show();
