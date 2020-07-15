import { Component, OnInit } from "@angular/core";
import { ListService } from "app/services/list.service";
import { ListResponse, List } from "app/model/list";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-user-lists",
  templateUrl: "./user-lists.component.html",
  styleUrls: ["./user-lists.component.scss"],
})
export class UserListsComponent implements OnInit {
  lists: ListResponse;
  list_id: number;
  status = false;
  check = false;
  list: List = {
    name: "",
    description: "",
    user: "",
    createDate: new Date(),
  };

  constructor(
    private listService: ListService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.loadLists();
  }

  saveId(id: number) {
    this.list_id = id;
  }

  loadLists() {
    this.listService.getUserLists().subscribe((data) => {
      this.lists = data;
      if (this.lists.data.length != undefined) {
        this.check = true;
      } else {
        this.check = false;
      }
    });
  }

  deleteList() {
    this.listService.deleteList(this.list_id).subscribe(
      (data) => {
        this.toastrService.info("Lista borrada correctamente.");
        this.loadLists();
      },
      (error) => {
        this.toastrService.error("No se ha podido borrar la lista", "Error");
      }
    );
  }

  createList() {
    if (this.validInput()) {
      this.listService.newList(this.list).subscribe((data) => {
        this.ngOnInit();
        this.toastrService.success("Lista creada correctamente.", "Éxito");
      });
    } else {
      this.toastrService.error(
        "Recuerda, es obligatorio ponerle un nombre a la lista.",
        "Error"
      );
    }
  }

  validInput() {
    if (this.list.name.length == 0) {
      this.status = true;
      return false;
    } else {
      this.status = false;
      return true;
    }
  }

  showForm(value: boolean) {
    this.status = value;
  }
}
