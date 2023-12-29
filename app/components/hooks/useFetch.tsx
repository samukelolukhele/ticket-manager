import axios from "axios";

export interface MethodEnum {
  types: "GET" | "POST" | "PUT" | "DELETE";
}

const useFetch = () => {
  async function query<T>(
    route: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    body?: any
  ) {
    if (method === "POST" || method == "PUT" || (method === "DELETE" && !body))
      throw new Error(
        "Request method requires a body but no value was provided."
      );

    const { data } = await axios<T>({
      url: route,
      method: method,
      data: body,
    });

    return data;
  }

  return query;
};

export default useFetch;
