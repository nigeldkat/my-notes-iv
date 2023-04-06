import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  // {
  //   path: 'notelist',
  //   loadChildren: () =>
  //     import('./notelist/notelist.routes').then((m) => m.notelistroutes),
  // },
  {
    path: 'notelist',
    loadComponent: () =>
      import('./notelist/notelist.page').then((m) => m.NoteListPage),
  },
  {
    path: 'note/:id',
    loadComponent: () =>
      import('./notelist/note.page').then((m) => m.NotePage),
  },
];
