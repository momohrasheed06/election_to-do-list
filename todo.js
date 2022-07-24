

// document.querySelector('.addbtn').onclick = function(){
//     if(document.querySelector('.addinput').value.length === 0){
//         alert("No activity yet")
//     }

//     else{
//         document.querySelector('.election_activities').innerHTML += `
//             <div class="activities">
//                 <span><ol>
//                     ${document.querySelector('.addinput').value}
//                 </ol></span>
//                 <button class="delete">Delete</button>
//             </div>`;
        
//             document.querySelector('.addinput').value = ''
//             e.preventDefault()

//         var election_period = document.querySelectorAll(".delete");
//         for(var i=0; i<election_period.length; i++){
//             election_period[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }
//     }
// }




///get acces to the element we are to use in the program

let elect = document.querySelector(".addinput")
let addBtn = document.querySelector('.addbtn')
let disSec = document.querySelector('.election_activities')

/// add eventlistner to the button that is to be click to add it

addBtn.addEventListener('click',handleAddBtn)


//add an event listner to the displa page in other to delegate the event so that we can target
// the delete buttton inside and remove the parent element

disSec.addEventListener('click',deleteBtn)


function handleAddBtn(){
    if(elect.value.trim() !== ''){
        
        disSec.style.display = 'block'
        disSec.innerHTML += `
        <div class="activities">
            <span>
                ${elect.value}
            </span>
            <button class="delete">Delete</button>
        </div>
        `
        elect.value = ''
    }else{
        alert("No activity yet")
        
    }
}



function deleteBtn(event){

    let target = event.target
    //if the class of the element that was clicked contains delete i want to delete to navigate to the parentElement
    // and delete it
    if(target.classList.contains('delete')){
        target.parentElement.remove()
    }
}