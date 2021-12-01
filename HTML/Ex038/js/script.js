let tn1 = document.getElementById('pao-frances');
            let tn2 = document.getElementById('pao-autraliano');
            let tn3 =document.getElementById('pao-brioche');
            let priceBread;
            let opctionBread;
            
            let tburger1=document.getElementById('picanha');
            let tburger2=document.getElementById('costela');
            let tburger3=document.getElementById('vegano');
            let priceBurger;
            let opctionBurger;

            let tsalad1=document.getElementById('alface');
            let tsalad2=document.getElementById('tomate');
            let tsalad3=document.getElementById('sSalada');
            
            let priceSalad;
            let opctionSalad;

            let tcheese1=document.getElementById('mussarela');
            let tcheese2=document.getElementById('prato');
            let tcheese3=document.getElementById('cheddar');
            let priceCheese;
            let opctionCheese;

            let resume=document.getElementById('calculo');
            

            function pedido() {

                bread()
                burger()
                salad()
                console.log(priceSalad)
                cheese()
                console.log(priceSalad)
                mostrarFicha() 
                
                
                return true
            }

            function bread() {
                
                n1 =Number(tn1.checked);
                n2 =Number(tn2.checked);
                n3 =Number(tn3.checked);
                if (n1==1)  {
                    priceBread=3;
                    opctionBread='Pão Francês'
                }
                if (n2==1) {
                    priceBread=8;
                    opctionBread='Pão Autraliano'
                }
                if (n3==1) {
                    priceBread=6;
                    opctionBread='Pão de Brioche'
                }
                return true
            }

            function burger() {
                
                burger1= Number(tburger1.checked);
                burger2 =Number(tburger2.checked);
                burger3 =Number(tburger3.checked);
                if (burger1==1) {
                    priceBurger=13
                    opctionBurger='Picanha'
                }
                if (burger2==1) {
                    priceBurger=10
                    opctionBurger='Costela'
                }
                if (burger3==1) {
                    priceBurger=12
                    opctionBurger='Vegano'
                }
                return true
            }

            function salad() {
                
                salad1= Number(tsalad1.checked);
                salad2 =Number(tsalad2.checked);
                salad3 =Number(tsalad3.checked);
                
                if (salad1==1) {
                    priceSalad=1.5
                    opctionSalad='Alface'
                    console.log(salad1)
                }
                if (salad2==1) {
                    priceSalad=1.5
                    opctionSalad='Tomate'
                    console.log(salad2)
                }
                if (salad3==1) {
                    priceSalad=0
                    opctionSalad='Sem Salada'
                }
                console.log(priceSalad)
                return true
            }

            function cheese() {
                
                cheese1= Number(tcheese1.checked);
                cheese2 =Number(tcheese2.checked);
                cheese3 =Number(tcheese3.checked);
                
                if (cheese1==1) {
                    priceCheese=3
                    opctionCheese='Mussarela'
                }
                if (cheese2==1) {
                    priceCheese=3
                    opctionCheese='Prato'
                }
                if (cheese3==1) {
                    priceCheese=5
                    opctionCheese='Cheddar'
                   
                }
                
                return true
            }

            function mostrarFicha() {
                let acumulador=0
                console.log(acumulador);
                let contador=0;
                let resume=document.getElementById('calculo');
                resume.innerHTML="<h2>Resumo do Pedido</h2>";
                if (undefined!=opctionBread && priceBread!=0){
                    acumulador+=priceBread;
                    console.log(acumulador);

                    priceBread=priceBread.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})
                    console.log(acumulador);
                    resume.innerHTML+=`<div class="conta"><span>${opctionBread}</span><span>${priceBread}</span>`;
                    contador++;
                   
                }
               
                if (undefined!=opctionBurger && priceBurger!=0){
                    acumulador+=priceBurger;
                    priceBurger=priceBurger.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})
                    resume.innerHTML+=`<div class="conta"><span>${opctionBurger}</span><span>${priceBurger}</span>`
                    contador++
                   
                }
                if (undefined!=opctionSalad && priceSalad!=0){
                    acumulador+=priceSalad;
                    priceSalad=priceSalad.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})
                    resume.innerHTML+=`<div class="conta"><span>${opctionSalad}</span><span>${priceSalad}</span>`
                    contador++;
                   
                }
               
                if (undefined!=opctionCheese && priceCheese!=0){
                    acumulador+=priceCheese;
                    console.log(acumulador);
                    priceCheese=priceCheese.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})
                    console.log(acumulador);
                    resume.innerHTML+=`<div class="conta"><span>${opctionCheese}</span><span>${priceCheese}</span>`
                    console.log(acumulador);
                    contador++;
                   
                }
                console.log(acumulador)
                if (contador!==0) {
                    acumulador=acumulador.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})
                    resume.innerHTML+=`<div class="conta"><span>Total</span><span>${acumulador}</span>`
                    resume.innerHTML+=`<div class="conta"><input id="comfirmar" type="button" value="confirmar" onclick="fichaChapeiro()" /><input id="cancelar" type="button" value="cancelar" onclick="limpar()"  /></div>`
                   
                }            
                               
                return true
            }

            function limpar() {
                resume.innerHTML="";
                priceBread=Number(0);
                priceBurger=0;
                priceSalad=0;
                priceCheese=0;
                acumulador=0;


            }

            function fichaChapeiro() {
                let allText = resume.innerHTML;
                resume.innerHTML='';
                resume.innerHTML+="<h2>Para o Chapeiro Jorge</h2>"
                resume.innerHTML+=`<div class=conta>${opctionBread}</div>`;
                    if (undefined!=opctionBurger) {
                        resume.innerHTML+=`<div class=conta>${opctionBurger}</div>`;
                    }
                    if (undefined!=opctionSalad){
                        resume.innerHTML+=`<div class=conta>${opctionSalad}</div>`;
                    }
                    if (undefined!=opctionCheese) {
                        resume.innerHTML+=`<div class=conta>${opctionCheese}</div>`;
                    }
                    
            }

            

                
            