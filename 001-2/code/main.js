import { reminderApp } from "./functions.js";

const titleInput = document.getElementById('title-input');
const priorityInput = document.getElementById('priority-input');
const colorInput = document.getElementById('color-input');
const descriptionInput = document.getElementById('description-input');
const addReminderBtn = document.getElementById('add-reminder-btn');
const showRemindersBtn = document.getElementById('show-reminders-btn');
const remindersList = document.getElementById('reminders-container');

let reminders = [];

addReminderBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!titleInput.value || !priorityInput.value || !colorInput.value || !descriptionInput.value) {
        alert('Please fill in all fields to add a reminder.');
        return;
    }

    const title = titleInput.value;
    const priority = priorityInput.value;
    const color = colorInput.value;
    const description = descriptionInput.value;
    const newReminder = reminderApp(title, priority, color, description);
    reminders.push(newReminder);

    console.log(reminders);

    titleInput.value = '';
    priorityInput.value = '';
    colorInput.value = '#ffffff';
    descriptionInput.value = '';
});



showRemindersBtn.addEventListener('click', (e) => {
    e.preventDefault();
    remindersList.innerHTML = '';

    if (reminders.length === 0) {
        remindersList.innerHTML = '<p>No reminders to show.</p>';
        return;
    }

    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    ['Title', 'Priority', 'Description'].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    reminders.forEach(reminder => {
        const row = document.createElement('tr');
        const titleCell = document.createElement('td');
        titleCell.textContent = reminder.title;
        row.appendChild(titleCell);
        const priorityCell = document.createElement('td');
        priorityCell.textContent = reminder.priority;
        row.appendChild(priorityCell);
        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = reminder.description;
        row.appendChild(descriptionCell);
        titleCell.style.backgroundColor = reminder.color;
        table.appendChild(row);
    });
    remindersList.appendChild(table);
});