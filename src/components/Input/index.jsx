import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function Input({ id, label, type, name, value, onChange, placeholder }) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.container__label}>{label}</label>
      <input
        id={id}
        className={styles.container__input}
        type={type}
        name={name} 
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired, 
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
