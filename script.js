 let cont = document.getElementsByClassName('content-container')

 for (let i = 0; i < cont.length; i++){
    
    cont[i].addEventListener('click', function(){
        this.classList.toggle('active');  
    })
 }


