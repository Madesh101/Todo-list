
let todos = [
    { id: uid(), name: 'Luffy wakeup', dueDate: '2025-12-22', priority: 'high',   done: false },
    { id: uid(), name: 'Zoro wakeup',  dueDate: '2025-12-22', priority: 'medium', done: false },
];

let filter = 'all';


function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function todayStr() {
    return new Date().toISOString().split('T')[0];
}

function formatDate(d) {
    if (!d) return '';
    const [y, m, day] = d.split('-');
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${months[+m - 1]} ${+day}, ${y}`;
}

function dateStatus(d, done) {
    if (!d || done) return '';
    if (d < todayStr()) return 'overdue';
    if (d === todayStr()) return 'today';
    return '';
}

function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}


function render() {
    const visible = todos.filter(t => {
        if (filter === 'active')  return !t.done;
        if (filter === 'done')    return  t.done;
        if (filter === 'overdue') return !t.done && t.dueDate && t.dueDate < todayStr();
        return true;
    });

    const listEl  = document.querySelector('.js-todo-list');
    const emptyEl = document.querySelector('.js-empty');

    if (!visible.length) {
        listEl.innerHTML = '';
        emptyEl.classList.remove('hidden');
    } else {
        emptyEl.classList.add('hidden');
        listEl.innerHTML = visible.map(itemHTML).join('');

        listEl.querySelectorAll('.js-check').forEach(el =>
            el.addEventListener('click', () => toggle(el.dataset.id))
        );
        listEl.querySelectorAll('.js-del').forEach(el =>
            el.addEventListener('click', () => remove(el.dataset.id))
        );
    }

    // Stats
    const total   = todos.length;
    const done    = todos.filter(x => x.done).length;
    const overdue = todos.filter(x => !x.done && x.dueDate && x.dueDate < todayStr()).length;

    document.querySelector('.js-stats-total').textContent = `${total} total`;
    document.querySelector('.js-stats-done').textContent  = `${done} done`;
    document.querySelector('.js-stats-over').textContent  = `${overdue} overdue`;
}

function itemHTML(t) {
    const st = dateStatus(t.dueDate, t.done);
    const dateLabel = t.dueDate
        ? `<span class="todo-date ${st}">${
            st === 'overdue' ? '⚠ Overdue · ' :
            st === 'today'   ? '📅 Today · '  : ''
          }${formatDate(t.dueDate)}</span>`
        : '';

    return `
    <div class="todo-item ${t.done ? 'is-done' : ''} ${st === 'overdue' ? 'is-overdue' : ''}">
        <div class="todo-check js-check ${t.done ? 'checked' : ''}" data-id="${t.id}"></div>
        <div class="todo-text-block">
            <div class="todo-name">${esc(t.name)}</div>
            <div class="todo-meta">
                ${dateLabel}
                <span class="priority-badge ${t.priority}">${t.priority}</span>
            </div>
        </div>
        <button class="btn-delete js-del" data-id="${t.id}" title="Delete">✕</button>
    </div>`;
}


function addTodo() {
    const nameEl = document.querySelector('.js-name-input');
    const dateEl = document.querySelector('.js-date-input');
    const priEl  = document.querySelector('.js-priority-input');
    const name   = nameEl.value.trim();

    if (!name) {
        nameEl.style.borderColor = '#c1121f';
        nameEl.focus();
        setTimeout(() => nameEl.style.borderColor = '', 1400);
        return;
    }

    todos.push({ id: uid(), name, dueDate: dateEl.value, priority: priEl.value, done: false });
    nameEl.value = '';
    dateEl.value = '';
    priEl.value  = 'medium';
    render();
}

function toggle(id) {
    const item = todos.find(t => t.id === id);
    if (item) item.done = !item.done;
    render();
}

function remove(id) {
    todos = todos.filter(t => t.id !== id);
    render();
}


document.querySelectorAll('.js-filter').forEach(btn =>
    btn.addEventListener('click', () => {
        document.querySelectorAll('.js-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filter = btn.dataset.filter;
        render();
    })
);

document.querySelector('.js-clear-done').addEventListener('click', () => {
    todos = todos.filter(t => !t.done);
    render();
});

document.querySelector('.js-add-btn').addEventListener('click', addTodo);

document.querySelector('.js-name-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') addTodo();
});


render();