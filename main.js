
const likeButtons = document.querySelectorAll('.like');


likeButtons.forEach(likeButton => {
  likeButton.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        likeButton.classList.toggle('activated-heart');
        likeButton.innerHTML = 'Liked! &#x2665;';
      })
      .catch(() => {

        const modal = document.getElementById('modal');
        const modalMessage = document.getElementById('modal-message');
        modal.classList.remove('hidden');
        modalMessage.innerHTML = 'Something went wrong. Please try again.';
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      });
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
