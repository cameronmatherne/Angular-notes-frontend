import {Component, ElementRef, OnInit, QueryList, ViewChild} from '@angular/core';
import { Note} from "../models/note";
import { NoteService } from "../services/NoteService";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from "@angular/core";
import { Observable, of } from 'rxjs';

const notes: Note[] = [];

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})


export  class NotesComponent {

  private notesUrl = "https://localhost:7224/api/Notes";
  @ViewChild('dialog') dialog: any;
  @ViewChild('contentInput') contentInput: any;
  @ViewChild('titleInput') titleInput: any;
  @ViewChild('noteContent') noteContents: any;

  constructor(private noteService: NoteService,
              private http: HttpClient) {}

  notes$: Observable<Note[]> | undefined
  notes: Note[] = []

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.notes$ = this.noteService.getNotes();
  }

  createNote(title: string, content: string) {
    title = title.trim();
    this.noteService.addNote({title} as Note)
      .subscribe(note => {
        this.notes.push(note);
      })
    // append note with user input

  }

}



