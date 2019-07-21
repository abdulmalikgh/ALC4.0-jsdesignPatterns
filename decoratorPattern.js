//decorator patter allows encapsulation and overiding 
// ie it protect objects

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

let task = new Task("Learning design patterns in javascript");
let urgentTask = new Task("urgent");
urgentTask.notitify = function() {
    console.log("notifying important people ");
}
urgentTask.save = function() {
    this.notitify();
    Task.prototype.save.call(this);
}

urgentTask.notitify();
task.complete();
task.save();
urgentTask.save();