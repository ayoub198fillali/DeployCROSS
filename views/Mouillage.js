debugCharge&&console.log("(View)Mouillage!");import AbstractView from"./AbstractView.js";export default class extends AbstractView{constructor(t){super(t),this.setTitle("Mouillage")}async getHtml(){return`
<img class="aiengVerticalLogo"  src="imgs/d.png" alt="">

<div class="iconPath">
<i class="bx bx-home bx-border-circle"></i>
>
<i class="icon-MOUILLAGE"></i>
</div>

<i onclick="history.back()" class="backButton bx bx-arrow-back bx-flashing-hover"></i>

<div class="mainTitle">Mouillage</div>
<div style="  box-shadow:none;background-color:transparent" class="SwitchedPanel">
<!-- 


-->
<div  class="space"></div>

<div class="grpChoixMouillage">
  <i id="bothMOUILLAGE" class="checked ChoixMouillage icon-YACHT-TANKER"></i>
  <i id="boatMOUILLAGE" class="ChoixMouillage icon-CHEMICALTANKER"></i>
  <i id="yachtMOUILLAGE" class="ChoixMouillage icon-YACHT"></i>
</div>


<!-- 
    Affichage
-->

<div Style="    min-height: calc(100% + 200px);   overflow: auto;  margin-top: 40px;" class="containerViews">
    <header>Mouillages En Cours :</header>
    <div  class="space"></div>
    <table id="MOUILLAGEtableShow" style="width: 100% !important; margin-top: 25px;" class="dataTable content-table">
        <thead>
          <tr>
              <th >Date</th>
              <th>Semaphore</th>
              <th>Nom</th>
              <th>Type</th>
              <th>Pav</th>
              <th>POB</th>
              <th>Position</th>
              <th>Secteur</th>
              <th>Etat</th>
              <th style="min-width: 150px;">Motif</th>
              <th style="text-align:center; width: 60px;" >Check</th>
              <th style="text-align:center; width: 100px;" >Actions</th>
          </tr>
        </thead>
        
        <tbody id=MOUILLAGEtableShowBody>  
        </tbody>       

    </table>
    
    <div  class="space"></div>
    <div Style="width: 250px;display: inline-block;" class="input-field ">
      <select Style="display: none; width: 200px;" id="changeChartByMouillage">
        <option value="0">Date</option>
        <option value="1">Semaphore</option>
        <option value="2">Nom</option>
        <option value="3" selected>Type</option>
        <option value="4">Pav</option>
        <option value="5">POB</option>
        <option value="6">Position</option>
        <option value="7">Secteur</option>
        <option value="8">Etat</option>
        <option value="9">Motif</option>
      </select>
    </div>
    <div id="showHideChartMouillage" class="showHideChart"></div>
    <div style="display: none;" id="chartTableDestMouillage"></div>

</div>
<div  class="space"></div>
<div  class="space"></div>
</div>

    `}}