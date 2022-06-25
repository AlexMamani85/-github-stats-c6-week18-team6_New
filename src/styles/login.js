import styled from '@emotion/styled';

export const GlobalFormat = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 32px;

  background: #F2F2F2;
`


export const StyledHeading = styled.h1`
  font-family: 'Source Code Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 2rem;

  `



export const StyledForm = styled.form`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  font-family: 'Source Code Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  

  color: #333333;
`
export const StyledInput = styled(StyledForm)`
width: 213px;
height: 28px;
border: none;

background: #FFFFFF;
box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
border-radius: 4px;
`


export const StyledButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 10px;


color: white;
background-color: #2D9CDB;
box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
border-radius: 4px;
`