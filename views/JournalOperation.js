debugCharge&&console.log("(View)Journaux Opérations!");import AbstractView from"./AbstractView.js";export default class extends AbstractView{constructor(i){super(i),this.setTitle("Journaux Opérations")}async getHtml(){return`
<img  class="aiengVerticalLogo"  src="imgs/d.png" alt="">

<div class="iconPath">
<i class="bx bx-home bx-border-circle"></i>
 >
<i class="bx bx-folder"></i>          
</div>

<i onclick="history.back()" class="backButton bx bx-arrow-back bx-flashing-hover"></i>

<div class="mainTitle">Journaux Opérations</div>
<div style="  box-shadow:none;background-color:transparent" class="SwitchedPanel">
<!-- 


-->
<div  class="space"></div>

<div class="grpChoixMouillage">
  <i id="allJOURNALOPERATION" class="checked ChoixMouillage icon-ENCOURS-ALL"></i>
  <i id="surnavJOURNALOPERATION" class="ChoixMouillage bx bx-navigation"></i>
  <i id="surpolJOURNALOPERATION" class="ChoixMouillage icon-SURPOLE"></i>
  <i id="rsmSurfauneJOURNALOPERATION" class="ChoixMouillage icon-WATER"></i>
</div>


<!-- 
    Affichage
-->

<div Style="    min-height: calc(100% + 200px);   overflow: auto;  margin-top: 40px;" class="containerViews">
    <header>Journal Operation :</header>
    <div  class="space"></div>
    <table id="JOURNALOPERATIONtableShow" style="width: 100% !important; margin-top: 25px;" class="dataTable content-table">
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
        
        <tbody id=JOURNALOPERATIONtableShowBody>  
        </tbody>       

    </table>

    <div  class="space"></div>
    <div class="input-field ">
      <select Style="display: none; width: 200px;" id="changeChartByJournalOperation">
        <option value="1"selected>Événement</option>
        <option value="2">Nom</option>
        <option value="3">Localisation / Secteur</option>
        <option value="4">Etat</option>
        <option value="5">Date</option>

      </select>
    </div>

    <div id="showHideChartJournalOperation" class="showHideChart"></div>
    <div style="display: none;" id="chartTableDestJournalOperation"></div>

</div>
<div  class="space"></div>
<div  class="space"></div>
</div>

    `}}