document.addEventListener('DOMContentLoaded', e => {
    const alert = document.querySelectorAll('mark.red');
    alert.forEach(elem => {
      elem.addEventListener('click', function (event) {
        event.target.style.display = 'none';
      })
    })
  })