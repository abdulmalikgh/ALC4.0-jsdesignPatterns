export let Task = function(data) {
    this.name = data.name;
    this.completed = data.completed;
    this.project = data.project;
    this.user = data.user;
    this.priority = data.priority;
};

Task.prototype.complete = function() {
    console.log("completing task: "+ this.name);
    this.completed = true;
}
Task.prototype.save = function() {
    console.log("saving task: "+ this.name)
}
