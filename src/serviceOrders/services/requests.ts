import { api } from "../../api";
import { DefaultListRequestI, FilterListRequestI } from "../../interfaces";
import {
  RelateServiceRequestI,
  Service,
  ServiceRequestList,
} from "./interfaces";

const url = "servicos/servico";

const _listServices = ({
  pagina = 1,
  registros_por_pagina = 50,
  filtrar_apenas_descricao,
}: FilterListRequestI) => {
  return api({
    call: "ListarCadastroServico",
    url,
    body: {
      pagina,
      registros_por_pagina,
      filtrar_apenas_descricao,
      filtrar_apenas_omiepdv: "N",
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
