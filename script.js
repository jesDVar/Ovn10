let btn1 = document.querySelector('#addItemBtn');
let textOutput = document.querySelector('#starWarsOutput');



((todo) => {
    todo.addItem = function(e){
        e.preventDefault();
        const input = this['sWUserInput'];
        // console.log('hej');
        // console.log(input);
    }
    const createSWInput = (input) => {
        let li = document.createElement('li');
        li.innerText = input.value;
        li.classList.add('#starWarsOutput');
    }
    
})(window.todo = window.todo || {});

document.querySelector('#starWarsForm').addEventListener('submit', todo.addItem);


function getApi(){
    /*Skriv din kod här*/
    fetch('https://www.swapi.tech/api/people/?name=' + input)
    .then(res => res.json())
    .then(data =>
    {
    /*Och här*/
    })
    .catch(err => console.log(err))
    }