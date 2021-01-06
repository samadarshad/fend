(function(exports){

    exports.test = function(){
         return 'This is a function from shared module';
    };

    exports.data = class {
         constructor(temperatureDegreesCelcius, date, user_input) {
              this.temperatureDegreesCelcius = temperatureDegreesCelcius;
              this.date = date;
              this.user_input = user_input;
         }
    }
  
  }(typeof exports === 'undefined' ? this.share = {} : exports));