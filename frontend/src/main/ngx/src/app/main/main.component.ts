import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  username: string;

  constructor(private data: DataServiceService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.username = message)
  }

  newUsername(){
    this.data.changeMessage(this.username)
  }

}
