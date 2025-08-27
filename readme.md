## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-005

### 📅 Deadline For 60 marks: 29th August, 2025 (11:59 pm ⏱️)

### 📅 No Deadline For 50 marks

### 📅 Deadline For 30 marks: Any time after 29th August.

---

## ✅ Main Requirements (50 Marks)

### 1. Navbar

- **Website name & logo** on the left as Figma
- **Heart icon, coin count (default-100), and Copy Count** on the right as Figma

---

### 2. Hero Section

- **Background Gradient** in the Whole Section
- **A Relevant Logo** at the top-center
- **Section Title** in the center
- **A Relevant Slogan** in the bottom Center

---

### 2. Main Section

This Section will have layout as figma

<table border=1 width="100%" cellpadding="50">
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
 </tr>
 <tr>
    <td colspan=9 >Card Section</td>
    <td colspan=3>History Section</td>
 </tr>
</table>

### Emergency Hotline Section

- **Show Minimum 6 cards**. Each card will contain:
  - Icon or Image
  - Relevant Name
  - Relevant Name in English
  - Hotline number for calling
  - Category Badge
  - 💗 icon at left
  - **2 buttons** at the bottom: Copy and Call with icons as Figma

### History Section

- **A white Background** in the whole section
- **History Title with icon** at the top-left as Figma
- **Clear History Button** at the top-right as Figma

---

### 3. Responsiveness (5 Marks)

- Website should be fully **responsive for mobile devices** (implementation up to you)

---

## Functionalities

### 4. Heart Icons

- Clicking on the 💗 **heart icon** of any card will increase the count in the Navbar

---

### 5. Call Buttons

- On clicking a card's **Call Button**, following actions will happen:
  - Show an **alert** with a message including the service name and number
  - Each call will **cut 20 coins**. Reduce Coin after each click.
  - If coins are less than 20, show a relevant alert and terminate the process.
  - Add this service into the **Call History section** with:
    - Service name
    - Service number

---

### 5. Call History Section

- Show all called services with name & number. This will empty initially. when call button clicked it will filled dynamically.
- A **Clear History button** on the right
- Clicking this button will remove all data from call history

---

## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

#### Answers:

**1. Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll:**

- **getElementById()**: Returns a single element with the specified ID. IDs must be unique, so it returns only one element or null if not found. Fastest method.
- **getElementsByClassName()**: Returns a live HTMLCollection of elements with the specified class name. Returns multiple elements or empty collection if none found.
- **querySelector()**: Returns the first element that matches the CSS selector. More flexible as it accepts any valid CSS selector. Returns null if no match.
- **querySelectorAll()**: Returns a static NodeList of all elements that match the CSS selector. Returns empty NodeList if no matches found.

**2. Creating and inserting a new element into the DOM:**

```javascript
 Create element and append
const newElement = document.createElement('div');
newElement.textContent = 'New Element';
newElement.className = 'new-class';
document.body.appendChild(newElement);
```

**3. Event Bubbling:**

Event bubbling is the process where an event triggered on a nested element "bubbles up" through its parent elements in the DOM tree. When an event occurs on a child element, it first triggers on that element, then on its parent, then on the parent's parent, and so on up to the document root.

Example:
```javascript
// Clicking on <span> triggers events on span → div → body → document
<div onclick="console.log('div clicked')">
  <span onclick="console.log('span clicked')">Click me</span>
</div>
// Output: "span clicked" then "div clicked"
```

**4. Event Delegation:**

Event delegation is a technique where you attach an event listener to a parent element instead of multiple child elements. The parent element handles events for all its children using event bubbling.

**Why it's useful:**
- Reduces memory usage (fewer event listeners)
- Works with dynamically added elements
- Better performance for many elements
- Cleaner code maintenance

Example:
```javascript
// Instead of adding listeners to each button
document.getElementById('container').addEventListener('click', function(e) {
  if (e.target.matches('button')) {
    console.log('Button clicked:', e.target.textContent);
  }
});
```

**5. Difference between preventDefault() and stopPropagation():**

- **preventDefault()**: Prevents the default behavior of an event (e.g., preventing form submission, link navigation, or context menu). The event still bubbles up to parent elements.

- **stopPropagation()**: Stops the event from bubbling up to parent elements. The default behavior still occurs, but parent elements won't receive the event.

Example:
```javascript
// preventDefault: stops form submission but event bubbles up
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Form won't submit
  // Parent elements still receive the event
});

// stopPropagation: allows default behavior but stops bubbling
button.addEventListener('click', function(e) {
  e.stopPropagation(); // Button click works, but parent won't receive event
});
```

---

## 🧪 Challenges Part (10 Marks)

- On clicking the **Copy button**, show an alert and **increase the copy count** (3 Marks)

- Hotline number will be **copied on click** so it can be pasted anywhere (4 Marks)

💡Hint: You can ask for Help from `ChatGPT` Mamma . Just copy the below prompt , generate answer. use it with your own way.

```bash
I have a card with some text and a button inside it. I want that when a user clicks the button, some specific text from the card is copied to the clipboard using JavaScript. Please provide the code and explain it step by step.
```

- After clicking on the **Call button**, the **exact time of the call** will be shown in the Call History section (3 Marks)

💡Hint: Search Google with that below question

```bash
How to get current local time in js
```

---

## ⚙️ Technology Stack

- HTML
- CSS ( Vanilla , Tailwind CSS , DaisyUI , Others - wheatever you like )
- JavaScript ( Vanilla only. No Framework / Library Allowed )

---

## 📌 Rules

- ✅ Minimum **5 meaningful commits** required
- ❌ No Lorem Ipsum or dummy placeholder text. Use **relevant content only**

---

## 🔗 What to Submit

- 📂 **GitHub Repository**
- 🌐 **Live Link**

---

# Let's Code and Achieve your Dream 🎯
