export interface ServiceOrderI {
  Cabecalho: CabecalhoI; //	Cabeçalho da Ordem de Serviço
  InformacoesAdicionais: InformacoesAdicionaisI; //	Informações adicionais da OS
  ServicosPrestados: ServicosPrestadosI[]; //	Lista de Serviços Prestados
}

interface ServicosPrestadosI {
  nCodServico?: number; //	Código Interno do Serviço conforme cadastrado na tabela de serviços.+
  cCodIntServico?: string; //	Código de Integração do Serviço conforme cadastrado na tabela de serviços.+
  cTribServ?: string; //	Tipo de Tributação dos Serviços.+
  cCodServMun?: string; //	Código do Serviço Municipal ou CNAE.+
  cCodServLC116?: string; //	Código do Serviço conforme Lei Complementar (LC 116).+
  nQtde?: number; //	Quantidade de serviços.+
  nValUnit?: number; //	Valor Unitário do serviço.+
  cTpDesconto?: string; //	Tipo de Desconto.+
  nValorDesconto?: number; //	Valor do Desconto.+
  nAliqDesconto?: number; //	Aliquota do Desconto.+
  nValorOutrasRetencoes?: number; //	Valor de Outras Retenções.+
  nValorAcrescimos?: number; //	Valor de Acréscimos e taxas.+
  cDescServ?: string; //	Descrição dos Serviços.+
  cRetemISS?: string; //	Retem ISS (S/N)+
  cDadosAdicItem?: string; //	Dados adicionais do Item.+
  cNbs?: string; //	Código da Nomenclatura Brasileira de Serviços (NBS).+
  // impostos	impostos	Dados do impostos do serviço.+
  cNaoGerarFinanceiro?: string; //	Não gerar conta a receber para este item.+
  cCodCategItem?: string; //	Código da Categoria.+
  nSeqItem?: number; //	Sequencia do Item+
  nIdItem?: number; //	ID do Item da Ordem de Serviço.+
  cAcaoItem?: string; //	Ação a ser realizada na alteração do item.+
  // viaUnica	viaUnica	Informações referente ao serviço de NF modelo 21 ou 22.+
}

interface CabecalhoI {
  cCodIntOS: string; //	Código de Integração da OS
  nCodCli: number; //	Código do Cliente
  dDtPrevisao: string; //	Data de Previsão
  nQtdeParc: number; //	Quantidade de Parcelas
  cEtapa: string; //	Código da etapa do processo, sendo?:+

  nCodOS?: number; //	Código da Ordem de Serviço
  cNumOS?: string; //	Número da Ordem de Serviço+
  cCodIntCli?: string; //	Código de Integração do Cliente
  nCodVend?: number; //	Código do Vendedor
  cCodParc?: string; //	Código da parcela/Condição de pagamento.+
  nValorTotal?: number; //	Valor total da Ordem de Serviço.+
  nValorTotalImpRet?: number; //	Valor Total de Impostos Retidos
  nCodCtr?: number; //	Código do Contrato.+
}
interface InformacoesAdicionaisI {
  cCodCateg: string; //	Categoria
  nCodCC: number; //	Código da Conta Corrente
  cCidPrestServ: string; //	Cidade da Prestação do Serviço

  cNumPedido?: string; //	Número do Pedido do Cliente
  cNumContrato?: string; //	Número do Contrato de Venda
  cContato?: string; //	Contato
  cDadosAdicNF?: string; //	Dados Adicionais da Nota Fiscal
  cCodObra?: string; //	Código da Obra
  cCodART?: string; //	Código ART
  nCodProj?: number; //	Código do Projeto
  dDataRps?: string; //	Data da RPS
  cNumRecibo?: string; //	Número do Recibo gerado.+
}
