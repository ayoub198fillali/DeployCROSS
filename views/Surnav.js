debugCharge&&console.log("(View)Surnav!");let space="";import AbstractView from"./AbstractView.js";export default class extends AbstractView{constructor(e){super(e),this.setTitle("Surnav")}async getHtml(){return`
        <img class="aiengVerticalLogo"  src="imgs/d.png" alt="">

        <div class="iconPath">
          <i class="bx bx-home bx-border-circle"></i>
            > 
          <i class="bx bx-navigation"></i>
        </div>
        
        <i onclick="history.back()" class="backButton bx bx-arrow-back bx-flashing-hover"></i>

        <div class="mainTitle">SURNAV</div>
        <div style="  box-shadow:none;background-color:transparent" class="SwitchedPanel">
            <!-- 
        
        
        -->
        <div  class="space"></div>
            <div style=" max-height:none;" class="containerViews">

        
                <form id="formSurnav" class="thisForms"  method="POST">
                    <div class="form first">
                      <div class="notImportant" id="notImportantSurnav">123</div> 
                      <h3 class="numSur">Surnav N° : <span id="idSurnav"> -- </span>  <span id="idEvent">( -- )</span> </h3> 
                      <div class="resetFormTop" id="resetSurnavFormTop"></div> 
                      
                      <!-- ----------------------------- First Grp ----------------------------- -->
                      <div class="FormGrpSurnav ">
                        <span class="title">Information:</span>
                        <div class="childFormGrp ">
                          <div class="fields">

                            <div class="input-field">
                              <label>Quart de : <span style="color:red">*</span></label>
                              <select id="INFOquartDeSurnav" name='INFOquartDe' style='font-weight:bold;' required>
                                <option value='00h00 / 04h00'>00h00 / 04h00</option> <option value='04h00 / 08h00'>04h00 / 08h00</option>
                                <option value='08h00 / 12h00'>08h00 / 12h00</option> <option value='12h00 / 16h00'>12h00 / 16h00</option>
                                <option value='16h00 / 20h00'>16h00 / 20h00</option> <option value='20h00 / 24h00'>20h00 / 24h00</option>
                              </select>
                            </div>
      
                            <div class="input-field">
                              <label>Du : <span style="color:red">*</span></label>
                              <input id="INFOduSurnav" name='INFOdu' type="date" required/>
                            </div>
      
                            <div class="input-field">
                              <label>à (UTC) : <span style="color:red">*</span></label>
                              <input id="INFOaUTCSurnav" name='INFOaUTC' type="time" required/>
                            </div>

                          </div>
                          <div class="spaceForm"></div>
                        </div>                        
                      </div>

                      
                      <!-- ----------------------------- Second Grp ----------------------------- -->
                      <div class="FormGrpSurnav ">
                        <span class="title">Information D'équipe de quart:</span>
                        <div class="childFormGrp showFormGrpSurnav">
                          <div class="fields">

                            <div class="input-field">
                              <label>OFFICIER DE PERMANENCE : <span style="color:red">*</span></label>
                              <select id="IEQofficierDePermananceSurnav" name="IEQofficierDePermanance" required>
                              </select>
                            </div>
      
                            <div class="input-field">
                              <label>CHEF DE QUART : <span style="color:red">*</span></label>
                              <select id="IEQchefDeQuartSurnav" name="IEQchefDeQuart" required>
                              </select>
                            </div>
      
                            <div class="input-field">
                              <label>ADJOINT DE QUART : <span style="color:red">*</span></label>
                              <select id="IEQadjointDeQuartSurnav" name="IEQadjointDeQuart" required>
                              </select>
                            </div>

                          </div>
                          <div class="fields">

                            <div class="input-field">
                              <label>Evénement : <span style="color:red">*</span></label>
                              <select name="IEQevenement" required>
                                <option value="EN COURS"> en cours </option>
                                <option value="CLOSE"> clos </option>
                                <option value="ARCHIVÉ">ARCHIVÉ</option>
                              </select>
                            </div>
  
                            <div class="input-field">
                              <label>Le : <span style="color:red">*</span></label>
                                <input id="IEQleSurnav" name="IEQle" type="date"  required/>
                            </div>

                            <div class="input-field" hidden></div>

                          </div>
                          <div class="spaceForm"></div>
                        </div>
                      </div>                   
                      
                      <!-- ----------------------------- Third Grp  ----------------------------- -->
                      <div class="FormGrpSurnav ">
                        <span class="title">Type d'opération / localisation :</span>
                        <div class="childFormGrp showFormGrpSurnav">
                          <div class="fields">

                            <div style="" class="input-field cl2">
                              <label>Type d'opération : <span style="color:red">*</span></label>
                              <select id="TOLtypeDoperationSurnav" name="TOLtypeDoperation" required>
                              </select>
                            </div>
      
                            <div style="" class="input-field cl2">
                              <label>Motif : <span style="color:red">*</span></label>
                              <input id="TOLmotifSurnav" type="text" name="TOLmotif" value="" required/>
                            </div>
  
                          </div>
                          <div class="fields">

                            <div class="input-field">
                              <label>Secteur : <span style="color:red">*</span></label>
                              <select id="TOLsecteurSurnav" name="TOLsecteur" required >                              
                              </select>                              
                            </div>

                            <div class="input-field">
                              <label id="LabelTOLzoneGeographiqueSurnav">Zone Géographique : <span style="color:red">*</span></label>
                              <select id="TOLzoneGeographiqueSurnav" name="TOLzoneGeographique" required>
                                <option value=""></option>
                                <option value='Port et acces'>Port et accès</option>
                                <option value='Eaux territoriales'>Eaux territoriales</option>
                                <option value='Responsabilite francaise' selected>Responsabilité française</option>
                                <option value='Responsabilite etrangere'>Responsabilité étrangère</option>
                              </select>
                            </div>

                            <div class="input-field">
                              <label>Sémaphore : <span style="color:red">*</span></label>
                              <select id="TOLsemaphoreSurnav" name="TOLsemaphore" required>

                              </select>
                            </div>

                            <div class="input-field">
                              <label id="LabelTOLazimutSurnav">Azimut : <span style="color:red">*</span></label>
                              <input Style="letter-spacing: 15px;" id="TOLazimutSurnav" name="TOLazimut" type="text"  maxlength="4" pattern="^(?:[0-2]\\d\\d|3[0-5]\\d|360)°$" title="xyz°   tq  xyz < 360" required/>                             
                            </div>

                            <div class="input-field">
                              <label id="LabelTOLpointRemarquableSurnav">Point Remarquable (DPT) : <span style="color:red">*</span></label>
                              <input id="TOLpointRemarquableSurnav" name="TOLpointRemarquable" type="text" value="SEMAPHORE " required/>                          
                            </div>

                            <div class="input-field">
                              <label id="LabelTOLdistanceSurnav">Distance (Nq) : <span style="color:red">*</span></label>
                              <input id="TOLdistanceSurnav" name="TOLdistance" type="number" min=0 max=999 step=any required />                              
                            </div>


                            <div style="position: relative" class="input-field">
                              <label>POSITION (N) : <span style="color:red">*</span></label>
                              <input Style="letter-spacing: 15px;" id="TOLpositionNSurnav" name="TOLpositionN" type="text"  maxlength="9" pattern="^(?:0\\d|[1-8]\\d|90)${space}°${space}(?:0\\d|[1-5]\\d|60)${space}('|,)${space}(?:\\d\\d)${space}." title="aa   °   bb   ,   cc  '    tq  A<90, B<60  et  C<99" required/>                                                             
                              <div class="gotoGoogleMaps" id="gotoGoogleMaps" >
                                <i class="NAV-Img icon-LOCATION bx-tada"></i>
                              </div>
                            </div>

                            <div class="input-field">
                              <label>POSITION (E) : <span style="color:red">*</span></label>
                              <input Style="letter-spacing: 15px;" id="TOLpositionESurnav" name="TOLpositionE" type="text" maxlength="10" pattern="^(?:0\\d\\d|1[0-7]\\d|180)${space}°${space}(?:0\\d|[1-5]\\d|60)${space}('|,)${space}(?:\\d\\d)${space}." title="aaa   °   bb   ,   cc  '    tq  A<180, B<60  et  C<99" required/>                                                             
                            </div>



                            <div class="input-field">
                              <label>GDH (UTC) : <span style="color:red">*</span></label>
                              <input Style="letter-spacing: 5px;" id="TOLGDHUTCSurnav" name="TOLGDHUTC" type="text"   pattern="^(?:[0-2]\\d|3[0-1])(0\\d|1[0-2])([0-1]\\d|2[0-4])([0-5]\\d|60)$" title="DDMMHHmm   tq  DD<31, MM<12, HH<24  et  mm<60" placeholder="DDMMHHmm" maxlength=8 required/>                           
                              <div class="gdhAutoDetectC" id="gdhAutoDetect" >
                                <i class="NAV-Img icon-SPINNER bx-spin"></i>
                              </div>
                            </div>

                          </div>
                          <div class="spaceForm"></div>
                        </div>
                      </div>                   


                      
                      <!--  ----------------------------- Fouth Grp ----------------------------- -->
                      <div class="FormGrpSurnav ">
                        <span class="title">Navire :</span>
                        <div class="childFormGrp showFormGrpSurnav">

                          <table id="NAVIRETableSurnav" Style="width: 100%; margin-top: 25px;" class="display content-table">
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
                              </tr>
                            </thead>
                            <tbody id="navireTable">                     
                            </tbody>       
                          </table>
                          <div class="spaceForm">
                          </div>

                          <div class="fields">
                            
                            <div  style="align-items: end;margin:0; width: 100%;  height:25px;" class="input-field">
                              <input type="checkbox" id="NAVIREUpdateSurnav" name="NAVIREUpdate" style="position: relative; height: 18px; padding: 0; margin: 0;">
                            </div>

                            <div style="" class="input-field cl2">
                              <label>Nom : <span style="color:red">*</span></label>
                              <input id="NAVIREnomSurnav" name="Navirenom" type="text" required/>  
                            </div>
      
                            <div style="" class="input-field cl2">
                              <label>Type : <span style="color:red">*</span></label>
                              <input id="NAVIREtypeSurnav" name="Naviretype" type="text" required/>  
                            </div>


                            <div class="input-field">
                              <label>Pavillon : <span style="color:red">*</span></label>
                              <select id="NAVIREpavillonSurnav" name="NAVIREpavillon" required>
                              </select>                  
                            </div>

                            <div class="input-field">
                              <label>C/S : <span style="color:red">*</span></label>
                              <input Style="letter-spacing: 10px;" id="NAVIRECSSurnav" name="NAVIRECS" type="text" required/> 
                            </div>

                            <div class="input-field">
                              <label>MMSI : <span style="color:red">*</span></label>
                              <input Style="letter-spacing: 10px;" id="NAVIREMMSISurnav" name="NAVIREMMSI" pattern="^\\d{9}$" title="C'est 9 numéro" type="text" maxlength="9" required/> 
                            </div>

                          </div>
                          <div class="fields">

                            <div style="" class="input-field cl5">
                              <label>OMI : <span style="color:red">*</span></label>
                              <input Style="letter-spacing: 10px;" id="NAVIREOMISurnav" name="NAVIREOMI" pattern="^\\d+$" title="C'est numérique" type="text" required/>  
                            </div>
    
                            <div style="" class="input-field cl5">
                              <label>Longueur (m) : <span style="color:red">*</span></label>
                              <input id="NAVIRElongueurSurnav" name="NAVIRElongueur" type="number" min=0 max=999 required />  
                            </div>

                            <div class="input-field cl5">
                              <label>Jauge Brut : </label>
                              <input id="NAVIREjaugeBrutSurnav" name="NAVIREjaugeBrut"  pattern="^\\d+$" title="C'est numérique" type="text" />                            
                            </div>

                            <div class="input-field cl5">
                              <label>Nombre D'équipages : <span style="color:red">*</span></label>
                              <input id="NAVIREnombreEquipagesSurnav" name="NAVIREnombreEquipages"  type="number" min=0 max=999 required /> 
                            </div>

                            <div class="input-field cl5">
                              <label>T.E : </label>
                              <input id="NAVIRETESurnav" name="NAVIRETE" pattern="[+-]?([0-9]*[.])?[0-9]+" title="C'est numérique" type="text" /> 
                            </div>                            

                          </div>
                          <div class="fields">

                            <div style="" class="input-field cl5">
                              <label id="LabelNAVIREprovenance" >Provenance : <span style="color:red">*</span></label>
                              <input id="InputNAVIREprovenance" name="NAVIREprovenance" type="text" required/>  
                            </div>
    
                            <div style="" class="input-field cl5">
                              <label id="LabelNAVIREdestination">Destination : <span style="color:red">*</span></label>
                              <input id="InputNAVIREdestination" name="NAVIREdestination" type="text" required/>  
                            </div>

                            <div class="input-field cl5">
                              <label>Route(°) / Vitesse(nds) : </label>
                              <input Style="letter-spacing: 10px;" id="NAVIRERteVitSurnav" name="NAVIRERteVit" pattern="^(?:[0-2]\\d\\d|(3[0-5]\\d)|360)°/(\\d\\d)" title="ddd  °  /  vv   tq  D<360, V<99" maxlength="7"  type="text" />                            
                            </div>

                            <div class="input-field cl5">
                              <label>H.P.A : </label>
                              <input name="NAVIREHPA" type="text" /> 
                            </div>

                            <div class="input-field cl5">
                              <label>Cargaison ou POB Total : <span style="color:red">*</span></label>
                              <input name="NAVIREcargaison" type="text" required/> 
                            </div>                            

                          </div>
                          <div class="fields">

                            <div class="input-field cl1">
                              <label>Observation / Description Générale : </label>
                              <textarea name="NAVIREdescriptionGenerale" value=""></textarea>
                            </div>      

                          </div>

                          <div class="spaceForm"></div>
                        </div>
                      </div>                   


                      <!-- ----------------------------- Grp Five ----------------------------- -->
                      <div class="FormGrpSurnav ">
                        <span class="title">Météo :</span>
                        <div class="childFormGrp showFormGrpSurnav" style="display: none;">
                          <div class="fields">

                            <div class="input-field">
                              <label>Origine :</label>
                              <input name='MTOorigine' type="text" />
                            </div>

                          </div>
                          <div class="fields">
                          <div style="font-weight:bold;font-size:14px;width:100%">-Vent :</div>
                            <div class="input-field">
                              <label>Direction °</label>
                              <input  name='MTOventDirection' type="text" />
                            </div>

                            <div class="input-field">
                              <label>Vitesse (Nd)</label>
                              <input  name='MTOventVitesse' type="text" />
                            </div>

                            <div class="input-field">
                              <label>Rafales (Nd)</label>
                              <input  name='MTOventRafales' type="text" />
                            </div>

                          </div>
                          <div class="fields">

                            <div style="font-weight:bold;font-size:14px;width:100%">-Mer :</div>
                            <div class="input-field cl4">
                              <label>Mer</label>
                              <select name="MTOmerMer" >
                                <option value='-1'>Aucune</option>
                                <option value='0' selected='selected'>0-Calme</option>
                                <option value='1'>1-Ridée</option>
                                <option value='2'>2-Belle</option>
                                <option value='3'>3-Peu Agitée</option>
                                <option value='4'>4-Agitée</option>
                                <option value='5'>5-Forte</option>
                                <option value='6'>6-Très Forte</option>
                                <option value='7'>7-Grosse</option>
                                <option value='8'>8-Très Grosse</option>
                                <option value='9'>9-Enorme</option>
                              </select>
                            </div>

                            <div class="input-field cl4">
                              <label>Visibilité (Km)</label>
                              <input  name='MTOmerVisibilite' type="text" />
                            </div>

                            <div class="input-field cl4">
                              <label>Nébulosité (/8)</label>
                              <input  name='MTOmerNebulosite' type="text" />
                            </div>

                            <div class="input-field cl4">
                              <label>Plafond (m)</label>
                              <input  name='MTOmerPlafond' type="text" />
                            </div>

                          </div>
                          <div class="fields">
  
                            <div style="font-weight:bold;font-size:14px;width:100%">-Courant :</div>

                            <div class="input-field cl2">
                              <label>Direction °</label>
                              <input  name='MTOcourantDirection' type="text" />
                            </div>

                            <div class="input-field cl2">
                              <label>Force (Nd)</label>
                              <input  name='MTOcourantForce' type="text" />
                            </div>

                          </div>
                          <div class="fields">
  
                            <div style="font-weight:bold;font-size:14px;width:100%">-Températures :</div>

                            <div class="input-field cl2">
                              <label>Eau (°C)</label>
                              <input  name='MTOtemperaturesEau' type="text" />
                            </div>

                            <div class="input-field cl2">
                              <label>Air (°C)</label>
                              <input  name='MTOtemperaturesAir' type="text" />
                            </div>

                          </div>
                          
                          <div class="spaceForm"></div>
                        </div>                        
                      </div>


                      <!-- ----------------------------- Six Grp ----------------------------- -->
                      <div class="FormGrpSurnav ">
                        <span class="title">Chronologie:</span>
                        <div class="childFormGrp showFormGrpSurnav">
                          <div class="fields">

                            <div class="input-field">
                              <label>Date : <span style="color:red">*</span></label>
                              <input id="CHRONOdateSurnav" type="date" required/>
                            </div>
      
                            <div class="input-field">
                              <label>Heure (UTC) : <span style="color:red">*</span></label>
                              <input id="CHRONOheureUTCSurnav" type="time" required/>
                            </div>
      
                            <div class="input-field">
                              <label>Tph/VHF :</label>
                              <select id="CHRONOTphVHFSurnav">
                                <option value="" selected></option>
                                <option value="TPH">TPH</option>
                                <option value="VHF 16">VHF 16</option>
                                <option value="VHF">VHF </option>
                                <option value="VHF ASN">VHF ASN</option>
                                <option value="MF">MF</option>
                                <option value="INMARSAT ">INMARSAT </option>
                              </select>
                            </div>

                            <div class="input-field cl2-3">
                              <label>Evénements</label>
                              <textarea id="CHRONOtextAreaSurnav" value="" ></textarea>
                            </div>

                            <div class="input-field cl1-3">
                              <div style=" display: flex; flex-wrap: wrap; align-content: center; justify-content: center; height:115px;     padding-top: 13.78px; ">
                                <select id="CHRONOaddActionSurnav" style="margin:0; width: 200px;" >
                                </select>     

                                <button id="CHRONOaddButtonSurnav" type="button" style="margin-bottom:0">
                                  <span class="btnText">Add</span>
                                </button>    
                              </div>
                            </div>

                            <div  class="space"></div>
                            <table id="CHRONOtableShowSurnav" style="width: 100%; margin-top: 25px;" class="dataTable content-table">
                              <thead>
                                <tr>
                                    <th style="width: 40px;">Seq</th>
                                    <th style="width: 80px;">Date</th>
                                    <th style="width: 100px;">Heure (UTC)</th>
                                    <th style="width: 80px;" >Tph/VHF</th>
                                    <th>Evénements</th>
                                    <th style="text-align:center; width: 80px;" >Actions</th>
                                </tr>
                              </thead>

                              <tbody id=CHRONOeventTableSurnav>
                              </tbody>
                            </table>

                          </div>
                          <div class="spaceForm"></div>
                        </div>                        
                      </div>


                        <button type="submit" name="submit" value="Submit">
                            <span class="btnText">Envoyer</span>
                        </button>
                        <input checked type="checkbox" id="ResetFormsSurnav" name="ResetForms">
                    </div>
                </form>
            </div>
        
            <!-- 
                Affichage
            -->
        
            <div  class="space"></div>
            <div  class="space"></div>
        </div>
        `}}