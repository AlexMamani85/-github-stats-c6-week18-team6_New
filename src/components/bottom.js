import styled from '@emotion/styled';
import { FaSearch, FaUser, FaStar} from 'react-icons/fa';


const BottomDiv = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  height: 66px;
  width:411px;
  border: 2px blue solid;

`;

const Bottom = () => {
    return (
        <BottomDiv>
            <FaSearch color={'red'} /> 
            <FaUser />
            <FaStar />
        </BottomDiv>  
    );
  };


export default Bottom;
