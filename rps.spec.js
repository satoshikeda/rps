const Rps = require("./rps");

describe('Rps', () => {
    let result

    const rps = new Rps()

    describe('play()', () => {
        describe('When paper vs rock', () => {
            beforeEach(() => {
                result = rps.play('paper', 'rock')
            });

            it('returns A wins', () => {
                expect(result).toBe('A wins')
            });
        });

        describe('When paper vs scissors', () => {
            beforeEach(() => {
                result = rps.play('paper', 'scissors')
            });

            it('returns A wins', () => {
                expect(result).toBe('B wins')
            });
        });

    });
});
