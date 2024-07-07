// import React, { useState } from "react";
// import styled from "styled-components";
// import { IoMdSearch } from "react-icons/io";

// const FormContainer = styled.form`
//     display: flex;
//     flex-wrap: wrap;
//     gap: 10px;
//     padding: 20px;
//     border-radius: 5px;
//     width: 100%;
// `;

// const InputSearch = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
// `;

// const SearchIconContainer = styled.div`
//     padding: 10px;
// `;

// const ButtonSearch = styled.button`
//     cursor: pointer;
//     background-color: transparent;
//     border: transparent;
//     font-size: 20px;
// `;

// const SearchInput = styled.input`
//     height: 70px;
//     border: 1px solid #000000;
//     border-radius: 8px;
//     text-align: left;
//     width: 300px;
//     height: 42px;
//     background-color: transparent;
//     align-items: center;
//     padding-left: 25px;
//     font-size: 16px;
//     line-height: 10px;
//     display: block;
// `;

// const Search = ({ onSearch }) => {
//     const [searchQuery, setSearchQuery] = useState("");

//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     const handleSearchSubmit = (e) => {
//         e.preventDefault();
//         onSearch(searchQuery);
//     };

//     return (
//         <FormContainer onSubmit={handleSearchSubmit}>
//             <InputSearch>
//                 <SearchInput
//                     type="search"
//                     placeholder="Pesquisar item"
//                     value={searchQuery}
//                     onChange={handleSearchChange}
//                 />
//                 <SearchIconContainer>
//                     <ButtonSearch type="submit">
//                         <IoMdSearch />
//                     </ButtonSearch>
//                 </SearchIconContainer>
//             </InputSearch>
//         </FormContainer>
//     );
// };

// export default Search;
