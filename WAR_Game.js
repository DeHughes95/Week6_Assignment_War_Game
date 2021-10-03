class Card { 
    static pipreads = [ 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    static suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

    constructor(pips, suit) {
        this.pips = pips;
        this.suit = suit;
    }

    equals(card) {

        if(card.pips === 0){
            let cardValue = 14;
            return cardValue;
        }else {
            let cardValue = card.pips;
            return cardValue;
        }
        

    }

    beats(card1, card2) {
        if( card1.equals(card1) > card2.equals(card2) ) {
           return true;
        }else {
            return false;
        }
    }

    description () {
        return Card.pipreads[this.pips - 1] + " of " + Card.suits[this.suit];
    }

}

class Deck {
    constructor() {
        this.cards = [];
        this.createDeck();
    }

    createDeck () {
        for(let i = 0; i < Card.suits.length; i++){
            for( let j = 1; j <= Card.pipreads.length; j++){
                this.cards.push(new Card(j, i));
            }
        }
    }

    printDeck () {
        console.log("The deck:");
        for (let card of this.cards) {
            console.log(card.description());
        }
    }

    shuffle() {
        let rand,pos2; 
        for ( let pos1 = this.cards.length -1 ;  pos1 > 0; pos1--) {
            rand = Math.floor( Math.random() * (pos1 + 1));
            pos2 = this.cards[pos1];
            this.cards[pos1] = this.cards[rand];
            this.cards[rand] = pos2;
        }
    }

    dealAllToPlayers(player1 , player2) {
        for ( let i = 0; i < 26; i++ ) {
            player1.takeCard(this.cards[0]);
            this.cards.shift();
            player2.takeCard(this.cards[0]);
            this.cards.shift();
        }
    }

}

class Player {
    constructor( name ) {
        this.name = name;
        this.hand = [];
        this.points = 0;
    }

    takeCard(card) {
        this.hand.push(card);
    }

    playCard() {
        let playedCard = this.hand[0];
        this.hand.shift();
        return playedCard;
    }

    awardPoints(player1Card, player2Card) {
        if( player1Card.beats(player1Card, player2Card) ) {
            this.points += 1;
        }else {
            return 0;
        }
    }

    reportHand() {
        for( let card of this.hand) {
            console.log( card.description() );
        }
    }

    reportPoints () {
        console.log(`${this.name}'s score: ${this.points}.`);
    }
}

function playWar() {
    let deck = new Deck();
    deck.shuffle();
    let p1 = new Player("Alice");
    let p2 = new Player("Bob");
    deck.dealAllToPlayers(p1, p2);
    
    for( let i = 0; i < 26; i++) {
        let p1Card = p1.playCard();
        let p2Card = p2.playCard();
        p1.awardPoints(p1Card, p2Card);
        p2.awardPoints(p2Card, p1Card);
    }

    if( p1.points > p2.points){
        console.log(`${p1.name} wins the game!`);
        p1.reportPoints();
        p2.reportPoints();
    }else if (p2.points > p1.points) {
        console.log(`${p2.name} wins the game!`);
        p1.reportPoints();
        p2.reportPoints();
        
    }else {
        console.log('This game resulted in a tie!');
        p1.reportPoints();
        p2.reportPoints();  
    }
}

playWar();