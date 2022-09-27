window.addEventListener('DOMContentLoaded', () => {

const notesDB = {
  notes: [{
      name: "Shopping List",
      created: "04/20/2021",
      category: "Task",
      content: "Tomatoes, bread",
      dates: ""
    },
    {
      name: "The theory of evolution",
      created: "04/27/2021",
      category: "Random Thought",
      content: "The theory of evolution",
      dates: ""
    },
    {
      name: "New feature",
      created: "05/05/2021",
      category: "Idea",
      content: "Implenent New feature",
      dates: "3/5/2021, 5/5/2021"
    },
    {
      name: "Shopping List",
      created: "04/20/2021",
      category: "Task",
      content: "Tomatoes, bread",
      dates: ""
    },
    {
      name: "Shopping List",
      created: "04/20/2021",
      category: "Task",
      content: "Tomatoes, bread",
      dates: ""
    },
    {
      name: "Shopping List",
      created: "04/20/2021",
      category: "Task",
      content: "Tomatoes, bread",
      dates: ""
    },
    {
      name: "Shopping List",
      created: "04/20/2021",
      category: "Task",
      content: "Tomatoes, bread",
      dates: ""
    }]
};

class NotesList {
  constructor(name, created, category, content, dates, parentSelector) {
    this.name = name;
    this.created = created;
    this.category = category;
    this.content = content;
    this.dates = dates;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const row = document.createElement('tr');

    row.innerHTML = `
    <td class="note__name">${this.name}</td>
    <td class="note__created">${this.created}</td>
    <td class="note__category">${this.category}</td>
    <td class="note__content">${this.content}</td>
    <td class="note__dates">${this.dates}</td>
    <td class="note__button--edit"><button type="button" class="btn btn-outline-primary"><i class="fa fa-solid fa-pen-to-square"></i></button></td>
    <td class="note__button--archive"><button type="button" class="btn btn-outline-warning"><i class="fa fa-solid fa-file-zipper"></i></button></td>
    <td class="note__button--delete"><button type="button" class="btn btn-outline-danger"><i class="fa fa-solid fa-trash"></i></button></td>
    `;

    this.parent.append(row);
  }
};

notesDB.notes.forEach(({name, created, category, content, dates}) => {
  new NotesList(name, created, category, content, dates, '.table__body').render();
});

});