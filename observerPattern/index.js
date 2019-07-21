 let Task = function(data) {
    this.name = data.name;
    this.completed = data.completed;
    this.project = data.project;
    this.user = data.user;
    this.priority = data.priority;
};

let notificationService = function() {
    let message = "notifying";
    this.update = function(task){
    console.log(message + task.user+ "for task" + task.name);
    }
};

let logginService = function(){
    let message = "loggin";
    this.update = function() {
        console.log(message + this.user + "for task" + this.name);
    }
}

let Auditing = function(){
    let message = "Auditing";
    this.update = function(){
        console.log(message + this.user + "for task"+ task.name);
    }
}

Task.prototype.complete = function() {
    console.log("completing task: "+ this.name);
    this.completed = true;
}
Task.prototype.save = function() {
    console.log("saving task: "+ this.name)
}

// creating an observer

 function ObservableList() {
     this.ObservableList = [];
 }

 ObservableList.prototype.add = function(obj) {
     return this.ObservableList.push( obj);
 }

 ObservableList.prototype.get  = function(index){
     if(index > -1 && index < ObservableList.length) {
         return this.ObservableList[ index ]
     }
 }
 ObservableList.prototype.count = function(){
     return this.ObservableList.length;
 }

 let ObservableTask = function(data) {
     Task.call(this, data)
     this.observers = new ObservableList();
 }
 
 ObservableTask.prototype.addObserver = function( observer ){
     this.observers.add( observer );
 }
 ObservableTask.prototype.notify = function(context) {
     let ObservableCount = this.observers.count();
     for(let i =0; i<ObservableCount;i++) {
         this.observers.get(i)(context);
     }
 }
 ObservableTask.prototype.save = function(){
     this.notify(this);
     Task.prototype.call(this);
 }

 // end of oberver

// instantiating and calling objects
let task1 = new ObservableTask( {
    name:"create new demo for constructor",
    user : "Malik"
 });

let notification = new notificationService();
let login = new logginService();
let auditing = new Auditing();

task1.addObserver(notification.update);
task1.addObserver(login.update);
task1.addObserver(auditing.update)
task1.save();