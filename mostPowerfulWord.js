function mostPowerful(input) {
  let curretnIndex = 0;
  let maxTotal = 0;
  let powerfulWord = "";

  while (input[curretnIndex] != "End of words") {
    let currentWord = input[curretnIndex];
    let currentTotal = 0;

    for (i = 0; i < currentWord.length; i++) {
      currentTotal += currentWord.charCodeAt(i);
    }

    if (["a", "e", "i", "o", "u", "y"].includes(currentWord[0].toLowerCase())) {
      currentTotal *= currentWord.length;
    } else {
      currentTotal = Math.floor(currentTotal / currentWord.length);
    }

    if (currentTotal > maxTotal) {
      maxTotal = currentTotal;
      powerfulWord = currentWord;
    }

    curretnIndex++;
  }

  console.log(`The most powerful word is ${powerfulWord} - ${maxTotal}`);
}

mostPowerful(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"]);
