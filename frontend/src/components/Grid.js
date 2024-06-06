import React from "react";
import axios from "axios";
import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";

const Table = styled.table`
    justify-content: center;
    align-item: center;
    backgroud-color: #0000;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc
    border-radius: 5px
    max-width: 800px
    word-break: break-all;
    border-collapse: collapse; 
    border: 2px solid #000000;
`
;
export const Thead = styled.thead`
    background-color: #dddddd;
`
;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
    &:nth-child(even) {
        background-color: #dddddd;
`
;

export const Th = styled.th`
    text-align: center;
    border-bottom: 1px solid #ddd;
    justify-content: center;
    align-items: center;
    
`;

export const Td = styled.td`
    padding-top: 10px;
    border: 1px solid black;
    text-align: center;
    width: ${(props) => (props.width ? props.width : "auto")};
    border-bottom: 1px solid #ddd;
`;

export const TdIcons = styled.td`
    padding-top: 10px;
    border: 1px solid black;
    text-align: center;
    width: ${(props) => (props.width ? props.width : "auto")};
    border-bottom: 1px solid #ddd;
    font-size: 20px;
    cursor: pointer
`;

const Grid = ({ registrations, setRegistrations, setOnEdit }) => {
    console.log(registrations);

    const handleEdit = (item) => {
        setOnEdit(item);
    }

    const handleDelete = async (ID) => {
        await axios
        .delete("http://localhost:8800/" + ID)
        .then(({ data }) => {
            const newArray = registrations.filter((register) => register.ID !== ID);
    
            setRegistrations(newArray);
            toast.success(data);
        })
        .catch(({ data }) => toast.error(data));
        setOnEdit(null);
            
    };

    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>ID</Th>
                    <Th>Nome</Th>
                    <Th>Descrição</Th>
                    <Th>Quantidade em estoque</Th>
                    <Th>Preço</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>

            <Tbody>
            {registrations && registrations.length > 0 ? (
                    registrations.map((item, i) => (
                        <Tr key={i}>
                            <Td width="10%">{item.ID}</Td>
                            <Td width="20%">{item.NAME}</Td>
                            <Td width="20%">{item.DESCRIPTION}</Td>
                            <Td width="30%">{item.AMOUNT}</Td>
                            <Td width="10%">{item.SALE_PRICE}</Td>
                            <TdIcons $alignCenter={true} width="5%">
                                <CiEdit onClick={() => handleEdit(item)} />
                            </TdIcons>
                            <TdIcons $alignCenter={true} width="5%">
                                <MdDeleteOutline onClick={() => handleDelete(item.ID)} />
                            </TdIcons>
                        </Tr>
                    ))
                ) : (
                    <Tr>
                        <Td colSpan="7" style={{ textAlign: "center" }}></Td>
                    </Tr>
                )}
                        
            </Tbody>
        </Table>
    );
};

export default Grid;