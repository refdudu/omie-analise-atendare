import { DefaultResponseList } from "../../interfaces";

export interface RelateProductRequest {
  codigo_produto: number;
  codigo_produto_integracao: string;
}

export interface ProductResponse extends DefaultResponseList {
  produto_servico_resumido: Product[];
}

export interface Product {
  descricao: string; //	Descrição do produto.+
  codigo: string; //	Código do Produto.+
  unidade: string; //	Código da Unidade.+
  codigo_produto?: number; //	Código do produto.+
  codigo_produto_integracao: string; //	Código de integração do produto.+
  ncm: string; // 	Código da Nomenclatura Comum do Mercosul (NCM).+
  ean?: string; //	Código EAN (GTIN - Global Trade Item Number).+
  valor_unitario?: number; //	Preço Unitário de Venda.+
  codigo_familia?: number; //	Código da Familia do Produto.+
  tipoItem?: string; //	Código do Tipo do Item para o SPED.+
  // recomendacoes_fiscais	recomendacoes_fiscais	Recomendações Fiscais.
  peso_liq?: number; //	Peso Líquido (Kg).+
  peso_bruto?: number; //	Peso Bruto (Kg).+
  altura?: number; //	Altura (centimentos).+
  largura?: number; //	Largura (centimetros)+
  profundidade?: number; //	Profundidade (centimetros).+
  marca?: string; //	Marca.+
  modelo?: string; //	Modelo.+
  dias_garantia?: number; //	Dias de Garantia.+
  dias_crossdocking?: number; //	Dias de Crossdocking.+
  descr_detalhada?: string; //	Descrição Detalhada para o Produto.+
  obs_internas?: string; //	Observações Internas.+
  exibir_descricao_nfe?: string; //	Indica se a Descrição Detalhada deve ser exibida nas Informações Adicionais do Item da NF-e (S/N).
  exibir_descricao_pedido?: string; //	Indica se a Descrição Detalhada deve ser exibida na impressão do Pedido (S/N).
  cst_icms?: string; //	Código da Situação Tributária do ICMS.+
  modalidade_icms?: string; //	Modalidade da Base de Cálculo do ICMS.+
  csosn_icms?: string; //	Código da Situação Tributária para Simples Nacional.+
  aliquota_icms?: number; //	Alíquota de ICMS.+
  red_base_icms?: number; //	Percentual de redução de base do ICMS.+
  motivo_deson_icms?: string; //	Motivo da desoneração do ICMS.+
  per_icms_fcp?: number; //	Percentual do Fundo de Combate a Pobreza do ICMS.+
  codigo_beneficio?: string; //	Código de integração da característica do produto.+
  cst_pis?: string; //	Código da Situação Tributária do PIS.+
  aliquota_pis?: number; //	Alíquota do PIS.+
  red_base_pis?: number; //	Percentual de redução de base do PIS.+
  cst_cofins?: string; //	Código da Situação Tributária do COFINS.+
  aliquota_cofins?: number; //	Alíquota do COFINS.+
  red_base_cofins?: number; //	Percentual de redução de base do COFINS.+
  cfop?: string; //	CFOP do Produto.+
  codInt_familia?: string; //	Código de Integração da Familia do Produto.+
  descricao_familia?: string; // 	Descrição da Familia do Produto.+
  bloqueado?: string; //	Indica se o registro está bloqueado (S/N).+
  bloquear_exclusao?: string; //	Indica se a exclusão do registro está bloqueada (S/N).+
  importado_api?: string; //	Indica se o registro foi incluído via API (S/N).+
  inativo?: string; //	Indica se o cadastro do produto está inativo (S/N).+
  lead_time?: number; //	Lead Time médio de ressuprimento em dias.
  origem_imposto?: string; //	Origem do Imposto+
}
