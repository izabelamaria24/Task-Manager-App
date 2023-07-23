import styled from 'styled-components'

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  flex-direction: row;
  height: var(--height);
  background-color: white;

  .profile-btn-section {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .profile-btn-section-toggle {
    width: 100%;
    background-color: black;
    height: 0;
    position: absolute;
    top: 110%;
    transition: all 0.3s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 1rem;

    padding: 0 1rem 0 1rem;

    button {
      display: none;
      transition: all 0.3s ease-in-out;
      color: black;
    }
  }

  .on {
    height: 100px;

    button {
      display: block;
    }
  }

  .nav-logo {
    width: auto;
    height: 100%;
  }

  .profile-btn {
    background-color: white;
  }

  .profile-img {
    width: 30%;
    height: 30%;
  }

  @media (max-width: 992px) {
    .nav-logo {
      display: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  .sidebar-btn {
    width: 50px;
    height: 50px;
    background-color: white;
  }
`
export default Navbar
