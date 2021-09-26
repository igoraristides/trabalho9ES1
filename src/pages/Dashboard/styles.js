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

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitlePage = styled.h1`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 40px;
`;

export const TitleCard = styled.h1`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 20px;
`;
export const Title = styled.h1`
  ${({ size }) => (size ? `font-size: ${size}px;` : "font-size: 15px;")}
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 5px;
`;
export const Text = styled.h1`
  ${({ size }) => (size ? `font-size: ${size}px;` : "font-size: 13px;")}
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
`;

export const Price = styled.p`
  ${({ size }) => (size ? `font-size: ${size}px;` : "font-size: 30px;")}
  color: ${({ theme }) => theme.colors.success};
  margin-bottom: 5px;
`;

export const Card = styled.div`
  border-radius: 20px;
  padding: 20px;
  background: #fff;
`;
export const Buttons = styled.div`
  padding: 8px 0 8px 0;
`;
