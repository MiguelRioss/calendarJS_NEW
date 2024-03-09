import data from '../data/data-mem.mjs'
export default {
    addSession : getUserIDandDoSomething(addSession),
    getAllSessions,
    deleteSession : getUserIDandDoSomething(deleteSession)
}

const typeOptions = ['massagem']

function getAllSessions(type){
    return data.getSessions(type)
}
function addSession(type,day,timeSlotIdx){
    const daySession = data.getSessions(type)
    if(daySession[day]){
        if(daySession[day].includes(timeSlotIdx)){
        throw  Error("Time slot is already used")
        }
    }
    return data.addSession(type,day,timeSlotIdx)
}

function deleteSession(type,day,timeSlotIdx){
    const daySession = data.getSessions(type)
    if(daySession[day]){
        if(daySession[day].includes(timeSlotIdx)){
            return data.deleteSession(type,day,timeSlotIdx)
        }
    }
    throw Error("Failed to Delete Session")
}

function getUserIDandDoSomething(action) {
    return function (type,day,timeSlotIdx){
        if(! typeOptions.includes(type)) throw Error("Invalid type")
        if(! isValidDay(day)) throw Error("Invalid Day")
        if(isNaN(timeSlotIdx)) throw Error("Invalid Time Slot")
        return action(type,day,timeSlotIdx)
    }
}

function isValidDay(day) {
    const dateSplited = day.split('-')
    return dateSplited.length == 3
}
