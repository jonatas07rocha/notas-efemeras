/**
 * RICO DINHEIRINHO - ACTION DRAWER COMPONENT
 * Gerencia a interface de seleção de tipo de transação.
 * Focado em usabilidade móvel e clareza visual.
 */

export const ActionDrawer = (onSelect) => {
    // Definição das opções de movimentação
    const options = [
        {
            id: 'expense',
            title: 'Fiz um gasto',
            desc: 'Saída imediata de capital',
            icon: 'shopping-cart',
            color: 'var(--black)',
            bg: 'var(--slate-100)'
        },
        {
            id: 'income',
            title: 'Nova Entrada',
            desc: 'Dinheiro chegando na conta',
            icon: 'dollar-sign',
            color: 'var(--primary)',
            bg: 'var(--primary-soft)'
        },
        {
            id: 'savings',
            title: 'Investi / Guardei',
            desc: 'Construindo seu futuro',
            icon: 'piggy-bank',
            color: 'var(--text-main)',
            bg: 'var(--slate-100)'
        }
    ];

    // Gera o HTML das opções
    const optionsHtml = options.map(opt => `
        <div class="opt-card" 
             onclick="window.app.handleActionSelect('${opt.id}')"
             style="padding: 24px; background: ${opt.bg}; border-radius: 20px; 
                    display: flex; align-items: center; gap: 16px; cursor: pointer;
                    transition: var(--transition-fast); border: 1px solid transparent;">
            <div style="width: 48px; height: 48px; background: var(--white); border-radius: 14px; 
                        display: flex; align-items: center; justify-content: center; 
                        color: ${opt.color}; border: 1px solid var(--border);">
                <i data-lucide="${opt.icon}" size="24"></i>
            </div>
            <div>
                <h4 style="font-weight: 700; color: ${opt.id === 'income' ? 'var(--primary-dark)' : 'var(--text-main)'};">
                    ${opt.title}
                </h4>
                <p style="font-size: 12px; color: ${opt.id === 'income' ? 'var(--primary)' : 'var(--text-muted)'};">
                    ${opt.desc}
                </p>
            </div>
        </div>
    `).join('');

    return `
        <div style="width: 48px; height: 5px; background: var(--border); border-radius: 10px; margin: 0 auto 32px auto;"></div>
        <div style="margin-bottom: 32px;">
            <h2 style="font-size: 24px; font-weight: 800; letter-spacing: -1px; color: var(--black);">O que deseja registrar?</h2>
            <p style="font-size: 14px; color: var(--text-muted);">Selecione o tipo de movimentação</p>
        </div>
        <div style="display: grid; gap: 16px;">
            ${optionsHtml}
        </div>
        <p style="text-align: center; margin-top: 40px; color: var(--text-muted); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
            Foco no seu crescimento
        </p>
    `;
};
