import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from "@angular/core";
import { Note} from "../models/note";
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class NoteService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}


  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>('https://localhost:7224/api/Notes');
  }

}
