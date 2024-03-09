// Definição dos intervalos de tempo (em minutos)
const intervaloDeTempo = 30; // 40 minutos
const periodoDeTrabalho = 8 * 60; // 8 horas em minutos

// Função para gerar os time slots dentro de um período de trabalho
function gerarTimeSlots(horaInicio, minutosInicio) {
  const timeSlots = [];
  let hora = horaInicio;
  let minutos = minutosInicio;
  let tempoDecorrido = 0;

  while (tempoDecorrido < periodoDeTrabalho) {
    timeSlots.push({ hora: hora, minutos: minutos  , availability : true});
    minutos += intervaloDeTempo;
    if (minutos >= 60) {
      minutos -= 60;
      hora++;
    }
    tempoDecorrido += intervaloDeTempo;
  }
  return timeSlots;
}

// Função para gerar o calendário de um mês específico
function gerarCalendarioDoMes(ano, mes) {
    const calendario = {};
    const diasNoMes = new Date(ano, mes, 0).getDate();
  
    for (let dia = 1; dia <= diasNoMes; dia++) {
      const diaAtual = new Date(ano, mes - 1, dia);
      const timeSlots = gerarTimeSlots(8, 0); // Início do turno às 8:00
      calendario[diaAtual.toDateString()] = timeSlots;
    }
  
    return calendario;
  }
  


  //'Thu Feb 29 2024'
  // Exemplo de uso
  const calendarioDoMes = gerarCalendarioDoMes(2024, 2); // Fevereiro de 2024


  function modificarDisponibilidade(calendario, data, indiceTimeSlot) {
    if (calendario[data.toDateString()] && calendario[data.toDateString()][indiceTimeSlot]) {
      calendario[data.toDateString()][indiceTimeSlot].availability = false;
      console.log(`Disponibilidade do time slot ${indiceTimeSlotModificado} em ${dataModificada.toDateString()} modificada para false.`);
      return true; // Modificação bem-sucedida
    }
    console.log('Falha ao modificar a disponibilidade do time slot. Verifique a data e o índice fornecidos.');
    return false; // Falha na modificação (data ou índice inválidos)
  }
  
  // Exemplo de uso
  const dataModificada = new Date(2024, 1, 29); // 29 de fevereiro de 2024
  const indiceTimeSlotModificado = 3; // Índice do time slot a ser modificado
  modificarDisponibilidade(calendarioDoMes, dataModificada, indiceTimeSlotModificado);
  
  
  // Verificando se a disponibilidade foi modificada
  console.log(calendarioDoMes[dataModificada.toDateString()][indiceTimeSlotModificado]);
  