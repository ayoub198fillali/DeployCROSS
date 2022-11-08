debugCharge&&console.log("(View)Surpol!");import AbstractView from"./AbstractView.js";export default class extends AbstractView{constructor(e){super(e),this.setTitle("Surpol")}async getHtml(){return`

    <img class="aiengVerticalLogo"  src="imgs/d.png" alt="">

    <div class="iconPath">
      <i class="bx bx-home bx-border-circle"></i>
      >
      <i class="icon-SURPOLE"></i>
    </div>

    <i onclick="history.back()" class="backButton bx bx-arrow-back bx-flashing-hover"></i>

    <div class="mainTitle">Surpol</div>
    <div style="  box-shadow:none;background-color:transparent" class="SwitchedPanel">

      <div class="space"></div>
      <div style=" max-height:none;" class="containerViews">


        <form id="formSurpol" class="thisForms" method="POST">
          <div class="form first">
            <h3 class="numSur">Surpol N° :
              <span id="idSurpol"> -- </span>
              <span id="idEvent">( -- )</span>
            </h3>
            <div  class="resetFormTop" id="resetSurpolFormTop"></div>

            <!-- ----------------------------- First Grp ----------------------------- -->
            <div class="FormGrpSurpol ">
              <span class="title">Information:</span>
              <div class="childFormGrp ">
                <div class="fields">

                  <div class="input-field">
                    <label>Quart de : <span style="color:red">*</span></label>
                    <select id="INFOquartDeSurpol" name='INFOquartDe' style='font-weight:bold;' required>
                      <option value='00h00 / 04h00'>00h00 / 04h00</option>
                      <option value='04h00 / 08h00'>04h00 / 08h00</option>
                      <option value='08h00 / 12h00'>08h00 / 12h00</option>
                      <option value='12h00 / 16h00'>12h00 / 16h00</option>
                      <option value='16h00 / 20h00'>16h00 / 20h00</option>
                      <option value='20h00 / 24h00'>20h00 / 24h00</option>
                    </select>
                  </div>

                  <div class="input-field">
                    <label>Du : <span style="color:red">*</span></label>
                    <input id="INFOduSurpol" name='INFOdu' type="date" required />
                  </div>

                  <div class="input-field">
                    <label>à (UTC) : <span style="color:red">*</span></label>
                    <input id="INFOaUTCSurpol" name='INFOaUTC' type="time" required />
                  </div>

                </div>
                <div class="spaceForm"></div>
              </div>
            </div>


            <!-- ----------------------------- Second Grp ----------------------------- -->
            <div class="FormGrpSurpol ">
              <span class="title">Information D'équipe de quart:</span>
              <div class="childFormGrp showFormGrpSurpol">
                <div class="fields">

                  <div class="input-field">
                    <label>OFFICIER DE PERMANENCE : <span style="color:red">*</span></label>
                    <select id="IEQofficierDePermananceSurpol" name="IEQofficierDePermanance" required>
                    </select>
                  </div>

                  <div class="input-field">
                    <label>CHEF DE QUART : <span style="color:red">*</span></label>
                    <select id="IEQchefDeQuartSurpol" name="IEQchefDeQuart" required>
                    </select>
                  </div>

                  <div class="input-field">
                    <label>ADJOINT DE QUART : <span style="color:red">*</span></label>
                    <select id="IEQadjointDeQuartSurpol" name="IEQadjointDeQuart" required>
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
                    <input id="IEQleSurpol" name="IEQle" type="date" required />
                  </div>

                  <div class="input-field" hidden></div>

                </div>
                <div class="spaceForm"></div>
              </div>
            </div>

            <!-- ----------------------------- Third Grp  ----------------------------- -->
            <div class="FormGrpSurpol ">
              <span class="title">Observation :</span>
              <div class="childFormGrp showFormGrpSurpol">
                <div class="fields">

                  <div class="input-field cl2">
                    <label>Type d'opération : <span style="color:red">*</span></label>
                    <select name="TOLtypeDoperation" required>
                      <option></option>
                      <option>POLLUTION ORPHELINE</option>
                      <option>REJET ACCIDENTEL</option>
                      <option>REJET A LA MER</option>
                      <option>POLLUTION PAR EMISSAIRE</option>
                      <option>DETECTION SATELLITE </option>
                      <option>PERTE CONTENEUR/COLIS </option>
                    </select>
                  </div>

                  <div class="input-field cl2">
                    <label>Observateur : <span style="color:red">*</span></label>
                    <select name="OBSobservateur" required>
                      <option></option>
                      <option>Témoin à terre</option>
                      <option>Poste de plage</option>
                      <option>Sémaphore</option>
                      <option>Moyen terrestre pompiers/municipalité/afmar</option>
                      <option>Moyen nautique pompiers/municipilté/afmar/capitainerie</option>
                      <option>Moyen nautique Douane</option>
                      <option>Moyen nautique Gendarmerie</option>
                      <option>Moyen nautique Marine Nationale</option>
                      <option>Navire impliqué (accident...)</option>
                      <option>Navire de commerce(TM,TMP, ...</option>
                      <option>Plaisancier,SNSM en mer</option>
                      <option>Aéronef civil/tour de contrôle</option>
                      <option>Aéronef Gendarmerie</option>
                      <option>Aéronef Douane</option>
                      <option>Aéronef Armée Terre/Air</option>
                      <option>Aéronef Marine Nationale</option>
                      <option>Aéronef Sécurité civile</option>
                      <option>satellite EMSA</option>
                      <option>Autre MRCC</option>
                    </select>
                  </div>

                  <div class="input-field cl2">
                    <label>Nom : <span style="color:red">*</span></label>
                    <input name="OBSnom" type="text" required />
                  </div>

                  <div class="input-field cl2">
                    <label>à (UTC) : <span style="color:red">*</span></label>
                    <input id="OBSaUTCSurpol" name='OBSaUTC' type="time" required />
                  </div>

                </div>
                <div class="spaceForm"></div>
              </div>
            </div>

            <!-- -----------------------------  Grp  ----------------------------- -->

            <div class="FormGrpSurpol ">
              <span class="title">
                <pre style="text-align: center;">Données initiales                                                 Données confirmées</pre>
              </span>
              <div style="display:flex" class="childFormGrp showFormGrpSurpol">
                <div style="align-items: flex-start; width:100%" class="fields">

                  <div style="" class="input-field cl2">
                    <label>Passage satellite du : </label>
                    <input id="DIpassageSatDuSurpol" name='DIpassageSatDu' type="date"  />
                  </div>

                  <div style="" class="input-field cl2">
                    <label>à (UTC) : </label>
                    <input id="DIa1UTCSurpol" name='DIa1UTC' type="time"  />
                  </div>

                  <div style="" class="input-field cl2">
                    <label>Réception du cliché le : </label>
                    <input id="DIreceptionDuSurpol" name='DIreceptionDu' type="date"  />
                  </div>

                  <div style="" class="input-field cl2">
                    <label>à (UTC) : </label>
                    <input id="DIa2UTCSurpol" name='DIa2UTC' type="time"  />
                  </div>

                  <div class="BarHorSurpol"> NAPPE PRINCIPALE </div>

                  <div style="font-size: 14px; display: inline;" class="input-field cl2">
                    <label>Classification :</label>
                    A- <input name='classification' type="radio" value="A" />
                    B- <input name='classification' type="radio" value="B" />
                  </div>

                  <div style="font-size: 14px;display: inline;" class="input-field cl2">
                    <label>Navire connecté :</label>
                    Oui- <input name='connecte' type="radio" value="Oui" />
                    Non- <input name='connecte' type="radio" value="Non" />
                  </div>

                  <div class="input-field cl1">
                    <label>Autre(s) nappe(s): position - classification : </label>
                    <textarea id="autreNappeSurpol" name="autreNappe" ></textarea>
                  </div>

                </div>

                <div class="surpolBar"></div>

                <div style="align-items: flex-start; width:100%;height: fit-content;" class="fields">

                  <div class="input-field cl2">
                    <label>Organisme de confirmation : </label>
                    <select id="organismeConfirmationSurpol" name="organismeConfirmation" >
                      <option></option>
                      <option>Néant</option>
                      <option>Moyen nautique Gendarme</option>
                      <option>Moyen nautique Marine Nationale</option>
                      <option>Moyen nautique Douane</option>
                      <option>Aéronef Douane</option>
                      <option>Aéronef Armée Terre / Air</option>
                      <option>Aéronef Marine Nationale</option>
                      <option>Aéronef Gendarmerie</option>
                      <option>Affaires Maritimes</option>
                      <option>CODIS / Sécurité civile</option>
                      <option>SNSM</option>
                      <option>POLICE NATIONALE</option>
                      <option>MUNICIPALITE</option>
                    </select>
                  </div>

                  <div class="input-field cl2">
                    <label>Moyen : </label>
                    <input Style="letter-spacing: 5px;" id="moyenConfSurpol" name="moyenConf" type="text" />
                  </div>

                  <div class="input-field cl2">
                    <label>Date de vérification : </label>
                    <input id="dateConfSurpol" name='dateConf' type="date"  />
                  </div>

                  <div class="input-field cl2">
                    <label>à (UTC) : </label>
                    <input id="heureConfSurpol" name='heureConf' type="time"  />
                  </div>

                </div>

              </div>
            </div>


            <!--  ----------------------------- Fouth Grp ----------------------------- -->

            <div class="FormGrpSurpol ">
              <span class="title"> </span>
              <div style="display:flex" class="childFormGrp showFormGrpSurpol">
                <div style="align-items: flex-start; width:100%" class="fields">

                  <div style="position: relative" class="input-field cl2">
                    <label>Position de pollution (N) : <span style="color:red">*</span></label>
                    <input Style="letter-spacing: 15px;" id="TOLpositionN1Surpol" name="TOLpositionN1" type="text" maxlength="9" pattern="^(?:0\\d|[1-8]\\d|90)°(?:0\\d|[1-5]\\d|60)('|,)(?:\\d\\d)." title="aa   °   bb   ,   cc  '    tq  A<90, B<60  et  C<99" required />
                    <div class="gotoGoogleMaps" id="gotoGoogleMaps1Surpol">
                      <i class="NAV-Img icon-LOCATION bx-tada"></i>
                    </div>
                  </div>

                  <div style="position: relative" class="input-field cl2">
                    <label>Position de pollution (E) : <span style="color:red">*</span></label>
                    <input Style="letter-spacing: 15px;" id="TOLpositionE1Surpol" name="TOLpositionE1" type="text" maxlength="10" pattern="^(?:0\\d\\d|1[0-7]\\d|180)°(?:0\\d|[1-5]\\d|60)('|,)(?:\\d\\d)." title="aaa   °   bb   ,   cc  '    tq  A<180, B<60  et  C<99" required />
                  </div>

                  <div class="input-field cl2">
                    <label>Zone Géographique : <span style="color:red">*</span></label>
                    <select name="TOLzoneGeographique1" required>
                      <option value=""></option>
                      <option value='Plage et 300m'>Plage et 300m</option>
                      <option value='Port et acces'>Port et accès</option>
                      <option value='Eaux territoriales'>Eaux territoriales</option>
                      <option value='Responsabilite francaise' selected>Responsabilité française</option>
                      <option value='Responsabilite etrangere'>Responsabilité étrangère</option>
                    </select>
                  </div>

                  <div class="input-field cl2">
                    <label>Azimut : <span style="color:red">*</span></label>
                    <input Style="letter-spacing: 15px;" id="TOLazimut1Surpol" name="TOLazimut1" type="text" maxlength="4" pattern="^(?:0\\d\\d|1\\d\\d|2\\d\\d|3[0-5]\\d|360)°" title="xyz°   tq  xyz < 360" required />
                  </div>

                  <div class="input-field cl2">
                    <label>Distance (Nq) : <span style="color:red">*</span></label>
                    <input name="TOLdistance1" type="number" min=0 max=999 step=any required />
                  </div>

                  <div class="input-field cl2">
                    <label>Point Remarquable (DPT) : <span style="color:red">*</span></label>
                    <input id="TOLpointRemarquableSurpol" name="TOLpointRemarquable" type="text" value="SEMAPHORE " required />
                  </div>

                </div>

                <div class="surpolBar"></div>

                <div style="align-items: flex-start; width:100%;height: fit-content;" class="fields">

                  <div style="position: relative" class="input-field cl2">
                    <label>Position Vérifiée (N) : </label>
                    <input Style="letter-spacing: 15px;" id="TOLpositionN2Surpol" name="TOLpositionN2" type="text" maxlength="9" pattern="^(?:0\\d|[1-8]\\d|90)°(?:0\\d|[1-5]\\d|60)('|,)(?:\\d\\d)." title="aa   °   bb   ,   cc  '    tq  A<90, B<60  et  C<99"  />
                  </div>

                  <div style="position: relative" class="input-field cl2">
                    <label>Position Vérifiée (E) : </label>
                    <input Style="letter-spacing: 15px;" id="TOLpositionE2Surpol" name="TOLpositionE2" type="text" maxlength="10" pattern="^(?:0\\d\\d|1[0-7]\\d|180)°(?:0\\d|[1-5]\\d|60)('|,)(?:\\d\\d)." title="aaa   °   bb   ,   cc  '    tq  A<180, B<60  et  C<99"  />
                    <div  class="gotoGoogleMaps" style="left: -27px;" id="gotoGoogleMaps2Surpol">
                      <i class="NAV-Img icon-LOCATION bx-tada"></i>
                    </div>
                  </div>

                  <div class="input-field cl2">
                    <label>Zone Géographique : </label>
                    <select name="TOLzoneGeographique2" >
                      <option value=""></option>
                      <option value='Plage et 300m'>Plage et 300m</option>
                      <option value='Port et acces'>Port et accès</option>
                      <option value='Eaux territoriales'>Eaux territoriales</option>
                      <option value='Responsabilite francaise' selected>Responsabilité française</option>
                      <option value='Responsabilite etrangere'>Responsabilité étrangère</option>
                    </select>
                  </div>

                  <div class="input-field cl2">
                    <label>Azimut : </label>
                    <input Style="letter-spacing: 15px;" id="TOLazimut2Surpol" name="TOLazimut2" type="text" maxlength="4" pattern="^(?:0\\d\\d|1\\d\\d|2\\d\\d|3[0-5]\\d|360)°" title="xyz°   tq  xyz < 360"  />
                  </div>

                  <div class="input-field cl2">
                    <label>Distance (Nq) : </label>
                    <input name="TOLdistance2" type="number" min=0 max=999  />
                  </div>

                  <div class="input-field cl2">
                    <label>Point Remarquable (DPT) : </label>
                    <input id="TOLpointRemarquable2Surpol" name="TOLpointRemarquable2" type="text" value="SEMAPHORE "  />
                  </div>

                </div>

              </div>
            </div>

            <div class="spaceForm"></div>

            <div class="FormGrpSurpol ">
              <span class="title">Description :</span>
              <div style="display:flex" class="childFormGrp showFormGrpSurpol">

                <div style="align-items: flex-start; width:100%" class="fields">

                  <div class="input-field cl2">
                    <label>Forme : </label>
                    <select name="DESCforme1" >
                      <option value=""></option>
                      <option value="circulaire ">circulaire</option>
                      <option value="rectangulaire ">rectangulaire</option>
                      <option value="trainée ">trainée</option>
                      <option value="difforme ">difforme</option>
                    </select>
                  </div>

                  <div class="input-field cl2">
                    <label>Précision :</label>
                    <input name='DESCprecision1' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Rayon (Km) :</label>
                    <input name='DESCrayon1' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Longueur (Km) :</label>
                    <input name='DESClongueur1' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Largeur (Km) :</label>
                    <input name='DESClargeur1' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Orientation ° :</label>
                    <input name='DESCorientation1' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Taux de couverture % :</label>
                    <input name='DESCtauxOrientation1' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Epaisseur (mm) :</label>
                    <input name='DESCepaisseur1' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Superficie (Km²) :</label>
                    <input name='DESCsuperficie1' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Aspect : </label>
                    <select name="DESCaspect1" >
                      <option value=""></option>
                      <option> Conteneur / Colis </option>
                      <option>nappe</option>
                      <option>boulettes</option>
                      <option>taches</option>
                      <option>lambeaux</option>
                      <option>dispersé</option>
                      <option>irisation</option>
                    </select>
                  </div>

                  <div class="input-field cl4">
                    <label>Précision :</label>
                    <input name='DESCprecisionAspect1' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Odeur :</label>
                    <select name="DESCodeur1" >
                      <option value=""></option>
                      <option>oeuf pourri</option>
                      <option>hydrocarbure</option>
                      <option>produits d'entretiens</option>
                      <option>eaux boueuse/saumâtre/terre</option>
                      <option>egouts</option>
                    </select>
                  </div>

                  <div class="input-field cl4">
                    <label>Autre :</label>
                    <input name='DESCautreOdeur1' type="text" />
                  </div>


                  <div class="input-field cl4">
                    <label>Couleur :</label>
                    <input name='DESCcouleur1' type="text" />
                  </div>

                  <div class="BarHorSurpol"> CODE COULEUR BONN </div>

                  <div class="input-field cl5">
                    <label>GRIS ARGENT %</label>
                    <input name='DESCgrisArgent1' type="text" />
                  </div>

                  <div class="input-field cl5">
                    <label>ARC EN CIEL %</label>
                    <input name='DESCarcEnCiel1' type="text" />
                  </div>

                  <div class="input-field cl5">
                    <label>METALLIQUE %</label>
                    <input name='DESCmetalique1' type="text" />
                  </div>

                  <div class="input-field cl5">
                    <label>VRAIE COULEUR %</label>
                    <input placeholder="DISCONTINUE" name='DESCvreaieColorDis1' type="text" />
                  </div>

                  <div class="input-field cl5">
                    <label>VRAIE COULEUR %</label>
                    <input placeholder="CONTINUE" name='DESCvreaieColorCon1' type="text" />
                  </div>

                </div>

                <!-- GRP2 -->
                <div class="surpolBar"></div>

                <div style="align-items: flex-start; width:100%" class="fields">

                  <div class="input-field cl2">
                    <label>Forme : </label>
                    <select name="DESCforme2" >
                      <option value=""></option>
                      <option value="circulaire ">circulaire</option>
                      <option value="rectangulaire ">rectangulaire</option>
                      <option value="trainée ">trainée</option>
                      <option value="difforme ">difforme</option>
                    </select>
                  </div>

                  <div class="input-field cl2">
                    <label>Précision :</label>
                    <input name='DESCprecision2' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Rayon (Km) :</label>
                    <input name='DESCrayon2' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Longueur (Km) :</label>
                    <input name='DESClongueur2' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Largeur (Km) :</label>
                    <input name='DESClargeur2' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Orientation ° :</label>
                    <input name='DESCorientation2' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Taux de couverture % :</label>
                    <input name='DESCtauxOrientation2' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Epaisseur (mm) :</label>
                    <input name='DESCepaisseur2' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Superficie (Km²) :</label>
                    <input name='DESCsuperficie2' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Aspect : </label>
                    <select name="DESCaspect2" >
                      <option value=""></option>
                      <option> Conteneur / Colis </option>
                      <option>nappe</option>
                      <option>boulettes</option>
                      <option>taches</option>
                      <option>lambeaux</option>
                      <option>dispersé</option>
                      <option>irisation</option>
                    </select>
                  </div>

                  <div class="input-field cl4">
                    <label>Précision :</label>
                    <input name='DESCprecisionAspect2' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Odeur :</label>
                    <select name="DESCodeur2" >
                      <option value=""></option>
                      <option>oeuf pourri</option>
                      <option>hydrocarbure</option>
                      <option>produits d'entretiens</option>
                      <option>eaux boueuse/saumâtre/terre</option>
                      <option>egouts</option>
                    </select>
                  </div>

                  <div class="input-field cl4">
                    <label>Autre :</label>
                    <input name='DESCautreOdeur2' type="text" />
                  </div>


                  <div class="input-field cl4">
                    <label>Couleur :</label>
                    <input name='DESCcouleur2' type="text" />
                  </div>

                  <div class="BarHorSurpol"> CODE COULEUR BONN </div>

                  <div class="input-field cl5">
                    <label>GRIS ARGENT %</label>
                    <input name='DESCgrisArgent2' type="text" />
                  </div>

                  <div class="input-field cl5">
                    <label>ARC EN CIEL %</label>
                    <input name='DESCarcEnCiel2' type="text" />
                  </div>

                  <div class="input-field cl5">
                    <label>METALLIQUE %</label>
                    <input name='DESCmetalique2' type="text" />
                  </div>

                  <div class="input-field cl5">
                    <label>VRAIE COULEUR %</label>
                    <input placeholder="DISCONTINUE" name='DESCvreaieColorDis2' type="text" />
                  </div>

                  <div class="input-field cl5">
                    <label>VRAIE COULEUR %</label>
                    <input placeholder="CONTINUE" name='DESCvreaieColorCon2' type="text" />
                  </div>

                </div>

              </div>
            </div>

            <div class="spaceForm"></div>
            <div>
              <div class="BarHorSurpol"> Informations complémentaires / Inscription sur le conteneur : </div>
              <div class="input-field cl2-3">
                <textarea style="height: 120px; width: 100%;" name="infoCompl"></textarea>
              </div>
            </div>
            <div class="spaceForm"></div>
            <div class="spaceForm"></div>

            <!--  ----------------------------- Fouth Grp ----------------------------- -->
            <div class="FormGrpSurpol ">
              <span class="title">Navire :</span>
              <div class="childFormGrp showFormGrpSurpol">

                <table id="NAVIRETableSurpol" Style="width: 100%; margin-top: 25px;" class="display content-table">
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

                  <div style="align-items: end;margin:0; width: 100%;  height:25px;" class="input-field">
                    <input type="checkbox" id="NAVIREUpdateSurpol" name="NAVIREUpdate" style="position: relative; height: 18px; padding: 0; margin: 0;">
                  </div>

                  <div style="" class="input-field cl2">
                    <label>Nom : </label>
                    <input id="NAVIREnomSurpol" name="Navirenom" type="text"  />
                  </div>

                  <div style="" class="input-field cl2">
                    <label>Type : </label>
                    <input id="NAVIREtypeSurpol" name="Naviretype" type="text"  />
                  </div>


                  <div class="input-field">
                    <label>Pavillon : </label>
                    <select id="NAVIREpavillonSurpol" name="NAVIREpavillon" >
                    </select>
                  </div>

                  <div class="input-field">
                    <label>C/S : </label>
                    <input Style="letter-spacing: 10px;" id="NAVIRECSSurpol" name="NAVIRECS" type="text"  />
                  </div>

                  <div class="input-field">
                    <label>MMSI : </label>
                    <input Style="letter-spacing: 10px;" id="NAVIREMMSISurpol" name="NAVIREMMSI" pattern="^\\d{9}$" title="C'est 9 numéro" type="text" maxlength="9"  />
                  </div>

                </div>
                <div class="fields">

                  <div style="" class="input-field cl5">
                    <label>OMI : </label>
                    <input Style="letter-spacing: 10px;" id="NAVIREOMISurpol" name="NAVIREOMI" pattern="^\\d+$" title="C'est numérique" type="text"  />
                  </div>

                  <div style="" class="input-field cl5">
                    <label>Longueur (m) : </label>
                    <input id="NAVIRElongueurSurpol" name="NAVIRElongueur" type="number" min=0 max=999  />
                  </div>

                  <div class="input-field cl5">
                    <label>Jauge Brut : </label>
                    <input id="NAVIREjaugeBrutSurpol" name="NAVIREjaugeBrut" pattern="^\\d+$" title="C'est numérique" type="text" />
                  </div>

                  <div class="input-field cl5">
                    <label>Nombre D'équipages : </label>
                    <input id="NAVIREnombreEquipagesSurpol" name="NAVIREnombreEquipages" type="number" min=0 max=999  />
                  </div>

                  <div class="input-field cl5">
                    <label>T.E : </label>
                    <input id="NAVIRETESurpol" name="NAVIRETE" pattern="[+-]?([0-9]*[.])?[0-9]+" title="C'est numérique" type="text" />
                  </div>

                </div>
                <div class="fields">

                  <div style="" class="input-field cl5">
                    <label id="LabelNAVIREprovenance">Provenance : </label>
                    <input id="InputNAVIREprovenance" name="NAVIREprovenance" type="text"  />
                  </div>

                  <div style="" class="input-field cl5">
                    <label id="LabelNAVIREdestination">Destination : </label>
                    <input id="InputNAVIREdestination" name="NAVIREdestination" type="text"  />
                  </div>

                  <div class="input-field cl5">
                    <label>Route(°) / Vitesse(nds) : </label>
                    <input Style="letter-spacing: 10px;" id="NAVIRERteVitSurpol" name="NAVIRERteVit" pattern="^(?:[0-2]\\d\\d|(3[0-5]\\d)|360)°/(\\d\\d)" title="ddd  °  /  vv   tq  D<360, V<99" maxlength="7" type="text" />
                  </div>

                  <div class="input-field cl5">
                    <label>H.P.A : </label>
                    <input name="NAVIREHPA" type="text" />
                  </div>

                  <div class="input-field cl5">
                    <label>Cargaison ou POB Total : </label>
                    <input name="NAVIREcargaison" type="text"  />
                  </div>

                </div>
                <div class="fields">

                  <div class="input-field cl1">
                    <label>Observation / Description Générale : </label>
                    <textarea name="NAVIREdescriptionGenerale"></textarea>
                  </div>

                </div>

                <div class="spaceForm"></div>
              </div>
            </div>

            <!-- ----------------------------- Grp Five ----------------------------- -->
            <div class="FormGrpSurpol ">
              <span class="title">Météo :</span>
              <div class="childFormGrp showFormGrpSurpol" style="display: none;">
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
                    <input name='MTOventDirection' type="text" />
                  </div>

                  <div class="input-field">
                    <label>Vitesse (Nd)</label>
                    <input name='MTOventVitesse' type="text" />
                  </div>

                  <div class="input-field">
                    <label>Rafales (Nd)</label>
                    <input name='MTOventRafales' type="text" />
                  </div>

                </div>
                <div class="fields">

                  <div style="font-weight:bold;font-size:14px;width:100%">-Mer :</div>
                  <div class="input-field cl4">
                    <label>Mer</label>
                    <select name="MTOmerMer">
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
                    <input name='MTOmerVisibilite' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Nébulosité (/8)</label>
                    <input name='MTOmerNebulosite' type="text" />
                  </div>

                  <div class="input-field cl4">
                    <label>Plafond (m)</label>
                    <input name='MTOmerPlafond' type="text" />
                  </div>

                </div>
                <div class="fields">

                  <div style="font-weight:bold;font-size:14px;width:100%">-Courant :</div>

                  <div class="input-field cl2">
                    <label>Direction °</label>
                    <input name='MTOcourantDirection' type="text" />
                  </div>

                  <div class="input-field cl2">
                    <label>Force (Nd)</label>
                    <input name='MTOcourantForce' type="text" />
                  </div>

                </div>
                <div class="fields">

                  <div style="font-weight:bold;font-size:14px;width:100%">-Températures :</div>

                  <div class="input-field cl2">
                    <label>Eau (°C)</label>
                    <input name='MTOtemperaturesEau' type="text" />
                  </div>

                  <div class="input-field cl2">
                    <label>Air (°C)</label>
                    <input name='MTOtemperaturesAir' type="text" />
                  </div>

                </div>

                <div class="spaceForm"></div>
              </div>
            </div>


            <!-- ----------------------------- Six Grp ----------------------------- -->
            <div class="FormGrpSurpol ">
              <span class="title">Chronologie:</span>
              <div class="childFormGrp showFormGrpSurpol">
                <div class="fields">

                  <div class="input-field">
                    <label>Date : <span style="color:red">*</span></label>
                    <input id="CHRONOdateSurpol" type="date" required />
                  </div>

                  <div class="input-field">
                    <label>Heure (UTC) : <span style="color:red">*</span></label>
                    <input id="CHRONOheureUTCSurpol" type="time" required />
                  </div>

                  <div class="input-field">
                    <label>Tph/VHF :</label>
                    <select id="CHRONOTphVHFSurpol">
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
                    <textarea id="CHRONOtextAreaSurpol" ></textarea>
                  </div>

                  <div class="input-field cl1-3">
                    <div style=" display: flex; flex-wrap: wrap; align-content: center; justify-content: center; height:115px;     padding-top: 13.78px; ">
                      <select id="CHRONOaddActionSurpol" style="margin:0; width: 200px;">
                        <option></option>
                        <option>APPEL AU COD - PAS DE MOYEN DISPONIBLE</option>
                        <option>COM AVISE</option>
                        <option>OPERATION CLOSE</option>
                        <option>POLREP ENVOYE</option>
                        <option>PROCUREUR AVISE</option>
                        <option>RECEPTION POLREP DE L'AVION MARPOL</option>
                      </select>

                      <button id="CHRONOaddButtonSurpol" type="button" style="margin-bottom:0">
                        <span class="btnText">Add</span>
                      </button>
                    </div>
                  </div>

                  <div class="space"></div>
                  <table id="CHRONOtableShowSurpol" style="width: 100%; margin-top: 25px;" class="dataTable content-table">
                    <thead>
                      <tr>
                        <th style="width: 40px;">Seq</th>
                        <th style="width: 80px;">Date</th>
                        <th style="width: 100px;">Heure (UTC)</th>
                        <th style="width: 80px;">Tph/VHF</th>
                        <th>Evénements</th>
                        <th style="text-align:center; width: 80px;">Actions</th>
                      </tr>
                    </thead>

                    <tbody id=CHRONOeventTableSurpol>
                    </tbody>
                  </table>

                </div>
                <div class="spaceForm"></div>
              </div>
            </div>

            <button type="submit" name="submit" value="Submit">
              <span class="btnText">Envoyer</span>
            </button>
            <input checked type="checkbox" id="ResetFormsSurpol" name="ResetForms">




            <!-- ----------------------------- Grp FIN ----------------------------- -->
            <div class="FormGrpSurpol ">
              <span class="title">Résultats :</span>
              <div class="childFormGrp showFormGrpSurpol" style="display: none;">

                <div class="fields">

                  <div class="input-field cl2">
                    <label>Nature de la pollution : </label>
                    <select name="RESnaturePollution" style="margin:0;">
                      <option></option>
                      <option>Hydrocarbures</option>
                      <option>Substance liquide nocive</option>
                      <option>Colis/conteneurs </option>
                      <option>Eaux usées</option>
                      <option> Ordures ménagères </option>
                      <option>Tellurique</option>
                      <option>Indéterminée</option>
                    </select>
                  </div>


                  <div class="input-field cl2">
                    <label>Classification opération : </label>
                    <select name="RESclassificationOperation" style="margin:0;">
                      <option></option>
                      <option>douteux</option>
                      <option>probable</option>
                      <option>confirmé</option>
                      <option>infirmé</option>
                    </select>
                  </div>

                  <div class="input-field cl1">
                    <label>Prévision de développement :</label>
                    <input name="RESprevisionDev" type="text"  />
                  </div>

                  <div class="input-field cl1">
                    <label>Traitement :</label>
                    <textarea name="ResultatTraitementSurpol"></textarea>
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

      <div class="space"></div>
      <div class="space"></div>
    </div>

    `}}