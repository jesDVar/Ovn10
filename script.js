((todo) => {
    todo.addItem = function(e){
        e.preventDefault();
        console.log('hej');
    }
    
})(window.todo = window.todo || {});

document.querySelector('#starWars').addEventListener('submit', todo.addItem);