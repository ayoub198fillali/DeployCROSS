debugCharge&&console.log("(View)JournalQuart!");import AbstractView from"./AbstractView.js";export default class extends AbstractView{constructor(t){super(t),this.setTitle("Journal De Quart")}async getHtml(){return`
      <img  class="aiengVerticalLogo"  src="imgs/d.png" alt="">

      <div class="iconPath">
      <i class="bx bx-home bx-border-circle"></i>
      >
      <i class="icon-QUART"></i>
      </div>

      <i onclick="history.back()" class="backButton bx bx-arrow-back bx-flashing-hover"></i>

      <div class="mainTitle">Journal De Quart</div>
      <div style="  box-shadow:none;background-color:transparent" class="SwitchedPanel">
      <!-- 

      -->
      <div  class="space"></div>

      <!-- 
          Affichage
      -->

      <div Style="min-height: calc(100% + 200px);   overflow: auto;  margin-top: 40px;" class="containerViews">
          <header>Journal de quart :</header>

          <div id="StatusJQ" style="width:30px;height:30px;background:green; border-radius: 50%;position: absolute;right:10px;z-index:2;top: 20px;"></div>
          <form id="formJQ" style="overflow: visible;display:block"class="thisForms"  method="POST">

          <!-- ----------------------------- First Grp ----------------------------- -->
              <div class="fields">
                <div style="justify-content: center; align-items: center; width: 100% !important;" class="input-field cl2">
                  <label>Date :</label>
                  <input id="mainDateJQ" name="mainDate" type="date" style="width: 400px;" >     
                  </input>
                </div>
              </div>

              <div class="fields">
                <div class="input-field cl2">
                  <label>Officier de permanance / CMS :</label>
                  <select id="officierDePermananceJQ" name='officierDePermanance' >
                  </select>
                </div>

                <div class="input-field cl2">
                  <label>Officier de renfort :</label>
                  <select id="officierDeRenfortJQ" name="officierDeRenfort" >
                  </select>
                </div>

                <div class="input-field cl2">
                  <label>Officier de garde :</label>
                  <select id="officierDeGardeJQ" name="officierDeGarde" >
                  </select>
                </div>

                <div class="input-field cl2">
                <label>Technicien d'astreinte :</label>
                  <select id="officierDeTechnicienJQ" name="officierDeTechnicien" >
                  </select>
                </div>

              </div>
              <!-- ----------------------------- TABLE ----------------------------- -->
              <div style="border-radius: 5px;height: 12px;margin-bottom: -20px;margin-top: 30px;margin-left: 12%;" class="progressa" >
                <div id="progressJQ" class="progressab" style="height: 100%;background-color: rgb(178, 222, 75);"></div>
              </div>

              <table id="tableTimeJQ" style="width: 100%; margin-top: 25px;" class="dataTable content-table">
              <thead>
                <tr>
                    <th style="width: 40px;"> </th>
                    <th style="width: 80px;" >00:00 / 04:00</th>
                    <th style="width: 80px;" >04:00 / 08:00</th>                    
                    <th style="width: 80px;" >08:00 / 12:00</th>
                    <th style="width: 80px;" >12:00 / 16:00</th>
                    <th style="width: 80px;" >16:00 / 20:00</th>
                    <th style="width: 80px;" >20:00 / 24:00</th>
                </tr>
              </thead>

              <tbody>  

              <!-- CDQ -->
                <tr>
                  <td style="font-weight: bold;">C.D.Q</td>
                  <td>
                    <select style="width: 90%;" class="CDQclassJQ" id="CDQ1JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="CDQclassJQ" id="CDQ2JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="CDQclassJQ" id="CDQ3JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="CDQclassJQ" id="CDQ4JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="CDQclassJQ" id="CDQ5JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="CDQclassJQ" id="CDQ6JQ" >
                    </select>
                  </td>
                </tr>

                <!-- TELEC -->
                <tr>
                  <td style="font-weight: bold;">TELEC</td>
                  <td>
                    <select style="width: 90%;" class="TRANSclassJQ" id="TRANS1JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="TRANSclassJQ" id="TRANS2JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="TRANSclassJQ" id="TRANS3JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="TRANSclassJQ" id="TRANS4JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="TRANSclassJQ" id="TRANS5JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="TRANSclassJQ" id="TRANS6JQ" >
                    </select>
                  </td> 
                </tr>

                <!-- SAR -->
                <tr>
                  <td style="font-weight: bold;">SAR</td>
                  <td>
                    <select style="width: 90%;" class="SARclassJQ" id="SAR1JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="SARclassJQ" id="SAR2CDQJQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="SARclassJQ" id="SAR3JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="SARclassJQ" id="SAR4JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="SARclassJQ" id="SAR5JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="SARclassJQ" id="SAR6JQ" >
                    </select>
                  </td>
                </tr>

                <!-- Renfort -->
                <tr>
                  <td style="font-weight: bold;">SURNAV</td>
                  <td>
                    <select style="width: 90%;" class="RenfortclassJQ" id="Renfort1JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="RenfortclassJQ" id="Renfort2JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="RenfortclassJQ" id="Renfort3JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="RenfortclassJQ" id="Renfort4JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="RenfortclassJQ" id="Renfort5JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="RenfortclassJQ" id="Renfort6JQ" >
                    </select>
                  </td>
                </tr>

                <!-- SAR2CDQ -->
                <tr>
                  <td style="font-weight: bold;">CDQ SAR 2</td>
                  <td>
                    <select style="width: 90%;" class="SAR2CDQclassJQ" id="SAR2CDQ1JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="SAR2CDQclassJQ" id="SAR2CDQ2JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="SAR2CDQclassJQ" id="SAR2CDQ3JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="SAR2CDQclassJQ" id="SAR2CDQ4JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="SAR2CDQclassJQ" id="SAR2CDQ5JQ" > 
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="SAR2CDQclassJQ" id="SAR2CDQ6JQ" >
                    </select>
                  </td>

                <!-- SAR2ADQ -->
                <tr>
                  <td style="font-weight: bold;">ADJ SAR 2</td>
                  <td>
                    <select style="width: 90%;" class="SAR2ADQclassJQ" id="SAR2ADQ1JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="SAR2ADQclassJQ" id="SAR2ADQ2JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="SAR2ADQclassJQ" id="SAR2ADQ3JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="SAR2ADQclassJQ" id="SAR2ADQ4JQ" >
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="SAR2ADQclassJQ" id="SAR2ADQ5JQ" > 
                    </select>
                  </td>

                  <td>
                    <select style="width: 90%;" class="SAR2ADQclassJQ" id="SAR2ADQ6JQ" >
                    </select>
                  </td>

                </tr>

              </tbody>       
            </table>
            <div class="spaceForm"></div>
            <div class="spaceForm"></div>

            <!-- ----------------------------- Six Grp ----------------------------- -->
            <div class="FormGrpSurnav ">
              <span class="title">Événement :</span>
              <div class="childFormGrp showFormGrpSurnav">
                <div class="fields">

                  <div class="input-field">
                    <label>Quart De :</label>
                    <select id="quartDeJQ">
                      <option>00h00 / 04h00</option> <option>04h00 / 08h00</option>
                      <option value='08h00 / 12h00'>08h00 / 12h00</option> <option value='12h00 / 16h00'>12h00 / 16h00</option>
                      <option value='16h00 / 20h00'>16h00 / 20h00</option> <option value='20h00 / 24h00'>20h00 / 24h00</option>
                    </select>
                  </div>

                  <div class="input-field">
                    <label>Date :</label>
                    <input id="dateJQ" type="date" />
                  </div>

                  <div class="input-field">
                    <label>Heure (UTC)</label>
                    <input id="aJQ" type="time" />
                  </div>

                  <div class="input-field cl2-3">
                    <label>Evénements</label>
                    <textarea id="textAreaJQ"></textarea>
                  </div>

                  <div class="input-field cl1-3">
                    <div style=" display: flex; flex-wrap: wrap; align-content: center; justify-content: center; height:115px;     padding-top: 13.78px; ">
                      <select id="addActionJQ" style="margin:0; width: 230px;" >
                      </select>     

                      <button id="addButtonJQ" type="button" style="margin-bottom:0">
                        <span class="btnText">Add</span>
                      </button>    
                    </div>
                  </div>
                  
                  <div class="input-field cl2-3">
                    <p style="color: red; font-size: smaller; font-style: italic;" >* Attention à la date pour les saisies durant le 04h00-08h00 on passe à la journée suivante par exemple le 04h00 à 08h00 de la journée de service du 10 se déroule le 11.</p>
                  </div>
                  
                  <div  class="space"></div>
                  <table id="CHRONOtableShowJQ" style="width: 100%; margin-top: 25px;" class="dataTable content-table">
                    <thead>
                      <tr>
                        <th style="width: 40px;">Seq</th>
                        <th style="width: 150px;">Quart De</th>
                        <th style="width: 80px;" >Date</th>
                        <th style="width: 80px;">Heure</th>
                        <th>Evénements</th>
                        <th style="text-align:center; width: 80px;" >Actions</th>
                      </tr>
                    </thead>

                    <tbody id="CHRONOeventTableJQ">  
                    </tbody>       
                  </table>

                </div>
                <div class="spaceForm"></div>
              </div>                        
            </div>
            <button  type="submit" name="submit" value="Submit">
              <span class="btnText">Envoyer</span>
            </button>
          </form>



      </div>
      <div  class="space"></div>
      <div  class="space"></div>
      </div>

    `}}