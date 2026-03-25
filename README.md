# ✅ My Tasks — Todo List App

A clean, minimal todo list web app built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies — just open and use.

---

## 📁 Project Structure

```
📁 your-folder/
├── 12-todo-list.html   # Main page (open this in browser)
├── 12-todo-list.css    # All styles
├── 12-todo-list.js     # All functionality
└── README.md           # You're reading this
```

> ⚠️ All three files must be in the **same folder** for the app to work.

---

## 🚀 Getting Started

1. Download all three files into the same folder
2. Double-click `12-todo-list.html` to open it in your browser
3. That's it — no install, no build step needed

---

## ✨ Features

| Feature | Description |
|---|---|
| ➕ Add Tasks | Type a task name and press **Enter** or click **+ Add** |
| 📅 Due Dates | Optionally set a due date for each task |
| 🏷️ Priority | Tag tasks as 🔴 High, ⚡ Medium, or 🟢 Low |
| ✅ Complete | Click the circle to mark a task as done |
| 🗑️ Delete | Hover over a task and click **✕** to delete it |
| 🔍 Filters | View **All**, **Active**, **Done**, or **Overdue** tasks |
| 🧹 Clear Done | Remove all completed tasks in one click |
| 📊 Stats Bar | Live count of total, done, and overdue tasks |
| ⚠️ Overdue Alert | Tasks past their due date are highlighted automatically |
| 📅 Today Highlight | Tasks due today are specially marked |

---

## 🖥️ Preview

```
My Tasks
[ 2 total ]  [ 0 done ]  [ 2 overdue ]

┌─────────────────────────────────────────────────────┐
│  What needs to be done?  │ dd/mm/yyyy │ ⚡Medium │+Add│
└─────────────────────────────────────────────────────┘

[ All ] [ Active ] [ Done ] [ Overdue ]    [ Clear Done ]

┌─────────────────────────────────────────────────────┐
│ ○  Luffy wakeup          ⚠ Overdue · Dec 22, 2025  HIGH  │
│ ○  Zoro wakeup           ⚠ Overdue · Dec 22, 2025  MEDIUM│
└─────────────────────────────────────────────────────┘
```

---

## 🛠️ Built With

- **HTML5** — structure
- **CSS3** — styling, grid layout, animations
- **Vanilla JavaScript** — all logic, no libraries
- **Google Fonts** — DM Serif Display + DM Sans

---

## 📖 How to Use

### Adding a Task
1. Type your task name in the input field
2. (Optional) Pick a due date
3. (Optional) Choose a priority — High, Medium, or Low
4. Press **Enter** or click **+ Add**

### Completing a Task
- Click the **circle** on the left of any task to toggle it as done/undone

### Deleting a Task
- Hover over a task — a **✕** button appears on the right — click it to delete

### Filtering Tasks
- Use the filter buttons to show **All**, **Active**, **Done**, or **Overdue** tasks
- Click **Clear Done** to remove all completed tasks at once

---

## 🎨 Design

- Warm off-white background (`#f5f3ef`) for a paper-like feel
- Card-based layout with soft shadows
- Slide-in animation when tasks are added
- Hover lift effect on task cards
- Color-coded priority badges (🔴 red / 🟡 amber / 🟢 green)
- Delete button appears only on hover to keep the UI clean

---

## 📌 Notes

- Tasks are stored **in memory only** — they reset when you refresh the page
- To persist tasks across sessions, localStorage or a backend would need to be added

---

## 👤 Author

Built as a vanilla JS learning project.
