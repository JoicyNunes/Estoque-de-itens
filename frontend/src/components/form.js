import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import { IoMdSearch } from "react-icons/io";

const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    width: 100%;
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

const TextInput = styled.textarea`
    border: 1px solid #000000;
    border-radius: 8px;
    text-align: left;
    width: 200px;
    height: 42px;
    background-color: transparent;
    padding-left: 25px;
    font-size: 16px;
    padding-top: 10px;
`;

const Label = styled.label`
    margin-bottom: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;
const InputSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`;

const SearchIconContainer = styled.div`
    padding: 10px;
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
    color: #F5F5F7;
    width: 100px;
    height: 42px;
    background-color: #000000;
    margin: 25px 0;
    cursor: pointer;
`;

const ButtonSearch = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: transparent;
    font-size: 20px;
`

const SearchInput = styled.input`
    height: 70px;
    border: 1px solid #000000;
    border-radius: 8px;
    text-align: left;
    width: 300px;
    height: 42px;
    background-color: transparent;
    align-items: center;
    padding-left: 25px;
    font-size: 16px;
    line-height: 10px;
    display: block;
`

const Form = ({ onEdit, data }) => {
    const [formData, setFormData] = useState({
        ID: "",
        NAME: "",
        DESCRIPTION: "",
        AMOUNT: "",
        SALE_PRICE: ""
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (onEdit) {
            setFormData({
                ID: onEdit.ID,
                NAME: onEdit.NAME,
                DESCRIPTION: onEdit.DESCRIPTION,
                AMOUNT: onEdit.AMOUNT,
                SALE_PRICE: onEdit.SALE_PRICE
            });
        }
    }, [onEdit]);

    useEffect(() => {
        if (searchTerm) {
            const filtered = data.filter(item => 
                item.NAME.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.ID.toString().includes(searchTerm) ||
                item.DESCRIPTION.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [searchTerm, data]);

    const handleChange = (e) => {
        const { NAME, value } = e.target;
        setFormData({
            ...formData,
            [NAME]: value
        });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { ID, NAME, DESCRIPTION, AMOUNT, SALE_PRICE } = formData;

    if (!ID || !NAME || !DESCRIPTION || !AMOUNT || !SALE_PRICE) {
        return toast.warn("Por favor preencha todos os campos");
    }
        if (onEdit) {
            await axios.put("http://localhost:8800/" + onEdit.ID, {
                ID,
                NAME,
                DESCRIPTION,
                AMOUNT,
                SALE_PRICE
            })
            .then(({ data }) =>toast.success(data))
            .catch(({ data }) => toast.error(data));
        } else {
            await axios.post("http://localhost:8800/", {
                ID,
                NAME,
                DESCRIPTION,
                AMOUNT,
                SALE_PRICE
            })
            .then(({ data }) =>toast.success(data))
            .catch(({ data }) => toast.error(data));
    
    }
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <InputSearch>
                <SearchInput
                    type="search"
                    placeholder="Pesquisar item"
                    
                />
                <SearchIconContainer>
                <ButtonSearch type="submit"><IoMdSearch /></ButtonSearch>
                </SearchIconContainer>
            </InputSearch>
            <InputArea>
                <Label>ID</Label>
                <Input 
                    name="ID"
                    placeholder="ID"
                    value={formData.ID}
                    onChange={handleChange}
                />
            </InputArea>

            <InputArea>
                <Label>Nome</Label>
                <Input 
                    name="NAME"
                    placeholder="Nome do item"
                    value={formData.NAME}
                    onChange={handleChange}
                />
            </InputArea>

            <InputArea>
                <Label>Descrição</Label>
                <TextInput 
                    name="DESCRIPTION"
                    placeholder="Descrição do item"
                    value={formData.DESCRIPTION}
                    onChange={handleChange}
                />
            </InputArea>

            <InputArea>
                <Label>Quantidade em estoque</Label>
                <Input 
                    name="AMOUNT"
                    placeholder="Quantidade do item"
                    value={formData.AMOUNT}
                    onChange={handleChange}
                />
            </InputArea>

            <InputArea>
                <Label>Preço</Label>
                <Input 
                    name="SALE_PRICE"
                    placeholder="Preço de venda"
                    value={formData.SALE_PRICE}
                    onChange={handleChange}
                />
            </InputArea>

            <Button type="submit">Cadastrar</Button>
        </FormContainer>
    );
};

export default Form;
