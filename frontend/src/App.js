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
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <Global/>
    </>
  );
}

export default App;
