document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          ${taskText}
          <span class="delete">❌</span>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
      }
    });
  
    taskList.addEventListener('click', function(e) {
      if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();
      }
    });
  });
  