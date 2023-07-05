export interface ServiceOrderI {
  Cabecalho: CabecalhoI; //	Cabeçalho da Ordem de Serviço
  InformacoesAdicionais: InformacoesAdicionaisI; //	Informações adicionais da OS
  // Email	Email	Informações do E-Mail
  // Departamentos	DepartamentosArray	Lista de distribuição por departamentos
  // ServicosPrestados	ServicosPrestadosArray	Lista de Serviços Prestados
  // Parcelas	ParcelasArray	Permite que o parcelamento seja realizado de forma manual.
  // Observacoes	Observacoes	Observações da Ordem de Serviço
  // InfoCadastro	InfoCadastro	Informações do cadastro da Ordem de Serviço.
  // despesasReembolsaveis	despesasReembolsaveis	Despesas reembolsáveis.
  // produtosUtilizados	produtosUtilizados	Produtos Utilizados na Ordem de Serviço.
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
  cCodCateg?: string; //	Categoria
  nCodCC?: number; //	Código da Conta Corrente
  cNumPedido?: string; //	Número do Pedido do Cliente
  cNumContrato?: string; //	Número do Contrato de Venda
  cContato?: string; //	Contato
  cDadosAdicNF?: string; //	Dados Adicionais da Nota Fiscal
  cCodObra?: string; //	Código da Obra
  cCodART?: string; //	Código ART
  nCodProj?: number; //	Código do Projeto
  cCidPrestServ?: string; //	Cidade da Prestação do Serviço
  dDataRps?: string; //	Data da RPS
  cNumRecibo?: string; //	Número do Recibo gerado.+
}
