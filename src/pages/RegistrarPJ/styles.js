import styled from "styled-components";

import devices from "../../styles/configs/devices";

export const Container = styled.div``;

export const Content = styled.div`
  margin-top: 20px;
  @media ${devices.laptop} {
    margin-top: 0px;
  }
`;

export const Title = styled.h1`
  padding: 0 10px;
  font-size: 1.5rem;
  color: #4d4d4e;
`;
export const Links = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${({ content }) =>
    content ? `justify-content: ${content};` : "justify-content: center;"}
  ${({ top }) => (top ? `margin-top: ${top}px;` : "margin-top: 0px;")}
  ${({ bottom }) =>
    bottom ? `margin-bottom: ${bottom}px;` : "margin-bottom: 0px;"}
`;
export const Text = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 3px;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;

  @media ${devices.laptop} {
    display: flex;
    margin-top: 20px;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
  }
`;
export const ButtonContent = styled.div`
  @media ${devices.laptop} {
    ${({ width }) => `width: ${width}%`};
  }
`;

export const Section = styled.div`
  ${(props) =>
    props.active === "active" ? `display: flex;` : `display: none;`};
`;
