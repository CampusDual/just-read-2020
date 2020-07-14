import { Component, OnInit, Inject } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { OUserInfoService } from "ontimize-web-ngx";
import { ToastrService } from "ngx-toastr";
import { ListService } from "app/services/list.service";
import { BooksListResponse } from "app/model/list";

@Component({
  selector: "app-user-list-detail",
  templateUrl: "./user-list-detail.component.html",
  styleUrls: ["./user-list-detail.component.scss"],
})
export class UserListDetailComponent implements OnInit {
  listId: number;
  books: BooksListResponse;
  private routeSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    @Inject(OUserInfoService) private userInfo: OUserInfoService,
    private toastrService: ToastrService,
    private listService: ListService
  ) {}

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params) => {
      this.listId = Number(params["list_id"]);
    });
    this.loadBooks();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  loadBooks() {
    this.listService.getBooksList(this.listId).subscribe((data) => {
      this.books = data;
    });
  }

  getImageSrc(image: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "data:image/jpg;base64," + image
    );
  }
}