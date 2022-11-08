debugCharge&&console.log("(View)AddSortie charged!");import AbstractView from"./AbstractView.js";export default class extends AbstractView{constructor(e){super(e),this.setTitle("Add Sortie")}async getHtml(){return`
    <img class="aiengVerticalLogo" src="imgs/d.png" alt="">

    <div class="iconPath">
    <i class="bx bx-home bx-border-circle"></i>
    >
    <i class="icon-YACHT2"></i>
    </div>

<i onclick="history.back()" class="backButton bx bx-arrow-back bx-flashing-hover"></i>

<div class="mainTitle">Add Sorties</div>
<div style="  box-shadow:none;background-color:transparent" class="SwitchedPanel">
    <!-- 


-->
<div  class="space"></div>
    <div class="containerViews">
        <header>Ajouter une nouvelle moyen:</header>



        <form id="formSorties" class="thisForms"  method="POST">
            <div class="form first">
                <div>

                    <div class="fields">
                        <div class="input-field">
                            <label>Nom:</label>
                            <input name='Nom' type="text" placeholder="Entrer Le Nom" minlength="1" maxlength="25" required />
                        </div>

                        <div class="input-field">
                            <label>Secteur D'évolustion</label>
                            <input name='SecteurEvolution' type="text" placeholder="Entrer Le Secteur D'évolustion" minlength="1" maxlength="25" required/>
                        </div>

                        <div class="input-field">
                            <label>Durée (H)</label>
                            <input name='Duree' type="number"  step="any" placeholder="Entrer La Durée" min="0" max="9999" required/>
                        </div>

                        <div class="input-field">
                            <label>Observation</label>
                            <input name='Observations' type="text" placeholder="Entrer L'Observation" minlength="1" maxlength="25" required />
                        </div>

                        <div class="input-field">
                            <label>DPT</label>
                            <input name='DPT' type="number" placeholder="Entrer 'DPT'" required min="0" max="999"/>
                        </div>

                        <div class="input-field">
                            <label>Heure Début</label>
                            <input name='HeureDebut' type="text" pattern="^(?:0\\d[0-5]\\d|1\\d[0-5]\\d|2[0-2][0-5]\\d|23[0-5]\\d|2359)" title="Format => HHMM" placeholder="Enter L'heure Du Début" required minlength="1" maxlength="4"/>
                        </div>
                    </div>
                </div>

                <button  type="submit" name="submit" value="Submit">
                    <span class="btnText">Envoyer</span>
                </button>
                <button  id="resultSubmit" style="opacity:0;">
                    <span class="btnText">Succes</span>
                </button>
            </div>
        </form>
    </div>

    <!-- 
        Affichage
    -->

    <div Style="    min-height: calc(100% + 200px);   overflow: auto;  margin-top: 40px;" class="containerViews">
        <header>Afficher Les moyen:</header>
        <div  class="space"></div>
        <table id="TableOfSorties" Style="width: 100%; margin-top: 25px;" class="content-table">
            <thead>
            <tr>
                <th>IDs</th>
                <th>Status</th>
                <th>Nom</th>
                <th>Secteur D'évolustion</th>
                <th>Durée</th>
                <th>Observation</th>
                <th>DPT</th>
                <th>Heure Début</th>
                <th>Heure Fin</th>
                <th>Action</th>

            </tr>
            </thead>
            
            <tbody id=sortiesTable>  
            </tbody>       

        </table>
    </div>
    <div  class="space"></div>
    <div  class="space"></div>
</div>

        `}}