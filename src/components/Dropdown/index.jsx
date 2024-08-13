import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Dropdown({ id, label, options, value, onChange }) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.container__label}>{label}</label>
      <select
        id={id}
        className={styles.container__select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};