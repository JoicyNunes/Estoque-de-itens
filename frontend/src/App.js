import Global from "./styles/global";
import styled from "styled-components";
import { toast, ToastContainer} from "react-toastify";
import Form from "./components/form.js"
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
;

const Title = styled.h2``;

function App() {
  return (
    <>
      <Container>
        <Title>Cadastro de itens</Title>
      </Container>
      
      <Global/>
    </>
  );
}

export default App;
