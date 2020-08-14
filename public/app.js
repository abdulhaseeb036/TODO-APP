
// CODED BY HASEEB ALAM RAFIq
// console.log(firebase.database);
function additem() { 
    var a = document.getElementById("ip");
    var aa = a.value.toUpperCase();
    var text = document.createTextNode(aa);
    var li = document.createElement("li");
    li.setAttribute("id" , "li");
    li.setAttribute("class", "list-group-item list-group-item-dark");
    li.appendChild(text);
    var ul = document.getElementById("ul");
    ul.appendChild(li);
    a.value = "";

    // delete button with text node:
    var delbt = document.createElement("button");
    var bttext = document.createTextNode(" "+ " " + " " + "DELETE");
    delbt.appendChild(bttext);
    li.appendChild(delbt);
    delbt.setAttribute("class" , "delbt btn btn-danger fa fa-trash-o");
    delbt.setAttribute("onclick" , "deleted(this)");


    // edit button with text node:
    var editbt = document.createElement("button");
    var edittext = document.createTextNode(" "+ " " + " " +"EDIT");
    editbt.appendChild(edittext);
    li.appendChild(editbt);
    editbt.setAttribute("class" , "editbt fa fa-pencil btn-success");
    editbt.setAttribute("onclick" , "edit(this)");

    var tododata = {
        list : "haseeb"
    };


    firebase.database().ref('todo list').push(tododata);

}


firebase.database().ref('todo list').push()

function deleted(e) { 
    e.parentNode.remove();
}

function edit(e) {
    // var pro = prompt("WHAT YOU REPLCACE");
    var pro = prompt("Change Item" , e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = pro;
}

function deleall() {
    var ul = document.getElementById("ul");
    ul.innerHTML = "";
}





