
// first section controls
const nameCtrl = document.querySelector('#name');
const birthdayCtrl = document.querySelector('#date');
const lightThemeCtrl = document.querySelector('#light');
const darkThemeCtrl = document.querySelector('#dark');
const skillSection = document.querySelector('#skillSection');


// second section controls
const rightSection = document.querySelector('#rightSection');
const nameOutputCtrl = document.querySelector('#nameOutput');
const ageOutputCtrl = document.querySelector('#ageOutput');
const themeOutputCtrl = document.querySelector('#themeOutput');
const skillOutputCtrl = document.querySelector('#skillsOutput');


// validation controls
const errorCtrl = document.createElement('span');
errorCtrl.style.color = 'red';


const getAgeByBirthday = birthday => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
        age--;

    return age;
}

const addWarnClass = event => {
    event.target.classList.remove('btn-success');
    event.target.classList.add('btn-warning');
}

const addSuccessClass = event => {
    event.target.classList.remove('btn-warning');
    event.target.classList.add('btn-success');
}


nameCtrl.addEventListener('focus', () => {
    if (nameCtrl.value) return;
    nameOutputCtrl.textContent = 'Hello there! What\'s your name?';
    errorCtrl.textContent = '';
});

nameCtrl.addEventListener('blur', () => {
    if ( nameCtrl.value ) nameOutputCtrl.textContent = `Hi, ${nameCtrl.value}`
    else {
        errorCtrl.textContent = 'Please enter your name!';
        nameCtrl.insertAdjacentElement('afterend', errorCtrl);
    }
});

birthdayCtrl.addEventListener('focus', () => {
    if (birthdayCtrl.value) return;
    ageOutputCtrl.textContent = 'Lemme guess, your age is...';
    errorCtrl.textContent = '';
});

birthdayCtrl.addEventListener('blur', () => {
    if ( birthdayCtrl.value )
        ageOutputCtrl.textContent = `Your age is ${getAgeByBirthday(new Date(birthdayCtrl.value))} years old!`
    else ageOutputCtrl.textContent = 'Would you mind entering your birthday?';
});

lightThemeCtrl.addEventListener('click', () => {
    rightSection.classList.remove('bg-dark', 'text-white');
    rightSection.classList.add('bg-light', 'text-dark');
    themeOutputCtrl.textContent = 'You Choose Light Mode!';
});

darkThemeCtrl.addEventListener('click', () => {
    rightSection.classList.remove('bg-light', 'text-dark');
    rightSection.classList.add('bg-dark', 'text-white');
    themeOutputCtrl.textContent = 'You Choose Dark Mode!';
});

skillSection.addEventListener('click', event => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (isButton) {

        event.target.addEventListener('mouseenter', addWarnClass);

        event.target.addEventListener('mouseleave', addSuccessClass);

        event.target.style['marginLeft'] = '5px'
        skillOutputCtrl.appendChild(event.target);
    }
});

skillOutputCtrl.addEventListener('click', event => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (isButton) {
        addSuccessClass(event);
        event.target.removeEventListener('mouseenter', addWarnClass);
        event.target.removeEventListener('mouseleave', addSuccessClass);
        event.target.style['marginLeft'] = '5px'
        skillSection.appendChild(event.target);
    }
});

