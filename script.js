const avanca = document.querySelectorAll('.btn-proximo');
avanca.forEach(button =>){
    button.addEventLister('click, function(){
     const atual = document.querySelectorAll('.ativo');
     const proximoPasso = 'passo-' + this.getAttribute('data-proximo')

     atual.classList.remove('ativo');
     document.getElementById(proximoPasso).classList.add('ativo');
        
            

     }

