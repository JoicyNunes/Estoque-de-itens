import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';

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

const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
    border-radius: 5px;
    
`;

const Input = styled.input`
    height: 70px;
    border: 1px solid #000000;
    border-radius: 8px;
    text-align: left;
    width: 200px;
    height: 42px;
    background-color: transparent;
    align-items: center;
    padding-left: 25px;
    font-size: 16px;
    line-height: 10px;
    display: block;
`;

const Button = styled.button`
    border: 1px solid #000000;
    border-radius: 8px;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #f5f5f7;
    width: 100px;
    height: 42px;
    background-color: #000000;
    margin: 25px 0;
    cursor: pointer;
`;

const Select = styled.select`
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 10px;
`;

const Option = styled.option``;

const Li = styled.li``;

function OrderItem() {
  const [orders, setOrders] = useState([]);
  const [orderData, setOrderData] = useState({
    ID: '',
    NAME: '',
    ADDRESS: '',
    PHONE: '',
    EMAIL: '',
    ITEMS: [{ REGISTER_ID: '', AMOUNT: '' }],
    STATUS: 'Pendente',
  });
  const [searchQuery, setSearchQuery] = useState('');

  const getOrders = async () => {
    try {
      const res = await axios.get("http://localhost:8800/orders");
      setOrders(res.data.sort((a, b) => (a.ID > b.ID ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const items = [...orderData.ITEMS];
    items[index][name] = value;
    setOrderData({ ...orderData, ITEMS: items });
  };

  const addItem = () => {
    setOrderData({
      ...orderData,
      ITEMS: [...orderData.ITEMS, { REGISTER_ID: '', AMOUNT: '' }],
    });
  };

  const removeItem = (index) => {
    const items = [...orderData.ITEMS];
    items.splice(index, 1);
    setOrderData({ ...orderData, ITEMS: items });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/orders", orderData);
      toast.success("Order created successfully");
      getOrders();
      setOrderData({
        ID: '',
        NAME: '',
        ADDRESS: '',
        PHONE: '',
        EMAIL: '',
        ITEMS: [{ REGISTER_ID: '', AMOUNT: '' }],
        STATUS: 'Pendente',
      });
    } catch (error) {
      toast.error(error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.ID.toString().includes(searchQuery) ||
      order.NAME.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <Container>
      <Title>Gerenciamento de Pedidos</Title>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          name="NAME"
          placeholder="Nome do Cliente"
          value={orderData.NAME}
          onChange={handleChange}
        />
        <Input
          name="ADDRESS"
          placeholder="Endereço"
          value={orderData.ADDRESS}
          onChange={handleChange}
        />
        <Input
          name="PHONE"
          placeholder="Telefone"
          value={orderData.PHONE}
          onChange={handleChange}
        />
        <Input
          name="EMAIL"
          placeholder="E-mail"
          value={orderData.EMAIL}
          onChange={handleChange}
        />
        {orderData.ITEMS.map((item, index) => (
          <div key={index}>
            <Input
              name="REGISTER_ID"
              placeholder="Código do Item"
              value={item.REGISTER_ID}
              onChange={(e) => handleItemChange(index, e)}
            />
            <Input
              name="AMOUNT"
              placeholder="Quantidade"
              value={item.AMOUNT}
              onChange={(e) => handleItemChange(index, e)}
            />
            <Button type="button" onClick={() => removeItem(index)}>Remover Item</Button>
          </div>
        ))}
        <Button type="button" onClick={addItem}>Adicionar Item</Button>
        <Select name="STATUS" value={orderData.STATUS} onChange={handleChange}>
          <Option value="Pendente">Pendente</Option>
          <Option value="Processando">Processando</Option>
          <Option value="Enviado">Enviado</Option>
          <Option value="Entregue">Entregue</Option>
          <Option value="Cancelado">Cancelado</Option>
        </Select>
        <Button type="submit">Criar Pedido</Button>
      </FormContainer>
      <FormContainer>
        <Input
          type="search"
          placeholder="Buscar Pedido"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <ul>
          {filteredOrders.map((order) => (
            <Li key={order.ID}>
              {order.NAME} - {order.STATUS}
            </Li>
          ))}
        </ul>
      </FormContainer>
    </Container>
  );
}

export default OrderItem;
