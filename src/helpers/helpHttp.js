export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };

    const controller = new AbortController();
    /*abort controller > objeto para reaccionar si el servidor se ha caido
        y no se esta recibiendo respuesta del fetch*/

    options.signal = controller.signal;
    /* agregamos asi la propiedad signal que lleva el objeto
        abort controller en las opciones que pasamos */

    options.method = options.method || "GET"; //metodo por defecto si el usuario no especifica otro
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader; //ternario para quizas mezclar las que yo pongo en defecto mas las que tragia el usuario

    options.body = JSON.stringify(options.body) || false; //si no hay body no se puede hacer fetch
    if (!options.body) delete options.body;

    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Error!",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
