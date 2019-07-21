// module pattern 

let Module = function() {
   
    return {
        get:function() {
            return console.log("this is a return method from the database");
        },
        save:function() {
            return console.log("the task save successfully..");
        }
    }
}

var module = new Module();
module.get();
module.save();