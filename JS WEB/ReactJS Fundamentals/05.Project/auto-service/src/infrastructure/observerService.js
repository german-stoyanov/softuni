let subscribitions = {
    'loginUser': [],
    'rate': []
  };
  
  export default {
    events: {
      loginUser: 'loginUser',
     
    },
    subscribe: (eventName, func) => {
      subscribitions[eventName].push(func);
    },
    trigger: (eventName, data) => {
      subscribitions[eventName].forEach(func => func(data));
    },
   
  };