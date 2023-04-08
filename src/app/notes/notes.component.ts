import {Component, OnInit, ViewChild} from '@angular/core';

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

  notes: Note[] = [
    {id: 1, title: "Note 1", content: "My content"},
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

}



