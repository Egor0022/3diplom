document.querySelectorAll('.faq-item__header').forEach(header => {
    header.addEventListener('click', function() {
      const faqItem = this.parentElement;
      faqItem.classList.toggle('opened')
      const item = faqItem.querySelector('.faq-item__content');
      if (faqItem.classList.contains('opened')) {
       
        item.style.height = item.scrollHeight + 'px';
      } else {
        
        item.style.height = 0;
      }
    });
  });