var list=[];
function AddBook()
{
    var newItem=document.querySelector("#book").value;

list.push(newItem);
console.log(newItem);
newItem=" ";
document.getElementById("book").value=" ";
}
function dispList()
{
    var i=0;
    var dispElem=document.querySelectorAll(".disp");
    dispElem[0].innerHTML="<ul>";
    for(let item of list)
        {
dispElem[0].innerHTML+=
'<li class="item" id="'+item+'" onClick="mark('+i+')">'+item+"</li>";
i++;
        }
        dispElem[0].innerHTML+="</ul>";
       
}
function mark(id)
{
    var elem=document.querySelectorAll(".item")[id];
    elem.style.textDecoration="line-through";
}