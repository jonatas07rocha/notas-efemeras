/**
 * RICO DINHEIRINHO - TRANSACTION FORM COMPONENT
 * Interface para entrada de dados de valores, descrições e datas.
 * Inclui validação visual e estados de erro.
 */

export const TransactionForm = (type, onSave, onCancel) => {
    const isIncome = type === 'income';
    const title = isIncome ? 'Nova Entrada' : 'Novo Gasto';
    const accentColor = isIncome ? 'var(--primary)' : 'var(--black)';

    return `
        <div class="reveal" style="padding-bottom: 40px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;">
                <h2 style="font-size: 28px; font-weight: 800; letter-spacing: -1px; color: var(--black);">${title}</h2>
                <button onclick="window.app.closeDrawer()" style="background: none; border: none; cursor: pointer; color: var(--text-muted);">
                    <i data-lucide="x" size="24"></i>
                </button>
            </div>

            <form id="finance-form" onsubmit="window.app.handleFormSubmit(event, '${type}')" style="display: grid; gap: 24px;">
                <!-- Campo de Valor -->
                <div>
                    <label style="display: block; font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px;">Valor do Fluxo</label>
                    <div style="position: relative; display: flex; align-items: center;">
                        <span style="position: absolute; left: 20px; font-weight: 700; color: ${accentColor};">R$</span>
                        <input type="number" step="0.01" id="form-amount" required placeholder="0,00" 
                               style="width: 100%; padding: 20px 20px 20px 50px; border-radius: 16px; border: 2px solid var(--border); 
                                      font-size: 24px; font-weight: 800; color: var(--black); outline: none; transition: border-color 0.2s;">
                    </div>
                </div>

                <!-- Campo de Descrição -->
                <div>
                    <label style="display: block; font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px;">Descrição / Nome</label>
                    <input type="text" id="form-description" required placeholder="Ex: Supermercado, Salário..." 
                           style="width: 100%; padding: 18px; border-radius: 16px; border: 2px solid var(--border); 
                                  font-size: 16px; font-weight: 600; outline: none;">
                </div>

                <!-- Campo de Data -->
                <div>
                    <label style="display: block; font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px;">Data do Evento</label>
                    <input type="date" id="form-date" required value="${new Date().toISOString().split('T')[0]}"
                           style="width: 100%; padding: 18px; border-radius: 16px; border: 2px solid var(--border); 
                                  font-size: 16px; font-weight: 600; outline: none; font-family: inherit;">
                </div>

                <div style="margin-top: 16px; display: grid; gap: 12px;">
                    <button type="submit" style="background: ${accentColor}; color: var(--white); border: none; padding: 20px; 
                                               border-radius: 18px; font-weight: 800; font-size: 16px; cursor: pointer; 
                                               box-shadow: 0 10px 20px rgba(0,0,0,0.05);">
                        Confirmar Registro
                    </button>
                    <button type="button" onclick="window.app.closeDrawer()" 
                            style="background: none; border: none; padding: 12px; color: var(--text-muted); 
                                   font-weight: 700; font-size: 13px; cursor: pointer;">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    `;
};