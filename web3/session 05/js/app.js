var calcBtns = Array.from(document.querySelectorAll('button'));
var show = document.querySelector('#result');


calcBtns.forEach(button => {
  button.addEventListener('click', (event) => {
    switch(event.target.innerHTML){
      case 'C':
        show.innerHTML = '';
        break;
      case 'Del':
          show.innerHTML = show.innerHTML.slice(0, -1);
         break;
      case '=':
          show.innerHTML = eval(show.innerHTML.replace('x', '*'));
        break;
      case '=':
          show.innerHTML = eval(show.innerHTML.replace('%', '/100*'));
        break;
      default: 
        show.innerHTML += event.target.innerHTML;
    }
  });
});