import React, { useEffect, useState } from 'react';
import API_URL from '../config/Config';

export function Profile() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/users/661d4a9c508efaae74404491`)
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    if (!userData) {
        return <div>Cargando...</div>;
    }
    console.log(userData);
    return (
        <div className="flex flex-col p-8 m-auto gap-6 items-center justify-center border border-blue-500">
            <div className="flex flex-col items-center justify-center border border-red-500">
                {/* Encabezado */}
                <div className="bg-blue-500 text-white px-4 py-6">
                    <h1 className="text-2xl font-semibold">Perfil {userData.role === 'student' ? 'Alumno' : 'Tutor'}</h1>
                </div>
                {/* Contenido del perfil */}
                <div className="p-6">
                    <div className="flex items-center ">
                        <img
                            src=""
                            alt="Avatar"
                            className="w-5 h-5 rounded border-2 border-blue-500"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">{userData.name} {userData.lastName}</h2>
                            <p className="text-gray-600">Correo electrónico: {userData.email}</p>
                        </div>
                    </div>
                    {/* Otras secciones del perfil */}
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-4">Información adicional</h3>
                        <div className="bg-gray-200 p-4 rounded-md">
                            <h2 className="text-xl font-semibold">{userData.name} {userData.lastName}</h2>
                            <p className="text-gray-600">Correo electrónico: {userData.email}</p>
                            <p>Fecha de nacimiento: {userData.birthdate}</p>
                            <p>Dirección: {userData.address}</p>
                            <p>Teléfono: {userData.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}