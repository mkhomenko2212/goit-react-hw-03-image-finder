import styled from "@emotion/styled";


export const SearchContainer = styled.div`width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    /* position: fixed; */
    background-color: rgba(165, 162, 163, 0.814);`

export const SearchForm = styled.form` width: 100%;
    display: flex;
    justify-content: center;`

export const SearchInput = styled.input`border-radius: 4px;
    border: none;
    outline: none;
    font: inherit; `
   

export const SearchButton = styled.button`border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 15px;
    background-color: rgba(231, 156, 234, 0.89);
    
    &:hover, 
    &:focus {background-color: rgba(189, 10, 195, 0.89);}`

