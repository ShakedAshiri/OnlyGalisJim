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

  constructor() {}


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

  timer() {
    // Credit: Mateusz Rybczonec

    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 10;
    const ALERT_THRESHOLD = 5;

    const COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };

    const TIME_LIMIT = 60;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = 60;
    let remainingPathColor = COLOR_CODES.info.color;

    startTimer();

    function onTimesUp() {
      clearInterval(timerInterval);
    }

    function startTimer() {
      timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        $("#base-timer-label").html(function() {
          return formatTime(
            timeLeft
          );
        });
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        if (timeLeft === 0) {
          onTimesUp();
        }
      }, 1000);
    }

    function formatTime(time: number) {
      const minutes = Math.floor(time / 60);
      let seconds = (time % 60);

      if (seconds < 10) {
        seconds = +`0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    }

    function setRemainingPathColor(timeLeft: number) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        $("#base-timer-path-remaining").removeClass(warning.color)
        $("#base-timer-path-remaining").addClass(alert.color)

      } else if (timeLeft <= warning.threshold) {
        $("#base-timer-path-remaining").removeClass(info.color)
        $("#base-timer-path-remaining").addClass(warning.color)
      }
    }

    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }

    function setCircleDasharray() {
      const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
      ).toFixed(0)} 283`;
      $("#base-timer-path-remaining").attr("stroke-dasharray", circleDasharray);
    }

  }
}

