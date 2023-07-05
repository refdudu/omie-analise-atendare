import { DefaultResponseList, DefaultListRequestI } from "../interfaces";

export interface Client {
  cnpj_cpf: string;
  codigo_cliente?: number;
  codigo_cliente_integracao: string;
  nome_fantasia?: string;
  razao_social: string;
  email?: string;
  tags: string[]; // Cliente
}

export interface ClientesFiltroI {
  cnpj_cpf?: string;
  email?: string;
}

export interface ClientListRequest extends DefaultListRequestI {
  clientesFiltro?: ClientesFiltroI;
}
export interface ClientListResponse extends DefaultResponseList {
  clientes_cadastro_resumido: Client[];
}

export interface RelateClientRequest {
  codigo_cliente_omie: number; //Código de Cliente / Fornecedor
  codigo_cliente_integracao: string; //Código de Integração com sistemas legados.
}
