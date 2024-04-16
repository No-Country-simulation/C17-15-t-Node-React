
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/services', label: 'services' },
    { to: '/courses', label: 'Courses' },
  ];

  return (

    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink to={link.to}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>

  );
};
