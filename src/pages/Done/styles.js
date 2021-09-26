import styled from "styled-components";

export const Section = styled.div`
  display: flex;
`;

export const Complete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const CompleteContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 200px 90px 0 90px;

  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #a6b0c6;
    margin-top: 10px;
  }
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #4d4d4e;
    margin-top: 20px;
  }
`;
export const CompleteImage = styled.img`
  max-width: 220px;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Links = styled.div`
  display: flex;

  width: 100%;

  ${({ content }) =>
    content ? `justify-content: ${content};` : "justify-content: center;"}
  ${({ top }) => (top ? `margin-top: ${top}px;` : "margin-top: 0px;")}
  ${({ bottom }) =>
    bottom ? `margin-bottom: ${bottom}px;` : "margin-bottom: 0px;"}

    flex-direction: row;
`;
export const Text = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.subtitle};
  margin-right: 3px;
  justify-content: center;
`;
