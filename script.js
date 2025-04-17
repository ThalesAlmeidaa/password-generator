function animarDivs() {
    document.querySelector('.container').classList.toggle('ativa');
}

document.querySelector('.container-imagem').addEventListener('click', animarDivs);

// CÓDIGO PARA GERAR A SENHA
const passwordLengthInput = document.getElementById("size");
const includeUppercase = document.getElementById("include-uppercase");
const includeLowercase = document.getElementById("include-lowercase");
const includeNumbers = document.getElementById("include-number");
const includeSymbols = document.getElementById("include-special-character");
const generateBtn = document.getElementById("generate-btn");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  const length = parseInt(passwordLengthInput.value);
  const hasUppercase = includeUppercase.checked;
  const hasLowercase = includeLowercase.checked;
  const hasNumbers = includeNumbers.checked;
  const hasSymbols = includeSymbols.checked;

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let availableChars = "";
  let generatedPassword = "";

  if (hasUppercase) availableChars += uppercaseChars;
  if (hasLowercase) availableChars += lowercaseChars;
  if (hasNumbers) availableChars += numberChars;
  if (hasSymbols) availableChars += symbolChars;

  if (availableChars.length === 0) {
    passwordOutput.textContent = "Selecione pelo menos uma opção!";
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    generatedPassword += availableChars[randomIndex];
  }

  passwordOutput.textContent = generatedPassword;
}

generateBtn.addEventListener("click", generatePassword);

const copyBtn = document.querySelector(".copy");

copyBtn.addEventListener("click", () => {
  const password = passwordOutput.textContent;

  if (!password || password === "Selecione pelo menos uma opção!") {
    alert("Nada para copiar!");
  } else {
    navigator.clipboard.writeText(password)
  }

  
    
});

