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