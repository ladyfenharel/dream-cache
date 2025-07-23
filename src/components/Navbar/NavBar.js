import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="w-full bg-background px-6 py-4 shadow-sm shadow-gray-700">
      <div className="flex justify-between items-center w-full">

        <div>
          <Link
            to="/"
            className="font-bold text-2xl text-dreamPurple tracking-wide hover:text-accent transition-colors"
          >
            DreamVerse
          </Link>
        </div>


        <ul className="flex space-x-6 items-center">
          {['Home', 'Explore', 'Social', 'Profile'].map((item) => (
            <li key={item}>
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="px-3 py-2 rounded-md text-gray-100 text-lg hover:shadow-glow-lg hover:text-dreamPurple transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default NavBar;


