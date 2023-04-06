/* import { Routes } from '@angular/router';
import { NoteListPage } from './notelist.page';

export const notelistroutes: Routes = [
  {
    path: 'notelist',
    component: NoteListPage,
    children: [
      {
        path: 'note',
        loadComponent: () =>
          import('../notes/note.page').then((m) => m.NotePage),
      },
      {
        path: '',
        redirectTo: '/notelist',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/notlist',
    pathMatch: 'full',
  },
]; */