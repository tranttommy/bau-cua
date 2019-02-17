import sessionStorage from './utils/session-storage.js';

const profileForm = document.getElementById('profile-form');

profileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formDaddy = new FormData(profileForm);
    const profileObj = {
        name: formDaddy.get('name'),
        startMoney: formDaddy.get('start-money')
    };
    sessionStorage.store('newPlayer', profileObj);
    window.location = './play.html';
});