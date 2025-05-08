const switchElement = document.getElementById('switch');
const thumb = document.getElementById('thumb');
const reset = document.getElementById('reset');
const screenValue = document.querySelector('.screen-value')
const buttonBlock = document.querySelectorAll('.button-block button');

let state = null;

switchElement.addEventListener('click', () => {
  state = (state + 1) % 3;

  if (state === 0) {
    thumb.style.left = '3px';
    thumb.style.background = 'hsl(25, 98%, 40%)';
    document.body.classList.remove('dark-mode', 'light-mode');
  } else if (state === 1) {
    thumb.style.left = '25px';
    thumb.style.background = 'rgba(245, 142, 63, 1)';
    document.body.classList.add('light-mode');
  } else if (state === 2) {
    thumb.style.left = '50px';
    thumb.style.background = 'hsl(176, 100%, 44%)';
    document.body.classList.add('dark-mode');
  }
});

let expression = '';

buttonBlock.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    
    if (value === 'RESET') {
      expression = '';
      screenValue.textContent = '';
    } else if (value === 'DEL') {
      expression = expression.slice(0, -1);
      screenValue.textContent = expression;
    } else if (value === '=') {
      try {
        expression = eval(expression).toString();
        screenValue.textContent = expression;
      } catch {
        screenValue.textContent = 'Error';
        expression = '';
      } 
    } else if (value === 'X') {
      expression += '*'
      screenValue.textContent = expression;
    } else {
      expression += value;
      screenValue.textContent = expression; 
    }
  });
}); 
