// const urlPattern =
//   /^(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/\S*)?$/;

const urlPattern = /^(?:https?:\/\/)?(?:www\.)?(?:[a-zA-Z0-9-]+\.)+(?:com|io|ghw\.mlh\.io)(?:\/\S*)?$/;

export function isValidUrl(url) {
  return urlPattern.test(url);
}

export function generateRandomPassword(length) {
  const words = [
    "Abyssinian",
    "American Bobtail",
    "American Curl",
    "American Shorthair",
    "American Wirehair",
    "Balinese",
    "Bengal",
    "Fiesta",
    "Focus",
    "Taurus",
    "Mustang",
    "Explorer",
    "Expedition",
    "F-150",
    "Model T",
    "Ranchero",
    "Volt",
    "Cruze",
    "Malibu",
    "Impala",
    "Camaro",
    "Corvette",
    "Colorado",
    "Silverado",
  ];
  const specialCharacters = ["!", "@", "#", "$", "%", "&", "*"];

  let password = "";

  const randomWord = words[Math.floor(Math.random() * words.length)];
  password += randomWord;

  const randomNumber = Math.floor(Math.random() * 10);
  password += randomWord;

  const randomCharacter =
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  password += randomCharacter;

  const remainingLength = length - 3;
  const characters = words.join("") + randomNumber + specialCharacters.join("");
  for (let i = 0; i < remainingLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  password = password.replace(/ +/g, "");

  let shuffledPassword = shuffleString(password);

  shuffledPassword = shuffledPassword.slice(0, length);

  const hasNumber = /\d/.test(shuffledPassword);
  const hasSpecialCharacter = /[!@#$%&*]/.test(shuffledPassword);

  if (!hasNumber || !hasSpecialCharacter) {
    return generateRandomPassword(length);
  }

  return shuffledPassword;
}

function shuffleString(string) {
  let shuffledString = "";
  string = string.split("");

  while (string.length > 0) {
    shuffledString += string.splice(
      Math.floor(Math.random() * string.length),
      1
    );
  }

  return shuffledString;
}
