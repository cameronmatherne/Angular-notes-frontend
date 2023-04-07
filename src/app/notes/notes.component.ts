import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../modal-component/modal.component";

export interface Note {
  id: string;
  name: string;
  content: string;
}
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})


export  class NotesComponent {

}



