const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const clearBtn = document.getElementById('clear');
const errorMsg = document.getElementById('error-msg');

let count = 0;

function updateCountDisplay() {
  countDisplay.textContent = count;
  if (count === 0) {
    clearBtn.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
  }
}

function clearCount() {
  count = 0;
  updateCountDisplay();
}

incrementBtn.addEventListener('click', () => {
  count++;
  updateCountDisplay();
});

decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateCountDisplay();
    errorMsg.style.display = 'none';
  } else {
    errorMsg.style.display = 'block';
  }
});

clearBtn.addEventListener('click', clearCount);
