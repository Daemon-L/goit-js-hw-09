import Notiflix from 'notiflix';

const form = document.querySelector(".form");
form.addEventListener("submit", onFormData);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}




createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
