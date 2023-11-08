import styled from "styled-components";

export const EditContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #006994;
  display: flex;
  justify-content: center;

  div {
    background-color: #FFF;
    max-height: 150px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    border-radius: 20px;
    margin-top: 30px;
  }
`;

export const FormEdit = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        margin-bottom: 20px;
    }

    div {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    button {
        height: 30px;
        width: 60px;
    }
`