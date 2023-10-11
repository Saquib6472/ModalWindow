
/*
'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

// opening the modal
const openModal = function ()
{
    modal.classList.remove('hidden');// removing hidden class from HTML
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsShowModal.length; i++)
    btnsShowModal[i].addEventListener('click', openModal); // calling the openmodal func() to open the modal

// closing the modal
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);// calling the close modal func() to close the modal
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e)// adding keyboard event. we called the func(e) parameter to look which key was pressed.
                                                // javascript will call the function in here when everytime a keydown events happens.
 //since we do not call the function we need to use a specific keyword like ESC to close the modal.

{
    // console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
    {
        closeModal();
    }
})

// since we have the same code on the both event listener we could make it in one code

/*
btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');// added the hidden class back on in order to close the window we need to add it back on
    overlay.classList.add('hidden');

});

overlay.addEventListener('click', function ()
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');


});

*/

/*
const array = []
const n = prompt(array);

for (let i = 1; i <= n; i++)
{
    array.reverse(i);
}
console.log(array);

*/

/*
let arr = function (array1)
{
    array1 = [];

    for (let i = 1; i <= array1; i++)
    {
        array1.push(i);
        console.log(array1);
    }
}
(arr([100]));

*/

/*
//Fibonacci Series using Recursion
    let n = 45;
     
    // function returns the Fibonacci number
    function fib(n){
    
    if(n <= 1)
    
        return n;
        return fib(n-1) + fib(n-2);
    }
  
    //function call
    console.log(fib(n));
//This code is contributed by Surbhi Tyagi
*/



