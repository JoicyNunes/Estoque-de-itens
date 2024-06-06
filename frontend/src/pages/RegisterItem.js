import styled from "styled-components";
import Form from "../components/form.js";
import Grid from "../components/Grid.js";
import Search from "../components/search.js";
import axios from "axios";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function Register() {
  const [registrations, setRegistrations] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const getRegistrations = async () => {
    try {
      const res = await axios.get("http://localhost:8800/");
      setRegistrations(res.data.sort((a, b) => (a.ID > b.ID ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  const handleFormSubmit = () => {
    getRegistrations();
  };

  useEffect(() => {
    getRegistrations();
  }, [setRegistrations]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredRegistrations = registrations.filter(
    (registration) =>
      registration.ID.toString().includes(searchQuery) ||
      registration.NAME.toLowerCase().includes(searchQuery.toLowerCase()) ||
      registration.DESCRIPTION.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <Container>
        <Title>Cadastro de itens</Title>
        <FormContainer>
          <Search onSearch={handleSearch} />
          <Form
            onEdit={onEdit}
            setOnEdit={setOnEdit}
            getRegistrations={getRegistrations}
            onFormSubmit={handleFormSubmit}
          />
          <Grid
            registrations={filteredRegistrations}
            setRegistrations={setRegistrations}
            setOnEdit={setOnEdit}
          />
        </FormContainer>
      </Container>
    </>
  );
}

export default Register;
