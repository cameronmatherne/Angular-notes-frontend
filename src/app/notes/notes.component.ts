import {Component, ElementRef, OnInit, QueryList, ViewChild} from '@angular/core';
import { Note } from "../models/note";
import { NoteService } from "../services/NoteService";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from "@angular/core";
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})


export  class NotesComponent implements OnInit {


  private notesUrl = "https://localhost:7224/api/Notes";
  @ViewChild('dialog') dialog: any;
  @ViewChild('contentInput') contentInput: any;
  @ViewChild('titleInput') titleInput: any;
  @ViewChild('noteContent') noteContents: any;

  constructor(private noteService: NoteService,
              private http: HttpClient) {}


  notes: Note[] = [];
  private content: any;
  private title: number | undefined;

  ngOnInit() {
    this.getNotes()

  }

  getNotes() {
    this.noteService.getNotes().subscribe({
      next: (notes) => {
        this.notes = notes;
      },
      error: (err) => {

      }
    })
  }

  deleteNote(id: any) {
    this.noteService.deleteNote(id).subscribe({
      next: (() => this.getNotes())
    })
  }
  addNote() {
     this.title = this.titleInput.nativeElement.value;
     this.content = this.contentInput.nativeElement.value;



  }

  modifyNote(id: number) {

  }
}



