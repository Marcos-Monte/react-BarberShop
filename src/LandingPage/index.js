import React, { useState } from 'react';

import './style.css';

export default function LandingPage() {

    const light = 'light';
    const dark = 'dark';
    const lua = 'assets/moon.png';
    const sol = 'assets/sun.png';

    const [estilo, setEstilo] = useState(false);

    function trocarEstilo() {
        setEstilo(!estilo);

    }

    return (
        <div className={`body ${estilo ? dark : light}`}>
            <header>
                <div className="largura-pagina topo">
                    <img className="logo" src="assets\barbearia-logo.png" alt="Logotipo da BarberShop" />
                    <button onClick={trocarEstilo}>
                        <img className="imagem-botao" src={estilo ? sol : lua} alt="Simbolo de Sol / Lua para auxiliar a mudança entre Light e Darg" />
                        <span>{estilo ? light : dark}</span>
                    </button>
                </div>
            </header>
            <main>
                <section className="banner"></section>
                <section className="largura-pagina conteudo">
                    <h1>Bem-vindo a Barber Shop</h1>

                    <p className="paragrafo-destaque">Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>

                    <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>

                    <p className="assinatura">S. Kelly</p>
                </section>
            </main>
        </div>
    )
}