import { api } from "../api";
import { ServiceOrderI } from "./interface";
import { DefaultListRequestI } from "../interfaces";
import { randomUUID } from "crypto";
import { ClientsRequests } from "../clients/requests";
import { CategoriesRequests } from "../categories/request";
import { CheckingAccountRequests } from "../checkingAccount/request";

const url = "servicos/os/";
const _createOrder = (body: ServiceOrderI) => {
  return api({
    call: "IncluirOS",
    url,
    body,
  });
};

const _listOrder = ({
  pagina,
  registros_por_pagina = 50,
}: DefaultListRequestI) => {
  return api({
    call: "ListarOS",
    url,
    body: {
      pagina,
      registros_por_pagina,
    },
  });
};

const _deleteOrder = async (codigo_pedido: number) => {
  const body = { codigo_pedido };

  return api({
    call: "ExcluirOS",
    url,
    body,
  });
};

const main = async () => {
  const client = await ClientsRequests.getClient({
    email: "renanfischer@atendare.com",
    cnpj_cpf: "05390608011",
  });
  console.log(client);
  if (!client) return;

  const date = new Date();
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  const categories = await CategoriesRequests.getCategories();
  if (!categories) return;
  const [category] = categories;

  const checkingAccounts = await CheckingAccountRequests.getCheckingAccounts();
  if (!checkingAccounts) return;
  const [checkingAccount] = checkingAccounts;

  const createdOrderService = await _createOrder({
    Cabecalho: {
      cCodIntOS: randomUUID(),
      nCodCli: Number(client.codigo_cliente),
      dDtPrevisao: `${day}/${month + 2}/${year}`,
      cEtapa: "10",
      nQtdeParc: 1,
    },
    InformacoesAdicionais: {
      cCodCateg: category.codigo,
      nCodCC: checkingAccount.nCodCC,

      cCidPrestServ: "",
    },
  });
  if (createdOrderService) console.log(createdOrderService);
};
export const ServiceOrdersRequests = { main };
