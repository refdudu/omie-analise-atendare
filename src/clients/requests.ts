import { api } from "../api";
import {
  Client,
  ClientListRequest,
  ClientListResponse,
  ClientesFiltroI,
  RelateClientRequest,
} from "./interfaces";
import { randomUUID } from "crypto";

const url = "geral/clientes/";

const _listClients = ({
  pagina = 1,
  registros_por_pagina = 50,
  clientesFiltro,
}: ClientListRequest) => {
  return api<ClientListResponse>({
    call: "ListarClientesResumido",
    url,
    body: {
      pagina,
      clientesFiltro,
      registros_por_pagina,
    },
  });
};

const _relateClient = (body: RelateClientRequest) => {
  return api({
    call: "AssociarCodIntCliente",
    url,
    body,
  });
};

const _createClient = (client: Client) => {
  return api({
    call: "IncluirCliente",
    url,
    body: client,
  });
};

const _deleteClient = async (codigo_produto: number) => {
  const body = { codigo_produto };

  return api({
    call: "ExcluirCliente",
    url,
    body,
  });
};

async function getClients(clientesFiltro: ClientesFiltroI) {
  const clients = await _listClients({
    pagina: 1,
    clientesFiltro,
  });
  return clients?.clientes_cadastro_resumido;
  //   return console.log(clients);

  //   const uid = randomUUID();
  //   const newClient: Client = {
  //     codigo_cliente_integracao: uid,
  //     razao_social: `Atendare ${uid}`,
  //     cnpj_cpf: "13.166.760/0001-15",
  //   };
  //   const createdClient = _createClient(newClient);
  //   console.log(createdClient);
}

const getClient = async ({ cnpj_cpf, email }: ClientesFiltroI) => {
  let clients = await getClients({ email });

  if (!clients) {
    clients = await getClients({ cnpj_cpf });
  }

  if (!clients) {
    const newClient: Client = {
      tags: ["Cliente"],
      cnpj_cpf: cnpj_cpf || "",
      codigo_cliente_integracao: randomUUID(),
      razao_social: "Renan",
    };

    await _createClient(newClient);
    clients = await ClientsRequests.getClients({ cnpj_cpf });
  }

  return clients?.[0];
};
export const ClientsRequests = {
  _createClient,
  getClients,
  _relateClient,
  getClient,
};
