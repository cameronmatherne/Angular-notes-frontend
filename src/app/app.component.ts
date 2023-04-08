import { Component } from '@angular/core';

const NOTE: any = [
  {
    id: 1,
    title: "Test note  ",
    content: "Note text information goes here"
  },
  {
    id: 2,
    title: "Test note  ",
    content: "Note text information goes here"
  },
  {
    id: 3,
    title: "Test note  ",
    content: "Note text information goes here"
  },
  {
    id: 4,
    title: "Test note  ",
    content: "Note text information goes here"
  },
  {
    id: 5,
    title: "Test note  ",
    content: "Note text information goes here"
  },
];

export interface Note {
  id: number;
  title: string;
  content: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Notes';

  findNoteById(noteId: string) {
    return NOTE.find((note: { id: string; }) => note.id === noteId);
  }

  createNote(title:string, content:string) {
    const newNote = new NOTE(NOTE.length + 1, title, content);
    NOTE.push(newNote);
    console.log(title, content);
    return newNote;
  }

}
