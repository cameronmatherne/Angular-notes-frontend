import {Component, ElementRef, OnInit, QueryList, ViewChild} from '@angular/core';

export interface Note {
  id: number;
  title: string;
  content: string;
}
const notes: Note[] = [];

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})


export  class NotesComponent {

  @ViewChild('dialog') dialog: any;
  @ViewChild('contentInput') contentInput: any;
  @ViewChild('titleInput') titleInput: any;
  @ViewChild('noteContent') noteContents: any;


  notes: Note[] = [
    // sample note
    {
      id: 1,
      title: "Note title goes here",
      content: "Note content goes here"
    },
    {
      id: 2,
      title: "Note title goes here",
      content: "Note content goes here"
    },
    {
      id: 3,
      title: "Note title goes here",
      content: "Note content goes here"
    },
    {
      id: 4,
      title: "Note title goes here",
      content: "Note content goes here"
    },
  ];
  createNote(title:string, content:string) {
    // append note with user input
    const newNote: Note = {
      id: Math.random(),
      title: title,
      content: content
    };
    // add note to list
    this.notes.push(newNote);

    // clear fields
    this.titleInput.nativeElement.value = '';
    this.contentInput.nativeElement.value = '';

    // close modal
    this.dialog.close();
    return newNote;
  }
  deleteNote(id: number) {
    // filter out note that matches the given id
    this.notes = this.notes.filter((e, i) => e.id !== id);
  }

  modifyNote(index: number) {
    const note = this.notes[index];
    const noteContent = this.noteContents.toArray()[index];
    const textarea = document.createElement('textarea');
    textarea.value = note.content;
    textarea.placeholder = note.content;
    this.noteContents.toArray()[index] = new ElementRef(textarea);
  }

}



