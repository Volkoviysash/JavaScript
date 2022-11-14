function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let decodedString = "";

  for (let charIndex in str) {
    if (alphabet.includes(str[charIndex])) {
      let newIndex = alphabet.indexOf(str[charIndex]) - 13;
      if (newIndex < 0)
        newIndex += 26;  
        decodedString += alphabet[newIndex];
    } else {
      decodedString += str[charIndex];
    }
  }
  return decodedString;
}
