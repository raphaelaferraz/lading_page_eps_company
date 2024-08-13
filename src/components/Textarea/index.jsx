import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Textarea({ id, label, name, value, onChange, placeholder }) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.container__label}>{label}</label>
      <textarea
        id={id}
        className={styles.container__textarea}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

Textarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};