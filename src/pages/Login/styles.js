import styled from "styled-components";

import devices from "../../styles/configs/devices";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${devices.laptop} {
    padding: 20px 100px 0px 100px;
  }
  @media (max-width: 599px) {
    a {
      margin-bottom: 15px;
    }
  }
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

export const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  max-width: 30%;
`;
