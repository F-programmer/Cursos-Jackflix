import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
  return(
    <>
      <PageDefault to='/' title='Voltar a Home'>
        <h1>Cadastro de Vídeo</h1>
        <Link to='/cadastro/categoria'>Cadastrar Categoria</Link>
      </PageDefault>
    </>
  );
}

export default CadastroVideo;