const addform=document.querySelector('.add');
const list=document.querySelector('.todos');  //we are calling the ul
const search=document.querySelector('.search input');

const generatetemplate = todo =>{

       const html = `
           <li class="list-group-item d-flex justify-content-between align-items-center">
             <span>${todo}</span>
             <i class="fa-solid fa-trash-can delete"></i>
           </li> 
           `;
           

       list.innerHTML += html;   //places the html into the dom
};

addform.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = addform.add.value.trim();  //trim removes the space in the submit button
   // console.log(todo);

//to make sure that the user has typed somthing before it displays   
   if(todo.length){
    generatetemplate(todo); //call back function for todo
    
    addform.reset()//clear form
   };

});

//delete todos

list.addEventListener('click', e =>{
    //e.target gets us the actual element that was clicked
    if(e.target.classList.contains('delete')){    //contains is a method 
        e.target.parentElement.remove();  //removes the parent which is the li tag
    }
});

// functions filter todos
 
const filterTodos =(term) =>{
    // console.log(Array.from(list.children));
    Array.from(list.children)
      .filter((todo)=> !todo.textContent.toLowerCase().includes(term)) //returns the array that we need 
        // return todo.textContent
        // console.log(todo.textContent);
        // return true;
        
       .forEach((todo) => todo.classList.add('filtered')); //cycles through the array
             
    Array.from(list.children)
       .filter((todo)=> todo.textContent.toLowerCase().includes(term))  //list of elements of todos that do match
       .forEach((todo) => todo.classList.remove('filtered')); //removes the class that do not match
    
};

//search form - key up events
search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
