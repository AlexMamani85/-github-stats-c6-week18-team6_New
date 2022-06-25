import { StyledForm, StyledInput } from "../../styles/login";


const Input = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}) => {
  return (
    <StyledForm>
      <div>
        {label && <label htmlFor={id || name}>{label}</label>}
        <StyledInput>
          <input
            id={id || name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </StyledInput>
      </div>
    </StyledForm>
  );
};

export default Input;
