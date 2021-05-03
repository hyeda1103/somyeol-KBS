import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ prev }) => (prev ? "rgba(0, 0, 0, 0)" : "#fff")};
  border: ${({ prev }) => (prev ? "1px solid #AAAAAA" : "1px solid #fff")};
  cursor: pointer;
  text-align: center;
  letter-spacing: 4%;
  text-decoration: none;
  display: flex;
  font-weight: 800;
  line-height: 22.7px;
  justify-content: center;
  align-items: center;
  color: ${({ prev }) => (prev ? "#AAAAAA" : "#000")};
  padding: ${({ big }) => (big ? "13px 69px" : "8.5px 20px")};
  font-size: 20px;
  transition: 1s ease 1;
  margin: 7.5px 25px;
  border-radius: 5px;

  &:hover {
    background: ${({ prev }) => (prev ? "#AAAAAA" : "#fff")};
    color: #000;
    transition: 1s ease 1;
  }

  @media screen and (max-width: 355px) {
    padding: 13px 40px;
  }
`;
