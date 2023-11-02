
function Input(props) {
    
    const { label, value, handleChange } = props;

    return(
        <>
            <label htmlFor={label}>{label}</label>
            <input type="number" name={label} value={value} onChange={handleChange}/>
        </>
    )
}    

export default Input;