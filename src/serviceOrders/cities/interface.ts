import { DefaultListRequestI, DefaultResponseList } from "../../interfaces";

export interface City {
  cCod: string; //	Código da Cidade
  cNome: string; //	Nome da Cidade
  cUF: string; //	:string // da cidade
  nCodIBGE: string; //	Código IBGE da Cidade
  nCodSIAFI: number; //	Código SIAFI da Cidade
}

export interface RequestListCityI extends DefaultListRequestI {
  filtrar_cidade_contendo?: string;
}

export interface ResponseListCity extends DefaultResponseList {
    lista_cidades: City[];
}
