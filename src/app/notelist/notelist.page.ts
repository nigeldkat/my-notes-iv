import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.page.html',
  styleUrls: ['./notelist.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class NoteListPage implements OnInit {
  //public folder!: string;
  //private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    //this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}