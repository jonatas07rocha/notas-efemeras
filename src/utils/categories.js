/**
 * RICO DINHEIRINHO - CATEGORIES (EXPANSÃO COMPLETA)
 * Definições verbais amplas para classificação de fluxos financeiros.
 */

export const FinanceCategories = {
    income: [

        // RENDA PRINCIPAL
        { id: 'salario_clt', label: 'Salário CLT', icon: 'briefcase' },
        { id: 'salario_pj', label: 'Pró-Labore / PJ', icon: 'building' },
        { id: 'adiantamento_salarial', label: 'Adiantamento Salarial', icon: 'calendar' },
        { id: 'ferias', label: 'Férias', icon: 'sun' },
        { id: 'decimo_terceiro', label: '13º Salário', icon: 'gift' },
        { id: 'rescisao', label: 'Rescisão', icon: 'file-text' },
        { id: 'bonus', label: 'Bônus / PLR', icon: 'award' },
        { id: 'comissao', label: 'Comissões', icon: 'percent' },

        // TRABALHOS EXTRAS
        { id: 'freelance', label: 'Freelance', icon: 'laptop' },
        { id: 'consultoria', label: 'Consultoria', icon: 'clipboard' },
        { id: 'hora_extra', label: 'Hora Extra', icon: 'clock' },
        { id: 'bico', label: 'Trabalho Informal', icon: 'tool' },

        // EMPREENDEDORISMO
        { id: 'venda_produto', label: 'Venda de Produto', icon: 'shopping-bag' },
        { id: 'venda_servico', label: 'Venda de Serviço', icon: 'settings' },
        { id: 'ecommerce', label: 'E-commerce', icon: 'shopping-cart' },
        { id: 'afiliados', label: 'Marketing de Afiliados', icon: 'link' },

        // INVESTIMENTOS
        { id: 'rendimentos_cdi', label: 'Rendimento CDI', icon: 'trending-up' },
        { id: 'dividendos', label: 'Dividendos', icon: 'bar-chart' },
        { id: 'juros_titulos', label: 'Juros de Títulos', icon: 'activity' },
        { id: 'renda_fixa', label: 'Renda Fixa', icon: 'shield' },
        { id: 'renda_variavel', label: 'Renda Variável', icon: 'trending-up' },
        { id: 'fundos_imobiliarios', label: 'FIIs', icon: 'home' },
        { id: 'cripto', label: 'Criptomoedas', icon: 'cpu' },
        { id: 'poupanca', label: 'Poupança', icon: 'archive' },

        // BENEFÍCIOS E AUXÍLIOS
        { id: 'vale_refeicao', label: 'Vale Refeição', icon: 'credit-card' },
        { id: 'vale_transporte', label: 'Vale Transporte', icon: 'bus' },
        { id: 'auxilio_governo', label: 'Auxílio Governamental', icon: 'flag' },
        { id: 'seguro_desemprego', label: 'Seguro-Desemprego', icon: 'umbrella' },
        { id: 'pensao_recebida', label: 'Pensão Recebida', icon: 'users' },

        // EVENTUAIS
        { id: 'presente_recebido', label: 'Presente Recebido', icon: 'gift' },
        { id: 'reembolso', label: 'Reembolso', icon: 'rotate-ccw' },
        { id: 'devolucao_imposto', label: 'Restituição IR', icon: 'file' },
        { id: 'cashback', label: 'Cashback', icon: 'refresh-cw' },
        { id: 'venda_bem', label: 'Venda de Bem', icon: 'tag' },

        // OUTROS
        { id: 'outros_ganhos', label: 'Outras Entradas', icon: 'plus-circle' }
    ],

    expense: [

        // MORADIA
        { id: 'aluguel', label: 'Aluguel', icon: 'home' },
        { id: 'financiamento_imovel', label: 'Financiamento Imóvel', icon: 'file-text' },
        { id: 'condominio', label: 'Condomínio', icon: 'building' },
        { id: 'iptu', label: 'IPTU', icon: 'map' },
        { id: 'agua', label: 'Água', icon: 'droplet' },
        { id: 'luz', label: 'Energia Elétrica', icon: 'zap' },
        { id: 'gas', label: 'Gás', icon: 'flame' },
        { id: 'internet', label: 'Internet', icon: 'wifi' },
        { id: 'telefone', label: 'Telefone', icon: 'phone' },
        { id: 'manutencao_casa', label: 'Manutenção da Casa', icon: 'tool' },

        // ALIMENTAÇÃO
        { id: 'supermercado', label: 'Supermercado', icon: 'shopping-cart' },
        { id: 'padaria', label: 'Padaria', icon: 'coffee' },
        { id: 'restaurante', label: 'Restaurante', icon: 'utensils' },
        { id: 'delivery', label: 'Delivery', icon: 'truck' },
        { id: 'ifood', label: 'Apps de Comida', icon: 'smartphone' },

        // TRANSPORTE
        { id: 'combustivel', label: 'Combustível', icon: 'droplet' },
        { id: 'uber', label: 'Uber / App', icon: 'car' },
        { id: 'transporte_publico', label: 'Transporte Público', icon: 'bus' },
        { id: 'manutencao_carro', label: 'Manutenção Veículo', icon: 'tool' },
        { id: 'seguro_veiculo', label: 'Seguro Veicular', icon: 'shield' },
        { id: 'ipva', label: 'IPVA', icon: 'file' },
        { id: 'estacionamento', label: 'Estacionamento', icon: 'square' },
        { id: 'pedagio', label: 'Pedágio', icon: 'navigation' },

        // SAÚDE
        { id: 'plano_saude', label: 'Plano de Saúde', icon: 'heart' },
        { id: 'consulta_medica', label: 'Consulta Médica', icon: 'stethoscope' },
        { id: 'exames', label: 'Exames', icon: 'activity' },
        { id: 'farmacia', label: 'Farmácia', icon: 'pill' },
        { id: 'terapia', label: 'Terapia', icon: 'brain' },
        { id: 'academia', label: 'Academia', icon: 'dumbbell' },

        // EDUCAÇÃO
        { id: 'mensalidade', label: 'Mensalidade', icon: 'book' },
        { id: 'curso_online', label: 'Curso Online', icon: 'monitor' },
        { id: 'material_escolar', label: 'Material Escolar', icon: 'pen-tool' },
        { id: 'livros', label: 'Livros', icon: 'book-open' },

        // LAZER
        { id: 'cinema', label: 'Cinema', icon: 'film' },
        { id: 'streaming', label: 'Streaming', icon: 'tv' },
        { id: 'viagem', label: 'Viagem', icon: 'plane' },
        { id: 'hotel', label: 'Hotel', icon: 'map-pin' },
        { id: 'bares', label: 'Bares', icon: 'beer' },
        { id: 'shows', label: 'Shows / Eventos', icon: 'music' },

        // FINANCEIRO
        { id: 'cartao_credito', label: 'Fatura Cartão', icon: 'credit-card' },
        { id: 'emprestimo', label: 'Empréstimo', icon: 'alert-triangle' },
        { id: 'juros', label: 'Juros / Multas', icon: 'percent' },
        { id: 'taxas_bancarias', label: 'Taxas Bancárias', icon: 'banknote' },
        { id: 'impostos', label: 'Impostos', icon: 'file-text' },

        // COMPRAS
        { id: 'roupas', label: 'Roupas', icon: 'shopping-bag' },
        { id: 'eletronicos', label: 'Eletrônicos', icon: 'cpu' },
        { id: 'moveis', label: 'Móveis', icon: 'box' },
        { id: 'presentes', label: 'Presentes Dados', icon: 'gift' },

        // FAMILIAR
        { id: 'filhos', label: 'Despesas com Filhos', icon: 'users' },
        { id: 'pets', label: 'Pets', icon: 'heart' },
        { id: 'pensao_paga', label: 'Pensão Paga', icon: 'user' },

        // OUTROS
        { id: 'imprevistos', label: 'Imprevistos', icon: 'alert-circle' },
        { id: 'outros_gastos', label: 'Outros Gastos', icon: 'more-horizontal' }
    ],

    savings: [

        { id: 'reserva_emergencia', label: 'Reserva de Emergência', icon: 'shield-check' },
        { id: 'fundo_viagem', label: 'Fundo de Viagem', icon: 'palmtree' },
        { id: 'aposentadoria', label: 'Aposentadoria', icon: 'lock' },
        { id: 'compra_imovel', label: 'Compra de Imóvel', icon: 'home' },
        { id: 'compra_veiculo', label: 'Compra de Veículo', icon: 'car' },
        { id: 'educacao_futura', label: 'Educação Futura', icon: 'book' },
        { id: 'fundo_casamento', label: 'Casamento', icon: 'heart' },
        { id: 'fundo_filhos', label: 'Futuro dos Filhos', icon: 'users' },
        { id: 'meta_especifica', label: 'Meta Específica', icon: 'target' },
        { id: 'investimento_longo_prazo', label: 'Investimento LP', icon: 'trending-up' }
    ]
};
