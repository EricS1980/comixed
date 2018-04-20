import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainPageComponent} from './main-page/main-page.component';
import {ComicListComponent} from './comic/comic-list/comic-list.component';
import {ImportComicsComponent} from './comic/import-comics/import-comics.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'library/comics', component: ComicListComponent},
  {path: 'library/import', component: ImportComicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
