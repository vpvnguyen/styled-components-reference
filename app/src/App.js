import logo from "./logo.svg";
import "./App.css";

import { TitleComponent, Title } from "./components/Title";
import { Description, StyledDescription } from "./components/Description";

function App() {
  return (
    <div className="App">
      <TitleComponent title="Title - styled element wrapper" />
      <Title>Title - imported and use styled element wrapper</Title>

      <StyledDescription>Description - wrapped by styles</StyledDescription>
      <Description>Description - normal</Description>
    </div>
  );
}

export default App;
