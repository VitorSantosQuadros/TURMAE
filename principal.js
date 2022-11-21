  var botaoAdicionar = document.querySelector("#adicionar-cliente")
                adicionar-cliente.addEvenListener("click",function(event){
                event.preventDefault();
                    console.log("Oi eu sou o Botão e eu fui clicado")
                
                
                
                
                })
                
                
                var form = document.querySelector('.adicionar-tarefa');
var botao = document.querySelector('#botao-adicionar');
botao.addEventListener("click", function(){
    console.log(form.tarefa.value); 
    
                 console.log("Oi Mundo")
                 console.log (document)
                 console.log (document.querySelector("titulo"))
       titulo.addEventListener("click", mostraMensagem)
       function mostraMensagem(){
           console.log("Ola fui clicado!")
       }
                var form = document.querySelector("#form-adicionar")
                 console.log(form.nome)
                 console.log(form.produto)
                console.log(form.kg)
                
                var clienteTr = document.createElement("tr")
                
                
                var nomeTd = document.createElement("td")
                var produtoTd = document.createElement ("td")
                var kgTd = document.createElement("td")
                var valorTd = document.createElement("td")
                var totalTd = document.createElement("td")
                
                
                nomeTd.textContent = nome 
                produtoTd.textContent = produto
                kgTd.textContent = kg
                valorTd.textContent = valor
                totalTd.textContent = total
                
                pacienteTr.appendChild(nomeTd)
                pacienteTr.appendChild(produtoTd)
                pacienteTr.appendChild(kgTd)
                pacienteTr.appendChild(valorTd)
                pacienteTr.appendChild(totalTd)
                
                
                var tabela = document.querySelector("#tabela-clientes")
                
                tabela.appendChild(pacienteTr)
                
