(function(exports){

    exports.test = function(){
         return 'This is a function from shared module';
    };

    exports.dataScheme = class {
         constructor(temperatureDegreesCelcius, date, user_input, zip) {
              this.temperatureDegreesCelcius = temperatureDegreesCelcius;
              this.date = date;
              this.user_input = user_input;
              this.zip = zip;
         }
    };
  
  }(typeof exports === 'undefined' ? this.share = {} : exports));