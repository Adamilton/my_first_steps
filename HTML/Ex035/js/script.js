
            /*Declaration of variables needed for the following scope, header.*/ 
            const logo = document.querySelectorAll('.logolobo');
            const menu = document.querySelectorAll('nav a')

            /*Creation of the function that will fill the header*/
            function fillHeader(){

                logo[0].src='icones/wolfLeft.svg';
                logo[1].src='icones/wolfRight.svg';
                
                menu[0].innerHTML='Ínicio';
                menu[1].innerHTML='Habitat';
                menu[2].innerHTML='Curiosidade';

            }

            /*Declaration of the variables necessary for the operation of the following function,fiilMain().*/
            const wolfLeft = document.querySelectorAll('.loboleft');
            const title2 = document.querySelectorAll('h2');
            const wolfText = document.querySelectorAll('p');
            /*Creation of the function that will fill the main*/
            function fillMain(){
                title2[0].innerHTML='Lobo Cizento';
                wolfText[0].innerHTML='É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás. É o maior membro remanescente selvagem da família canidae.O sequenciamento de DNA e estudos genéticos reafirmam que o lobo-cinzento é ancestral do cão doméstico (Canis lupus familiaris), contudo alguns aspectos desta afirmação têm sido questionados recentemente. Uma série de outras subespécies do lobo-cinzento foram identificadas, embora o número real de subespécies ainda esteja em discussão. Os lobos-cinzentos são tipicamente predadores ápice nos ecossistemas que ocupam.';
                wolfText[1].innerHTML='Nos tempos antigos, os lobos eram muito abundantes na América do Norte, Europa, Ásia e Oriente Médio. Mas hoje em dia, devido à caça e destruição das florestas, sua área de distribuição é muito limitada.';
                wolfLeft[0].src='imagens/lobo1.jpg';
            }

            /*Declaration of the variables necessary for the operation of the following function,fiilArticle().*/   
            const wolfRight =document.querySelectorAll('.loboright');
            const linkPlus = document.querySelector('section a')
            /*Creation of the function that will fill the article*/
            function fillArticle() {
                title2[1].innerHTML='Caracteristas';
                title2[2].innerHTML='Habitat';
                title2[3].innerHTML='Curiosidades';


                wolfLeft[1].src='imagens/lobo0.jpg';
                wolfRight[0].src='imagens/lobo.jpg';
                wolfRight[1].src='imagens/lobo2.jpg';

                wolfText[2].innerHTML='O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a aumentar proporcionalmente com a latitude, como previsto pela teoria de Christian Bergmann. Em geral, a altura, medida a partir dos ombros, varia de 60 a 95 centímetros. O peso varia geograficamente.';
                wolfText[3].innerHTML='Os lobos se desenvolveram em diversos ambientes, como florestas temperadas, desertos, montanhas, tundras, taigas, campos e até mesmo em algumas áreas urbanas.O lobo-cinzento (Canis lupus), o lobo-vermelho (Canis rufus), o lobo-etíope (Canis simensis) e o lobo-dourado (Canis anthus) são as únicas quatro espécies classificadas como lobos. Os demais lobos correspondem a subespécies derivadas dessas quatro espécies.';
                wolfText[4].innerHTML='Talvez o mais impressionante seja como as fêmeas ensinam seus filhotes a caçar para que sejam independentes. Por meio de uivos e um sistema de recompensa, eles recebem comida somente se prestarem atenção às ordens.';
               
                linkPlus.href='https://www.youtube.com/watch?v=Rp_cL7E-qFI';
                linkPlus.innerHTML='Veja também';

            }     

            /*Declaration of the variables necessary for the operation of the following function, fillFooter.*/
            const title3 =document.querySelector('h3');
            /*Creation of the function that will fill the footer*/
            function fillFooter() {
                title3.innerHTML='Adamilton Pereira Melo Junior'; 
            }
            
            fillHeader()
            fillMain()
            fillArticle()
            fillFooter()
            