  import assert from 'assert'
  import services from '../services/services.mjs'
import { time, timeStamp } from 'console';
  
  //AuxFunctions
  function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  describe('Sessions Test', function () {
    const day = '8-3-2024';
    const type = 'massagem'
    const timeSlotIdx = 0; //First One
    services.addSession(type, day,timeSlotIdx); 
    describe('Testing Invalid Data' ,function(){
      it('Invalid day', function() {
        assert.throws(() => {
          services.addSession(type,'8-3-202',timeSlotIdx),Error
        })
      })
      it('Invalid type', function() {
        assert.throws(() => {
          services.addSession('contas',day,timeSlotIdx),Error
        })
      })
      it('Invalid timeSlotIdx', function() {
        assert.throws(() => {
          services.addSession(type,day,'a'),Error
        })
      })
    })
    describe('Session Adding', function () {
      const sessions = services.getAllSessions(type)
      console.log("$$$$$$",sessions)
      it('addingOne', function () {
        assert.equal(isArrayEmpty(sessions[day]), false)
      });

      it('Checking if time Slot is there ', function () {
        assert.strictEqual(sessions[day].includes(timeSlotIdx),true);
      });
      it('Adding 3 Session  ', function () {
       services.addSession(type, day,timeSlotIdx + 1); // Assuming massagens is defined elsewhere
       services.addSession(type, day,timeSlotIdx  + 2); // Assuming massagens is defined elsewhere
       const sessions = services.getAllSessions(type)[day]

        assert.strictEqual([timeSlotIdx,timeSlotIdx +1 ,timeSlotIdx +2].every(element => sessions.includes(element)),true)
      });

      it('should return failed  ', function () {
        assert.throws(() => {
          services.addSession(type, day,timeSlotIdx + 1 )
        },Error, 'Time slot is already used')
      });
      

    });
    describe('Sessions Deleted' ,function () {
      it('Delete One Sucess ', function () {
        services.deleteSession(type,day,timeSlotIdx)
        const sessions = services.getAllSessions(type)[day]
        assert.strictEqual(sessions.includes(timeSlotIdx),false)})
   

    it('Deleting a allready deleted one  ', function () {
      assert.throws(() => {
        console.log(services.getAllSessions(type))
        services.deleteSession(type, day,timeSlotIdx  )
      },Error, 'Failed to Delete Session')
    });
  })
});