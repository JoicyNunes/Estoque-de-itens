import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    width: 100%; 
`
;

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
`
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
`

const Label = styled.label`
    margin-bottom: 5px;
`

const InputArea = styled.div`
    display: flex;
    flex-direction: column
`
;

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
`
;

const Form = ({ onEdit }) => {
    
    const ref = useRef();
    return (
        <FormContainer ref={ref}>
            <InputArea>
                <Label>ID</Label>
                <Input 
                    name="ID"
                    placeholder="ID"
                />
            </InputArea>

            <InputArea>
                <Label>Nome</Label>
                <Input 
                    name="Name"
                    placeholder="Nome do item"
                />
            </InputArea>

            <InputArea>
                <Label>Descrição</Label>
                <TextInput 
                    name="Description"
                    placeholder="Descrição do item"
                />
            </InputArea>

            <InputArea>
                <Label>Quantidade em estoque</Label>
                <Input 
                    name="Amount" 
                    placeholder="Quantidade do item"
                />
            </InputArea>

            <InputArea>
                <Label>Preço</Label>
                <Input 
                    name="Sale_Price"
                    placeholder="Preço de venda"
                />
            </InputArea>

            <Button type="submit">Cadastrar</Button>
        </FormContainer>
    );
};

export default Form;