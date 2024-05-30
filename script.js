document.addEventListener("DOMContentLoaded", function() {
    // Máscara para CPF
    var cpfInput = document.getElementById("cpf");
    cpfInput.addEventListener("input", function() {
        var value = cpfInput.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        cpfInput.value = value;
    });

    // Máscara para data
    var dataInput = document.getElementById("data_chegada");
    dataInput.addEventListener("input", function() {
        var value = dataInput.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "$1/$2");
        value = value.replace(/(\d{2})(\d)/, "$1/$2");
        value = value.replace(/(\d{4})\d+?$/, "$1");
        dataInput.value = value;
    });

    // Máscara para valor
    var valorInput = document.getElementById("total_estimado");
    valorInput.addEventListener("input", function() {
        var value = valorInput.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{1,})(\d{2})$/, "$1,$2");
        valorInput.value = value;
    });

    // Função para calcular o valor estimado da estadia
    function calcularTotalEstimado() {
        var dataChegada = new Date(document.getElementById("data_chegada").value);
        var numNoites = parseInt(document.getElementById("num_noites").value);
        var numHospedes = parseInt(document.getElementById("num_hospedes").value);
        var precoPorNoite = 90;
        var totalEstimado = precoPorNoite * numNoites * numHospedes;
        // Formatando o valor estimado como reais (R$)
        document.getElementById("total_estimado").value = "R$ " + totalEstimado.toFixed(2).replace(".", ",");
    }

    // Chama a função de calcular ao carregar a página e quando os campos relevantes mudam
    calcularTotalEstimado();
    document.getElementById("data_chegada").addEventListener("change", calcularTotalEstimado);
    document.getElementById("num_noites").addEventListener("change", calcularTotalEstimado);
    document.getElementById("num_hospedes").addEventListener("change", calcularTotalEstimado);
});
