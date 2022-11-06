function playBestOfFive() {

  let player_score = 0
  let computer_score = 0

  for (let i = 0; i < 5; i++) {  

    let computer_choice = generateWeapon()
    console.log("Computer chose: " + computer_choice)

    let player_choice = prompt("Choose your weapon: ")
    console.log("Player chose: " +  player_choice)

    let round_outcome = getWinner(computer_choice, player_choice)
    console.log("Round outcome: " + round_outcome)

    if (round_outcome === "YOU LOST!") {
      computer_score++
    } else if (round_outcome === "YOU WIN!") {
      player_score++
    }
    console.log("Player score: " + player_score + " Computer score: " + computer_score)

  }
}

function generateWeapon() {
  let computer_weapon = Math.floor(Math.random()*3) + 1
  console.log(computer_weapon)

  if (computer_weapon === 1) {
    return "Rock"
  } else if (computer_weapon === 2) {
    return "Paper"
  } else if (computer_weapon === 3) {
    return "Scissors"
  }
}

function getWinner(computer_choice, player_choice) {
  if (computer_choice === "Rock" && player_choice === "Scissors") {
    return "YOU LOST!"
  } else if (computer_choice === "Paper" && player_choice === "Rock") {
    return "YOU LOST!"
  } else if (computer_choice === "Scissors" && player_choice === "Paper") {
    return "YOU LOST!"
  } else if (player_choice === "Rock" && computer_choice === "Scissors") {
    return "YOU WIN!"
  } else if (player_choice === "Paper" && computer_choice === "Rock") {
    return "YOU WIN!"
  } else if (player_choice === "Scissors" && computer_choice === "Paper") {
    return "YOU WIN!"
  } else if (player_choice === "Rock" && computer_choice === "Rock") {
    return "IT'S A DRAW!"
  } else if (player_choice === "Paper" && computer_choice === "Paper") {
    return "IT'S A DRAW!!"
  } else if (player_choice === "Scissors" && computer_choice === "Scissors") {
    return "IT'S A DRAW!!"
  }
}

playBestOfFive()