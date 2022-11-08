debugCharge&&console.log("(View)Setting!");import AbstractView from"./AbstractView.js";export default class extends AbstractView{constructor(t){super(t),this.setTitle("Setting")}async getHtml(){return window.auth?`
    <img  class="aiengVerticalLogo"  src="imgs/d.png" alt="">

    <div class="iconPath">
      <i class="bx bx-home bx-border-circle"></i>
      > 
      <i class="bx bx-cog"></i>
    </div>
    
    <i onclick="history.back()" class="backButton bx bx-arrow-back bx-flashing-hover"></i>

    <div class="mainTitle">Setting</div>
    <div style="  box-shadow:none;background-color:transparent" class="SwitchedPanel">
        <!-- 
    
    
    -->
      <div  class="space"></div>
        <div style=" max-height:none;" class="containerViews">

          <!-- ----------------------------------------------------------------------- -->
          <!-- -------------------------------- Form 0 ------------------------------- -->
          <!-- ----------------------------------------------------------------------- -->

          <form id="formSetting0" class="thisForms"  method="POST">
            <div class="form first">
              <h3 class="numSur">Config Global</h3> 
              <!-- ----------------------------- Grp ----------------------------- -->
              <div class="GrpSetting ">
                <span class="title">Config :</span>
                <div class="childGrp ">
                
                  <!-- Data Enter -->
                  <div id="colorConnectionDB" class="fields ">

                    <div class="input-field cl3">
                      <label for="CONFmColor1">Main Color 1</label>
                      <input class="colorInput" type="color" id="CONFmColor1" />
                    </div>

                    <div class="input-field cl3">
                      <label for="CONFmColor2">Main Color 2</label>
                      <input class="colorInput" type="color"  id="CONFmColor2" />
                    </div>

                    <div class="input-field cl3">
                      <label for="CONFsColor1">Second Color 1</label>
                      <input class="colorInput" type="color"  id="CONFsColor1" />
                    </div>

                    <div class="input-field cl3">
                      <label for="CONFsColor2">Second Color 2</label>
                      <input class="colorInput" type="color"  id="CONFsColor2" />
                    </div>

                    <div style="align-items: end;  width:590px;  flex-direction: row;" class="input-field" cl2>
                        <label style="display: inline-block; visibility:hidden">:</label>
                        <button style="transform:translateX(100px) ;display: inline-block;  width:100px; height:42px; margin:8px">
                            <span class="btnText">Init</span>
                        </button>
                    
                        <label style="display: inline-block; visibility:hidden">:</label>
                        <button style="transform:translateX(50px) ;display: inline-block;  width:100px; height:42px; margin:8px">
                            <span class="btnText">Reset</span>
                        </button>
                    
                        <label style="display: inline-block;  visibility:hidden">:</label>
                        <button style="display: inline-block; width:100px; height:42px; margin:8px">
                            <span class="btnText">Apply</span>
                        </button>
                    </div>

                  </div>
                  
                </div>
                <div class="spaceForm"></div>
              </div>


            </div>
          </form> 

          <!-- ----------------------------------------------------------------------- -->
          <!-- -------------------------------- Form 1 ------------------------------- -->
          <!-- ----------------------------------------------------------------------- -->

          <form id="formSetting1" class="thisForms"  method="POST">
            <div class="form first">
              <h3 class="numSur">Forms Administrator</h3> 
              <!-- ----------------------------- Grp ----------------------------- -->
              <div class="GrpSetting ">
                <span class="title">OFFICIER DE PERMANENCE :</span>
                <div class="childGrp ">
                
                  <!-- Data Enter -->
                  <div class="fields ">

                    <div class="input-field cl3">
                      <label>Grade</label>
                      <select id="ODPgradeSetting" name='ODPgrade' required>
                        <option ></option> 
                        <option >A1AM</option> 
                        <option >A2AM</option> 
                        <option >AC1AM</option> 
                        <option >AC2AM</option> 
                        <option >APAM</option> 
                        <option >LV</option> 
                        <option >LV(R)</option> 
                      </select>                    
                    </div>

                    <div class="input-field cl3">
                      <label>Name</label>
                      <input id="ODPnameSetting" name="ODPname" type="text" required/>
                    </div>

                    <div style="align-items: end;" class="input-field" cl2>
                      <label style="visibility:hidden">Pour Ajouter :</label>  
                      <button type="submit" style="height:42px; margin:8px">
                        <span class="btnText">Add</span>
                      </button>   
                    </div>

                  </div>

                  <!-- Show Data -->
                  <div class="fields">

                    <table id="ODPtableShow" style="width: 100% !important; margin-top: 25px;" class="dataTable content-table">
                      <thead>
                        <tr>
                          <th style="width:120px">ID</th>
                          <th style="width:140px">Grade</th>
                          <th>Nom</th>
                          <th style="text-align:center; width: 80px;" >Actions</th>
                        </tr>
                      </thead>
                      <tbody id="ODPtableShowBody">  
                      </tbody>       
                    </table>

                  </div>
                  
                </div>
                <div class="spaceForm"></div>
              </div>


            </div>
          </form> 

          <!-- ----------------------------------------------------------------------- -->
          <!-- -------------------------------- Form 2 ------------------------------- -->
          <!-- ----------------------------------------------------------------------- -->

          <form id="formSetting2" class="thisForms"  method="POST">
            <div class="form first">
              <h3 class="numSur"></h3> 
              <!-- ----------------------------- Grp ----------------------------- -->
              <div class="GrpSetting ">
                <span class="title">CHEF DE QUART :</span>
                <div class="childGrp ">
                
                  <!-- Data Enter -->
                  <div class="fields ">

                    <div class="input-field cl3">
                      <label>Grade</label>
                      <select id="CDQgradeSetting" name='CDQgrade' required>
                        <option ></option> 
                        <option >MP</option> 
                        <option >MT</option> 
                        <option >MT(R)</option> 
                        <option >SM</option> 
                        <option >PM</option> 
                        <option >PM(R)</option> 
                      </select>                    
                    </div>

                    <div class="input-field cl3">
                      <label>Name</label>
                      <input id="CDQnameSetting" name="CDQname" type="text" required/>
                    </div>

                    <div style="align-items: end;" class="input-field" cl2>
                      <label style="visibility:hidden">Pour Ajouter :</label>  
                      <button type="submit" style="height:42px; margin:8px">
                        <span class="btnText">Add</span>
                      </button>   
                    </div>

                  </div>

                  <!-- Show Data -->
                  <div class="fields">

                    <table id="CDQtableShow" style="width: 100% !important; margin-top: 25px;" class="dataTable content-table">
                      <thead>
                        <tr>
                          <th style="width:120px">ID</th>
                          <th style="width:140px">Grade</th>
                          <th>Nom</th>
                          <th style="text-align:center; width: 80px;" >Actions</th>
                        </tr>
                      </thead>
                      <tbody id="CDQtableShowBody">  
                      </tbody>       
                    </table>

                  </div>
                  
                </div>
                <div class="spaceForm"></div>
              </div>

            </div>
          </form> 


          <!-- ----------------------------------------------------------------------- -->
          <!-- -------------------------------- Form 3 ------------------------------- -->
          <!-- ----------------------------------------------------------------------- -->

          <form id="formSetting3" class="thisForms"  method="POST">
            <div class="form first">
              <h3 class="numSur"></h3> 
              <!-- ----------------------------- Grp ----------------------------- -->
              <div class="GrpSetting ">
                <span class="title">ADJOINT DE QUART :</span>
                <div class="childGrp ">
                
                  <!-- Data Enter -->
                  <div class="fields ">

                    <div class="input-field cl3">
                      <label>Grade</label>
                      <select id="ADQgradeSetting" name='ADQgrade' required>
                        <option ></option> 
                        <option >MP</option> 
                        <option >MT</option> 
                        <option >MT(R)</option> 
                        <option >SM</option> 
                        <option >PM</option> 
                        <option >PM(R)</option> 
                        <option >QM</option> 
                        <option >QM1</option> 
                        <option >QM(R)</option> 
                      </select>                    
                    </div>

                    <div class="input-field cl3">
                      <label>Name</label>
                      <input id="ADQnameSetting" name="ADQname" type="text" required/>
                    </div>

                    <div style="align-items: end;" class="input-field" cl2>
                      <label style="visibility:hidden">Pour Ajouter :</label>  
                      <button type="submit" style="height:42px; margin:8px">
                        <span class="btnText">Add</span>
                      </button>   
                    </div>

                  </div>

                  <!-- Show Data -->
                  <div class="fields">

                    <table id="ADQtableShow" style="width: 100% !important; margin-top: 25px;" class="dataTable content-table">
                      <thead>
                        <tr>
                          <th style="width:120px">ID</th>
                          <th style="width:140px">Grade</th>
                          <th>Nom</th>
                          <th style="text-align:center; width: 80px;" >Actions</th>
                        </tr>
                      </thead>
                      <tbody id="ADQtableShowBody">  
                      </tbody>       
                    </table>

                  </div>
                  
                </div>
                <div class="spaceForm"></div>
              </div>

            </div>
          </form> 


          <!-- ----------------------------------------------------------------------- -->
          <!-- -------------------------------- Form 4 ------------------------------- -->
          <!-- ----------------------------------------------------------------------- -->
  
            <form id="formSetting4" class="thisForms"  method="POST">
              <div class="form first">
                <h3 class="numSur"></h3> 
                <!-- ----------------------------- Grp ----------------------------- -->
                <div class="GrpSetting ">
                  <span class="title">Type d'opération :</span>
                  <div class="childGrp ">
                  
                    <!-- Data Enter -->
                    <div class="fields ">
  
                      <div class="input-field cl2">
                        <label>Name Of Operation :</label>
                        <input id="TonameSetting" name="TOname" type="text" required/>
                      </div>
  
                      <div style="align-items: end;" class="input-field" cl2>
                        <label style="visibility:hidden">Pour Ajouter :</label>  
                        <button type="submit" style="height:42px; margin:8px">
                          <span class="btnText">Add</span>
                        </button>   
                      </div>
  
                    </div>
  
                    <!-- Show Data -->
                    <div class="fields">
  
                      <table id="TOtableShow" style="width: 100% !important; margin-top: 25px;" class="dataTable content-table">
                        <thead>
                          <tr>
                            <th style="width:120px">ID</th>
                            <th>Type d'opération</th>
                            <th style="text-align:center; width: 80px;" >Actions</th>
                          </tr>
                        </thead>
                        <tbody id="TOtableShowBody">  
                        </tbody>       
                      </table>
  
                    </div>
                    
                  </div>
                  <div class="spaceForm"></div>
                </div>
  
              </div>
            </form> 
  


          <!-- ----------------------------------------------------------------------- -->
          <!-- -------------------------------- Form 5 ------------------------------- -->
          <!-- ----------------------------------------------------------------------- -->

          <form id="formSetting5" class="thisForms"  method="POST">
            <div class="form first">
              <h3 class="numSur"></h3> 
              <!-- ----------------------------- Grp ----------------------------- -->
              <div class="GrpSetting ">
                <span class="title">Secteur :</span>
                <div class="childGrp ">
                
                  <!-- Data Enter -->
                  <div class="fields ">

                    <div class="input-field cl3">
                      <label>Département</label>
                      <input id="SECTORdepartementSetting" name="SECTORdepartement" type="text" required/>
                    </div>

                    <div class="input-field cl3">
                      <label>Secteur</label>
                      <input id="SECTORnameSetting" name="SECTORname" type="text" required/>
                    </div>

                    <div style="align-items: end;" class="input-field" cl2>
                      <label style="visibility:hidden">Pour Ajouter :</label>  
                      <button type="submit" style="height:42px; margin:8px">
                        <span class="btnText">Add</span>
                      </button>   
                    </div>

                  </div>

                  <!-- Show Data -->
                  <div class="fields">

                    <table id="SECTORtableShow" style="width: 100% !important; margin-top: 25px;" class="dataTable content-table">
                      <thead>
                        <tr>
                          <th style="width:150px">ID</th>
                          <th style="width:190px">Département</th>
                          <th>Secteur</th>
                          <th style="text-align:center; width: 100px;" >Actions</th>
                        </tr>
                      </thead>
                      <tbody id="SECTORtableShowBody">  
                      </tbody>       
                    </table>

                  </div>
                  
                </div>
                <div class="spaceForm"></div>
              </div>

            </div>
          </form> 


          <!-- ----------------------------------------------------------------------- -->
          <!-- -------------------------------- Form 6 ------------------------------- -->
          <!-- ----------------------------------------------------------------------- -->
  
            <form id="formSetting6" class="thisForms"  method="POST">
              <div class="form first">
                <h3 class="numSur"></h3> 
                <!-- ----------------------------- Grp ----------------------------- -->
                <div class="GrpSetting ">
                  <span class="title">Sémaphore:</span>
                  <div class="childGrp ">
                  
                    <!-- Data Enter -->
                    <div class="fields ">
  
                      <div class="input-field cl2">
                        <label>Name</label>
                        <input id="SEMAnameSetting" name="SEMAname" type="text" required/>
                      </div>
  
                      <div style="align-items: end;" class="input-field" cl2>
                        <label style="visibility:hidden">Pour Ajouter :</label>  
                        <button type="submit" style="height:42px; margin:8px">
                          <span class="btnText">Add</span>
                        </button>   
                      </div>
  
                    </div>
  
                    <!-- Show Data -->
                    <div class="fields">
  
                      <table id="SEMAtableShow" style="width: 100% !important; margin-top: 25px;" class="dataTable content-table">
                        <thead>
                          <tr>
                            <th style="width:120px">ID</th>
                            <th>Sémaphore</th>
                            <th style="text-align:center; width: 80px;" >Actions</th>
                          </tr>
                        </thead>
                        <tbody id="SEMAtableShowBody">  
                        </tbody>       
                      </table>
  
                    </div>
                    
                  </div>
                  <div class="spaceForm"></div>
                </div>
  
              </div>
            </form> 
  

          <!-- ----------------------------------------------------------------------- -->
          <!-- -------------------------------- Form 7 ------------------------------- -->
          <!-- ----------------------------------------------------------------------- -->

          <form id="formSetting7" class="thisForms"  method="POST">
            <div class="form first">
              <h3 class="numSur"></h3> 
              <!-- ----------------------------- Grp ----------------------------- -->
              <div class="GrpSetting ">
                <span class="title">Actions :</span>
                <div class="childGrp ">
                
                  <!-- Data Enter -->
                  <div class="fields ">

                    <div class="input-field cl2">
                      <label>Name Action</label>
                      <input id="ACTIONnameSetting" name="ACTIONname" type="text" required/>
                    </div>

                    <div style="align-items: end;" class="input-field" cl2>
                      <label style="visibility:hidden">Pour Ajouter :</label>  
                      <button type="submit" style="height:42px; margin:8px">
                        <span class="btnText">Add</span>
                      </button>   
                    </div>

                  </div>

                  <!-- Show Data -->
                  <div class="fields">

                    <table id="ACTIONtableShow" style="width: 100% !important; margin-top: 25px;" class="dataTable content-table">
                      <thead>
                        <tr>
                          <th>Description </th>
                          <th style="text-align:center; width: 80px;" >Actions</th>
                        </tr>
                      </thead>
                      <tbody id="ACTIONtableShowBody">  
                      </tbody>       
                    </table>

                  </div>
                  
                </div>
                <div class="spaceForm"></div>
              </div>

            </div>
          </form> 

          <!-- ----------------------------------------------------------------------- -->
          <!-- -------------------------------- Form 8 ------------------------------- -->
          <!-- ----------------------------------------------------------------------- -->

          <form id="formSetting8" class="thisForms"  method="POST">
            <div class="form first">
              <h3 class="numSur"></h3> 
              <!-- ----------------------------- Grp ----------------------------- -->
              <div class="GrpSetting ">
                <span class="title">Navire :</span>
                <div class="childGrp ">
                
                  <!-- Data Enter -->

                  
                  <div class="fields">

                    <div style="" class="input-field cl2">
                      <label>Nom : </label>
                      <input id="NAVIREnomSurnav" name="Navirenom" type="text" required/>  
                    </div>

                    <div style="" class="input-field cl2">
                      <label>Type :</label>
                      <input id="NAVIREtypeSurnav" name="Naviretype" type="text" required/>  
                    </div>


                    <div class="input-field">
                      <label>Pavillon : </label>
                      <select id="NAVIREpavillonSurnav" name="NAVIREpavillon" required>
                        <option value=""></option>
                        <option>AFGHANISTAN(AF)</option><option>AFRIQUE DU SUD (ZA)</option><option>ALBANIE (AL)</option><option>ALGERIE (DZ)</option><option>ALLEMAGNE (DE)</option>
                        <option>ANDORRE (AD)</option><option>ANGOLA (AO)</option><option>ANGUILLA (AI)</option><option>ANTARTIQUE (TF)</option><option>ANTIGUA ET BARBUDA (AG)</option>
                        <option>ARABIE SAOUDITE (SA)</option><option>ARGENTINE (AR)</option><option>ARMENIE (AM)</option><option>ARUBA (AW)</option><option>AUSTRALIE (AU)</option>
                        <option>AUTRICHE (AT)</option><option>AZERBAIDJAN (AZ)</option><option>BAHAMAS (BS)</option><option>BAHREIN (BH)</option><option>BANGLADESH (BD)</option>
                        <option>BARBADE (BB)</option><option>BELGIQUE (BE)</option><option>BELIZE (BZ)</option><option>BENIN (BJ)</option><option>BERMUDES (BM)</option>
                        <option>BHOUTAN (BT)</option><option>BIELORUSSIE (BY)</option><option>BIRMANIE (MM)</option><option>BOLIVIE (BO)</option><option>BOSNIE-HERZEGOVINE (BA)</option>
                        <option>BOTSWANA (BW)</option><option>BRESIL (BR)</option><option>BRUNEI (BN)</option><option>BULGARIE (BG)</option><option>BURKINA FASO (BF)</option>
                        <option>BURUNDI (BI)</option><option>CAMBODGE (KH)</option><option>CAMEROUN (CM)</option><option>CANADA (CA)</option><option>CAP VERT (CV)</option>
                        <option>CHILI (CL)</option><option>CHINE (CN)</option><option>CHYPRE (CY)</option><option>COLOMBIE (CO)</option><option>COMORES (KM)</option>
                        <option>COREE DU SUD (KR)</option><option>COREE DU NORD (KP)</option><option>COSTA RICA (CR)</option><option>COTE D’IVOIRE (CI)</option><option>CROATIE (HR)</option>
                        <option>CUBA (CU)</option><option>CURACAO (CW)</option><option>GUINEE (GN)</option><option>GUINEE EQUATORIALE (GQ)</option><option>GUINEE-BISSAU (GW)</option>
                        <option>GUYANA (GY)</option><option>GUYANE FRANCAISE (GF)</option><option>HAITI (HT)</option><option>HONDURAS (HN)</option><option>HONGRIE (HU)</option>
                        <option>HONG KONG (HK)</option><option>ILE BOUVET (BV)</option><option>ILE CHRISTMAS (CX)</option><option>ILE DE MAN (IM)</option><option>ILE NORFOLK (NF)</option>
                        <option>ILES ALAND (AX)</option><option>ILES CAIMANS (KY)</option><option>ILES COCOS (CC)</option><option>ILES COOK (CK)</option><option>ILES FEROE (FO)</option>
                        <option>ILES HEARD AND MACDONALF (HM)</option><option>ILES MALOUINES (FK)</option><option>ILES MARIANNES DU NORD (MP)</option><option>LIBERIA (LR)</option>
                        <option>LIBYE (LY)</option><option>LIECHTENSTEIN (LI)</option><option>LITUANIE (LT)</option><option>LUXEMBOURG (LU)</option><option>MACAO (MO)</option>
                        <option>MACEDOINE (MK)</option><option>MADAGASCAR (MG)</option><option>MALAISIE (MY)</option><option>MALAWI (MW)</option><option>MALDIVES (MV)</option>
                        <option>MALI (ML)</option><option>MALTE (MT)</option><option>MAROC (MA)</option><option>MARTINIQUE (MQ)</option><option>MAURICE (MU)</option><option>MAURITANIE (MR)</option>
                        <option>MAYOTTE (YT)</option><option>MEXIQUE (MX)</option><option>MICRONESIE (FM)</option><option>MOLDAVIE (MD)</option><option>MONACO (MC)</option><option>POLYNESIE FRANCAISE (PF)</option>
                        <option>PORTUGAL (PT)</option><option>QATAR (QA)</option><option>REPUBLIQUE CENTRAFRICAINE (CF)</option><option>REPUBLIQUE DEMOCRATIQUE DU CONGO (CD)</option>
                        <option>REPUBLIQUE DOMINICAINE (DO)</option><option>REPUBLIQUE TCHEQUE (CZ)</option><option>ROUMANIE (RO)</option><option>ROYAUME UNI (GB)</option><option>RUSSIE (RU)</option>
                        <option>RWANDA (RW)</option><option>SAHARA OCCIDENTAL (EH)</option><option>SAINT BARTHELEMY (BL)</option><option>SAINT MARTIN (MF)</option><option>SAINT KITTS ET NEVIS (KN)</option>
                        <option>SAINT PIERRE ET MIQUELON (PM)</option><option>SAINT VINCENT ET GRENADINES (VC)</option><option>SAINET HELENE (SH)</option><option>SAINTE LUCIE (LC)</option>
                        <option>SALVADOR (SV)</option><option>TURQUIE (TR)</option><option>TUVALU (TV)</option><option>UKRAINE (UA)</option><option>URUGUAY (UY)</option><option>VANUATU (VU)</option>
                        <option>VENEZUELA (VE)</option><option>VIETNAM (VN)</option><option>WALLIS ET FUTUNA (WF)</option><option>YEMEN (YE)</option><option>ZAMBIE (ZM)</option><option>ZIMBABWE (ZW)</option>                         
                      </select>
                    </div>

                    <div class="input-field">
                      <label>C/S : </label>
                      <input Style="letter-spacing: 10px;" id="NAVIRECSSurnav" name="NAVIRECS" type="text" required/> 
                    </div>

                    <div class="input-field">
                      <label>MMSI : </label>
                      <input Style="letter-spacing: 10px;" id="NAVIREMMSISurnav" name="NAVIREMMSI" pattern="^\\d{9}$" title="C'est 9 numéro" type="text" maxlength="9" required/> 
                    </div>

                  </div>
                  <div class="fields">

                    <div style="" class="input-field cl5">
                      <label>OMI : </label>
                      <input Style="letter-spacing: 10px;" id="NAVIREOMISurnav" name="NAVIREOMI" pattern="^\\d+$" title="C'est numérique" type="text" required/>  
                    </div>

                    <div style="" class="input-field cl5">
                      <label>Longueur (m) :</label>
                      <input id="NAVIRElongueurSurnav" name="NAVIRElongueur" type="number" min=0 max=999  />  
                    </div>

                    <div class="input-field cl5">
                      <label>Jauge Brut : </label>
                      <input id="NAVIREjaugeBrutSurnav" name="NAVIREjaugeBrut"  pattern="^\\d+$" title="C'est numérique" type="text" />                            
                    </div>

                    <div class="input-field cl5">
                      <label>Nombre D'équipages : </label>
                      <input id="NAVIREnombreEquipagesSurnav" name="NAVIREnombreEquipages" type="number" min=0 max=999/> 
                    </div>

                    <div class="input-field cl5">
                      <label>T.E : </label>
                      <input id="NAVIRETESurnav" name="NAVIRETE" pattern="[+-]?([0-9]*[.])?[0-9]+" title="C'est numérique" type="text" /> 
                    </div>                            

                    <div style="width:100%; align-items: end;" class="input-field" cl2>
                      <label style="visibility:hidden">Pour Ajouter :</label>  
                      <button type="submit" style="height:42px; margin:8px">
                        <span class="btnText">Add</span>
                      </button>   
                    </div>

                  </div>


                  <!-- Show Data -->
                  <div class="fields">

                    <table id="NAVIREtableShow" style="width: 100% !important; margin-top: 25px;" class="dataTable content-table">
                      <thead>
                        <tr>
                          <th>Nom</th>
                          <th>Type</th>
                          <th>Pavillon D'évolustion</th>
                          <th>C/S</th>
                          <th>MMSI</th>

                          <th>OMI</th>
                          <th>Longueur (m)</th>
                          <th>Jauge Brut</th>
                          <th>Nombre D'équipages</th>
                          <th>T.E</th>
                          <th style="text-align:center; width: 80px;" >Actions</th>
                        </tr>
                      </thead>
                      <tbody id="NAVIREtableShowBody">  
                      </tbody>       
                    </table>

                  </div>
                  
                </div>
                <div class="spaceForm"></div>
              </div>

            </div>
          </form> 


          <!-- ------------------------------------------------------------

                                Journal De Quart

          ------------------------------------------------------------- -->

          
          <!-- ----------------------------------------------------------------------- -->
          <!-- -------------------------------- Form 10 ------------------------------- -->
          <!-- ----------------------------------------------------------------------- -->

          <form id="formSetting10" class="thisForms"  method="POST">
            <div class="form first">
              <h3 class="numSur"></h3> 
              <!-- ----------------------------- Grp ----------------------------- -->
              <div class="GrpSetting ">
                <span class="title">Actions (Journal De Quart) :</span>
                <div class="childGrp ">
                
                  <!-- Data Enter -->
                  <div class="fields ">

                    <div class="input-field cl2">
                      <label>Name Action</label>
                      <input id="ACTIONQnameSetting" name="ACTIONQname" type="text" required/>
                    </div>

                    <div style="align-items: end;" class="input-field" cl2>
                      <label style="visibility:hidden">Pour Ajouter :</label>  
                      <button type="submit" style="height:42px; margin:8px">
                        <span class="btnText">Add</span>
                      </button>   
                    </div>

                  </div>

                  <!-- Show Data -->
                  <div class="fields">

                    <table id="ACTIONQtableShow" style="width: 100% !important; margin-top: 25px;" class="dataTable content-table">
                      <thead>
                        <tr>
                          <th>Description </th>
                          <th style="text-align:center; width: 80px;" >Actions</th>
                        </tr>
                      </thead>
                      <tbody id="ACTIONQtableShowBody">  
                      </tbody>       
                    </table>

                  </div>
                  
                </div>
                <div class="spaceForm"></div>
              </div>

            </div>
          </form>
        



          <!-- ----------------------------------------------------------------------- -->
          <!-- ------------------------------- Form 11 ------------------------------- -->
          <!-- ----------------------------------------------------------------------- -->

          <form id="formSetting11" class="thisForms"  method="POST">
            <div class="form first">
              <h3 class="numSur"></h3> 
              <!-- ----------------------------- Grp ----------------------------- -->
              <div class="GrpSetting ">
                <span class="title">Technicien : </span>
                <div class="childGrp ">
                
                  <!-- Data Enter -->
                  <div class="fields ">

                    <div class="input-field cl3">
                      <label>Grade</label>
                      <select id="TechgradeSetting" name='Techgrade' required>
                        <option></option> 
                        <option>M</option> 
                        <option>Mme</option> 
                      </select>                    
                    </div>

                    <div class="input-field cl3">
                      <label>Name</label>
                      <input id="TechnameSetting" name="Techname" type="text" required/>
                    </div>

                    <div style="align-items: end;" class="input-field" cl2>
                      <label style="visibility:hidden">Pour Ajouter :</label>  
                      <button type="submit" style="height:42px; margin:8px">
                        <span class="btnText">Add</span>
                      </button>   
                    </div>

                  </div>

                  <!-- Show Data -->
                  <div class="fields">

                    <table id="TechtableShow" style="width: 100% !important; margin-top: 25px;" class="dataTable content-table">
                      <thead>
                        <tr>
                          <th style="width:120px">ID</th>
                          <th style="width:140px">Grade</th>
                          <th>Nom</th>
                          <th style="text-align:center; width: 80px;" >Actions</th>
                        </tr>
                      </thead>
                      <tbody id="TechtableShowBody">  
                      </tbody>       
                    </table>

                  </div>
                  
                </div>
                <div class="spaceForm"></div>
              </div>

            </div>
          </form> 





          <!-- ----------------------------------------------------------------------- -->
          <!-- ------------------------------- Form 12 ------------------------------- -->
          <!-- ----------------------------------------------------------------------- -->

          <form id="formSetting12" class="thisForms"  method="POST">
            <div class="form first">
              <h3 class="numSur"></h3> 
              <!-- ----------------------------- Grp ----------------------------- -->
              <div class="GrpSetting ">
                <span class="title">Files : </span>
                <div class="childGrp ">
                
                  <!-- Data Enter -->
                  <div class="fields ">
                  
                    <div class="input-field cl3">
                    <label>Groupe</label>                  
                      <select id="FileGrpSetting" name='FileGrp' required>
                        <option>Groupe 1 (Surnav)</option> 
                        <option>Groupe 2 (Rsm Surfaune)</option> 
                        <option>Groupe 3 (Surpol)</option> 
                        <option>Groupe 4 (Secmar)</option> 
                        <option>Groupe 5 (Autre)</option> 
                      </select>   
                    </div>

                    <div class="input-field cl3">
                      <label style="visibility:hidden">Pour Ajouter :</label>  
                      <input  accept=".pdf" type="file" name="file" id="file-1" class="inputfile inputfile-1"  required/>
                      <label for="file-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> <span>Choose a file&hellip;</span></label>    
                    </div>

                    <div style="align-items: end;" class="input-field" cl2>
                      <label style="visibility:hidden">Pour Ajouter :</label>  
                      <button type="submit" style="height:42px; margin:8px">
                        <span class="btnText">Add</span>
                      </button>   
                    </div>

                  </div>

                  <!-- Show Data -->
                  <div class="fields">

                    <table id="FiletableShow" style="width: 100% !important; margin-top: 25px;" class="dataTable content-table">
                      <thead>
                        <tr>
                          <th style="width:240px">Groupe</th>
                          <th>Nom</th>
                          <th style="text-align:center; width: 80px;" >Actions</th>
                        </tr>
                      </thead>
                      <tbody id="FiletableShowBody">  
                      </tbody>       
                    </table>

                  </div>
                  
                </div>
                <div class="spaceForm"></div>
              </div>

            </div>
          </form> 



          <!-- ----------------------------------------------------------------------- -->
          <!-- ------------------------------- Form 13 ------------------------------- -->
          <!-- ----------------------------------------------------------------------- -->

          <form id="formSetting13" class="thisForms"  method="POST">
            <div class="form first">
              <h3 class="numSur"></h3> 
              <!-- ----------------------------- Grp ----------------------------- -->
              <div class="GrpSetting ">
                <span class="title">Pavillons : </span>
                <div class="childGrp ">
                
                  <!-- Data Enter -->
                  <div class="fields ">

                    <div class="input-field cl3">
                      <label>Abréviation</label>  
                      <input id="PavillongradeSetting" name="Pavillongrade" type="text" required/>
                    </div>

                    <div class="input-field cl3">
                      <label>Nom</label>
                      <input id="PavillonnameSetting" name="Pavillonname" type="text" required/>
                    </div>

                    <div style="align-items: end;" class="input-field" cl2>
                      <label style="visibility:hidden">Pour Ajouter :</label>  
                      <button type="submit" style="height:42px; margin:8px">
                        <span class="btnText">Add</span>
                      </button>   
                    </div>

                  </div>

                  <!-- Show Data -->
                  <div class="fields">

                    <table id="PavillontableShow" style="width: 100% !important; margin-top: 25px;" class="dataTable content-table">
                      <thead>
                        <tr>
                          <th style="width:120px">ID</th>
                          <th style="width:140px">Abréviation</th>
                          <th>Nom</th>
                          <th style="text-align:center; width: 80px;" >Actions</th>
                        </tr>
                      </thead>
                      <tbody id="PavillontableShowBody">  
                      </tbody>       
                    </table>

                  </div>
                  
                </div>
                <div class="spaceForm"></div>
              </div>

            </div>
          </form> 



        </div>
      </div>

    </div>

    `:`
        <div class="iconPath">
          <i class="bx bx-home bx-border-circle"></i>
          > 
          <i class="bx bx-cog"></i>
        </div>

        <i onclick="history.back()" class="backButton bx bx-arrow-back bx-flashing-hover"></i>
        
        <div class="mainTitle">Authentification </div>
        <div class="SwitchedPanel">
          <div>
            <h2>LOGIN</h2>
          </div>	

          <div class="water"></div>

          <svg>
            <filter id="turbulence" x="0" y="0" width="100%" height="100%">
              <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
              <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
              <animate xlink:href="#sea-filter" attributeName="baseFrequency" dur="60s" 
              keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"/>
            </filter>
          </svg>


          <form id="formAuth" method="post">
            <div class="form-box">
              <div class="header-text">
                Login Form
              </div>
              <input id='loginSetting' name="login" placeholder="Your Login" type="text"> 
              <input id='passwordSetting' name="password" placeholder="Your Password" type="password"> 
              <button  type='submit'>login</button>
              <div id="resetSettingFormTop" > </div>
              <div class='logError'> </div>
            </div>
          </form>

          <div id="message" style="width:400px;height:40px"></div>
        </div>

        `}}