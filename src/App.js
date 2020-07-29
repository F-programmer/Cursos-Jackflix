import React from "react";
import Menu from "./components/Menu";
import BannerMain from "./components/BannerMain";
import Carroussel from "./components/Carousel";

import dadosIniciais from "./data/dados_iniciais.json"

function App() {
	return (
		<div style={{background: "#141414"}}>
			<Menu />
			<BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={'O que'}
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
		</div>
	);
}

export default App;
