/**
 * RICO DINHEIRINHO - MAIN CONTROLLER
 * O "Maestro" da aplicação: conecta lógica, armazenamento e interface.
 */

// Importação dos módulos Core
import { FinanceEngine } from './core/engine.js';
import { FinanceStorage } from './core/storage.js';
import { FinanceAuth } from './core/auth.js';

// Importação de Utilitários
import { FinanceFormatters } from './utils/formatters.js';
import { FinanceValidators } from './utils/validators.js';

// Importação de Componentes de UI
import { TransactionItem } from './ui/components/TransactionItem.js';
import { ActionDrawer } from './ui/components/ActionDrawer.js';
import { TransactionForm } from './ui/components/TransactionForm.js';

const app = {
    state: {
        user: null,
        transactions: [],
        settings: { fixedExpenses: 2000, savingsGoal: 500 }
    },

    /**
     * Inicialização do Sistema
     */
    async init() {
        // 1. Autenticação/Identidade
        this.state.user = FinanceAuth.getUser() || FinanceAuth.login('Jônatas');
        
        // 2. Carregar Dados
        this.state.transactions = FinanceStorage.getTransactions();
        this.state.settings = FinanceStorage.getSettings();

        // 3. Renderizar Interface Inicial
        this.updateDashboard();
        
        // 4. Configurar Eventos Globais
        this.setupEventListeners();
        
        console.log("🚀 Rico Dinheirinho pronto!");
    },

    /**
     * Atualiza todos os elementos da Dashboard
     */
    updateDashboard() {
        const balance = FinanceEngine.calculateBalance(this.state.transactions);
        const projection = FinanceEngine.predictMonthEnd(this.state.transactions, balance);
        
        // Atualizar Saldo Principal
        document.querySelector('.balance-val').textContent = FinanceFormatters.currency(balance);
        
        // Atualizar Resumo (Entradas/Saídas)
        const incomes = this.state.transactions
            .filter(t => t.type === 'income')
            .reduce((acc, curr) => acc + curr.amount, 0);
        const expenses = this.state.transactions
            .filter(t => t.type === 'expense')
            .reduce((acc, curr) => acc + curr.amount, 0);

        document.querySelectorAll('.stats-side .card span:last-child').forEach((el, idx) => {
            el.textContent = idx === 0 
                ? FinanceFormatters.currency(incomes) 
                : FinanceFormatters.currency(expenses);
        });

        // Atualizar Lista de Atividades
        this.renderTransactionList();
        
        // Refresh dos ícones Lucide
        if (window.lucide) window.lucide.createIcons();
    },

    /**
     * Renderiza a lista de movimentações
     */
    renderTransactionList() {
        const container = document.querySelector('.full-width');
        const listHeader = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;">
                <h3 style="font-weight: 800; font-size: 18px;">Movimentações</h3>
                <i data-lucide="more-horizontal" style="color: var(--text-muted); cursor: pointer;"></i>
            </div>
        `;
        
        const itemsHtml = this.state.transactions.length > 0
            ? this.state.transactions.map(t => TransactionItem(t, FinanceFormatters)).join('')
            : `<p style="text-align: center; color: var(--text-muted); padding: 40px;">Nenhuma atividade registrada.</p>`;

        container.innerHTML = listHeader + itemsHtml;
    },

    /**
     * Gerenciamento do Drawer (Menu Lateral/Inferior)
     */
    openDrawer(contentHtml) {
        const drawer = document.getElementById('actionDrawer');
        const overlay = document.getElementById('overlay');
        
        drawer.innerHTML = contentHtml;
        drawer.classList.add('active');
        overlay.classList.add('active');
        
        if (window.lucide) window.lucide.createIcons();
    },

    closeDrawer() {
        document.getElementById('actionDrawer').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    },

    /**
     * Handlers de Ação
     */
    handleNewRegistration() {
        this.openDrawer(ActionDrawer());
    },

    handleActionSelect(type) {
        this.openDrawer(TransactionForm(type));
    },

    handleFormSubmit(event, type) {
        event.preventDefault();
        
        const transaction = {
            id: crypto.randomUUID(),
            type: type,
            amount: parseFloat(document.getElementById('form-amount').value),
            description: document.getElementById('form-description').value,
            date: document.getElementById('form-date').value,
            category: type === 'income' ? 'Renda' : 'Geral'
        };

        const validation = FinanceValidators.validateTransaction(transaction);
        
        if (validation.valid) {
            FinanceStorage.addTransaction(transaction);
            this.state.transactions = FinanceStorage.getTransactions();
            this.updateDashboard();
            this.closeDrawer();
        } else {
            alert(validation.errors.join('\n'));
        }
    },

    setupEventListeners() {
        // Vincula funções ao window para que o HTML possa acessá-las
        window.app = this;
        
        // Substitui o onclick antigo do botão no index.html por este
        const btnNew = document.querySelector('.btn-action');
        if (btnNew) {
            btnNew.onclick = () => this.handleNewRegistration();
        }
    }
};

// Iniciar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => app.init());

export default app;