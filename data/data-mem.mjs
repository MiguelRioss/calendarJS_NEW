import { type } from "os"



export default {

    getSessions,
    addSession,
    deleteSession
}

//sessoes ja marcada
const sessions = {
    'massagem' : {

        //dia-mês-ano : [ IDX_DasSlots_Já_OCUPADAS]
                }
}

function getSessions(type){
    if(type) return sessions[type]
    else return sessions
}

function addSession(type = 'massagens', day, timeSlotIndex) {
    if (!sessions[type][day]) {
        sessions[type][day] = [timeSlotIndex];
    } else {
        sessions[type][day].push(timeSlotIndex); // Add timeSlotIndex to the array
    }
    return sessions[type][day];
}


function deleteSession(type,day,timeSlotIndex){
    sessions[type][day] = sessions[type][day].filter((timeSlotIdx) =>  timeSlotIndex != timeSlotIdx)
    return sessions[type][day]
}