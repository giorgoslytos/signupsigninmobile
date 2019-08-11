const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const signUpBtnM = document.getElementById('signUp');
const signInBtnM = document.getElementById('signIn');
const login = document.getElementById('login');

signUpBtnM.addEventListener('click', () => {
  login.classList.add("bottom-panel-active");
});

signInBtnM.addEventListener('click', () => {
  login.classList.remove("bottom-panel-active");
});