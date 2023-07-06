import { DefaultResponseList } from "../interfaces";

export interface OrderResponseList extends DefaultResponseList {
  pedido_venda_produto: VendaProduto[];
}

export interface VendaProduto {
  cabecalho: OrderHeader; //	Informações do cabeçalho do pedido.+
  det: OrderDet[]; //	Dados da Aba 'Itens da Venda' do Pedido de Venda.+
  informacoes_adicionais: OrderAdditionalInfo; //	Dados da Aba 'Informações Adicionais' do Pedido de Venda.+
}

export interface OrderDet {
  produto?: OrderProduct; //	Identificação do Produto do Item do Pedido de Vendas.+
  ide: OrderIDE;
}

export interface OrderIDE {
  codigo_item_integracao?: string; //	Código de Integração do Item do Pedido de Venda.+
  codigo_item?: number; //	ID do Item do Pedido.+
  simples_nacional?: string; //Indica que a empresa é Optante pelo Simples Nacional.+
  acao_item?: string; //Ação para o item.+
  id_ordem_producao?: number; //	Id da Ordem de Produção.+
}

export interface OrderHeader {
  codigo_pedido?: number; //	ID do pedido do venda.+
  codigo_pedido_integracao?: string; //	Código de integração do pedido de venda.+
  numero_pedido?: string; //	Número do pedido de venda.+
  codigo_cliente?: number; //	Código do cliente.+
  codigo_cliente_integracao?: string; //	Código Integração da Transportadora.+
  data_previsao?: string; //	Data de Previsão de Faturamento.+
  quantidade_itens?: number; //	Quantidade de Itens.+
  etapa?: string; //	Etapa do pedido de venda.+
  codigo_parcela?: string; //	Código da parcela/Condição de pagamento.+
  qtde_parcelas?: number; //	Quantidade de parcelas.+
  origem_pedido?: string; //	Origem do Pedido.+
  codigo_cenario_impostos?: number; //	Código do Cenário de Impostos.+
  bloqueado?: string; //	Pedido Bloqueado pela API.+
  importado_api?: string; //	Importado pela API.+
  tipo_desconto_pedido?: string; //	Tipo de desconto para o pedido.+
  perc_desconto_pedido?: number; //	Percentual do desconto do pedido.+
  valor_desconto_pedido?: number; //	Valor do desconto do pedido.+
}

export interface OrderAdditionalInfo {
  codigo_categoria?: string; //	Código da categoria.+
  codigo_conta_corrente?: number; //	Código da Conta Corrente.+
  numero_pedido_cliente?: string; //	Número do pedido do cliente.+
  numero_contrato?: string; //	Número do Contrato de Venda.+
  contato?: string; //	Contato.+
  dados_adicionais_nf?: string; //	Dados adicionais para a Nota Fiscal.+
  consumidor_final?: string; //	Nota Fiscal para Consumo Final.+
  utilizar_emails?: string; //	Utilizar os seguintes endereços de e-mail.+
  enviar_email?: string; //	Enviar e-mail com o boleto de cobrança gerado pelo faturamento (juntamente com o DANFE e o XML da NF-e).+
  enviar_pix?: string; //	Enviar e-mail com o PIX de cobrança gerado pelo faturamento (juntamente com o DANFE e o XML da NF-e).+
  codVend?: number; //	Código do Vendedor.+
  codProj?: number; //	Código do Projeto.+
  impostos_embutidos?: string; //	Indica se os impostos estão embutidos no valor unitário do item [S/N]
  meio_pagamento?: string; //	Meio de Pagamento - Utilizado apenas para emissão de NF-e (campo "tPag" do XML). +
  descr_meio_pagamento?: string; //	Descrição do Meio de Pagamento - Utilizado apenas para emissão de NF-e (campo "xPag" do XML).+
  tipo_documento?: string; //	Tipo de Documento.+
  nsu?: string; //	Número Sequencial Único NSU - Para identificar vendas por cartões ou TransactionID TID - Para identificar vendas de comercio eletrônico.+
  // outros_detalhes	outros_detalhes	Outros detalhes da NF-e.+
  // nfRelacionada	nfRelacionada	Detalhes da NF referenciada
}

export interface OrderProduct {
  codigo_produto?: number; //	ID do Produto.+
  codigo_produto_integracao?: string; //	Código de integração do Produto.+
  codigo?: string; //	Código do Produto exibido na tela do Pedido de Vendas.+
  descricao?: string; //	Descrição do Produto.+
  cfop?: string; //	CFOP - Código Fiscal de Operações e Prestações.+
  ncm?: string; //	NCM - Nomenclatura Comum do Mercosul+
  ean?: string; //	EAN - European Article Number+
  unidade?: string; //	Unidade.+
  quantidade?: number; //	Quantidade+
  valor_unitario?: number; //	Valor Únitário+
  codigo_tabela_preco?: number; //	Código da tabela de preço.+
  valor_mercadoria?: number; //	Valor da Mercadoria+
  tipo_desconto?: string; //	Tipo de Desconto.+
  percentual_desconto?: number; //	Percentual de Desconto.+
  valor_desconto?: number; //	Valor do Desconto+
  valor_deducao?: number; //	Valor da Dedução+
  valor_icms_desonerado?: number; //	Valor do ICMS desonerado
  motivo_icms_desonerado?: string; //	Código do Motivo de desoneração do ICMS+
  valor_total?: number; //	Valor Total.+
  indicador_escala?: string; //	Indicador de Produção em Escala Relevante.+
  cnpj_fabricante?: string; //	CNPJ do Fabricante da Mercadoria.
  kit?: string; //	Indica se o produto é um kit
  componente_kit?: string; //	Indica se o produto é um componente de um kit
  codigo_item_kit?: number; //	ID do Item do kit (pai) que o componente pertence
  reservado?: string; //	(S/N) Indica se o estoque do produto será reservado.
}
