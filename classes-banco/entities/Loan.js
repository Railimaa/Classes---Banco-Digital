const Installment = require("./Installment")

module.exports = class Loan {
    static #taxa = 1.05

    constructor(value, installments) {
        this.value = value
        this.installments = []
        for (let i = 1; i <= installments; i++) {
            this.installments.push(new Installment((value * Loan.#taxa ) / installments, i))
        }
        this.createdAt = new Date()
    }

    static get taxa() {
        return Loan.#taxa
    }

    static set taxa(newTaxaPercentage) {
        Loan.#taxa = 1 + (newTaxaPercentage / 100)
    }
    
}