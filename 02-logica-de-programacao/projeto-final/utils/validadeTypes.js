export function isValidString(string) {
  return /^[a-zA-Z]+$/.test(string);
}

export function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export function isValidNumber(value) {
  return /^[0-9]+$/.test(value)
}