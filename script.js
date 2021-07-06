const form = document.forms[0];

form.getElementsByTagName('button')[0].addEventListener('click', event => {
    Array.from(form.getElementsByTagName('input')).forEach(input => {
        if (input.checkValidity()) {
            input.parentElement.classList.remove('invalid');
        } else {
            input.parentElement.classList.add('invalid');
            event.preventDefault();
        }
    });
});