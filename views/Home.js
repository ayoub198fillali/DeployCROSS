debugCharge&&console.log("(View)Home charged!");import AbstractView from"./AbstractView.js";export default class extends AbstractView{constructor(s){super(s),this.setTitle("AIE.NG")}async getHtml(){return`  <!-- Logo Right Buttom -->
    <img style="bottom: -17.5%;" class="aiengVerticalLogo"  src="imgs/d.png" alt="">
  
    <div class="iconPath">
    <i class="bx bx-home bx-border-circle"></i>
    >
  </div>

  <i
    onclick="history.back()"
    class="backButton bx bx-arrow-back bx-flashing-hover"
  ></i>

  <div class="mainTitle">HOME</div>
  <div Style="  justify-content: center;  " class="SwitchedPanel">
    <div class="grpChoixHorloge">
      <i id="horlogeGlobal" class="checked ChoixHorloge icon-GLOBAL"></i>
      <i id="horlogeLocal" class="ChoixHorloge icon-LOCAL"></i>
    </div>
    <div class="containerHome">
      <div class="ClockHolder">
        <div class="WeekDays">
          <span>sat</span>
          <span>sun</span>
          <span>mon</span>
          <span>tue</span>
          <span>wed</span>
          <span>thu</span>
          <span>fri</span>
        </div>

        <div class="TimeHolder">
          <div class="TimeOptions">
            <i class="icon-CLOCK-S" data-title="Time"></i>
            <i class="icon-STOPWATCH" data-title="StopWatch"></i>
            <i class="icon-CLOCK" data-title="CountDown"></i>
          </div>

          <div class="Numbers">
            <div class="NumberHolder H1">
              <span class="d1"></span>
              <span class="d2"></span>
              <span class="d3"></span>
              <span class="d4"></span>
              <span class="d5"></span>
              <span class="d6"></span>
              <span class="d7"></span>
            </div>

            <div class="NumberHolder H2">
              <span class="d1"></span>
              <span class="d2"></span>
              <span class="d3"></span>
              <span class="d4"></span>
              <span class="d5"></span>
              <span class="d6"></span>
              <span class="d7"></span>
            </div>

            <span>:</span>

            <div class="NumberHolder M1">
              <span class="d1"></span>
              <span class="d2"></span>
              <span class="d3"></span>
              <span class="d4"></span>
              <span class="d5"></span>
              <span class="d6"></span>
              <span class="d7"></span>
            </div>

            <div class="NumberHolder M2">
              <span class="d1"></span>
              <span class="d2"></span>
              <span class="d3"></span>
              <span class="d4"></span>
              <span class="d5"></span>
              <span class="d6"></span>
              <span class="d7"></span>
            </div>

            <span>:</span>

            <div class="NumberHolder S1">
              <span class="d1"></span>
              <span class="d2"></span>
              <span class="d3"></span>
              <span class="d4"></span>
              <span class="d5"></span>
              <span class="d6"></span>
              <span class="d7"></span>
            </div>

            <div class="NumberHolder S2">
              <span class="d1"></span>
              <span class="d2"></span>
              <span class="d3"></span>
              <span class="d4"></span>
              <span class="d5"></span>
              <span class="d6"></span>
              <span class="d7"></span>
            </div>
          </div>

          <div class="AlarmInput">
            <input type="number" placeholder="Enter Seconds" />
          </div>

          <div class="TimeFormat">
            <div class="Type">
              <span>12hr</span>
              <span class="active">24hr</span>
            </div>

            <div class="Formats">
              <span>am</span>
              <span>pm</span>
            </div>

            <div class="control">


              <span class="Start active"><i  style="display:block;" class="fas icon-PLAY-S"></i>Start</span>
              <span class="Pause"><i  style="display:block;" class="fas icon-PAUSE-S"></i>Pause</span>
              <span class="Stop active"><i  style="display:block;"class="fas icon-STOP-S"></i>Stop</span>

            </div>
          </div>
        </div>
      </div>
    </div>
    `}}