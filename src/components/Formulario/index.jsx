import { useState } from 'react';
import Input from '../Input';
import Dropdown from '../Dropdown';
import Textarea from '../Textarea';
import styles from './styles.module.scss';

export default function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [produtoSelecionado, setProdutoSelecionado] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const dadosFormulario = {
      nome,
      email,
      produtoSelecionado,
      mensagem
    };

    console.log(dadosFormulario);
    //   try {
    //     const response = await fetch('https://sua-api-aqui.com/enviar', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(dadosFormulario),
    //     });

    //     if (response.ok) {
    //       alert('Formulário enviado com sucesso!');
    //     } else {
    //       alert('Erro ao enviar o formulário. Tente novamente.');
    //     }
    //   } catch (error) {
    //     console.error('Erro ao enviar o formulário:', error);
    //     alert('Erro ao enviar o formulário. Tente novamente.');
    //   }
    // };
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <Input
        label={'Nome completo'}
        type={'text'}
        name={'nome'}
        value={nome}
        placeholder={'Digite seu nome completo'}
        onChange={setNome}
      />

      <Input
        label={'E-mail'}
        type={'text'}
        name={'email'}
        value={email}
        placeholder={'Digite seu e-mail completo'}
        onChange={setEmail}
      />

      <Dropdown
        id={'produto'}
        label={'Produto'}
        placeholder={'Selecione o produto que possui interesse'}
        options={[
          'Placa',
          'Cubos de isopor',
          'Contrapiso',
          'Letras personalizadas',
          'Outros'
        ]}
        value={produtoSelecionado}
        onChange={value => setProdutoSelecionado(value)}
      />

      <Textarea
        id={'mensagem'}
        label={'Mensagem'}
        name={'mensagem'}
        value={mensagem}
        placeholder={'Digite sua mensagem de orçamento'}
        onChange={value => setMensagem(value)}
      />

      <button type='submit' className={styles.formulario__botao}>
        Enviar orçamento
      </button>
    </form>
  );
}
