
const btn = document.getElementById('btn');
const inputbox = document.getElementById('input');
const body = document.querySelector('.body');
const container = document.querySelector('.container');
const small = document.querySelector('small');
const searchbar = document.querySelector('.searchbar');
const itemsList = document.querySelector('ul');





function filter(e){
    const text = e.target.value.toLowerCase();
    const items = itemsList.getElementsByTagName('li');
    Array.from(items).forEach(item =>{
        const itemname = item.firstChild.textContent;
        if(itemname.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}


function showError(x){
    const form = x.parentElement;
    form.className = 'form error';
}

function removeError(x){
    const form = x.parentElement;
    form.className = 'form success';
}



function newItem(){
    const input = document.getElementById('input').value;
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input + ' -'));
    ul.appendChild(li);
    document.getElementById('input').value ='';
    li.onclick = completedItem;
    li.ondblclick = removeClassCompletedItem;
    let libtn = document.createElement('button');
    libtn.appendChild(document.createTextNode('X'));
    libtn.className = 'libtn'
    li.appendChild(libtn);


    libtn.addEventListener('click', e =>{
        e.preventDefault();
        e.target.parentElement.parentElement.removeChild(e.target.parentElement)
    })

    function removeClassCompletedItem(){
        li.className = 'li'
    }

    function completedItem(e) {
        li.className = 'completed';
    }
}



btn.addEventListener('click', e =>{
    e.preventDefault();
    if (inputbox.value == ''){
        showError(inputbox)
    }
    else{
        removeError(inputbox);
        newItem();
    } 
    
})

document.body.keypress = function(e) {
    if (inputbox.value == ''){
        showError(inputbox)
    }
    else{ (e.keyCode == 13) 
      newItem();
    }
    
};

searchbar.addEventListener('keyup', filter);


