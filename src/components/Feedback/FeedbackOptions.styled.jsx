import styled from '@emotion/styled';

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  border: 1px solid grey;
  background-color: white;
  color: black;
  text-transform: uppercase;
  font-size: 18px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.23), 0px 1px 1px rgba(0, 0, 0, 0.24),
    0px 2px 1px rgba(0, 0, 0, 0.5);
  &:hover {
    background: #2196f3;
    color:#FFF;
  }
`;