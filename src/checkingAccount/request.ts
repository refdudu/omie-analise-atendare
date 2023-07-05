import { randomUUID } from "crypto";
import { ResponseListCheckingAccount } from "./interface";
import { DefaultListRequestI } from "../interfaces";
import { api } from "../api";

const url = "geral/contacorrente/";

const listCheckingAccount = ({ pagina }: DefaultListRequestI) => {
  return api<ResponseListCheckingAccount>({
    call: "ListarResumoContasCorrentes",
    url,
    body: { pagina, registros_por_pagina: 50 },
  });
};

const getCheckingAccounts = async () => {
  const checkingAccounts = await listCheckingAccount({ pagina: 1 });
  return checkingAccounts?.conta_corrente_lista;
};

export const CheckingAccountRequests = {
    getCheckingAccounts,
};
