import React from "react";
import axios from "axios";
import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";

const Table = styled.table`
    width: 100%;
    backgroud-color: #0000;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc
    border-radius: 5px
    max-width: 800px
    margin: 20px auto;
    word-break: break-all;
`
export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: insert;
    padding-bottom: 5px;
    max-width: 500px
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: center
    width: ${(props) => (props.width ? props.width : "auto")};
`;

const Grid = ({ registrations }) => {
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
                            <Td width="30%">{item.ÃMOUNT}</Td>
                            <Td width="10%">{item.SALE_PRICE}</Td>
                            <Td alignCenter width="5%">
                                <CiEdit />
                            </Td>
                            <Td alignCenter width="5%">
                                <MdDeleteOutline />
                            </Td>
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