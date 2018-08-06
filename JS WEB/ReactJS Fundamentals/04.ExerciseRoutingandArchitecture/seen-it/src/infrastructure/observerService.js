let subscribitions = {
    'loginUser': [],
    'notification': []
  };
  
  export default {
    events: {
      loginUser: 'loginUser',
      notification: 'notification'
    },
    subscribe: (eventName, func) => {
      subscribitions[eventName].push(func);
    },
    trigger: (eventName, data) => {
      subscribitions[eventName].forEach(func => func(data));
    },
    delete: (eventName)=>{
      subscribitions[eventName]=[]
    }
  };