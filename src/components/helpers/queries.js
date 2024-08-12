const URL_Usuario = import.meta.env.VITE_API_USUARIO;

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URL_Usuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return { error: "Error en el login" };
  }
};

const URIClases = import.meta.env.VITE_API_CLASES;

//GET
export const listarClases = async () => {
  try {
    const respuesta = await fetch(URIClases);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const obtenerClase = async (id) => {
  try {
    const respuesta = await fetch(URIClases + id);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

//POST
export const crearClase = async (claseNueva) => {
  try {
    const respuesta = await fetch(URIClases, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuariofitfactory"))
          .token,
      },
      body: JSON.stringify(claseNueva),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

//Delete
export const eliminarClaseAPI = async (id) => {
  try {
    const respuesta = await fetch(URIClases + id, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("usuariofitfactory"))
          .token,
      },
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

//PATCH
export const editarClase = async (claseActualizada, id) => {
  try {
    const respuesta = await fetch(URIClases + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuariofitfactory"))
          .token,
      },
      body: JSON.stringify(claseActualizada),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
