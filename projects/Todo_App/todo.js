let todolist=[];
displayItem();
function addtodo(){
  let inputElement=document.querySelector('#inputtext');
  let inputdate=document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let tododate=inputdate.value;
  todolist.push({items: todoItem, Due_date:tododate});
  inputElement='';
  displayItem();
}

function displayItem(){
  let containerElement=document.querySelector('.todo-container');

  let newHTML='';
  for(let i=0;i<todolist.length;i++){
    let date=todolist[i].Due_date;
    let item=todolist[i].items;
    newHTML+=`
    
    <span>${item}</span>
    <span>${date}</span>
    <button onclick="todolist.splice(${i},1);displayItem();">Delete</button>
    `;
  }
  containerElement.innerHTML=newHTML;
}