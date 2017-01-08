class TaskRepository {

  deleteTask(task, cb) {
    let req = $.ajax({
      url:`http://localhost:3000/task/${task._id}`,
      method:'DELETE'
    });

    req.done(() => {
      this.refreshTasks();
    });

    req.fail(xhr => alert(xhr.responseText));

  }

  updateTask(task, cb) {
    let url = `http://localhost:3000/task/${task._id}`;
    let req = $.ajax({
      method:'PUT',
      url: url,
      data: task
    });

    req.done(() => {
      this.refreshTasks();
    });

    req.fail(xhr => alert(xhr.responseText));


  }
  saveTask(task, cb) {
    delete task._id;
    let req = $.post({
      url:'http://localhost:3000/task',
      data: task
    });

    req.done(() => {
      this.refreshTasks();
    });

    req.fail(jqXHR => alert(jqXHR.responseText));

  }


}

export new TaskRepository();
