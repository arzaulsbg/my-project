# Inheritance Person ➜ Student & Teacher-- Experiment-9

> A small ES6 class inheritance demo that lists `Person` objects and shows full details when you click **View**. Perfect for learning classes, subclasses, and simple DOM interaction.

---

## Project Overview

This project demonstrates ES6 class inheritance in a minimal web app. It contains:

- A base `Person` class,
- Two subclasses: `Student` and `Teacher`,
- A small UI that lists people and shows details when a user's **View** button is clicked.

---

## Features

- Clear class hierarchy: `Person` → `Student` / `Teacher`.
- Click a name to view details (role, course/subject, age).
- Simple, responsive UI with keyboard- and screen-reader-friendly markup suggestions.
- Easy to extend (add/remove/edit people, persist to localStorage, add forms).

---

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

---

## File structure

```
inheritance-demo/
├─ index.html        # Main HTML
├─ style.css         # Styles
├─ script.js         # JS classes + DOM logic
└─ README.md         # This file
```

---

## Step-by-step implementation

Follow these steps to recreate and run the project locally.

### 1. Create the project folder

```bash
mkdir Inheritance Person
cd inheritance-demo
```

### 2. Create `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Experiment 9 - Inheritance Demo</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="people-container">
      <h1>Person Class Hierarchy</h1>
      <p class="intro">
        This demo shows ES6 class inheritance:
        <code>Person</code> ➜ <code>Student</code> & <code>Teacher</code>. Click
        a name to see their details.
      </p>

      <div class="people-list-wrapper">
        <h2>All People</h2>
        <ul id="peopleList" class="people-list" aria-live="polite"></ul>
      </div>

      <div class="details-wrapper">
        <h2>Details</h2>
        <div id="details" class="details-box">
          Select a person to view details.
        </div>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

  <!-- Creates the basic structure of the web page.

  Displays title, intro text, people list, and details section.

  Provides placeholder <ul> to be filled dynamically by JS.

  Includes semantic headings (h1, h2) for readability.

  Links style.css for design and script.js for logic. -->

### 3. Create `style.css`

```css
body {
  font-family: Arial, sans-serif;
  background: #f4f4f9;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.people-container {
  border: 1px solid #222;
  padding: 20px;
  max-width: 820px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

h1 {
  margin-top: 0;
  color: #222;
}

.intro {
  margin: 6px 0 16px 0;
  font-size: 0.95em;
  color: #444;
}

.people-list {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
}

.people-list li {
  background: #fafafa;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 10px 12px;
  margin: 6px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  transition: background 0.2s ease;
}

.people-list li:hover {
  background: #f0f4ff;
}

.people-list button {
  padding: 4px 10px;
  font-size: 0.85em;
  cursor: pointer;
  border: 1px solid #007bff;
  background: #007bff;
  color: white;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.people-list button:hover {
  background: #0056b3;
}

.details-box {
  border: 1px solid #e5e7eb;
  background: #f8f8f8;
  border-radius: 6px;
  padding: 12px;
  min-height: 60px;
  white-space: pre-line;
  font-weight: 500;
}

.details-wrapper h2,
.people-list-wrapper h2 {
  margin-bottom: 8px;
}
```

<!-- Centers the whole page with a clean layout.

Styles the container with border, padding, shadow.

Adds hover effects for list items for better UX.

Styles buttons with color, hover transition, and rounded corners.

Designs details box with background, padding, and border. -->

### 4. Create `script.js`

```javascript
window.addEventListener("DOMContentLoaded", function () {
  // Base Class: Person
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    getInfo() {
      return `${this.name} (Age: ${this.age})`;
    }
    getFullDetails() {
      return this.getInfo();
    }
  }

  // Subclass: Student
  class Student extends Person {
    constructor(name, age, course) {
      super(name, age);
      this.course = course;
    }
    getFullDetails() {
      return `${this.getInfo()}\nRole: Student\nCourse: ${this.course}`;
    }
  }

  // Subclass: Teacher
  class Teacher extends Person {
    constructor(name, age, subject) {
      super(name, age);
      this.subject = subject;
    }
    getFullDetails() {
      return `${this.getInfo()}\nRole: Teacher\nSubject: ${this.subject}`;
    }
  }

  // People Data
  const people = [
    new Student("Arzaul", 20, "Artificial Intelligence"),
    new Student("Rahul", 21, "Data Science"),
    new Student("Rohan", 22, "Cybersecurity"),
    new Teacher("Dr. Mehta", 45, "Machine Learning"),
    new Teacher("Ms. Kapoor", 39, "Cloud Computing"),
  ];

  const listEl = document.getElementById("peopleList");
  const detailsEl = document.getElementById("details");

  function renderList() {
    listEl.innerHTML = "";
    people.forEach((person, index) => {
      const li = document.createElement("li");
      li.textContent = person.name;

      const btn = document.createElement("button");
      btn.textContent = "View";
      btn.addEventListener("click", () => {
        detailsEl.textContent = person.getFullDetails();
      });

      li.appendChild(btn);
      listEl.appendChild(li);
    });
  }

  renderList();
});
```

<!-- Defines Person class with name, age, and methods.

Creates Student and Teacher subclasses using inheritance (extends, super).

Stores multiple objects inside a people array.

Dynamically renders list items into the HTML <ul>.

Handles button clicks to show details in the details box. -->

Learning Outcomes:

1.Understand class inheritance and super() usage.

2.Learn OOP principles (reusability, overriding).

3.Practice DOM manipulation to build UI dynamically.

4.Learn event handling (click events → show details).

4.Combine HTML, CSS, JS to make an interactive mini project.
