import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MenuCardSectionDesarrollo from './MenuCardSectionDesarollo';
import MenuCardSectionDiseño from './MenuCardSectionDiseño';
import MenuCardSectionEdicionVideo from './MenuCardSectionEdicionVideo';
import MenuCardSectionDestacado from './MenuCardSectionDestacado';

const MenuTutorias = () => {

  return (
    <Router>
      <div>

        <nav>
          <ul class="flex border-b">
            <li class="mr-1">
              <li class="bg-white inline-block py-2 px-4 text-blue-700 font-semibold"><Link exact to="/">Destacado</Link></li>
            </li>
            <li class="mr-1">
              <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/diseño">Diseño</Link>
            </li>
            <li class="mr-1">
              <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/ediciondevideo">Edicion de video</Link>
            </li>
            <li class="mr-1">
              <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/desarollo">Desarrollo</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<MenuCardSectionDestacado />} />
          <Route path="/diseño" element={<MenuCardSectionDiseño />} />
          <Route path="/ediciondevideo" element={<MenuCardSectionEdicionVideo />} />
          <Route path="/desarollo" element={<MenuCardSectionDesarrollo />} />
        </Routes>

      </div>

    </Router>
  );
};

export default MenuTutorias;