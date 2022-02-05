import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss']
})
export class Level1Component implements OnInit {
  @Output() nextEvent = new EventEmitter<number>();

  isWait = "";

  constructor() { }

  ngOnInit(): void {
    this.nopeButton();
  }

  next(id: number): void {
    this.nextEvent.next(id);
  }

  nopeButton() {
    $(function(){
      $(".tricky").on({
        mouseover:function(){
          $(this).css({
            left:(Math.random()*90)+"%",
            top:(Math.random()*90)+"%",
          });
        }
      });
      $(".btn-wrap").hover(function() {
        $(this).toggleClass('active');
      });
    });

    $('.tricky').bind('touchstart', function(){
      $(this).css({
        left:(Math.random()*90)+"%",
        top:(Math.random()*90)+"%"
      });
    })
  }
}

