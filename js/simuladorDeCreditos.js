function calcular() {
    var monto = document.getElementById("monto").value;
    var coutas = document.getElementById("coutas").value;
    var interesXCuotas;
    var dineroxCoutas;
    var filtro = true;
    var intMes;
    
    if (coutas <= 12) {
        intMes = 1 + ((1.1 * coutas) / 100);
        interesXCuotas = (monto * intMes) - monto;

    } else if (coutas <= 36) {
        intMes = 1 + ((0.9 * coutas) / 100);
        interesXCuotas = (monto * intMes) - monto;

    } else if (coutas <= 60) {
        intMes = 1 + ((0.5 * coutas) / 100);
        interesXCuotas = (monto * intMes) - monto;

    } else {
        filtro = false;
        document.getElementById("error").innerHTML = "El numero de coutas debe ser menor o igual a 60";
    }
    if (filtro) {
        dineroxCoutas = (parseInt(monto) + interesXCuotas) / coutas;
        dineroxCoutas = dineroxCoutas.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        interesXCuotas = interesXCuotas.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        document.getElementById("intereses").innerHTML = "Usted pagará en intereses: $" + interesXCuotas + " por " + coutas + " cuotas";
        document.getElementById("pagoxcoutas").innerHTML = "Usted pagará $" + dineroxCoutas + " por cada couta";
        document.getElementById("error").innerHTML = "";
    }


}