// Rico Dinheirinho - Inteligência do Parser e Dicionários
const CONFIG = {
    DICT: {
        intents: {
            ganhei: [
                'ganhei', 'ganho', 'recebi', 'receber', 'recebido', 'recebendo', 'entrou', 'entrada', 
                'caiu', 'cair', 'depositaram', 'depositado', 'deposito', 'salario', 'salário', 
                'freela', 'venda', 'vendi', 'vendido', 'faturei', 'faturado', 'rendeu', 'rendimentos', 
                'lucro', 'lucrei', 'comissao', 'comissão', 'cashback', 'bonus', 'bônus', 'dividendo', 
                'dividendos', 'juros', 'provento', 'proventos', 'restituicao', 'restituição'
            ],
            guardei: [
                'guardei', 'guardar', 'guardado', 'poupei', 'poupado', 'poupar', 'reservei', 'reserva', 
                'reservado', 'apliquei', 'aplicacao', 'aplicação', 'aplicado', 'aporte', 'aportado', 
                'investi', 'investimento', 'investido', 'meta', 'caixinha', 'cofrinho', 'separei', 'separado'
            ],
            gastei: [
                'gastei', 'gasto', 'paguei', 'pago', 'pagar', 'pagamento', 'despesa', 'despesas', 
                'comprei', 'compra', 'comprado', 'debito', 'débito', 'boleto', 'conta', 'fatura', 
                'assinatura', 'mensalidade', 'aluguel', 'mercado', 'supermercado', 'farmacia', 
                'farmácia', 'luz', 'agua', 'água', 'internet', 'telefone', 'cartao', 'cartão', 
                'taxa', 'tarifa', 'imposto', 'impostos', 'financiamento', 'parcela', 'parcelado', 
                'doacao', 'doação', 'manutencao', 'manutenção', 'conserto', 'transporte', 'uber', 
                'combustivel', 'combustível', 'comer', 'almoço', 'jantar', 'lanche', 'ifood'
            ]
        },
        essentials: [
            'aluguel', 'luz', 'agua', 'água', 'internet', 'mercado', 'supermercado', 'farmacia', 
            'farmácia', 'transporte', 'combustivel', 'combustível', 'escola', 'saude', 'saúde', 
            'condominio', 'condomínio', 'iptu', 'mei', 'imposto', 'irpf', 'gas', 'gás', 'academia', 
            'terapia', 'psicologo', 'dentista', 'seguro', 'faculdade', 'curso', 'ingles'
        ],
        methods: { 
            PIX: ['pix', 'chave'], 
            CARD: ['cartao', 'cartão', 'credito', 'crédito', 'debito', 'débito', 'visa', 'master', 'nubank', 'amex', 'elo'], 
            BOL: ['boleto', 'cod', 'codigo', 'código'], 
            CASH: ['dinheiro', 'especie', 'espécie', 'troco', 'notas', 'moedas'], 
            TX: ['transferencia', 'transferência', 'ted', 'doc', 'itau', 'bradesco', 'santander', 'bb', 'banco'],
            INV: [
                'cdb', 'poupança', 'poupanca', 'tesouro', 'direto', 'selic', 'ipca', 'pre', 'bolsa', 
                'ações', 'acoes', 'fundo', 'fiis', 'fii', 'cripto', 'bitcoin', 'btc', 'eth', 'ethereum', 
                'rdb', 'lci', 'lca', 'etf', 'bdr', 'ouro', 'dolar', 'dólar', 'previdencia', 'previdência'
            ]
        },
        stop: [
            'de','do','da','para','pra','no','na','em','com','por','pelo','pela','o','a','os','as',
            'um','uma','seu','sua', 'pelo', 'com', 'mais', 'menos', 'que', 'ao', 'aos', 'nas', 'nos'
        ]
    },
    CATEGORIES: [
        { id: 'cat_sal', name: 'Salário', intent: 'ganhei', color: '#059669' },
        { id: 'cat_ext', name: 'Extra / Freela', intent: 'ganhei', color: '#10b981' },
        { id: 'cat_ess', name: 'Essencial', intent: 'gastei', color: '#1e293b' },
        { id: 'cat_laz', name: 'Lazer', intent: 'gastei', color: '#9B1B30' },
        { id: 'cat_edu', name: 'Educação', intent: 'gastei', color: '#6366f1' },
        { id: 'cat_sau', name: 'Saúde', intent: 'gastei', color: '#ef4444' },
        { id: 'cat_inv', name: 'Investimento', intent: 'guardei', color: '#0891b2' },
        { id: 'cat_res', name: 'Reserva', intent: 'guardei', color: '#06b6d4' }
    ]
};
