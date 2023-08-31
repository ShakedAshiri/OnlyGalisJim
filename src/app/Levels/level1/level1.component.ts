import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';
import {LevelService} from "../../level.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss']
})
export class Level1Component implements OnInit {
  @Output() nextEndEvent = new EventEmitter<number>();

  private userMovedSubscription!: Subscription;
  isWait = false;


  constructor(public levelService: LevelService) {}


  ngOnInit(): void {
    this.nopeButton();
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

  startTimer() {
    this.timer();
    let moves = 0;
    this.userMovedSubscription = this.levelService.getUserInteraction.subscribe(() => {

      console.log("user did stuff: " + moves);
      // HA! YOU MOVED!!
      if (moves >= 2) {
        console.log("YOU MOVED!")

        this.onTimesUp();
        this.userMovedSubscription.unsubscribe();
        this.levelService.nextLevel(3);
      } else {
        moves++;
      }
    })
  }

  private timerInterval = 60;

  private onTimesUp = () => {
    clearInterval(this.timerInterval);
  }

  private timer() {
    // Credit: Mateusz Rybczonec

    const FULL_DASH_ARRAY = 230;
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

    const TIME_LIMIT = 10;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;

    this.timerInterval = setInterval(() => {
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
        this.onTimesUp();
        this.levelService.nextLevel(1);
      }
    }, 1000);

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
      ).toFixed(0)} 232`;
      $("#base-timer-path-remaining").attr("stroke-dasharray", circleDasharray);
    }

  }
}

