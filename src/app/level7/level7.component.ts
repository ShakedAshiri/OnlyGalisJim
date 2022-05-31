import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-level7',
  templateUrl: './level7.component.html',
  styleUrls: ['./level7.component.scss']
})
export class Level7Component implements OnInit {
  trailSpeed = 7;

  constructor() { }

  ngOnInit(): void {
    this.Dino();
  }

  Dino() {

    $(document).ready(function() {
      var jimTopLow = "27vh";
      var jimTopHigh = "6vh";
      var jimPosRight = "148px";
      var trailWidth = "100vw";
      var rockRight = "70vw";
      var rockSpeed = 3000  ;

      var ilk = 0;
      var iki = 0;
      var sifirla = 0;
      var oldu = 10;
      var bb = 0;
      var gozkirpma = 0;
      var taslar = 1750;
      var deneme = 0;
      var deneme2 = 0;
      var ziplayan = 0;
      var ops = 0;
      var ops1 = 0;
      var ops2 = 0;
      var ops3 = 0;
      var ops4 = 0;
      var ops5 = 0;
      var ops6 = 0;
      var ops7 = 0;
      var trailAnimationInterval = 1000;
      var yurume = 0;
      var ziplatmayan = 0;
      var buldum = 0;
      var hjs = 0;
      var hjss = 0;
      var taslarr = 0;
      var tas1 = 0;
      var tas2 = 0;
      var tas3 = 0;
      var tas11 = 0;
      var tas12 = 0;
      var tas13 = 0;
      var trailAnimationInterval1 = 0;
      var trailAnimationInterval2 = 0;
      var trailAnimationInterval3 = 0;
      var trailAnimationInterval4 = 0;
      var taslar2 = 0;
      var ziplayan3 = 0;
      var yurume3 = 0;
      var yurume8 = 0;
      var rockCactus1 = 0;
      var rockCactus2 = 0;
      setInterval(function() {

        var offsetOuch = $(".rockCactus").offset();
        var offsetJim = $(".dinoJim1").offset();

        if ($('.dinoJim').hasClass('dinoJim1')) {
          offsetJim = $(".dinoJim1").offset();
        }
        if ($('.dinoJim').hasClass('dinoJim2')) {
          offsetJim = $(".dinoJim2").offset();
        }

        /*
        if (offset && offset2) {

          if (offset2.left && offset.left) {
            console.log("jim offset left:" + offset2.left)
            console.log("ouch offset left:" + offset.left)
          }
          // @ts-ignore
          if (offset2.right && offset.right) {
            // @ts-ignore
            console.log("jim offset right:" + offset2.right)
            // @ts-ignore
            console.log("ouch offset right:" + offset.right)
          }

        }*/



        // @ts-ignore
        var hh = offsetJim.left - offsetOuch.left;

        //console.log("offset diff:" + hh)
//-6   16
        if (-100 <= hh && hh <= 50)
        {
          // CHECK IF GAME OVER
          // @ts-ignore

          if (offsetOuch.top - offsetJim.top <= 230)
          {
            console.log("GAME OVER")

            var olc = $.Event('keydown', {
              keyCode: 999
            });
            $(document).trigger(olc);

          }
        }

      }, 3);
      gozkirpma = setInterval(function() {
        $(".dinoJim1 .goz").hide();
        setTimeout(function() {
          $(".dinoJim1 .goz").show();
        }, 250);
      }, 3000);

      $(".tikla").click(function() {
        var tikla = $.Event('keydown', {
          keyCode: 32
        });
        $(document).trigger(tikla);
      });
      $(document).keydown(function(e) {
        if (e.keyCode == 13) {
          if (ops == 10) {
            var enter = $.Event('keydown', {
              keyCode: 32
            });
            $(document).trigger(enter);
          }

          // GO GO GO
        } else if (e.keyCode == 38 || e.keyCode == 32) {

          // start moving
          $(".trail1").addClass("move");
          $(".trail2").addClass("move");
          $(".trail3").addClass("move");


          if (deneme == deneme2) {
            $(".tekrar").css("display", "none");
            ilk++;
            deneme2++;
            sifirla = 0;
            clearInterval(ziplayan3);
            clearTimeout(yurume3);
            clearTimeout(yurume8);
            clearTimeout(ops1);
            clearTimeout(ops2);
            clearTimeout(ops3);
            clearTimeout(ops4);
            clearTimeout(ops5);
            clearTimeout(ops6);
            clearTimeout(ops7);
            $(".dinoJim1 .goz").css("border", "0");
            $(".dinoJim1 .goz").css("background-color", "#fff");
            $(".dinoJim1 .agiz").css("display", "none");
            $(".dinoJim1").css("-webkit-transition", "0.35s");
            $(".dinoJim1").css("transition", "0.35s");
            if (taslar2 == 0) {
              taslar2 = 10;
              //$(".trail").css("margin-right", "-1000");
              //$(".trail2").css("margin-right", "642px");
              $(".rockCactus").css("right", rockRight);
              buldum = setTimeout(function() {
                taslar = 0;
                function doSomething() {}
                (function loop() {
                  var rand = Math.floor(Math.random() * 2000) + 1000;
                  taslarr = setTimeout(function() {
                    var aa = Math.floor(Math.random() * 3) + 1;
                    if (aa == bb) {
                      aa++;
                    }
                    bb = aa;
                    doSomething();
                    loop();
                  }, rand);
                }());
              }, taslar);
              /*trailAnimationInterval1 = setTimeout(function() {
                $('.trail').animate({
                  left: '955px'
                }, 2000, 'linear');

                //$('.trail2').animate({

                //  marginRight: '0'
                //}, 2000, 'linear');
                trailAnimationInterval2 = setTimeout(function() {
                  $('.trail').animate({
                    left: '100px'
                  }, 0, 'linear');
                  //$('.trail2').animate({
                  //  marginRight: '-642px'
                  //}, 2000, 'linear');
                  $('.trail').animate({
                    left: '0px'
                  }, 2000, 'linear');
                }, 2000);
                /*
                trailAnimationInterval3 = setInterval(function() {
                  $('.trail2').animate({
                    marginRight: '642px'
                  }, 0, 'linear');
                  $('.trail').animate({
                    marginRight: '-642px'
                  }, 2000, 'linear');
                  $('.trail2').animate({
                    marginRight: '0'
                  }, 2000, 'linear');
                  trailAnimationInterval4 = setTimeout(function() {
                    $('.trail').animate({
                      marginRight: '642px'
                    }, 0, 'linear');
                    $('.trail2').animate({
                      marginRight: '-642px'
                    }, 2000, 'linear');
                    $('.trail').animate({
                      marginRight: '0'
                    }, 2000, 'linear');
                  }, 2000);
                }, 4000);
              }, trailAnimationInterval);


               */
              setTimeout(function() {


                rockCactus1 = setInterval(function() {

                  $('.rockCactus').animate({
                    right: '-42px'
                  }, rockSpeed, 'linear');

                  rockCactus2 =  setTimeout(function() {
                    $('.rockCactus').animate({
                      right: rockRight
                    }, 0, 'linear');
                  }, rockSpeed);

                }, 3000);


              }, 2000);
            }
            if (ilk == 1) {
              clearInterval(gozkirpma);
              $(".goz").show();
              setTimeout(function() {
                //$(".trail").css("width", trailWidth);
                iki++;
              }, 700);
            }
            if (oldu == 10) {
              hjss = setTimeout(function() {
                $(".dinoJim1").css("top", jimTopHigh);
              }, 0);
              hjs = setTimeout(function() {
                $(".dinoJim1").css("top", jimTopLow);
              }, 350);
            }
            if (oldu == 0) {
              $(".dinoJim1").css("-webkit-transition", "0.0s");
              $(".dinoJim1").css("transition", "0.0s");
              $(".dinoJim1").css("top", jimTopLow);
              ops1 = setTimeout(function() {
                $(".bacak").removeClass("bacak1");
                $(".bacak").removeClass("bacak3");
                $(".bacak").addClass("bacak2");
              }, 0);
              ops2 = setTimeout(function() {
                $(".bacak").removeClass("bacak2");
                $(".bacak").addClass("bacak3");
              }, 100);
              ops3 = setTimeout(function() {
                $(".bacak").removeClass("bacak3");
                $(".bacak").addClass("bacak2");
              }, 200);
              ops4 = setTimeout(function() {
                $(".bacak").removeClass("bacak2");
                $(".bacak").addClass("bacak3");
              }, 300);
              ops5 = setTimeout(function() {
                $(".bacak").removeClass("bacak3");
                $(".bacak").addClass("bacak2");
              }, 400);
              ops6 = setTimeout(function() {
                $(".bacak").removeClass("bacak2");
                $(".bacak").addClass("bacak3");
              }, 500);
              ops7 = setTimeout(function() {
                $(".bacak").removeClass("bacak3");
                $(".bacak").addClass("bacak2");
              }, 600);
            }
            if (ilk > 1) {
              oldu = 10;
              clearTimeout(yurume);
              clearInterval(ziplayan);
              clearTimeout(ziplatmayan);
              $(".bacak").addClass("bacak1");
              $(".bacak").removeClass("bacak3");
              $(".bacak").removeClass("bacak2");
            }
            ziplatmayan = setTimeout(function() {
              ziplayan = setInterval(function() {
                $(".bacak").removeClass("bacak1");
                $(".bacak").removeClass("bacak2");
                $(".bacak").addClass("bacak3");
                yurume = setTimeout(function() {
                  $(".bacak").removeClass("bacak1");
                  $(".bacak").removeClass("bacak3");
                  $(".bacak").addClass("bacak2");
                }, 100);
              }, 200);
            }, 500);
            if (ops == 0) {
              setTimeout(function() {
                //$(".dinoJim1").css("right", jimPosRight);
                deneme2 = 0;
              }, 650);
            } else if (ops == 10) {
              deneme2 = 0;
              ops = 0;
            }
          }
        } else if (e.keyCode == 999) {

          // GAME OVER
          if (ilk > 0) {
            if (sifirla == 1) {
              var es = $.Event('keydown', {
                keyCode: 40
              });
              var esd = $.Event('keyup', {
                keyCode: 40
              });
              $(document).trigger(es);
              $(document).trigger(esd);
            }
            $(".trail1").removeClass("move")
            $(".trail2").removeClass("move")
            $(".trail3").removeClass("move")

            $(".dinoJim1").css("-webkit-transition", "0s");
            $(".dinoJim1").css("transition", "0s");
            $(".dinoJim1").animate({
              top: "+=0"
            }, 0);
            deneme2 = 0;
            oldu = 0;
            $(".tekrar").css("display", "block");
            ops = 10;
            clearTimeout(rockCactus2);
            clearInterval(rockCactus1);
            $(".rockCactus").stop();
            clearTimeout(buldum);
            clearTimeout(taslarr);
            clearTimeout(tas1);
            clearTimeout(tas11);
            clearTimeout(tas12);
            clearTimeout(tas13);
            clearTimeout(tas2);
            clearTimeout(tas3);
            $(".tas1").stop();
            $(".tas2").stop();
            $(".tas3").stop();
            taslar2 = 0;
            trailAnimationInterval = 0;
            clearTimeout(trailAnimationInterval1);
            clearTimeout(trailAnimationInterval2);
            clearInterval(trailAnimationInterval3);
            clearTimeout(trailAnimationInterval4);
            $(".trail").stop();
            $(".trail2").stop();
            clearTimeout(yurume);
            clearInterval(ziplayan);
            clearTimeout(hjs);
            clearTimeout(hjss);
            clearTimeout(ziplatmayan);
            clearInterval(ziplayan3);
            clearTimeout(yurume3);
            clearTimeout(yurume8);
            clearTimeout(ops1);
            clearTimeout(ops2);
            clearTimeout(ops3);
            clearTimeout(ops4);
            clearTimeout(ops5);
            clearTimeout(ops6);
            clearTimeout(ops7);
            $(".dinoJim1 .goz").css("border", "solid 1px white");
            $(".dinoJim1 .goz").css("background-color", "#535353");
            $(".dinoJim1 .agiz").css("display", "block");
            setTimeout(function() {
              $(".bacak").removeClass("bacak3");
              $(".bacak").removeClass("bacak2");
              $(".bacak").addClass("bacak1");
              $(".tas1").stop();
              $(".tas2").stop();
              $(".tas3").stop();
            }, 1);
          }
        } else if (e.keyCode == 40) {
          if (ilk > 0 && iki > 0) {
            sifirla = 1;
            if (oldu == 10) {
              clearTimeout(yurume);
              clearInterval(ziplayan);
              clearTimeout(hjs);
              clearTimeout(ziplatmayan);
              clearInterval(ziplayan3);
              clearTimeout(yurume3);
              clearTimeout(yurume8);
              $(".bacak").addClass("bacak1");
              $(".bacak").removeClass("bacak3");
              $(".bacak").removeClass("bacak2");
              $(".dinoJim1").css("-webkit-transition", "0s");
              $(".dinoJim1").css("transition", "0s");
              $(".dinoJim2").css("top", "102px");
              $(".dinoJim2").css("left", "21px");
              $(".bacak").addClass("bacak1");
              $(".bacak").removeClass("bacak3");
              $(".bacak").removeClass("bacak2");
            }
          }
        }
      });
      $(document).keyup(function(e2) {
        if (e2.keyCode == 40) {
          if (ilk > 0 && iki > 0) {
            sifirla = 0;
            if (oldu == 10) {
              setTimeout(function() {
                $(".bacak").removeClass("bacak1");
                $(".bacak").removeClass("bacak2");
                $(".bacak").addClass("bacak3");
              }, 0);
              yurume8 = setTimeout(function() {
                $(".bacak").removeClass("bacak3");
                $(".bacak").addClass("bacak2");
              }, 100);
              ziplayan3 = setInterval(function() {
                $(".bacak").removeClass("bacak2");
                $(".bacak").addClass("bacak3");
                yurume3 = setTimeout(function() {
                  $(".bacak").removeClass("bacak3");
                  $(".bacak").addClass("bacak2");
                }, 100);
              }, 200);
              $(".dinoJim1").css("top", jimTopLow);
              //$(".dinoJim1").css("right", jimPosRight);
              deneme2 = 0;
            }
          }
        }
      });
    });
  }

}
