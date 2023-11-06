const btn_play_song = document.getElementById('btn_play_song');
const btn_confess = document.getElementById('btn_confess');
const audio_controls = document.getElementById('audio_controls');
const gif_hello = document.getElementById('gif_hello');
const gif_song = document.getElementById('gif_song');
const words = document.querySelector('.words');
const step_1 = document.querySelector('.step-1');
const step_2 = document.querySelector('.step-2');
const step_3 = document.querySelector('.step-3');
const back = document.getElementById('back');
const modal_confirm = document.querySelector('.modal.modal-confirm');

const toggleModalConfirm = () => {
  if (!modal_confirm) return;

  if (modal_confirm.classList.contains('hide')) {
    modal_confirm.classList.remove('hide');
  } else {
    modal_confirm.classList.add('hide');
  }
}

const setStep = (step = 1) => {
  switch (step) {
    case 2:
      if (step_1) step_1.classList.add('hide');
      if (step_2) step_2.classList.remove('hide');
      break;
    case 3:
      if (step_2) step_2.classList.add('hide');
      if (step_3) step_3.classList.remove('hide');
      break;
      
    default:
      if (step_1) step_1.classList.remove('hide');
      if (step_2) step_2.classList.add('hide');
      if (step_3) step_3.classList.add('hide');
      break;
  }
}

const createWordsAnimation = () => {
  if (!words) return;

  const keyFrame = `
    @keyframes words-animation {
      from {
        top: 0;
      }
      to {
        top: HEIGHT_OF_WORDS;
      }
    }`;
  
  const words_count = words.children.length;

  const style = document.createElement('style');
  const minus_position = `-${(words_count * 100) - 100 + 16}px`
  style.innerHTML = keyFrame.replace(/HEIGHT_OF_WORDS/g, minus_position);
  document.head.appendChild(style)
}

createWordsAnimation();

if (btn_play_song) {
  btn_play_song.addEventListener('click', () => {
    btn_play_song.classList.add('hide');
    btn_confess.classList.remove('hide');
    if (audio_controls) audio_controls.play();

    if (gif_hello) {
      gif_hello.classList.add('hide');
      gif_song.classList.remove('hide');
    }

    if (words) {
      const words_count = words.children.length;
      const animation_durations = words_count * 4; // in seconds

      setTimeout(() => {
        words.style.animation = `words-animation ${animation_durations}s linear infinite`;
      }, 1000);

      const reff_song_duration = 45000;

      setTimeout(() => {
        btn_confess.classList.remove('disabled');
      }, reff_song_duration);
    }
  });
}

if (btn_confess) {
  btn_confess.addEventListener('click', () => {
    if (btn_confess.classList.contains('disabled')) return;

    setStep(2);
  });
}

if (back) {
  back.addEventListener('click', () => {
    setStep();
  });
}

const btn_cancel = document.getElementById('btn_reject');
const btn_confirm = document.getElementById('btn_accept');

const randomizeCancelButton = () => {
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
}

const resetCancelButton = () => {
  btn_cancel.classList.remove('to-right');
  btn_cancel.classList.remove('to-bottom');
}

['mouseover', 'click'].forEach(event => {
  if (!btn_cancel) return;

  btn_cancel.addEventListener(event, () => randomizeCancelButton());
});

if (btn_confirm) {
  btn_confirm.addEventListener('mouseover', () => resetCancelButton());
  btn_confirm.addEventListener('click', () => {
    resetCancelButton();
    toggleModalConfirm();
  });
}

const btn_send_acceptation = document.getElementById('btn_send_acceptation');

if (btn_send_acceptation) {
  btn_send_acceptation.addEventListener('click', () => {
    const phone_number = 6285156353146;
    const current_date = new Date();
    const formatted_current_date = new Intl.DateTimeFormat('id-ID', { dateStyle: 'full', timeStyle: 'medium' }).format(current_date);
    const text = `Hi aa, mulai hari ini _${formatted_current_date}_ dari pernyataan aa, *Aku nerima aa jadi pasangan Iki.* Kita official sekarang💞%0a%0ahttps://raw.githubusercontent.com/yeppymp/confession/main/assets/images/be_my_gf.png`;
    const wa_link = `https://wa.me/${phone_number}?text=${text}`
    window.open(wa_link, '_blank');
  });
}

const btn_save_date = document.getElementById('btn_save_date');

if (btn_save_date) {
  btn_save_date.addEventListener('click', () => {
    const ISODate = new Date().toISOString();
    const date = ISODate.split('T')[0].replaceAll('-', '');
    const calendar_link = `https://www.google.com/calendar/render?action=TEMPLATE&text=Yeppy%20%26%Kiki%20Anniversary&details=To%20remember%20our%20first%20date!%0A%0AThere%E2%80%99s%20nowhere%20else%20I%E2%80%99d%20rather%20be%20than%20right%20here%20by%20your%20side%20with%20your%20hand%20in%20mine.%0A%0AEvery%20love%20story%20is%20special,%20unique,%20and%20beautiful.%20But%20ours%20is%20my%20favorite.%0A%0AAnniversary%20cheers!%20%F0%9F%A5%B3%20%20&dates=${date}/${date}&ctz=Asia/Jakarta&crm=AVAILABLE&add=yeppymp@gmail.com&recur=RRULE:FREQ=YEARLY`;
    window.open(calendar_link, '_blank');
  });
}

const btn_accept_confirmation = document.getElementById('btn_accept_confirmation');

if (btn_accept_confirmation) {
  btn_accept_confirmation.addEventListener('click', () => {
    toggleModalConfirm();
    setStep(3);
  });
}

const btn_close_modal = document.getElementById('btn_close_modal');

if (btn_close_modal) {
  btn_close_modal.addEventListener('click', () => toggleModalConfirm());
}
