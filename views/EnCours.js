debugCharge&&console.log("(View)En Cours!");import AbstractView from"./AbstractView.js";export default class extends AbstractView{constructor(i){super(i),this.setTitle("En Cours")}async getHtml(){return`
<img class="aiengVerticalLogo" src="imgs/d.png" alt="">

        <div class="iconPath">
            <i class="bx bx-home bx-border-circle"></i>
            >
            <i class="icon-SPINNER bx-spin"></i>
        </div>

        <i onclick="history.back()" class="backButton bx bx-arrow-back bx-flashing-hover"></i>

        <div class="mainTitle">En Cours</div>
        <div style="  box-shadow:none;background-color:transparent" class="SwitchedPanel">
<!-- 


-->
        <div  class="space"></div>

        <div class="grpChoixMouillage">
          <i id="allENCOUR" class="checked ChoixMouillage icon-ENCOURS-ALL"></i>
          <i id="surnavENCOUR" class="ChoixMouillage bx bx-navigation"></i>
          <i id="surpolENCOUR" class="ChoixMouillage icon-SURPOLE"></i>
          <i id="rsmSurfauneENCOUR" class="ChoixMouillage icon-WATER"></i>
        </div>


<!-- 
    Affichage
-->

        <div Style="    min-height: calc(100% + 200px);   overflow: auto;  margin-top: 40px;" class="containerViews">
            <header>En Cours :</header>
            <div  class="space"></div>
            <table id="ENCOURtableShow" style="width: 100% !important; margin-top: 25px;" class="dataTable content-table">
                <thead>
                  <tr>
                      <th style="width: 150px;" >Type/N°</th>
                      <th>Événement</th>
                      <th>Nom</th>
                      <th>Localisation / Secteur</th>
                      <th>Etat</th>
                      <th>Date</th>
                      <th style="text-align:center; width: 100px;" >Actions</th>
                  </tr>
                </thead>
                
                <tbody id=ENCOURtableShowBody>  
                </tbody>       

            </table>

            <div  class="space"></div>
            <div class="input-field ">
              <select Style="display: none; width: 200px;" id="changeChartByEnCour">
                <option value="1"selected>Événement</option>
                <option value="2">Nom</option>
                <option value="3">Localisation / Secteur</option>
                <option value="4">Etat</option>
                <option value="5">Date</option>

              </select>
            </div>

            <div id="showHideChartEnCour" class="showHideChart"></div>
            <div style="display: none;" id="chartTableDestEnCour"></div>

        </div>
<div  class="space"></div>
<div  class="space"></div>

</div>

    `}}