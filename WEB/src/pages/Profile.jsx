import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../services/api';

export function Profile() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const userData = await fetchUserData();
            setUserData(userData.response); // Almacena los datos del usuario en el estado
          } catch (error) {
            // Manejar el error
            console.error("Hubo un error al obtener la información del usuario:", error);
          }
        };
    
        fetchData();
      }, []);
    if (!userData) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="flex flex-col p-8 m-auto gap-6 items-center justify-center ">
              {/* Caja del Perfil */}
            <div className="p-2 flex flex-col items-center justify-center border-2 rounded-md border-secondary">
                {/* Encabezado */}
                <div className="bg-primary rounded-md text-white px-4 py-6">
                    <h1 className="text-2xl  font-semibold">{userData?.role.toUpperCase()}</h1>
                </div>
                {/* Contenido del perfil */}
                <div className="p-6">
                    <div className="p-6 flex flex-col items-center sm:flex-row sm:items-center ">
                        <img
                            src={userData?.photo}
                            alt="Avatar"
                            className="w-20 h-20 rounded-md border-2 border-secondary mr-4 mb-4"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">{userData?.name} {userData?.lastName}</h2>
                            <p className="text-gray-600">Correo electrónico: {userData?.email}</p>
                        </div>
                    </div>
                    {/* Otras secciones del perfil */}
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-4">Información adicional</h3>
                        <div className="bg-gray-200 p-4 rounded-md">
                            <h2 className="text-xl font-semibold">Educación: {userData?.educational_level}</h2>
                            <div>
                <p>Intereses:</p>
                <ul>
                    {userData?.interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
            </div>
                            <p>Biografia: {userData?.biography}</p>
                            <p>Dirección: {userData?.address}</p>
                            <p>Teléfono: {userData?.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
               {/* Caja de Cursos */}
               <div className="p-2 flex flex-col items-center justify-center border-2 rounded-md border-secondary">
                {/* Encabezado */}
                <div className="bg-primary rounded-md text-white px-4 py-6">
                    <h1 className="text-2xl  font-semibold">{userData?.role.toUpperCase()}</h1>
                </div>
                {/* Contenido del perfil */}
                <div className="p-6">
                    <div className="p-6 flex flex-col items-center sm:flex-row sm:items-center ">
                        <img
                            src={userData?.photo}
                            alt="Avatar"
                            className="w-20 h-20 rounded-md border-2 border-secondary mr-4 mb-4"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">{userData?.name} {userData?.lastName}</h2>
                            <p className="text-gray-600">Correo electrónico: {userData?.email}</p>
                        </div>
                    </div>
                    {/* Otras secciones del perfil */}
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-4">Información adicional</h3>
                        <div className="bg-gray-200 p-4 rounded-md">
                            <h2 className="text-xl font-semibold">Educación: {userData?.educational_level}</h2>
                            <div>
                <p>Intereses:</p>
                <ul>
                    {userData?.interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
            </div>
                            <p>Biografia: {userData?.biography}</p>
                            <p>Dirección: {userData?.address}</p>
                            <p>Teléfono: {userData?.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}