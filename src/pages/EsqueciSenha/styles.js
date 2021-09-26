import styled from "styled-components";

import devices from "../../styles/configs/devices";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${devices.laptop} {
    padding: 80px;
  }
  @media (max-width: 599px) {
    a {
      margin-bottom: 15px;
    }
  }
`;

export const Buttons = styled.div`
  margin-top: 20px;
  width: 100%;
`;
export const Links = styled.div`
  margin-top: 20px;
`;
