import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`
;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`
;

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`
;

const Label = styled.label``;

const Button = styled.button`
    padding: 10px
    cursor: pointer;
    border-radius: 5px
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`
;

const Form = ({ onEdit }) => {
    const ref = useRef();
    return (
        <FormContainer ref={ref}>
            <InputArea>
                <Label>ID</Label>
                <Input name="ID"/>
            </InputArea>

            <InputArea>
                <Label>Nome</Label>
                <Input name="Name"/>
            </InputArea>

            <InputArea>
                <Label>Descrição</Label>
                <Input name="Description"/>
            </InputArea>

            <InputArea>
                <Label>Quantidade em estoque</Label>
                <Input name="Amount"/>
            </InputArea>

            <InputArea>
                <Label>Preço</Label>
                <Input name="Sale_Price"/>
            </InputArea>

            <Button type="submit">Cadastrar</Button>
        </FormContainer>
    );
};

export default Form;