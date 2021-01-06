(function(exports){

    exports.HttpError = class {
          constructor(status_code, message) {
               this.status_code = status_code;
               this.message = message;
          }
    }
  
  }(typeof exports === 'undefined' ? this.errors = {} : exports));