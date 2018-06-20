import { Component, OnInit } from '@angular/core';
import { SwcharService } from './swchar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-swchar',
  templateUrl: './swchar.component.html',
  styleUrls: ['./swchar.component.css']
})
export class SwcharComponent implements OnInit {

  private localSwChar: Observable;

  constructor(private swcharService: SwcharService) { }

  ngOnInit() {

    // subscribes the observable in 'swchar.service.ts'
    this.swcharService.getChar().subscribe(data => this.localSwChar = data);
  }
}
