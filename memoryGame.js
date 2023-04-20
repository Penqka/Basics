function memoryGame(input) {
  let elements = input[0].split(" ");
  let index = 1;
  let moves = 0;

  while (true) {
    command = input[index];

    if (elements.length === 0) {
      console.log(`You have won in ${moves} turns!`);
      break;
    }

    if (command === "end") {
      break;
    }

    moves++;
    let firstIdx = Number(command.split(" ")[0]);
    let secondIdx = Number(command.split(" ")[1]);

    if (
      firstIdx === secondIdx ||
      elements[firstIdx] === undefined ||
      elements[secondIdx] === undefined
    ) {
      let middleIdx = Math.ceil(elements.length / 2);
      elements.splice(middleIdx, 0, `-${moves}a`);
      elements.splice(middleIdx, 0, `-${moves}a`);
      console.log("Invalid input! Adding additional elements to the board");
    } else if (elements[firstIdx] === elements[secondIdx]) {
      console.log(
        `Congrats! You have found matching elements - ${elements[firstIdx]}!`
      );
      if (firstIdx < secondIdx) {
        elements.splice(secondIdx, 1);
        elements.splice(firstIdx, 1);
      } else {
        elements.splice(firstIdx, 1);
        elements.splice(secondIdx, 1);
      }
    } else {
      console.log("Try again!");
    }

    index++;
  }
  if (elements.length > 0) {
    console.log(`Sorry you lose :(
${elements.join(" ")}`);
  }
}

memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);

// Write a program that recreates the Memory game.
// On the first line, you will receive a sequence of elements. Each element in the sequence will have a twin. Until the player receives "end" from the console, you will receive strings with two integers separated by a space, representing the indexes of elements in the sequence.
// If the player tries to cheat and enters two equal indexes or indexes which are out of bounds of the sequence, you should add two matching elements at the middle of the sequence in the following format:
// "-{number of moves until now}a"
// Then print this message on the console:
// "Invalid input! Adding additional elements to the board"
// Input
// •	On the first line, you will receive a sequence of elements
// •	On the following lines, you will receive integers until the command "end"
// Output
// •	Every time the player hit two matching elements, you should remove them from the sequence and print on the console the following message:
// "Congrats! You have found matching elements - ${element}!"
// •	If the player hit two different elements, you should print on the console the following message:
// "Try again!"
// •	If the player hit all matching elements before he receives "end" from the console, you should print on the console the following message:
// "You have won in {number of moves until now} turns!"
// •	If the player receives "end" before he hits all matching elements, you should print on the console the following message:
// "Sorry you lose :(
// {the current sequence's state}"
// Constraints
// •	All elements in the sequence will always have a matching element.
