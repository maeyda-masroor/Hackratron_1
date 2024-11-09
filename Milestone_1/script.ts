const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const toggleDiv = document.getElementById('skill') as HTMLDivElement;
toggleButton.addEventListener('click', () => {  
  if (toggleDiv.style.display === 'none') {
    toggleDiv.style.display = 'block';
  } else {
    toggleDiv.style.display = 'none';
  }
});