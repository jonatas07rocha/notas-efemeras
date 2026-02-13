/**
 * RICO DINHEIRINHO - TRANSACTION ITEM COMPONENT
 * Responsável por gerar a estrutura HTML de cada linha de movimentação.
 * Integra ícones do Lucide e formatadores de moeda/data.
 */

export const TransactionItem = (transaction, formatters) => {
    const isIncome = transaction.type === 'income';
    
    // Define o ícone e a cor baseada no tipo
    const iconName = isIncome ? 'arrow-down-left' : 'shopping-cart';
    const iconColorClass = isIncome ? 'text-emerald-500' : 'text-slate-900';
    const bgClass = isIncome ? 'bg-emerald-50' : 'bg-slate-100';
    
    // Gera a string HTML do componente
    return `
        <div class="transaction-row" style="display: flex; justify-content: space-between; align-items: center; padding: 16px 0; border-bottom: 1px solid var(--border); animation: reveal 0.3s var(--ease);">
            <div style="display: flex; gap: 16px; align-items: center;">
                <div style="width: 44px; height: 44px; background: ${isIncome ? 'var(--primary-soft)' : 'var(--slate-100)'}; 
                            color: ${isIncome ? 'var(--primary)' : 'var(--black)'}; 
                            border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                    <i data-lucide="${iconName}" size="18"></i>
                </div>
                <div>
                    <p style="font-weight: 700; font-size: 14px; color: var(--text-main);">${transaction.description}</p>
                    <p style="font-size: 12px; color: var(--text-muted);">
                        ${transaction.category} • ${formatters.friendlyDate(transaction.date)}
                    </p>
                </div>
            </div>
            <span style="font-weight: 700; font-size: 15px; color: ${isIncome ? 'var(--primary)' : 'var(--black)'};">
                ${isIncome ? '+' : '-'} ${formatters.currency(transaction.amount)}
            </span>
        </div>
    `;
};