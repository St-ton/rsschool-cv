# Stanislav Tonkich

### ***Junior Frontend Web Developer***

---
### **Contact Info**


**Phone:** +49 176 32314250 <br/>
**E-mail:** st.tonkich@gmail.com  <br/>
**Telegram:** [ClubTravels](https://t.me/ClubTravels) <br/>
**GuHub:** [St-ton](https://github.com/St-ton) <br/>
**Linkedin:** [Stanislav Tonkich](https://www.linkedin.com/in/stanislav-tonkich-595747210/) <br/>

---
### **Summary**

After graduating from Kyiv International University of Civil Aviation in 1995, he worked as a programmer in a bank for 3 years.<br/>
After that, he moved to the financial sector, having worked until 2012. financial manager. In parallel, he was engaged in network administration, installation and configuration of software, as well as training in its use by employees.<br/>
From 2012 to 2019 he was an entrepreneur - a chain of grocery stores, a travel agency

---
### **Hard Skills**

- HTML/HTML5
- CSS (BEM, SASS/SCSS, Bootstrap)
- JavaScript
- React JS, Redux
- Gulp, Webpack
- Git, GitHub
- MS SQL
- IDE: VS Code, IntelliJ IDEA
- Figma, Adobe XD, Adobe Illustrator
- DevOps Administration

---
### **Soft Skills**

- communication skills 
- stress resistance 
- responsibility 
- conflict resolution experience

---
### **Code example**

*Working with DOM-elements and LocalStorage*<br/>
*Forming of tasks-list and writing them to the LocalStorage using JSON*

```javascript
function writeLokal(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function readLocal() {
  return JSON.parse(localStorage.getItem('tasks')) ?? [];
}
let tasks = readLocal();
const form = document.querySelector('.add_task');
const tasksContainer = document.querySelector('.tasks');
form.addEventListener('submit', event => {
  event.preventDefault();
  const task = event.target.task.value;
  tasks.push({ id: Date.now(), task });
  writeLokal(tasks);
  event.target.task.value = '';
  rerender();
});
function rerender() {
  tasksContainer.innerText = '';
  if (readLocal().length === 0) {
    const task_p = document.createElement('p');
    task_p.innerText = 'No tasks';
    tasksContainer.append(task_p);
  } else {
    readLocal().forEach(item => {
      const task_p = document.createElement('p');
      task_p.innerText = item.task;
      tasksContainer.append(task_p);
    });
  }
}
```
---

### **Education**

- Web Developer (HTML, CSS, BEM, SASS) on the [Udemy](https://www.udemy.com/course/javascript_full/learn/lecture/14328446??ranMID=39197&ranEAID=a1LgFw09t88&ranSiteID=a1LgFw09t88-nUyZMTQpCSRakzx4Wdr89g&LSNPUBID=a1LgFw09t88&utm_source=aff-campaign&utm_medium=udemyads#overview)
- JavaScript Manual on [learnjavascript.ru](https://learn.javascript.ru/) (in progress)
- RS Schools Course «JavaScript/Front-end» (in progress)
- Frontend Web Developer Course on the [Tel-Ran](<<https://tel-ran.de>) (in progress)

---

### **Languages**

- English - A2
- Russian - C1
- Deutsch - B2