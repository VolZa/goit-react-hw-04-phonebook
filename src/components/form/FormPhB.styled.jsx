import styled from 'styled-components';
export const FormPhBS = styled.form`
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: left;
    width: 300px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    margin-bottom: 20px;
    color:  ${p => p.theme.colors.primary};
    font-size: 20px;
    font-weight: 700;
`;

export const AddContact = styled.button`
padding: 8px;    
&:hover {        
        background-color: ${p => p.theme.colors.accent};
        color: ${p => p.theme.colors.white};
        }
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;
`
