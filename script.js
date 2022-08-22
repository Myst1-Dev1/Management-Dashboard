const darkmode = document.getElementById('dark-mode');
const body = document.querySelector('body');
const profileActive = document.getElementById('profileActive');
const profile = document.getElementById('profile');

darkmode.addEventListener('click', () => {
    darkmode.classList.toggle('fa-sun')
    body.classList.toggle('active');
    profile.classList.toggle('profile-dark');
})

profileActive.addEventListener('click', () => {
     profile.classList.toggle('active-profile');
})
