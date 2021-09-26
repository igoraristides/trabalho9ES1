import styled, { keyframes, css } from "styled-components";

import { NavLink } from "react-router-dom";
import ripple from "../../../styles/animations/ripple";

import { theme } from "../../../styles/theme";

export const Label = styled.div`
  margin: auto;
  text-align: left;
  font-weight: 600;
  font-size: 16px;
  margin-left: 15px;
  display: inline-block;
  color: ${theme.colors.text};
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.title};
    `}
`;

export const IconSelected = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ active }) =>
    active &&
    css`
      background: #e46b1e;
      right: -10;
      border-radius: 100%;
    `}
`;

export const Button = styled.button`
  ${ripple};

  background-color: transparent;
  -webkit-appearance: none;
  text-align: left;

  transition: background-color 200ms linear, box-shadow 200ms linear,
    border-color 200ms linear;
  border: 0;
  padding: 0px 15px;

  svg {
    color: #8b94b8;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${theme.colors.background};
      color: ${({ theme }) => theme.colors.title};
      border-radius: 4px;

      svg {
        color: white;
      }
    `}
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;

      opacity: 60%;
    `}
`;
