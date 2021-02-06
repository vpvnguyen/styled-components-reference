import styled from "styled-components";

export const Description = ({ children }) => <p>{children}</p>;

export const StyledDescription = styled(Description)`
  font-size: 30px;
`;
