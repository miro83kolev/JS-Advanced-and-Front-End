function sprintReview(input) {
    const [n, ...tasks] = input;
    const board = {};
  
    // parse initial board state
    for (let i = 0; i < n; i++) {
      const [assignee, taskId, title, status, estimatedPoints] = tasks[i].split(':');
      if (!board[assignee]) {
        board[assignee] = [];
      }
      board[assignee].push({ taskId, title, status, points: parseInt(estimatedPoints) });
    }
  
    // execute commands
    for (let i = n; i < input.length; i++) {
      const [command, assignee, taskIdOrIndex, ...args] = input[i].split(':');
      if (command === 'Add New') {
        const [title, status, estimatedPoints] = args;
        if (!board[assignee]) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
        } else {
          board[assignee].push({ taskId: taskIdOrIndex, title, status, points: parseInt(estimatedPoints) });
        }
      } else if (command === 'Change Status') {
        const newStatus = taskIdOrIndex;
        const task = board[assignee].find(t => t.taskId === taskIdOrIndex);
        if (!board[assignee]) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
        } else if (!task) {
          console.log(`Task with ID ${taskIdOrIndex} does not exist for ${assignee}!`);
        } else {
          task.status = newStatus;
        }
      } else if (command === 'Remove Task') {
        const index = parseInt(taskIdOrIndex);
        if (!board[assignee]) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
        } else if (index < 0 || index >= board[assignee].length) {
          console.log(`Index is out of range!`);
        } else {
          board[assignee].splice(index, 1);
        }
      }
    }
  
    // calculate task points by status
    let toDoPoints = 0;
    let inProgressPoints = 0;
    let codeReviewPoints = 0;
    let donePoints = 0;
  
    for (const [assignee, tasks] of Object.entries(board)) {
      for (const task of tasks) {
        if (task.status === 'ToDo') {
          toDoPoints += task.points;
        } else if (task.status === 'In Progress') {
          inProgressPoints += task.points;
        } else if (task.status === 'Code Review') {
          codeReviewPoints += task.points;
        } else if (task.status === 'Done') {
          donePoints += task.points;
        }
      }
    }
  
    // print results
    console.log(`ToDo: ${toDoPoints}pts`);
    console.log(`In Progress: ${inProgressPoints}pts`);
    console.log(`Code Review: ${codeReviewPoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);
  
    // check if sprint was successful
    const nonDonePoints = toDoPoints + inProgressPoints + codeReviewPoints;
    if (donePoints >= nonDonePoints) {
      console.log(`Sprint was successful!`);
    } else {
      console.log(`Sprint was unsuccessful...`);
    }
  }