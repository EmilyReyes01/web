document.addEventListener('DOMContentLoaded', () => {
    const headerTitle = document.querySelector('.header h1');
    headerTitle.style.opacity = 0;
  
    setTimeout(() => {
      headerTitle.style.opacity = 1;
    }, 500);
  });
  