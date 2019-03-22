import styled from 'styled-components';
import { Link } from "react-router-dom";

export default styled.ul`
  margin: auto;
  display: inline-flex;
`

export const MuiLink = styled(Link)`
  color: blue;
  cursor: pointer;
  margin-left: 25px;
  margin: auto;
  text-decoration: none;
  text-transform: lowercase;
`;