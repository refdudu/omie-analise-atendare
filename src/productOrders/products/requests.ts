import { api } from "../../api";
import { FilterListRequestI } from "../../interfaces";
import { Product, ProductResponse, RelateProductRequest } from "./interfaces";

const url = "geral/produtos/";

const listProducts = ({
  pagina = 1,
  registros_por_pagina = 50,
  filtrar_apenas_descricao,
}: FilterListRequestI) => {
  return api<ProductResponse>({
    call: "ListarProdutosResumido",
    url,
    body: {
      pagina,
      registros_por_pagina,
      filtrar_apenas_descricao,
      filtrar_apenas_omiepdv: "N",
    },
  });
};

const _relateProduct = (body: RelateProductRequest) => {
  return api({
    call: "AssociarCodIntProduto",
    url,
    body,
  });
};
// não será possível criar produtos pois não sabemos o "ncm"
const _createProduct = (product: Product) => {
  return api({
    call: "IncluirProduto",
    url,
    body: product,
  });
};

const getProducts = async () => {
  const products = await listProducts({ pagina: 1 });
  const randomProducts = products?.produto_servico_resumido.filter(
    ({ codigo_produto_integracao }) => codigo_produto_integracao.length <= 20
  );

  return randomProducts;
};

export const ProductsRequests = { getProducts, _relateProduct };
