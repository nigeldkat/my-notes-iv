import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import * as internal from 'stream';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  //styleUrls: ['./notelist.page.scss'],  //using same css as parent
  standalone: true,
  imports: [IonicModule],
})
export class NotePage implements OnInit {
  public id: string = "";
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}