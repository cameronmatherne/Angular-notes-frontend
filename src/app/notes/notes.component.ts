import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

export interface Note {
  id: number;
  title: string;
  content: string;
}
const noters: Note[] = [];

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export  class NotesComponent {

  @ViewChild('dialog') dialog: any;
  @ViewChild('contentInput') contentInput: any;
  @ViewChild('titleInput') titleInput: any;
  @ViewChild('noteContent') noteContent: any;


  notes: Note[] = [
    // sample note
    {
      id: 1,
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
    this.dialog.close();
    return newNote;
  }
  deleteNote(id: number) {
    // filter out note that matches the given id
    this.notes = this.notes.filter((e, i) => e.id !== id);
  }

  modifyNote(id: number) {
    const noteIndex = this.notes.findIndex(note => note.id === id);
    const div = this.noteContent;
    const textarea = document.createElement('textarea');
    textarea.value = this.notes[noteIndex].content;

  }
}



