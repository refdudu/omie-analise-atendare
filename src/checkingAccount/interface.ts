import { DefaultListRequestI } from "../interfaces";

export interface CheckingAccount {
  nCodCC: number; //	Código da conta corrente no Omie.
  cCodCCInt: string; //	Código de Integração do Parceiro.
  descricao: string; //	Descrição da conta corrente.
  codigo_banco: string; //	Código do banco.+
  codigo_agencia: string; //	Código da Agência
  conta_corrente: string; //	Número da conta corrente.
  nome_gerente: string; //	Nome do Gerente da Conta Corrente.
  tipo: string; //	Tipo da Conta Corrente.+
  tipo_comunicacao: string; //	Tipo de comunicação
  cSincrAnalitica: string; //	Sincroniza os Movimentos de Forma Análitica para o PDV
  nTpTef: number; //	Tipo de TEF
  nTaxaAdm: number; //	Taxa da Administradora de Cartões
  nDiasVenc: number; //	Dias para vencimento
  nNumParc: number; //	Número máximo de parcelas do Cartão de Credito
  nCodAdm: number; //	Código da Administradora de Cartões
  cUtilPDV: string; //	Utiliza a Conta Corrente no OmiePDV
  cCategoria: string; //	Código da Categoria para o PDV.
  cModalidade: string; //	Modalidade da Cobrança
  saldo_inicial: number; //	Saldo Inicial da Conta Corrente
  saldo_data: string; //	Data do Saldo Inicial da Conta Corrente
  valor_limite: number; //	Valor do Limite do Crédito
  cTipoCartao: string; //	Tipo de Cartão para Administradoras de Cartão.+
}
export interface ResponseListCheckingAccount extends DefaultListRequestI {
  conta_corrente_lista: CheckingAccount[];
}
