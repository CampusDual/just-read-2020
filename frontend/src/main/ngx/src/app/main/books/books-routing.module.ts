import { BooksDetailComponent } from "./books-detail/books-detail.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { BooksHomeComponent } from "./books-home/books-home.component";

const routes: Routes = [
  {
    path: "",
    component: BooksHomeComponent,
  },
  {
    path: ":BOOKID",
    component: BooksDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
