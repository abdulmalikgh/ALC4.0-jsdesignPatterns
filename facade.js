//facade pattern      //
// created Abdul-Malik Musah   // 
//this pattern separate the properties of the object from the methods thereby reducing complexity of our code block//

let Task = function(data) {
    this.name = data.name;
    this.completed = data.completed;
    this.project = data.project;
    this.user = data.user;
    this.priority = data.priority;
};

let TaskServices = function() {
    return {
        complete: function(task) {
            task.completed = true;
            console.log("completing task: ", task.name);
        },
        setCompleteDate: function(task) {
            task.completeDate = new Date();
            console.log(task.name + "completed on "+ task.completeDate);
        },
        notifyCompletion: function(task, user) {
            console.log("Notify " + user + " of the completion of " + task.name);
        },
        save: function(task) {
           console.log("saving Task: " + task.name);
        }
    }
}();

// Creating a Facade on top of the servers

let TaskServicesWrapper = function(){
    
    let completeAndNotify = function(task) {
        TaskServices.complete(myTask);
       if(myTask.completed === true) {
           TaskServices.setCompleteDate(myTask);
           TaskServices.notifyCompletion(myTask,myTask.user);
           TaskServices.save(myTask)
       }

    }
    

    return {
        completeAndNotify : completeAndNotify
    }
}();

  
let myTask = new Task({
    name: "Learning Javascript",
    completed : false,
    project: "Task Management System",
    user: "Abdul-Malik",
    priority: 1
});

TaskServicesWrapper.completeAndNotify(myTask)
console.log(myTask);