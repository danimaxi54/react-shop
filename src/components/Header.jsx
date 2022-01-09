const Header = () => {
  return (
    <nav className='green darken-1'>
      <div className='nav-wrapper'>
        <a className='brand-logo' href='!#'>
          React Shop
        </a>
        <ul className='right hide-on-med-and-down' id='nav-mobile'>
          <li>
            <a href='!#'>Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
