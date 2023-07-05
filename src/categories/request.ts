import { randomUUID } from "crypto";
import { api } from "../api";
import { ResponseListCategory } from "./interface";
import { DefaultListRequestI } from "../interfaces";

const url = "geral/categorias/";

// não será possível criar produtos pois não sabemos o "ncm"

const listCategories = ({
  pagina,
  registros_por_pagina = 50,
}: DefaultListRequestI) => {
  return api<ResponseListCategory>({
    call: "ListarCategorias",
    url,
    body: { pagina, registros_por_pagina },
  });
};
const getCategories = async () => {
  const categories = await listCategories({ pagina: 1 });

  const filteredCategories = categories?.categoria_cadastro
    .filter(({ nao_exibir }) => nao_exibir === "N")
    .filter(({ codigo }) => codigo.split(".").length === 3)
    .sort(() => (Math.random() > 0.5 ? 1 : -1));

  return filteredCategories;
};


export const CategoriesRequests = {
  getCategories,
};
