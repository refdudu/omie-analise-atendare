import { api } from "../../api";
import { RequestListCityI, ResponseListCity } from "./interface";

const url = "geral/cidades/";

const _listCities = ({
  pagina,
  registros_por_pagina = 50,
  filtrar_cidade_contendo,
}: RequestListCityI) => {
  return api<ResponseListCity>({
    call: "PesquisarCidades",
    url,
    body: { pagina, filtrar_cidade_contendo, registros_por_pagina },
  });
};

export const CitiesRequests = {
  _listCities,
};
