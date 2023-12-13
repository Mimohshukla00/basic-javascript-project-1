 const buttons = document.querySelectorAll('.color')
const body = document.querySelector('body')
buttons.forEach(function (color) {
    console.log(color);
    color.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);
        if (event.target.id === 'Red') {
            body.style.backgroundColor = event.target.id;
          }
          if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id;
          }
          if (event.target.id === 'green') {
            body.style.backgroundColor = event.target.id;
          }
          if (event.target.id === 'purple') {
            body.style.backgroundColor = event.target.id;
          }
      
        
    }) 
})