import { randomUUID } from "crypto";
import { api } from "../api";
import { ProductsRequests } from "./products/requests";
import { Order, OrderResponseList } from "./interface";
import { ClientsRequests } from "../clients/requests";
import { DefaultListRequestI } from "../interfaces";
import { Client } from "../clients/interfaces";
import { CheckingAccountRequests } from "../checkingAccount/request";
import { CategoriesRequests } from "../categories/request";

const url = "produtos/pedido/";
const _createOrder = (order: Order) => {
  return api({
    call: "IncluirPedido",
    url,
    body: order,
  });
};

const _listOrder = ({
  pagina,
  registros_por_pagina = 50,
}: DefaultListRequestI) => {
  return api<OrderResponseList>({
    call: "ListarPedidos",
    url,
    body: {
      pagina,

      registros_por_pagina,
      //   apenas_importado_api: "S",
    },
  });
};

const _deleteOrder = async (codigo_pedido: number) => {
  const body = { codigo_pedido };

  return api({
    call: "ExcluirPedido",
    url,
    body,
  });
};

async function deleteOrders() {
  const orders = await _listOrder({ pagina: 1 });
  if (!orders) return;
  const codes = orders.pedido_venda_produto.map(
    ({ cabecalho }) => cabecalho.codigo_pedido
  );

  codes.forEach((code, index) => {
    if (code)
      setTimeout(async () => {
        const data = await _deleteOrder(code);
        console.log(data);
      }, 1000 * 3 * index);
  });
}

async function _default() {
  //   deleteOrders();
  const email = "renanfische1r@atendare.com";
  const cpf = "09158092064";
  const client = await ClientsRequests.getClient({ cnpj_cpf: cpf, email });
  if (!client) return;

  const checkingAccounts = await CheckingAccountRequests.getCheckingAccounts();
  if (!checkingAccounts || checkingAccounts.length === 0) return;

  const categories = await CategoriesRequests.getCategories();
  if (!categories || categories.length === 0) return;

  const products = await ProductsRequests.getProducts();
  if (!products) return;

  const date = new Date();
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();

  categories.forEach(async (category, index) => {
    const day = Math.ceil(Math.random() * 29);
    const [checkingAccount] = checkingAccounts.sort(() =>
      Math.random() > 0.5 ? 1 : -1
    );

    const sortedProducts = products
      .sort(() => (Math.random() > 0.5 ? 1 : -1))
      .slice(0, Math.floor(Math.random() * 5));

    setTimeout(async () => {
      const newOrder: Order = {
        cabecalho: {
          codigo_pedido_integracao: randomUUID(),
          codigo_cliente: client.codigo_cliente,
          data_previsao: `${day}/${month + 2}/${year}`,
        },

        informacoes_adicionais: {
          codigo_categoria: category.codigo,
          codigo_conta_corrente: Number(checkingAccount.nCodCC),
        },

        det: sortedProducts.map(({ codigo_produto, valor_unitario = 0 }) => ({
          produto: {
            codigo_produto,
            quantidade: 1,
            valor_unitario,
          },
          ide: {
            codigo_item_integracao: randomUUID().slice(0, 30),
          },
        })),
      };

      const createdOrder = await _createOrder(newOrder);
      console.log(createdOrder);
    }, index * 3 * 1000);
  });
}

export const OrdersRequests = {
  _default,
};
