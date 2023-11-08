import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

type CheckContainerProps = {
  done: boolean;
};

export const CheckContainer = styled.div<CheckContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-left: 20px;

  input {
    height: 20px;
    width: 20px;
  }

  label {
    display: flex;
    align-items: center;
    text-decoration: ${({ done }) => done ? 'line-through;' : 'initial'};
  }
`;

export const BtnEdit = styled.button`
  margin-right: 20px;
  height: 20px;
  width: 60px;
  border: none;
  background-color: #FFF;
  cursor: pointer;
  font-size: 20px;
`;
