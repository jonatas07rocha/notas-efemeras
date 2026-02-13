/**
 * RICO DINHEIRINHO - FORMATTERS
 * Utilitários para padronização de exibição de dados.
 * Focado em legibilidade e localização (pt-BR).
 */

export const FinanceFormatters = {
    /**
     * Formata um número para Moeda Brasileira (R$).
     * @param {number} value 
     * @returns {string}
     */
    currency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    },

    /**
     * Formata uma data para exibição amigável.
     * Retorna "Hoje", "Ontem" ou a data formatada.
     * @param {Date|string} dateInput 
     * @returns {string}
     */
    friendlyDate(dateInput) {
        const date = new Date(dateInput);
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        const isSameDay = (d1, d2) =>
            d1.getDate() === d2.getDate() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getFullYear() === d2.getFullYear();

        if (isSameDay(date, today)) return 'Hoje';
        if (isSameDay(date, yesterday)) return 'Ontem';

        return new Intl.DateTimeFormat('pt-BR').format(date);
    },

    /**
     * Formata valores percentuais com sinal e uma casa decimal.
     * @param {number} value - Ex: 0.042 para 4.2%
     * @returns {string}
     */
    percent(value) {
        const sign = value >= 0 ? '+' : '';
        return `${sign}${(value * 100).toFixed(1)}%`;
    },

    /**
     * Abrevia números grandes para manter a UI limpa (Ex: 12450 -> 12.4k).
     * @param {number} value 
     * @returns {string}
     */
    compact(value) {
        return new Intl.NumberFormat('pt-BR', {
            notation: 'compact',
            maximumFractionDigits: 1
        }).format(value);
    }
};