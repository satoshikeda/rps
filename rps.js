class Rps {
    play(a, b) {
        if (b === 'scissors') {
            return 'B wins'
        }

        return 'A wins'
    }
}

module.exports = Rps
