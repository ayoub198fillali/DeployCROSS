debugCharge&&console.log("(View)otherWin!");import AbstractView from"./AbstractView.js";export default class extends AbstractView{constructor(i){super(i),this.setTitle("OtherWin")}async getHtml(){return`
      <img  class="aiengVerticalLogo"  src="imgs/d.png" alt="">

      <div class="iconPath">
        <i class="bx bx-home bx-border-circle"></i>
          > 
        <i class="bx bx-desktop"></i>
      </div>
      
      <i onclick="history.back()" class="backButton bx bx-arrow-back bx-flashing-hover"></i>

      <div class="mainTitle">Web Sites</div>
      <div style="  box-shadow:none;background-color:transparent" class="SwitchedPanel">
          <!-- 
      
      
      -->
      <div  class="space"></div>
      <div class="grpChoixMouillage">
        <i style="font-size:85px" id="aiengOTHERWIN" class="checked ChoixMouillage icon-CROSSMED"></i>
        <i style="font-size:75px" id="seamisOTHERWIN" class="ChoixMouillage icon-LOGO-SEAMIS"></i>
        <i style="font-size:75px" id="seamisMapOTHERWIN" class="ChoixMouillage icon-SeamisMap"></i>
      </div>
      <div  class="space"></div>

          <div style=" max-height:none;" class="containerViews">              
            <iframe src="http://172.23.143.175/lagarde/index.php" Style="width:100% ;min-height:1500px ">
            </iframe>
          </div>
      
          <!-- 
              Affichage
          -->
      
          <div  class="space"></div>
          <div  class="space"></div>
      </div>
      `}}