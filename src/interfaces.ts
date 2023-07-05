export interface DefaultListRequestI {
  pagina: number;
  registros_por_pagina?: number;
}

export interface FilterListRequestI extends DefaultListRequestI{
  filtrar_apenas_descricao?: string;
}

export interface DefaultResponseList {
  pagina: number;
  total_de_paginas: number;
  registros: number;
  total_de_registros: number;
}
export interface Address {
  cEndereco?: string; //	Endereço do contato
  cCompl?: string; //	Complemento
  cCEP?: string; //	CEP
  cBairro?: string; //	Bairro
  cCidade?: string; //	Cidade
  cUF?: string; //	Estado
  cPais?: string; //	País
}
export interface PhoneMail {
  cDDDTel?: string; //	DDD do Telefone
  cNumTel?: string; //	Número do Telefone
  cDDDFax?: string; //	DDD do Fax
  cNumFax?: string; //	Número do Fax
  cEmail?: string; //	E-Mail
  cWebsite?: string; //	Website
}
