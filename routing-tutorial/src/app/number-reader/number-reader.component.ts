import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-number-reader',
  templateUrl: './number-reader.component.html',
  styleUrls: ['./number-reader.component.css']
})
export class NumberReaderComponent implements OnInit {

  nbr: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.nbr = this.route.snapshot.params.id;
  }

}
