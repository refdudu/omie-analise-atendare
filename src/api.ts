import axios from "axios";

export interface RequestProps {
  body?: any;
  url: string;
  call: string;
}

const APP_KEY = "3573690426306";
const APP_SECRET = "800ff3dff5d798647b7f6a056914c862";
const BASE_URL = "https://app.omie.com.br/api/v1";

const baseRequest = axios.create({ baseURL: BASE_URL });

export async function api<T>({
  url,
  body: _body,
  call,
}: RequestProps): Promise<T | undefined> {
  const body = {
    call, // ListarContatos
    app_key: APP_KEY,
    app_secret: APP_SECRET,
    param: [_body], // {pagina:1}
  };

  const headers = {
    OMIE_APP_KEY: APP_KEY,
    OMIE_APP_SECRET: APP_SECRET,
    OMIE_CALL: call,
    "Content-Type": "application/json",
  };

  try {
    const { data } = await baseRequest.post<T>(url, body, { headers });

    return data;
  } catch (error) {
    console.error("----------------------------------------");
    console.error(error.config.url);
    console.error(error.config.data);
    console.error(error.response.data);
    console.error("Erro");
  }
}
