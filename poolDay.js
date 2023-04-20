function poolDay(input) {
  let numberOfPeople = Number(input[0]);
  let entryFee = Number(input[1]);
  let sunBedFee = Number(input[2]);
  let umbrellaFee = Number(input[3]);

  let totalPrice = 0;

  totalPrice += numberOfPeople * entryFee;

  let umbrellas = Math.ceil(numberOfPeople / 2);
  totalPrice += umbrellas * umbrellaFee;

  let peopleUsingSunBeds = Math.ceil(numberOfPeople * 0.75);
  totalPrice += peopleUsingSunBeds * sunBedFee;

  console.log(`${totalPrice.toFixed(2)} lv.`);
}

poolDay(["50", "6", "8", "4"]);
