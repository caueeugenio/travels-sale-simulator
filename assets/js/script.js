

function comprarPassagem() {
    const idadeComprador = document.querySelector("#idadeComprador").value;
    const mensagemExibicao = document.querySelector("#mensagemExibicao");
    const nomeComprador = document.querySelector("#nomeComprador").value;

    const destinoViagem = document.querySelector("#destinoComprador").value;

    const dataIda = document.querySelector("#data-ida-comprador").value;
    const dataVolta = document.querySelector("#data-volta-comprador").value;


    let radios = document.getElementsByName('radioType');
    let estaAcompanhado = false;

    if (nomeComprador == "" || idadeComprador == "" || destinoViagem == "" || radios == "" || dataIda == "" || dataVolta == "") {

        document.getElementById("nomeComprador").style.background = "#f8d7da";
        document.getElementById("idadeComprador").style.background = "#f8d7da";
        document.getElementById("destinoComprador").style.background = "#f8d7da";
        document.getElementById("data-ida-comprador").style.background = "#f8d7da";
        document.getElementById("data-volta-comprador").style.background = "#f8d7da";
        document.getElementById("acompanhamento").style.background = "#f8d7da";
    } else {
        document.getElementById("nomeComprador").style.background = "white";
        document.getElementById("idadeComprador").style.background = "white";
        document.getElementById("destinoComprador").style.background = "white";
        document.getElementById("data-ida-comprador").style.background = "white";
        document.getElementById("data-volta-comprador").style.background = "white";
        document.getElementById("acompanhamento").style.background = "white";
    }


    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

            // do whatever you want with the checked radio
            // alert(radios[i].value);
            if (radios[i].value == "Sim") {
                estaAcompanhado = true;
            }

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if ((idadeComprador >= 18 || estaAcompanhado == true) && idadeComprador != "" && nomeComprador != "" && dataIda != "" && dataVolta != "") {
        // mensagemExibicao.textContent = nomeComprador + " você pode comprar, você é maior de idade ou está acompanhado de um responsável.";


        let nome = document.getElementById("nome");
        nome.textContent = nomeComprador;
        let destino = document.getElementById("destino");
        destino.textContent = destinoViagem;
        let dataida = document.getElementById("dataida");
        dataida.textContent = dataIda;
        let datavolta = document.getElementById("datavolta");
        datavolta.textContent = dataVolta;

        mensagemExibicao.innerHTML = "<br><b class='alert alert-success'>Compra efetivada.</b>";

        $('#exampleModal').modal('show');



    } else {
        mensagemExibicao.innerHTML = "<br><b class='alert alert-danger'>Você não pode comprar essa passagem, verifique os dados fornecidos.</b>";


    }
}

