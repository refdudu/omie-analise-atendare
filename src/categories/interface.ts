import { DefaultResponseList } from "../interfaces";

export interface Category {
  codigo: string; //	Código para a Categoria
  descricao: string; //	Descrição para a Categoria
  descricao_padrao: string; //	Descrição Padrão para a Categoria
  conta_inativa: string; //	Indica que a conta está inativo
  definida_pelo_usuario: string; //	Indica que a conta financeira é definida pelo usuário
  id_conta_contabil: number; //	ID da Conta Contábil
  tag_conta_contabil: string; //	Tag para Conta Contábil
  conta_despesa: string; //	Quando S, indica que é conta de despesa
  nao_exibir: string; //	Indica que a Categoria não deve ser exibida em ComboBox
  natureza: string; //	Descrição da Natureza da conta
  conta_receita: string; //	Quando S, indica que é conta de receita
  totalizadora: string; //	Quando S, indica que é totalizadora de conta
  transferencia: string; //	Quando S, indica que é categoria de transferência
  codigo_dre: string; //	Código no DRE
  categoria_superior: string; //	Código da Categoria de Nivel Superior
  // dadosDRE	dadosDRE	Detalhes da conta do DRE.
}
export interface ResponseListCategory extends DefaultResponseList {
    categoria_cadastro: Category[];
}
