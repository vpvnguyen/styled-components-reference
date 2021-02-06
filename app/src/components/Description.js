import styled from "styled-components";

// className needs to be passed
export const Description = ({ className, children }) => (
  <p className={className}>{children}</p>
);

export const StyledDescription = styled(Description)`
  color: palevioletred;
  font-weight: bold;
`;
