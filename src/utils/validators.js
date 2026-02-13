/**
 * RICO DINHEIRINHO - VALIDATORS
 * Regras de negócio para entrada de dados.
 * Garante que apenas dados íntegros sejam processados pelo sistema.
 */

export const FinanceValidators = {
    /**
     * Valida se o valor financeiro é um número positivo e válido.
     * @param {number|string} value 
     * @returns {boolean}
     */
    isValidAmount(value) {
        const amount = parseFloat(value);
        return !isNaN(amount) && isFinite(amount) && amount > 0;
    },

    /**
     * Valida a descrição da transação.
     * @param {string} description 
     * @returns {boolean}
     */
    isValidDescription(description) {
        return typeof description === 'string' && description.trim().length >= 3;
    },

    /**
     * Valida se a data fornecida é uma data válida e não está no futuro.
     * @param {string|Date} dateInput 
     * @returns {boolean}
     */
    isValidDate(dateInput) {
        const date = new Date(dateInput);
        const now = new Date();
        return date instanceof Date && !isNaN(date) && date <= now;
    },

    /**
     * Validação completa de um objeto de transação antes da persistência.
     * @param {Object} transaction 
     * @returns {Object} - { valid: boolean, errors: Array }
     */
    validateTransaction(transaction) {
        const errors = [];

        if (!this.isValidAmount(transaction.amount)) {
            errors.push("O valor deve ser um número maior que zero.");
        }

        if (!this.isValidDescription(transaction.description)) {
            errors.push("A descrição deve ter pelo menos 3 caracteres.");
        }

        if (!this.isValidDate(transaction.date)) {
            errors.push("A data é inválida ou está no futuro.");
        }

        if (!['income', 'expense'].includes(transaction.type)) {
            errors.push("Tipo de transação inválido.");
        }

        return {
            valid: errors.length === 0,
            errors
        };
    }
};