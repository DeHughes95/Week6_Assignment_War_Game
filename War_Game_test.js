let expect = chai.expect;

describe("CardFunctions", function()  {
    describe('beats', function() {
        it('should return true if card1 > card2 and false otherwise', function() {
            let card1 = new Card (0, 1);
            let card2 = new Card (1, 2);
            expect( card1.beats(card1, card2), "card1 should beat card2 as card 1 should hold value of 14 and card2 2").to.equal( true );
            expect( card1.beats(card1, card1), "card1 should not beat itself").to.equal( false );
            expect( card2.beats(card2, card1), "card2 shold not beat ace").to.equal(false);
        });
    });

});