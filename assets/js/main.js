const btn_cancel = document.getElementById('btn_cancel');
const btn_confirm = document.getElementById('btn_confirm');

function handleConfirmation() {
  if (!btn_cancel) return;

  btn_cancel.addEventListener('mouseover', function () {
    if (
      !btn_cancel.classList.contains('to-right')
      && !btn_cancel.classList.contains('to-bottom')
    ) {
      btn_cancel.classList.add('to-right');
  
      return;
    }
    
    if (btn_cancel.classList.contains('to-right')) {
      btn_cancel.classList.add('to-bottom');
      btn_cancel.classList.remove('to-right');
  
      return;
    }
    
    if (btn_cancel.classList.contains('to-bottom')) {
      btn_cancel.classList.remove('to-bottom');
    }
  });

  if (!btn_confirm) return;
  
  btn_confirm.addEventListener('mouseover', function () {
    btn_cancel.classList.remove('to-right');
    btn_cancel.classList.remove('to-bottom');
  });
}

handleConfirmation();

const words = document.querySelector('.words');

function handleWords() {
  if (!words) return;

  if (words.children.length > 0) {
    const children = Array.from(words.children);

    children.forEach(word => {
      setTimeout(() => {
        word.style.fontWeight = 'bold';
      }, 3000);
    });
  }
}

handleWords();