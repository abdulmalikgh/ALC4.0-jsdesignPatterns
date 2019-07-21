
// main object
let Task = function(name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function() {
    
    console.log("completing "+ this.name);
    this.completed = true;
}
Task.prototype.save = function() {
    console.log("Saving "+this.name)
}

//subclass
let urgentTask = function(name,priority) {
    Task.call(this,name)
    this.priority = priority;
}
//inherinting parent methods

urgentTask.prototype = Object.create(Task.prototype);

urgentTask.prototype.notify = function(){
    console.log("notifying important task ")
}

//overiding parent method save
urgentTask.prototype.save = function(){
    this.notify();
    console.log("Doing important task before saving ");
    Task.prototype.save.call(this);
}


// instantiating objects
let urgent = new urgentTask("javascript", 1);
urgent.complete();
urgent.save();

   
