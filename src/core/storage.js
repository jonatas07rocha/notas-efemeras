/**
 * RICO DINHEIRINHO - STORAGE ENGINE
 * Gerencia a persistência de dados no navegador.
 * Estruturado para ser facilmente substituível por uma API ou Firebase no futuro.
 */

const STORAGE_KEYS = {
    TRANSACTIONS: 'rd_transactions_v1',
    SETTINGS: 'rd_settings_v1',
    USER_PROFILE: 'rd_user_v1'
};

export const FinanceStorage = {
    /**
     * Salva a lista completa de transações.
     * @param {Array} transactions 
     */
    saveTransactions(transactions) {
        try {
            localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions));
            return true;
        } catch (error) {
            console.error("Erro ao salvar transações:", error);
            return false;
        }
    },

    /**
     * Recupera todas as transações salvas.
     * @returns {Array}
     */
    getTransactions() {
        const data = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
        return data ? JSON.parse(data) : [];
    },

    /**
     * Adiciona uma única transação sem precisar processar a lista inteira externamente.
     * @param {Object} transaction 
     */
    addTransaction(transaction) {
        const transactions = this.getTransactions();
        transactions.unshift(transaction); // Adiciona ao início (mais recente primeiro)
        return this.saveTransactions(transactions);
    },

    /**
     * Salva configurações de preferências (como metas de reserva ou despesas fixas).
     * @param {Object} settings 
     */
    saveSettings(settings) {
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    },

    /**
     * Recupera as configurações do usuário.
     */
    getSettings() {
        const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
        return data ? JSON.parse(data) : { fixedExpenses: 0, savingsGoal: 0 };
    },

    /**
     * Limpa todos os dados da aplicação (Útil para testes ou "Reset de Fábrica").
     */
    clearAll() {
        Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
    }
};
