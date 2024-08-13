import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function Input({ type, name, value, onChange, placeholder }) {
  return (
    <input
      className={styles.input}
      type={type}
      name={name} 
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired, 
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
