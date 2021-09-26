import styled, { css } from "styled-components";

export const Container = styled.div`
  min-height: 100%;

  display: flex;
  flex: 1;

  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitlePage = styled.h1`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 40px;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;
export const ButtonContent = styled.div`
  ${({ width }) => `width: ${width}%`};
`;

export const Content = styled.div``;
export const Card = styled.div`
  border-radius: 20px;
  padding: 15px;
  background: #fff;
`;

export const Circle = styled.div`
  display: flex;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.primary};
  content: 1;
  width: 40px;
  height: 40px;
  justify-content: center;
  p {
    display: flex;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    align-items: center;
    color: #ffffff;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.title};
  margin-left: 15px;
`;

export const TitleCard = styled.h1`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 40px;
`;
