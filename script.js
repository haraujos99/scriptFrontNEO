function criaMascara() {
    const maximoInput = document.getElementById(`inputData`).maxLength;
    let valorInput = document.getElementById(`inputData`).value;

    if(isNaN(valorInput[valorInput.length-1])){
        document.getElementById(`inputData`).value = valorInput.substring(0, valorInput.length-1);
       return;
    }

    const mascaras = valorInput.replace(/[^\d]/g, "").replace(/(\d{2})(\d{2})(\d{4})(\d{2})(\d{2})/, "$1/$2/$3-$4:$5")


    if(valorInput.length  === maximoInput -4)
        document.getElementById(`inputData`).value = mascaras;
  };

  function popSubmit (){
    
    if(document.getElementById(`inputData`).value == "" || document.getElementById(`inputData`).value.length != document.getElementById(`inputData`).maxLength || document.getElementById(`selectMotivoAgendamento`).value == "" || document.getElementById(`selectRetorno`).value =="" || (!document.getElementById('checkMesmoTelefone').checked  && !document.getElementById('checkOutroTelefone').checked) || (document.getElementById('checkOutroTelefone').checked && document.getElementById('inputOutroTelefone').value == "")){
       return window.alert("Preencha todas as informações!");  
    }

    window.alert("Agendamento realizado!");  
  }
