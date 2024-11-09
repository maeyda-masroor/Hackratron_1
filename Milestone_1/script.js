var toggleButton = document.getElementById('toggleButton');
var toggleDiv = document.getElementById('skill');
toggleButton.addEventListener('click', function () {
    if (toggleDiv.style.display === 'none') {
        toggleDiv.style.display = 'block';
    }
    else {
        toggleDiv.style.display = 'none';
    }
});
