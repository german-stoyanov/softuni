import toastr from 'toastr'
const notify = function notify(type, message) {
    if (type === 'success') {
      toastr.success(message);
    }
  
    if (type === 'error') {
      toastr.error(message);
  
     
    }
  }

export default notify