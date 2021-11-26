let contador_0=0;
                
                const level = document.querySelectorAll('.pergunta img');
                /*função que concatenas os comentários*/
                function addcommit() {
                    fillcommit();
                    return true;
                }
                
                 /*função que concatenas os comentários*/
                function fillcommit() {
                    
                    let commit = document.getElementById("comentario").value;
                    let answers = document.getElementById("respostas");

                    let html = "<div>";
                    html += "<td> Comentário: " + commit + "<br/>"+"</td>";
                    html += "<td>" + "<br/>"+"</td>";
                    html += "</div>";
                    answers.innerHTML += html;
                    return true
                }                
                
                /*função que ao entrar acende as estrelas do estado e menores*/
                function entrar(x) {  

                    if (contador_0==0) {

                        fillNone(x);
                        fill(x);

                    }                   
                    
                }

                /*Função que descolore as estrelas  maiores que o estado atual*/
                function fillNone(x) {
                    
                    for (let i = (x+1); i < 5; i++) {   
                        /*console.log(i);*/
                        level[i].src='estrelaOpacity0.svg';
                    }
                }
                
                /*Função que dá color as estrelas  menores e igual do estado atual*/
                function fill(x) {
                    status=x;
                    for (let i = 0; i <= x; i++) {
                        level[i].src='estrelaColor.svg';
                    }
                }

               
                /*Função que ao clicar torna estática a interação*/
                function clicar(x) {
                    level[x].src='estrelaColor.svg';
                    
                    fillNone(x);
                    fill(x);

                    if (contador_0==0) {
                        contador_0++
                    } else {
                        contador_0--
                    }
                          
                }