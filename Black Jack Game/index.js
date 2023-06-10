cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let a = document.getElementById("message-el")
let b = document.getElementById("summy")
let c = document.getElementById("cardy")
let playerName = "Syed"
let playerChips = 145
let p = document.getElementById("footer")

let player = {
    name : "Syed",
    chips : 145
}
p.textContent = player.name + " : $" + player.chips

function startgame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard+secondCard
    rendergame()
}

function getRandomCard(){
    let rand = (Math.floor(Math.random() * 13) + 1)
    if (rand>10){
        return 10
    }
    else if (rand === 1){
        return 11
    }
    return rand
}
function rendergame(){
    c.textContent = "Cards: " + cards[0] +" "+ cards[1]
    for (let i=0; i<cards.length; i++){
        c.textContent += cards[i] + " "
    }
    if (sum<=20){
        message = "Do you wanna draw a new card?"
        player.chips +=15

    }
    else if(sum == 21){
        message="Wohoo! Youve got Blackjack!"
        hasBlackJack = true
        player.chips += 15
    }
    else {
        message="Youre out of the game!"
        isAlive = false
        player.chips -= 20

    }
    a.textContent = message
    b.textContent = "Sum: "+sum
    p.textContent = player.name + " : $" + player.chips
}
function newcard(){
    if (isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        rendergame()
    }

}