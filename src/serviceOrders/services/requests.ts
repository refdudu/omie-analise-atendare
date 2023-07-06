import { api } from "../../api";
import { DefaultListRequestI, FilterListRequestI } from "../../interfaces";
import {
  RelateServiceRequestI,
  ResponseServiceList,
  Service,
  ServiceRequestList,
} from "./interfaces";

const url = "servicos/servico/";

const _listServices = ({
  pagina = 1,
  registros_por_pagina = 50,
  filtrar_apenas_descricao,
}: FilterListRequestI) => {
  return api<ResponseServiceList>({
    call: "ListarCadastroServico",
    url,
    body: {
      nPagina: pagina,
      nRegPorPagina: registros_por_pagina,
      cDescricao: filtrar_apenas_descricao,
    },
  });
};

const _relateService = (body: RelateServiceRequestI) => {
  return api({
    call: "AssociarCodIntServico",
    url,
    body,
  });
};
// não será possível criar produtos pois não sabemos o "NBS"
const _createService = (service: Service) => {
  return api({
    call: "IncluirCadastroServico",
    url,
    body: service,
  });
};

export const ServicesRequests = {
  _relateService,
  _listServices,
};
