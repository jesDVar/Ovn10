//------------TESTFIELD-------------

let btn1 = document.querySelector('#addItemBtn');
let textOutput = document.querySelector('#starWarsOutput');


((todo) => {
    todo.addItem = function(e){
        e.preventDefault();
        const input = this['sWUserInput'];
        const li = createSWInput(input);
        // console.log('hej');
        // console.log(input);
    }
    const createSWInput = (input) => {
        let textarea = document.createElement('textarea');
        textarea.innerText = input.value;
        //prints out input
        // console.log(input);
        textarea.classList.add('#starWarsOutput');
    }
    
})(window.todo = window.todo || {});

document.querySelector('#starWarsForm').addEventListener('submit', todo.addItem);




// // btn1.addEventListener('click', function(){

// //     fetch('https://www.swapi.tech/api/people', requestOptions)
// //     .then(response => response.text())
// //     .then(result => console.log(result))
// //     .catch(error => console.log('error', error));

// // })



// function getApi() {
//     /*Skriv din kod här*/
//     fetch('https://www.swapi.tech/api/people/?name=' + input)
//     .then(res => res.json())
//     .then(data => 
//         {

//         })
//     .catch(err => console.log('error', err))
// }
    


//     // fetch("https://www.swapi.tech/api/people", requestOptions)
//     // .then(response => response.text())
//     // .then(result => console.log(result))
//     // .catch(error => console.log('error', error));

//     // var requestOptions = {
//     //     method: 'GET',
//     //     redirect: 'follow'
//     //   };
      
//------------------NEW START---------------------
//
// let btn1 = document.querySelector('#addItemBtn');
// let textOutput = document.querySelector('#starWarsOutput');
