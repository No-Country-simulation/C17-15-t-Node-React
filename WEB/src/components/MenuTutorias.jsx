import React, { useState } from 'react';
import MenuCardSectionDesarrollo from './MenuCardSectionDesarollo';
import MenuCardSectionDiseño from './MenuCardSectionDiseño';
import MenuCardSectionEdicionVideo from './MenuCardSectionEdicionVideo';
import MenuCardSectionDestacado from './MenuCardSectionDestacado';

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
    <div>
      <nav>
        <ul className="flex border-b">
          <li className="mr-1">
            <button
              className={`bg-white inline-block py-2 px-4 text-blue-700 font-semibold ${
                activeSection === 'destacado' ? 'text-blue-700' : 'text-blue-500 hover:text-blue-800'
              }`}
              onClick={() => handleSectionChange('destacado')}
            >
              Destacado
            </button>
          </li>
          <li className="mr-1">
            <button
              className={`bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold ${
                activeSection === 'diseño' ? 'text-blue-700' : 'text-blue-500 hover:text-blue-800'
              }`}
              onClick={() => handleSectionChange('diseño')}
            >
              Diseño
            </button>
          </li>
          <li className="mr-1">
            <button
              className={`bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold ${
                activeSection === 'ediciondevideo' ? 'text-blue-700' : 'text-blue-500 hover:text-blue-800'
              }`}
              onClick={() => handleSectionChange('ediciondevideo')}
            >
              Video
            </button>
          </li>
          <li className="mr-1">
            <button
              className={`bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold ${
                activeSection === 'desarollo' ? 'text-blue-700' : 'text-blue-500 hover:text-blue-800'
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