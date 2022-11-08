debugCharge&&console.log("(View)Rsm/Surfaune!");import AbstractView from"./AbstractView.js";export default class extends AbstractView{constructor(e){super(e),this.setTitle("Rsm/Surfaune")}async getHtml(){return`
    <img class="aiengVerticalLogo"  src="imgs/d.png" alt="">

    <div class="iconPath">
      <i class="bx bx-home bx-border-circle"></i>
        > 
      <i class="icon-WATER"></i>
    </div>
    
    <i onclick="history.back()" class="backButton bx bx-arrow-back bx-flashing-hover"></i>

    <div class="mainTitle">Rsm/Surfaune</div>
    <div style="  box-shadow:none;background-color:transparent" class="SwitchedPanel">
        <!-- 
    
    
    -->
    <div  class="space"></div>
        <div style=" max-height:none;" class="containerViews">

    
            <form id="formRsmSurfaune" class="thisForms"  method="POST">
                <div class="form first">
                  <h3 class="numSur">
                    <select id="AlertTypeRsmSurfaune" name="AlertType" required>
                      <option>RSM</option> 
                      <option>SURFAUNE</option> 
                    </select>
                  N° : <span id="idRsmSurfaune"> -- </span>  <span id="idEvent">( -- )</span> </h3> 
                  <div  class="resetFormTop" id="resetRsmSurfauneFormTop"></span></div> 
                  
                  <!-- ----------------------------- First Grp ----------------------------- -->
                  <div class="FormGrpRsmSurfaune ">
                    <span class="title">Information:</span>
                    <div class="childFormGrp ">
                      <div class="fields">

                        <div class="input-field">
                          <label>Quart de : <span style="color:red">*</span></label>
                          <select id="INFOquartDeRsmSurfaune" name='INFOquartDe' style='font-weight:bold;' required>
                            <option value='00h00 / 04h00'>00h00 / 04h00</option> <option value='04h00 / 08h00'>04h00 / 08h00</option>
                            <option value='08h00 / 12h00'>08h00 / 12h00</option> <option value='12h00 / 16h00'>12h00 / 16h00</option>
                            <option value='16h00 / 20h00'>16h00 / 20h00</option> <option value='20h00 / 24h00'>20h00 / 24h00</option>
                          </select>
                        </div>
  
                        <div class="input-field">
                          <label>Du : <span style="color:red">*</span></label>
                          <input id="INFOduRsmSurfaune" name='INFOdu' type="date" required/>
                        </div>
  
                        <div class="input-field">
                          <label>à (UTC) : <span style="color:red">*</span></label>
                          <input id="INFOaUTCRsmSurfaune" name='INFOaUTC' type="time" required/>
                        </div>

                      </div>
                      <div class="spaceForm"></div>
                    </div>                        
                  </div>

                  
                  <!-- ----------------------------- Second Grp ----------------------------- -->
                  <div class="FormGrpRsmSurfaune ">
                    <span class="title">Information D'équipe de quart:</span>
                    <div class="childFormGrp showFormGrpRsmSurfaune">
                      <div class="fields">

                        <div class="input-field">
                          <label>OFFICIER DE PERMANENCE : <span style="color:red">*</span></label>
                          <select id="IEQofficierDePermananceRsmSurfaune" name="IEQofficierDePermanance" required>
                          </select>
                        </div>
  
                        <div class="input-field">
                          <label>CHEF DE QUART : <span style="color:red">*</span></label>
                          <select id="IEQchefDeQuartRsmSurfaune" name="IEQchefDeQuart" required>
                          </select>
                        </div>
  
                        <div class="input-field">
                          <label>ADJOINT DE QUART : <span style="color:red">*</span></label>
                          <select id="IEQadjointDeQuartRsmSurfaune" name="IEQadjointDeQuart" required>
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
                            <input id="IEQleRsmSurfaune" name="IEQle" type="date" required/>
                        </div>

                        <div class="input-field" hidden></div>

                      </div>
                      <div class="spaceForm"></div>
                    </div>
                  </div>                   
                  
                  <!-- ----------------------------- Third Grp  ----------------------------- -->
                  <div class="FormGrpRsmSurfaune ">
                    <span class="title">Affaire / Nature de l'alerte :</span>
                    <div class="childFormGrp showFormGrpRsmSurfaune">
                      <div class="fields TOL">

                        <div class="input-field">
                          <label>Déclanchement de l'alerte à (UTC) : <span style="color:red">*</span></label>
                          <input id="TOLaUTCRsmSurfaune" name='TOLaUTC' type="time" required/>
                        </div>

                        <div class="input-field">
                          <label>Par : <span style="color:red">*</span></label>
                          <input id="TOLparRsmSurfaune" name="TOLpar" type="text" required/>                             
                        </div>

                        <div class="input-field">
                          <label>Contre appel : </label>
                          <input id="TOLcontreRsmSurfaune" name="TOLcontre" type="text"/>                             
                        </div>

                        <div style="" class="cl2 input-field">
                          <label>Moyen de transmission de l'alerte : <span style="color:red">*</span></label>
                          <select id="TOLmoyenTrRsmSurfaune" name="TOLmoyenTr" required>
                            <option></option>
                            <option>MF/HF ASN</option>
                            <option>MF/HF PHONIE</option>
                            <option>TÉLÉCOPIE</option>
                            <option>TÉLÉPHONE À LA MER / GSM</option>
                            <option>TÉLÉPHONE À LA MER / SATELLITE </option>
                            <option>TÉLÉPHONE À TERRE </option>
                            <option>TÉLEX</option>
                            <option>VHF PHONIE</option>
                            <option>AUTRE MOYEN D'ALERTE</option>
                          </select>
                        </div>

                        <div style=" width: 21%;" class="hidden input-field ">
                          <label>Objet :<span style="color:red">*</span></label>
                          <select id="TOLobjetRsmSurfaune" name="TOLobjet" >
                              <option></option>
                              <option>Tortue</option>
                              <option>Cétacé</option>
                              <option>Dauphin</option>
                              <option>Baleine</option>
                          </select>
                        </div>

                        <div style=" width: 21%;" class="hidden input-field ">
                          <label>État :<span style="color:red">*</span></label>
                          <select id="TOLetatRsmSurfaune" name="TOLetat" >
                              <option></option>
                              <option>mort(e)</option>
                              <option>vivant(e)</option>
                          </select>
                        </div>

                        <div style="width: 21%;" class="hidden input-field ">
                          <label>statut :<span style="color:red">*</span></label>
                          <select id="TOLstatusRsmSurfaune" name="TOLstatus" >
                              <option></option>
                              <option>en dérive</option>
                              <option>échoué</option>
                              <option>en difficulté</option>
                              <option>en évolution</option>
                          </select>
                        </div>

                        <div style="" class=" input-field cl2">
                          <label>Nature du danger :<span style="color:red">*</span></label>
                          <select id="TOLnatureDangerRsmSurfaune" name="TOLnatureDanger" required>
                              <option></option>
                              <option>OBJET FLOTTANT À LA DÉRIVE</option>
                              <option>TRONC D'ARBRE À LA DÉRIVE</option>
                              <option>EMBARCATION À LA DÉRIVE</option>
                              <option>FEU ÉTEINT</option>
                              <option>FILETS DE PÊCHE AU SURFACE</option>
                              <option>FILETS DE PÊCHE À LA DÉRIVE</option>
                              <option>ENGINS DANGEREUX</option>
                              <option>ECHOUEMENT/ENSABLEMENT</option>
                              <option>RUPTURE DE MOUILLAGE</option>
                          </select>
                        </div>

                        <div style="" class="input-field cl2">
                          <label>Autre : </label>
                          <input id="TOLnatureDangerAutreRsmSurfaune" type="text" name="TOLnatureDangerAutre"/>
                        </div>

                        <div style="" class="input-field cl2">
                          <label>Description : </label>
                          <input id="TOLdescriptionRsmSurfaune" type="text" name="TOLdescription"/>
                        </div>

                      </div>

                      
                      <div class="fields">

                        <div class="input-field">
                          <label>Secteur : <span style="color:red">*</span></label>
                          <select id="TOLsecteurRsmSurfaune" name="TOLsecteur" required >                              
                          </select>                              
                        </div>

                        <div class="input-field">
                          <label>Zone Géographique : <span style="color:red">*</span></label>
                          <select name="TOLzoneGeographique" required>
                            <option value=""></option>
                            <option value='Plage et 300m'>Plage et 300m</option>
                            <option value='Port et acces'>Port et accès</option>
                            <option value='Eaux territoriales'>Eaux territoriales</option>
                            <option value='Responsabilite francaise' selected>Responsabilité française</option>
                            <option value='Responsabilite etrangere'>Responsabilité étrangère</option>
                          </select>
                        </div>

                        <div class="input-field">
                          <label>Azimut : <span style="color:red">*</span></label>
                          <input Style="letter-spacing: 15px;" id="TOLazimutRsmSurfaune" name="TOLazimut" type="text"  maxlength="4" pattern="^(?:0\\d\\d|1\\d\\d|2\\d\\d|3[0-5]\\d|360)°" title="xyz°   tq  xyz < 360" required/>                             
                        </div>

                        <div class="input-field">
                          <label>Point Remarquable (DPT) : <span style="color:red">*</span></label>
                          <input id="TOLpointRemarquableRsmSurfaune" name="TOLpointRemarquable" type="text" value="SEMAPHORE " required/>                          
                        </div>

                        <div class="input-field">
                          <label>Distance (Nq) : <span style="color:red">*</span></label>
                          <input name="TOLdistance" type="number" min=0 max=999 step=any required />                              
                        </div>

                        <div style="position: relative" class="input-field">
                          <label>POSITION (N) : <span style="color:red">*</span></label>
                          <input Style="letter-spacing: 15px;" id="TOLpositionNRsmSurfaune" name="TOLpositionN" type="text"  maxlength="9" pattern="^(?:0\\d|[1-8]\\d|90)°(?:0\\d|[1-5]\\d|60)('|,)(?:\\d\\d)." title="aa   °   bb   ,   cc  '    tq  A<90, B<60  et  C<99" required/>                                                             

                        </div>

                        <div style="position: relative" class="input-field">
                          <label>POSITION (E) : <span style="color:red">*</span></label>
                          <input Style="letter-spacing: 15px;" id="TOLpositionERsmSurfaune" name="TOLpositionE" type="text" maxlength="10" pattern="^(?:0\\d\\d|1[0-7]\\d|180)°(?:0\\d|[1-5]\\d|60)('|,)(?:\\d\\d)." title="aaa   °   bb   ,   cc  '    tq  A<180, B<60  et  C<99" required/>                                                             
                          <div class="gotoGoogleMaps" id="gotoGoogleMaps" >
                            <i class="NAV-Img icon-LOCATION bx-tada"></i>
                          </div>
                        </div>

                      </div>
                      <div class="spaceForm"></div>
                    </div>
                  </div>                   


                  
                  <!--  ----------------------------- Fouth Grp ----------------------------- -->
                  <div class="FormGrpRsmSurfaune ">
                    <span class="title">Navire :</span>
                    <div class="childFormGrp showFormGrpRsmSurfaune">

                      <div class="fields">

                        <div style="" class="input-field cl2">
                          <label>Nom : </label>
                          <input id="NAVIREnomRsmSurfaune" name="Navirenom" type="text" />  
                        </div>
  
                        <div style="" class="input-field cl2">
                          <label>Type : </label>
                          <select id="NAVIREtypeRsmSurfaune" name="Naviretype" >
                            <option></option>
                            <option>Adminstration / Armée</option>
                            <option>Aéronef de tourisme</option>
                            <option>Annexe</option>
                            <option>Autre aéronef</option>
                            <option>Autre loisir nautique</option>
                            <option>Commerce</option>
                            <option>Conchylicol / Aquacole</option>
                            <option>Fluvial / Péniche</option>
                            <option>Kayak</option>
                            <option>Kite surf</option>
                            <option>Pêche</option>
                            <option>Plaisance à moteur</option>
                            <option>Plaisance à voile</option>
                            <option>Planche à voile</option>
                            <option>Sous-marin</option>
                            <option>Surf</option>
                            <option>Véhicule nautique à moteur</option>
                          </select>                        
                        </div>

                        <div class="input-field">
                          <label>Pavillon : </label>
                          <select id="NAVIREpavillonRsmSurfaune" name="NAVIREpavillon" >
                          </select>  
                        </div>

                        <div class="input-field">
                          <label>C/S : </label>
                          <input Style="letter-spacing: 10px;" id="NAVIRECSRsmSurfaune" name="NAVIRECS" type="text" /> 
                        </div>

                        <div class="input-field">
                          <label>MMSI : </label>
                          <input Style="letter-spacing: 10px;" id="NAVIREMMSIRsmSurfaune" name="NAVIREMMSI" pattern="^\\d{9}$" title="C'est 9 numéro" type="text" maxlength="9" /> 
                        </div>



                        <div class="input-field cl4">
                          <label>Indicatif : </label>
                          <input id="NAVIREIndicatifRsmSurfaune" name="NAVIREIndicatif" type="text" />  
                        </div>
                        <div class="input-field cl4">
                          <label>Immatriculation : </label>
                          <input id="NAVIREImmatriculationRsmSurfaune" name="NavireImmatriculation" type="text" />  
                        </div>
                        <div class="input-field cl4">
                          <label>Propriètaire : </label>
                          <input id="NAVIREProprietaireRsmSurfaune" name="NavireProprietaire" type="text" />  
                        </div>
                        <div class="input-field cl4">
                          <label>Port d'attache : </label>
                          <input id="NAVIREPortRsmSurfaune" name="NavirePort" type="text" />  
                        </div>


                        <div class="input-field cl5">
                          <label>Téléphone : </label>
                          <select id="NAVIREtelephoneRsmSurfaune" name="NAVIREtelephone" >
                            <option>Aucun</option>
                            <option>INMARSAT</option>
                            <option>FIXE</option>
                            <option>GSM</option>
                            <option>GlobalStar</option>
                          </select>
                        </div>
                        <div class="input-field cl5">
                          <label>Numèro 1 : </label>
                          <input id="NAVIREnum1RsmSurfaune" name="Navirenum1" type="text" />  
                        </div>
                        <div class="input-field cl5">
                          <label>Numèro 2 : </label>
                          <input id="NAVIREnum2RsmSurfaune" name="Navirenum2" type="text" />  
                        </div>

                        <div style="" class="input-field cl5">
                          <label>Longueur (m) : </label>
                          <input id="NAVIRElongueurRsmSurfaune" name="NAVIRElongueur" type="number" min=0 max=999 />  
                        </div>
                        
                        <div style="" class="input-field cl5">
                          <label>Largeur (m) : </label>
                          <input id="NAVIRELargeurRsmSurfaune" name="NAVIRELargeur" type="number" min=0 max=999 />  
                        </div>


                        <div class="input-field cl2">
                          <label>Couleur : </label>
                          <input id="NAVIRECouleurRsmSurfaune" name="NAVIRECouleur" type="text" />  
                        </div>

                        <div class="input-field cl2">
                          <label>Matériaux de construction : </label>
                          <input id="NAVIREMaterialRsmSurfaune" name="NAVIREMaterial" type="text" />  
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
                  <div class="FormGrpRsmSurfaune ">
                    <span class="title">Météo :</span>
                    <div class="childFormGrp showFormGrpRsmSurfaune" style="display: none;">
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
                            <option value='0' selected>0-Calme</option>
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
                  <div class="FormGrpRsmSurfaune ">
                    <span class="title">Chronologie:</span>
                    <div class="childFormGrp showFormGrpRsmSurfaune">
                      <div class="fields">

                        <div class="input-field">
                          <label>Date : <span style="color:red">*</span></label>
                          <input id="CHRONOdateRsmSurfaune" type="date" required/>
                        </div>
  
                        <div class="input-field">
                          <label>Heure (UTC) : <span style="color:red">*</span></label>
                          <input id="CHRONOheureUTCRsmSurfaune" type="time" required/>
                        </div>
  
                        <div class="input-field">
                          <label>Tph/VHF :</label>
                          <select id="CHRONOTphVHFRsmSurfaune">
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
                          <textarea id="CHRONOtextAreaRsmSurfaune" value="" ></textarea>
                        </div>

                        <div class="input-field cl1-3">
                          <div style=" display: flex; flex-wrap: wrap; align-content: center; justify-content: center; height:115px;     padding-top: 13.78px; ">
                            <select id="CHRONOaddActionRsmSurfaune" style="margin:0; width: 200px;" >
                              <option></option>
                              <option>A QUAI</option>
                              <option>APPAREILLAGE</option>
                              <option>CONVOI A QUAI</option>
                              <option>DEBUT DE CONFERENCE A 3 : CROSS/</option>
                              <option>DECOLLAGE</option>
                              <option>DIFFUSION MESSAGE "MAYDAY RELAY"</option>
                              <option>DIFFUSION MESSAGE "PAN PAN"</option>
                              <option>DIFFUSION REITEREE</option>
                              <option>ENGAGEMENT </option>
                              <option>FIN DE CONFERENCE A 3</option>
                              <option>FIN DE RECHERCHE - LIBERTE DE MANOEUVRE</option>
                              <option>LIBERTE DE MANOEUVRE </option>
                              <option>MISE EN ALERTE </option>
                              <option>NAVIRE DESECHOUE </option>
                              <option>POSE</option>
                              <option>REMORQUE PASSE - CONVOI EN ROUTE VERS</option>
                              <option>SUR ZONE</option>
                              <option>SUR ZONE - DEBUT DE RECHERCHE</option>
                            </select>     

                            <button id="CHRONOaddButtonRsmSurfaune" type="button" style="margin-bottom:0">
                              <span class="btnText">Add</span>
                            </button>    
                          </div>
                        </div>

                        <div  class="space"></div>
                        <table id="CHRONOtableShowRsmSurfaune" style="width: 100%; margin-top: 25px;" class="dataTable content-table">
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

                          <tbody id=CHRONOeventTableRsmSurfaune>  
                          </tbody>       
                        </table>

                      </div>
                      <div class="spaceForm"></div>
                    </div>                        
                  </div>


                    <button  type="submit" name="submit" value="Submit">
                        <span class="btnText">Envoyer</span>
                    </button>
                    <input checked type="checkbox" id="ResetFormsRsmSurfaune" name="ResetForms">
                
                
                
                
                    <!-- ----------------------------- Grp FIN ----------------------------- -->
                    <div class="FormGrpRsmSurfaune ">
                      <span class="title">Résultats et Procédures SAR utilisées :</span>
                      <div class="childFormGrp showFormGrpRsmSurfaune" style="display: none;">

                        <div class="fields">
                          <div class="input-field cl2">
                            <label>Autre :</label>
                            <input name='RESautre' type="text" />
                          </div>

                          <div class="input-field cl2">
                            <label>Résultat sur l'opération : </label>
                            <select name="RESresOperation" style="margin:0;" >
                              <option></option>
                              <option>DIFFICULTES SURMONTEES - REPRISE DE ROUTE</option>
                              <option>COTE REJOINTE PAR SES PROPRES MOYENS</option>
                              <option>ECHOUE</option>
                              <option>PERDU</option>
                              <option>REMORQUE</option>
                              <option>RETROUVE APRES RECHERCHE</option>
                              <option>ASSISTE</option>
                              <option>FAUSSE ALERTE</option>
                            </select>
                          </div>

                        </div>


                        <div class="fields">

                          <div style="font-weight:bold;margin-top:30px;margin-bottom:10px;font-size:14px;width:100%">-Résultat sur les personnes :
                          </div>

                          <div class="input-field">
                            <label>Tirée(s) d'affaire(s) seule(s) :</label>
                            <input  name='RESpersTirees' type="text" />
                          </div>
  
                          <div class="input-field">
                            <label>Retrouvée(s) :</label>
                            <input  name='RESpersRetr' type="text" />
                          </div>
  
                          <div class="input-field">
                            <label>Secourue(s) :</label>
                            <input  name='RESpersSec' type="text" />
                          </div>
  
                          <div class="input-field">
                            <label>Assistée(s) :</label>
                            <input  name='RESpersAss' type="text" />
                          </div>
  
  
                          <div class="input-field">
                            <label>Disparue(s) :</label>
                            <input  name='RESpersDisp' type="text" />
                          </div>
  
  
                          <div class="input-field">
                            <label>Décédée(s) :</label>
                            <input  name='RESpersDecede' type="text" />
                          </div>

                          <div class="input-field">
                            <label>Impliquée(s) dans fausse alerte :</label>
                            <input  name='RESpersImpl' type="text" />
                          </div>
    
                          <div class="fields">

                            <div style="font-weight:bold;margin-top:30px;margin-bottom:10px;font-size:14px;width:100%">-Procédures  :
                            </div>

                            <div class="input-field cl2">
                              <label>Procédure 1 :</label>
                              <select name="RESpro1" style="margin:0;" >
                                <option></option>
                                <option>P-AL-01 : Signaux pyrotechniques</option>
                                <option>P-AL-02 : Appel ASN</option>
                                <option>P-AL-03 : INMARSAT</option>
                                <option>P-AL-04 : RLS COSPAS-SARSAT</option>
                                <option>P-OPS-01 : Aide médicale en mer</option>
                                <option>P-OPS-02 : Accident de plongée</option>
                                <option>P-OPS-03 : Inquiétude ou enquête portuaire</option>
                                <option>P-OPS-04 : Homme à la mer ou isolé par la mer</option>
                                <option>P-OPS-05 : Aéronef en détresse</option>
                                <option>P-OPS-06 : Plan de secours à naufragés</option>
                                <option>P-OPS-07 : Accident impliquant des mat. 
                              </select>
                            </div>

                            <div class="input-field cl2">
                              <label>Procédure 2 :</label>
                              <select name="RESpro2" style="margin:0;" >
                                <option></option>
                                <option>P-AL-01 : Signaux pyrotechniques</option>
                                <option>P-AL-02 : Appel ASN</option>
                                <option>P-AL-03 : INMARSAT</option>
                                <option>P-AL-04 : RLS COSPAS-SARSAT</option>
                                <option>P-OPS-01 : Aide médicale en mer</option>
                                <option>P-OPS-02 : Accident de plongée</option>
                                <option>P-OPS-03 : Inquiétude ou enquête portuaire</option>
                                <option>P-OPS-04 : Homme à la mer ou isolé par la mer</option>
                                <option>P-OPS-05 : Aéronef en détresse</option>
                                <option>P-OPS-06 : Plan de secours à naufragés</option>
                                <option>P-OPS-07 : Accident impliquant des mat. 
                              </select>
                            </div>

                            <div class="input-field cl2">
                              <label>Procédure 3 :</label>
                              <select name="RESpro3" style="margin:0;" >
                                <option></option>
                                <option>P-AL-01 : Signaux pyrotechniques</option>
                                <option>P-AL-02 : Appel ASN</option>
                                <option>P-AL-03 : INMARSAT</option>
                                <option>P-AL-04 : RLS COSPAS-SARSAT</option>
                                <option>P-OPS-01 : Aide médicale en mer</option>
                                <option>P-OPS-02 : Accident de plongée</option>
                                <option>P-OPS-03 : Inquiétude ou enquête portuaire</option>
                                <option>P-OPS-04 : Homme à la mer ou isolé par la mer</option>
                                <option>P-OPS-05 : Aéronef en détresse</option>
                                <option>P-OPS-06 : Plan de secours à naufragés</option>
                                <option>P-OPS-07 : Accident impliquant des mat. 
                              </select>
                            </div>

                            <div class="input-field cl2">
                              <label>Procédure 4 :</label>
                              <select name="RESpro4" style="margin:0;" >
                                <option></option>
                                <option>P-AL-01 : Signaux pyrotechniques</option>
                                <option>P-AL-02 : Appel ASN</option>
                                <option>P-AL-03 : INMARSAT</option>
                                <option>P-AL-04 : RLS COSPAS-SARSAT</option>
                                <option>P-OPS-01 : Aide médicale en mer</option>
                                <option>P-OPS-02 : Accident de plongée</option>
                                <option>P-OPS-03 : Inquiétude ou enquête portuaire</option>
                                <option>P-OPS-04 : Homme à la mer ou isolé par la mer</option>
                                <option>P-OPS-05 : Aéronef en détresse</option>
                                <option>P-OPS-06 : Plan de secours à naufragés</option>
                                <option>P-OPS-07 : Accident impliquant des mat. 
                              </select>
                            </div>

                          </div>

                        </div>

                      </div>

                      <div class="spaceForm"></div>

                    </div>                        
                    
                    
                
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