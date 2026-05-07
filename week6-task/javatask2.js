let tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log(`Task added: "${task}"`);
}

function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        let removed = tasks.splice(index, 1);
        console.log(`Task deleted: "${removed[0]}"`);
    } else {
        console.log("Invalid index!");
    }
}

function listTasks() {
    console.log("Current Tasks:");
    
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index}: ${task}`);
        });
    }
}

addTask("Study JavaScript");
addTask("Do Homework");

listTasks();

deleteTask(0);

listTasks();