import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  public text: string;

  @Input()
  public cssClass: string;

  constructor() { }

  ngOnInit() {
  }

}
