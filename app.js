const subBtn = document.querySelector('#subbtn');
const form = document.querySelector('form');

subBtn.addEventListener('click', e => {
    const pass1 = document.querySelector('#userpass');
    const pass2 = document.querySelector('#passconfirm');
    const errorMsg = document.querySelector('#passerr');

    if (pass1.value != pass2.value) {
        e.preventDefault();
        pass1.classList.add('error');
        pass2.classList.add('error');
        errorMsg.style.display = 'block';
    } else {
        form.submit();
    }
});