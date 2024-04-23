import React, { useState } from 'react';
import MenuCardSectionDesarrollo from './MenuCardSection/MenuCardSectionDesarollo';
import MenuCardSectionDiseño from './MenuCardSection/MenuCardSectionDiseño';
import MenuCardSectionEdicionVideo from './MenuCardSection/MenuCardSectionEdicionVideo';
import MenuCardSectionDestacado from './MenuCardSection/MenuCardSectionDestacado';

const MenuTutorias = () => {
  const [activeSection, setActiveSection] = useState('destacado');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  let activeSectionComponent;
  switch (activeSection) {
    case 'destacado':
      activeSectionComponent = <MenuCardSectionDestacado />;
      break;
    case 'diseño':
      activeSectionComponent = <MenuCardSectionDiseño />;
      break;
    case 'ediciondevideo':
      activeSectionComponent = <MenuCardSectionEdicionVideo />;
      break;
    case 'desarollo':
      activeSectionComponent = <MenuCardSectionDesarrollo />;
      break;
    default:
      activeSectionComponent = null;
  }

  return (
    <div className=''>
        <div className="text-4xl text-center font-extrabold mb-10 sm:text-6xl ">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary ">
            Nuestros Cursos Mas Populares
          </span>
        </div>
      <p>

      </p>
      <nav className='flex w-[90%] m-auto mb-5 sm:justify-center'>
        <ul className="flex border-b justify-center">
          <li className="mr-1">
            <button
              className={`bg-white inline-block py-2 px-2 sm:px-4 text-blue-700 font-semibold text-lg sm:text-3xl ${
                activeSection === 'destacado' ? 'text-primary' : 'text-blue-500 hover:text-primary'
              }`}
              onClick={() => handleSectionChange('destacado')}
            >
              Destacados
            </button>
          </li>
          <li className="mr-1">
            <button
              className={`bg-white inline-block py-2 px-2 sm:px-4 text-blue-500 hover:text-blue-800 font-semibold text-lg sm:text-3xl ${
                activeSection === 'diseño' ? 'text-primary' : 'text-blue-500 hover:text-primary'
              }`}
              onClick={() => handleSectionChange('diseño')}
            >
              Diseño
            </button>
          </li>
          <li className="mr-1">
            <button
              className={`bg-white inline-block py-2 px-2 sm:px-4 text-blue-500 hover:text-blue-800 font-semibold text-lg sm:text-3xl ${
                activeSection === 'ediciondevideo' ? 'text-primary text-3xl' : 'text-blue-500 hover:text-primary'
              }`}
              onClick={() => handleSectionChange('ediciondevideo')}
            >
              Video
            </button>
          </li>
          <li className="mr-1">
            <button
              className={`bg-white inline-block py-2 px-2 sm:px-4 text-blue-500 hover:text-blue-800 font-semibold text-lg sm:text-3xl ${
                activeSection === 'desarollo' ? 'text-primary' : 'text-blue-500 hover:text-primary'
              }`}
              onClick={() => handleSectionChange('desarollo')}
            >
              Desarrollo
            </button>
          </li>
        </ul>
      </nav>
      {activeSectionComponent}
    </div>
  );
};

export default MenuTutorias;