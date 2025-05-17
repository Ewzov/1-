const buttons = document.querySelectorAll('.filter-buttons button');
const items = document.querySelectorAll('.card');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const category = button.getAttribute('data-category');
    items.forEach(card => {
      if(category === 'color' || card.getAttribute('data-category') === category){
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});