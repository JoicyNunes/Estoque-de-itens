import Global from "./styles/global";
import styled from "styled-components";
import Form from "./components/form.js";
import Grid from "./components/Grid.js";
import axios from "axios";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const FormContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    width: 100%; 
`

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
  const [registrations, setRegistrations] = useState([]);
  const [onEdit, setEdit] = useState(null);

  const getRegistrations = async () => {
    try{
      const res = await axios.get("http://localhost:8800");
      setRegistrations(res.data.sort((a,b) => (a.nome > b.nome ? 1 :-1 )));
    } catch (error) {
      toast.error("Erro ao buscar registros: " + error.message);
    }
  };

  useEffect(() => {
    getRegistrations();
  }, []);

  return (
    <>
      <Container>
        <Title>Cadastro de itens</Title>
        <FormContainer>
          <Form/>
          <Grid registrations={registrations} />
        </FormContainer>
      </Container>
      <Global/>
    </>
  );
}

export default App;
