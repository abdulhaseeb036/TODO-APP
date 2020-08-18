
// CODED BY HASEEB ALAM RAFIq
// console.log(firebase.database);


firebase.database().ref('todoitems').on('child_added',function(data){
    // create li with text
    var li = document.createElement('li');
    var text = document.createTextNode(data.val().value);
    li.setAttribute("id" , "li");
    li.setAttribute("class", "list-group-item list-group-item-dark");
    li.appendChild(text);
    var ul = document.getElementById("ul");
    ul.appendChild(li);
    

    // delete button with text node:
    var delbt = document.createElement("button");
    var bttext = document.createTextNode(" "+ " " + " " + "DELETE");
    delbt.appendChild(bttext);
    li.appendChild(delbt);
    delbt.setAttribute("class" , "delbt btn btn-danger fa fa-trash-o");
    delbt.setAttribute("onclick" , "deleted(this)");
    delbt.setAttribute("id", data.val().key);


    // edit button with text node
    var editbt = document.createElement("button");
    var edittext = document.createTextNode(" "+ " " + " " +"EDIT");
    editbt.appendChild(edittext);
    li.appendChild(editbt);
    editbt.setAttribute("class" , "editbt fa fa-pencil btn-success");
    editbt.setAttribute("onclick" , "edit(this)");
    editbt.setAttribute("id", data.val().key);
})

function additem() { 
    var a = document.getElementById("ip");
    var key = firebase.database().ref('todoitems').push().key;
    var list = {
        value: a.value,
        key: key
    };
    firebase.database().ref('todoitems').child(key).set(list);
    a.value = "";
}


function deleted(e) { 
    e.parentNode.remove();
    firebase.database().ref('todoitems').child(e.id).remove();
}

function edit(e) {
    // var pro = prompt("WHAT YOU REPLCACE");
    var pro = prompt("Change Item" , e.parentNode.firstChild.nodeValue);
    var editlist = {
        value: pro,
        key: e.id
    }
    firebase.database().ref('todoitems').child(e.id).set(editlist);
    e.parentNode.firstChild.nodeValue = pro;

}

function deleall() {
    var ul = document.getElementById("ul");
    ul.innerHTML = "";
    firebase.database().ref('todoitems').remove();
}


    // var aa = a.value.toUpperCase();
    // var text = document.createTextNode(aa);
    // var li = document.createElement("li");
    // li.setAttribute("id" , "li");
    // li.setAttribute("class", "list-group-item list-group-item-dark");
    // li.appendChild(text);
    // var ul = document.getElementById("ul");
    // ul.appendChild(li);
    

    // delete button with text node:
    // var delbt = document.createElement("button");
    // var bttext = document.createTextNode(" "+ " " + " " + "DELETE");
    // delbt.appendChild(bttext);
    // li.appendChild(delbt);
    // delbt.setAttribute("class" , "delbt btn btn-danger fa fa-trash-o");
    // delbt.setAttribute("onclick" , "deleted(this)");


    // edit button with text node:
    // var editbt = document.createElement("button");
    // var edittext = document.createTextNode(" "+ " " + " " +"EDIT");
    // editbt.appendChild(edittext);
    // li.appendChild(editbt);
    // editbt.setAttribute("class" , "editbt fa fa-pencil btn-success");
    // editbt.setAttribute("onclick" , "edit(this)");





