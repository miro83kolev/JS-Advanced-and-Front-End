function attachEvents() {

    const board = document.querySelector('#board');

    function loadTasks() {
      fetch('http://localhost:3030/jsonstore/tasks')
        .then(response => response.json())
        .then(data => {
          for (let task of data) {
            const li = document.createElement('li');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            const button = document.createElement('button');
    
            h3.textContent = task.title;
            p.textContent = task.description;
            button.textContent = getButtonText(task.status);
            button.addEventListener('click', () => moveTask(task));
    
            li.appendChild(h3);
            li.appendChild(p);
            li.appendChild(button);
    
            board.querySelector(`#${task.status.toLowerCase()}`).appendChild(li);
          }
        });
    }
    
    function addTask() {
      const titleInput = document.querySelector('#task-title');
      const descriptionInput = document.querySelector('#task-description');
      
      fetch('http://localhost:3030/jsonstore/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: titleInput.value,
          description: descriptionInput.value,
          status: 'ToDo'
        })
      })
        .then(response => response.json())
        .then(() => {
          titleInput.value = '';
          descriptionInput.value = '';
          loadTasks();
        });
    }
    
    function moveTask(task) {
      let newStatus = getNextStatus(task.status);
    
      fetch(`http://localhost:3030/jsonstore/tasks/${task._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: newStatus
        })
      })
        .then(() => loadTasks());
    }
    
    function closeTask(task) {
      fetch(`http://localhost:3030/jsonstore/tasks/${task._id}`, {
        method: 'DELETE'
      })
        .then(() => loadTasks());
    }
    
    function getButtonText(status) {
      switch (status) {
        case 'ToDo':
          return 'Move to In Progress';
        case 'InProgress':
          return 'Move to Code Review';
        case 'CodeReview':
          return 'Move to Done';
        case 'Done':
          return 'Close';
      }
    }
    
    function getNextStatus(status) {
      switch (status) {
        case 'ToDo':
          return 'InProgress';
        case 'InProgress':
          return 'CodeReview';
        case 'CodeReview':
          return 'Done';
        case 'Done':
          return '';
      }
    }
    
    document.querySelector('#add-task').addEventListener('click', addTask);
       

}

attachEvents();