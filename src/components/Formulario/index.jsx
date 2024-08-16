import { useState } from 'react';
import Input from '../Input';
import Dropdown from '../Dropdown';
import Textarea from '../Textarea';
import styles from './styles.module.scss';
import emailjs from '@emailjs/browser';

export default function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [produto, setProduto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [envio, setEnvio] = useState(false);

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    produto: '',
    mensagem: ''
  });

  const handleSelectChange = e => {
    setProduto(e.target.value);

    setFormData(prevFormData => ({
      ...prevFormData,
      produto: e.target.value
    }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));

    if (name === 'nome') setNome(value);
    if (name === 'email') setEmail(value);
    if (name === 'telefone') setTelefone(value);
    if (name === 'mensagem') setMensagem(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setEnvio(true);

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      resultado => {
        console.log(resultado.text);
        alert('Obrigada pelo envio!');
        setEnvio(false);
      },
      error => {
        console.log(error.text);
        alert(
          'Houve um erro ao enviar o formulário. Por favor, tente novamente.'
        );
        setEnvio(false);
      }
    );
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <Input
        label={'Nome completo'}
        type={'text'}
        name={'nome'}
        value={nome}
        placeholder={'Digite seu nome completo'}
        onChange={handleChange}
      />

      <Input
        label={'E-mail'}
        type={'email'}
        name={'email'}
        value={email}
        placeholder={'Digite seu e-mail completo. Exemplo: seu@email.com'}
        onChange={handleChange}
      />

      <Input
        label={'Telefone'}
        type={'tel'}
        name={'telefone'}
        value={telefone}
        placeholder={'Digite seu telefone. Exemplo: 11999999999'}
        onChange={handleChange}
      />

      <Dropdown
        id={'produto'}
        name={'produto'}
        label={'Produto'}
        placeholder={'Selecione o produto que possui interesse'}
        options={[
          'Placa',
          'Cubos de isopor',
          'Contrapiso',
          'Letras personalizadas',
          'Outros'
        ]}
        value={produto}
        onChange={handleSelectChange}
      />

      <Textarea
        id={'mensagem'}
        label={'Mensagem'}
        name={'mensagem'}
        value={mensagem}
        placeholder={'Digite sua mensagem de orçamento'}
        onChange={handleChange}
      />

      <button
        type='submit'
        className={styles.formulario__botao}
        disabled={envio}
      >
        Enviar orçamento
      </button>
    </form>
  );
}
