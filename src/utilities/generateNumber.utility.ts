export function generateRandomFloatNumber(min = 100, max = 1000) {
  return Math.round((Math.random() * (max - min + 1) + min) * 100) / 100;
}

export function generateRandomIntNumber(min = 100, max = 1000) {
  return Math.floor((Math.random() * (max - min + 1) + min) * 100) / 100;
}
