import styled from 'styled-components'

const ListModal = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3;
  visibility: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-content {
    width: 30%;
    height: auto;
    background-color: white;
    position: relative;

    .list-content {
      padding: 5% 3%;
      display: flex;
      flex-direction: column;

      .list-name {
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
      }

      textarea {
        height: 100px;
        margin: 2rem 0;
        padding: 1rem;
        font-size: 1rem;
      }
    }
  }

  .modal-nav {
    padding: 3%;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;

    .modal-done {
      background-color: green;
      color: white;
      padding: 0.5rem;
    }

    .modal-close {
      background-color: transparent;
      color: black;
      font-size: 1.3rem;
      border: none;
    }
  }
`

export default ListModal
