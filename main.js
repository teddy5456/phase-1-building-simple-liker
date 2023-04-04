// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const likeButtons = document.querySelectorAll('.like');
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    mimicServerCall()
  })
})

mimicServerCall()
  .then(response => {
    
  })
  .catch(error => {
   
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modal.classList.remove('hidden');
    modalMessage.textContent = error;
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 3000);
  });

  mimicServerCall()
  .then(response => {
    
    const heart = event.target;
    heart.classList.add('activated-heart');
    heart.textContent = 'Liked! ❤️';
  })
  .catch(error => {
    
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modal.classList.remove('hidden');
    modalMessage.textContent = error;
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 3000);
  });

  const likeButtons = document.querySelectorAll('.like');
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    mimicServerCall()
      .then(response => {
        const heart = event.target;
        heart.classList.add('activated-heart');
        heart.textContent = 'Liked! ❤️';
      })
      .catch(error => {
        const modal = document.getElementById('modal');
        const modalMessage = document.getElementById('modal-message');
        modal.classList.remove('hidden');
        modalMessage.textContent = error;
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      });
  });
  
  button.addEventListener('dblclick', () => {
    const heart = event.target;
    heart.classList.remove('activated-heart');
    heart.textContent = 'Like! ♡';
  });
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
