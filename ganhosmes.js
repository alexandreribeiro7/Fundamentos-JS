// Calculo de Ganhos de salário por Hora

function ganhoPorHora(salario, horasTrabalhadasNoMes) {
    
    const salarioHora = (salario / horasTrabalhadasNoMes);
    
    const formatado = salarioHora.toLocaleString('pt-br', {style: 'currency', currency: 'BRL' }); 
    
    return formatado;
}