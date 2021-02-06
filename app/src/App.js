import { Wrapper } from "./components/Wrapper";
import { TitleComponent, Title } from "./components/Title";
import { Description, StyledDescription } from "./components/Description";

const App = () => {
  return (
    <Wrapper>
      <TitleComponent title="Title - styled element wrapper" />
      <Title>Title - imported and use styled element wrapper</Title>

      <StyledDescription>Description - wrapped by styles</StyledDescription>
      <Description>Description - normal</Description>
    </Wrapper>
  );
};

export default App;
