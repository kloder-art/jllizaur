import styled from 'styled-components';

export const StyledGo2Top = styled.a`
  line-height: 50px;
  display: none;
  position: fixed;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.8);
  padding: 12px 8px 8px 8px;
  color: white;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 16px;
  z-index: 15;
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 1);
    color: white;
  }
`;
