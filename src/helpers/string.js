export function capitalize(word) {
  // if (word === null || word === "") {
  if (!word) { // gurad clause
    return word;
  }

  // return word[0].toUpperCase() +
  //   word.substr(1).toLowerCase();
  return `${word[0].toUpperCase()}${word.substr(1).toLowerCase()}`;
}
