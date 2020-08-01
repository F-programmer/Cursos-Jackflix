import React from 'react';
import BannerMain from '../../components/BannerMain';
import Carroussel from '../../components/Carousel';

import dadosIniciais from '../../data/dados_iniciais.json'
import PageDefault from '../../components/PageDefault';

function Home() {
	return (
		<div style={{ background: '#141414' }}>
			<PageDefault to='/cadastro/video' title='Novo Vídeo'>
				<BannerMain
					videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
					url={dadosIniciais.categorias[0].videos[0].url}
					videoDescription={''}
					idd='banner'
				></BannerMain>
				<Carroussel
					ignoreFirstVideo
					category={dadosIniciais.categorias[0]}
				></Carroussel>
				<Carroussel
					category={dadosIniciais.categorias[1]}
				></Carroussel>
				<Carroussel
					category={dadosIniciais.categorias[2]}
				></Carroussel>
				<Carroussel
					category={dadosIniciais.categorias[3]}
				></Carroussel>
				<Carroussel
					category={dadosIniciais.categorias[4]}
				></Carroussel>
				<Carroussel
					category={dadosIniciais.categorias[5]}
				></Carroussel>
				<label onClick={Alertar}>Teste</label>
			</PageDefault>
		</div>
	);
}

export default Home;

function Alertar() {
  // e.preventDefault();
  alert('ola');
}