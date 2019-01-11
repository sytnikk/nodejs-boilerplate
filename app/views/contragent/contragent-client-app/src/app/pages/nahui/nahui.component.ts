import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nahui',
  templateUrl: './nahui.component.html',
  styleUrls: ['./nahui.component.scss']
})
export class NahuiPageComponent implements OnInit {
  public id: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  public onButtonClick(e): void {
    console.log(e);
    this.id = 'click';
  }
}
