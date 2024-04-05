import styled from 'styled-components'

const Sidebar = styled.aside`
  .sidebar-container {
    background-color: var(--scheme3-3);
    height: 100vh;
    position: sticky;
    left: 0;
    top: 0;

    visibility: hidden;
    width: 0;
    transition: all 0.3s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 2rem;

    .sidebar-link {
      text-transform: capitalize;
      font-size: 1.5rem;
      color: var(--scheme2-1);
      text-decoration-line: none;
    }
  }

  .show-sidebar {
    visibility: visible;
    width: 300px;
  }
  
  @media (max-width: 768px) {
    .sidebar-container {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 3;
    }
    .show-sidebar {
      width: 100%;
    }
  }
`

export default Sidebar
