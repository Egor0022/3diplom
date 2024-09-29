// Minimum-Recommended
document.querySelectorAll('.explore-switch__checkbox input').forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    const parent = checkbox.closest('.explore-item'); 
    const minList = parent.querySelector('#minimum');
    const recList = parent.querySelector('#recommended'); 
    
    if (checkbox.checked) {
      minList.classList.remove('active');
      recList.classList.add('active');
    } else {
      minList.classList.add('active');
      recList.classList.remove('active');
    }
  });
});

// Standard-Limited
document.querySelectorAll('.explore-switch__checkbox input').forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    const parent = checkbox.closest('.explore-item');
    const standardList = parent.querySelector('#standard');
    const limitedList = parent.querySelector('#limited');

    if (checkbox.checked) {
      standardList.classList.remove('active');
      limitedList.classList.add('active');
    } else {
      standardList.classList.add('active');
      limitedList.classList.remove('active');
    }
  });
});
