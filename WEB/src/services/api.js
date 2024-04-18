import API_URL from "../config/Config";

export const fetchUserData = async () => {
    try {
      const response = await fetch(
        `${API_URL}/users/661d4a9c508efaae74404491`
      );
      if (!response.ok) {
        throw new Error("Error al obtener la información del usuario");
      }
      const userData = await response.json();
      console.log(userData.response.docs);
      return userData;
    } catch (error) {
      console.error("Hubo un error al obtener la información del usuario:", error);
      throw error; // Propagar el error para que se maneje en el componente
    }
  };