import { DefaultResponseList, DefaultListRequestI } from "../../interfaces";

export interface ServiceRequestList extends DefaultListRequestI {
  filtrar_apenas_descricao?: string; // Busca igual LIKE SQL "%TESTE"
}

export interface RelateServiceRequestI {
  nCodServ: number;
  cCodIntServ: string;
}
export interface IntListI {
  cCodIntServ?: string; //	Código de Integração do Serviço.+
  nCodServ?: number; //Código do serviço.+
}
interface CabecalhoI {
  cDescricao: string; //	Descrição Resumida do serviço prestado.
  cCodigo: string; //	Código do Serviço.
  cIdTrib: string; //	ID da Tributação dos Serviços.
  cCodServMun: string; //	Código do Serviço Municipal.
  cCodLC116: string; //	Código do Serviço LC 116.
  nIdNBS: string; //	Id do NBS.
  nPrecoUnit: number; //	Preço Unitário do Serviço.
  cCodCateg: string; //	Código da Categoria.
}

export interface Service {
  intListar: IntListI; //Dados da integração do serviço.
  cabecalho: CabecalhoI;  //Dados do Serviço.
  // descricao	descricao	Descrição do Serviço.
  // impostos	impostos	Impostos e Retenções do serviço.
  // info	info	Dados da registro.
  // produtosUtilizados	produtosUtilizados	Produtos Utilizados no serviço.
  // viaUnica	viaUnica	NF Via Única (Modelo 21 e 22)
}
