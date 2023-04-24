import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from "@angular/core";
import { Note} from "../models/note";
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class NoteService {

  url = 'https://localhost:7224/api/Notes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}


  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url);
  }

  deleteNote(id: any) {
    return this.http.delete(this.url + '/' + id);
  }

  addNote() {

  }

}
