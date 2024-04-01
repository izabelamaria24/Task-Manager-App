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
      color: var(--dark2);
      text-decoration-line: none;
    }
  }

  .show-sidebar {
    visibility: visible;
    width: 300px;
  }
`

export default Sidebar
