
  document.getElementById("Fechag").addEventListener('click', function() {  
  document.getElementById("demo").style.display= "block";
  
  });
  document.getElementById("ocultar").addEventListener('click', function() {   
  document.getElementById("demo").style.display = "none";
  });
  /*
 
  const collection = document.getElementsByClassName("programas");
  for (let i = 0; i < collection.length; i++) {
  collection[i].style.color = "grey";
  }
  */
  
  document.getElementById("color").addEventListener('click', function() {   
    document.body.style.backgroundColor = "pink";
    });
    
    
 
    document.getElementById("reestablecer").addEventListener('click', function() {   
      document.body.style.backgroundColor = "whitesmoke";
    });

    document.getElementById("profesion").addEventListener('mouseover', function() {   
      document.getElementById("profesion").style.color = "orange";
    });

    document.getElementById("profesion").addEventListener('mouseout', function() {   
      document.getElementById("profesion").style.color = "black";
    });

    window.addEventListener("load", ()=> {
      const form = document.getElementById("formulario")
      const nombre =document.getElementById("nombre")
      const apellido =document.getElementById("apellido")
      const edad =document.getElementById("edad")
      const email =document.getElementById("email")
      const mensage =document.getElementById("mensage")

      form.addEventListener("submit", (e) => {
        e.preventDefault()
        validacampos()
        

        })

        const validacampos = ()=>{
          const nombrevalor = nombre.value.trim()
          const apellidovalor = apellido.value.trim()
          const edadvalor = edad.value.trim()
          const emailvalor = email.value.trim()
          const mensagevalor = mensage.value()

        if(nombrevalor === ''){
          console.log('Campo vacío')
          validafalla(nombre, 'campo vacío')
        }else{
          validaok('nombre')
        }
        if(apellidovalor === ''){
          console.log('Campo vacío')
          validafalla(apellido, 'campo vacío')
        }else{
          validaok('apellido')
        }
        if(edadvalor === ''){
          console.log('Campo vacío')
          validafalla(edad, 'campo vacío')
        }else{
          validaok('edad')
        }
        
        
        if(!emailvalor){
          
          validafalla(email, 'campo vacío')
        }else if (!validaEmail(emailvalor)) {
          validafalla(email, 'El e-mail no es válido')
        }else {
          validaok('email')
          
        }
        if(mensagevalor === ''){
          console.log('Campo vacío')
          validafalla(mensage, 'campo vacío')
        }else{
          validaok('mensage')
        }

     const validafalla = (input, msje) => {
          const formcontrol = input.parentElement
          const aviso = formcontrol.queryselector('p')
          aviso.innertext = msje

        }
    const validaok = (input, msje) =>{
      const formcontrol = input.parentElement
      formcontrol.class.name = 'form-control ok'
    }

    const validaEmail = (email) => {
      return /'([^']*)'/
    }

 });

  