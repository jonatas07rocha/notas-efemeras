/**
 * RICO DINHEIRINHO - CORE ENGINE
 * Responsável pela lógica de cálculo, análise de manobra e projeções.
 * Focado em performance e precisão.
 */

export const FinanceEngine = {
    /**
     * Calcula o saldo atual total baseado nas transações.
     * @param {Array} transactions - Lista de objetos de transação.
     * @returns {number}
     */
    calculateBalance(transactions) {
        return transactions.reduce((acc, curr) => {
            return curr.type === 'income' ? acc + curr.amount : acc - curr.amount;
        }, 0);
    },

    /**
     * Calcula a "Margem de Manobra".
     * A margem é o que sobra após subtrair despesas fixas e metas de reserva.
     * É o valor que o usuário pode gastar "sem culpa".
     */
    calculateManobra(balance, fixedExpenses, savingsGoal) {
        const safetyMargin = balance - (fixedExpenses + savingsGoal);
        return safetyMargin > 0 ? safetyMargin : 0;
    },

    /**
     * Calcula o "Ritmo Atual" de gastos.
     * Projeta quanto o usuário terá no fim do mês baseado na média diária.
     */
    predictMonthEnd(transactions, currentBalance) {
        const today = new Date();
        const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        const currentDay = today.getDate();

        const monthlyExpenses = transactions
            .filter(t => t.type === 'expense' && new Date(t.date).getMonth() === today.getMonth())
            .reduce((acc, curr) => acc + curr.amount, 0);

        const dailyAverage = monthlyExpenses / currentDay;
        const projection = dailyAverage * daysInMonth;

        return {
            projectedExpense: projection,
            estimatedSurplus: currentBalance - projection
        };
    },

    /**
     * Analisa a saúde financeira atual e retorna um "status" para a UI.
     * Segue a paleta Esmeralda (Sucesso) ou Strategy (Atenção).
     */
    getHealthStatus(balance, projection) {
        if (balance <= 0) return { label: 'Crítico', color: 'error' };
        if (projection > balance) return { label: 'Risco de Déficit', color: 'strategy' };
        return { label: 'Fluxo Saudável', color: 'primary' };
    }
};

/**
 * Exemplo de estrutura de dados esperada:
 * {
 * id: string,
 * description: string,
 * amount: number,
 * type: 'income' | 'expense',
 * category: string,
 * date: Date
 * }
 */
