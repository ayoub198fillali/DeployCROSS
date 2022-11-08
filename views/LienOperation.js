debugCharge&&console.log("(View)Liens Opérations!");import AbstractView from"./AbstractView.js";let Code="",sites=["https://www.portailorsec.interieur.gouv.fr/","https://www.portailorsec.interieur.gouv.fr","https://www.406registration.com","http://www.registre406.cnes.fr/sarsatweb/do/login","https://www.cospas-sarsat.int/fr/beacon-decode-program","https://www.meteo.fr/special/minisites/MARINE/derives/aem/mothy/","http://10.13.204.20/Callmanager/login.php","https://hermes-aem.marine.defense.gouv.fr/hermes_gc/index.php","https://geoloc.sdis28.fr/auth.php","https://pghm-isere.com/corg/log/","https://acc.sprint.interarmees.defense.gouv.fr/cas/login?service","https://webaccounts.imo.org/Common/WebLogin.aspx?ReturnUrl=/","https://www.woallen.fr/","https://demotracking.astel-s3.fr/fr/login.html","http://intra.cross.e2.rie.gouv.fr/","http://intra.cross.e2.rie.gouv.fr/secmar-r1907.html","https://asterie.application.i2/Asterie/identification.htm","https://suvista.net/auth#/map","https://puma.din.developpement-durable.gouv.fr/","https://stw.fr/fr/wp-login.php","https://webaccounts.imo.org/Common/WebLogin.aspx","http://www.equasis.org/EquasisWeb/public/HomePage","https://authentification-cerbere.application.i2/authSAML/login/LoginDispatchAction.do?v=3.4.3&appId=427&domain=na&backURL=http://gina.application.i2/gina/iAuthentification","https://www.itu.int/mmsapp/ShipStation/list","http://www.marinetraffic.com/ais/home","https://plateforme.medtrix.fr/","https://trafic2000.din.developpement-durable.gouv.fr/","https://www.cruisemapper.com/","https://neptune-port.marseille-port.fr/webNeptune/","https://anais.beta.gouv.fr/login?redirect=%2F","https://portal.emsa.europa.eu/home EMSA","https://portal.emsa.europa.eu/home Notifications EMSA","http://intra.cross.e2.rie.gouv.fr/ordre-de-service-3-surpol-surveillance-des-a9347.html","http://reddib.appli.i2/","http://www.data.shom.fr/"],names=["Portail ORSEC SYNERGIE","SYNERGIE Formation","406 REGISTRATION","Registre Balises 406","Décodage balise","MOTHY","CALL Manager","HERMES","Geoloc SDIS 56","Geoloc PGHM","SPRINT","GLOBAL SAR PLAN","WOALLEN","DEMOTRACKING","L'intranet des CROSS","L'intranet des CROSS - SECMAR","ASTERIE","SUIVI DRAGON","PUMA","SAIL THE WORLD","GISIS","EQUASIS","GINA","IUT MARS (contact)","Marine Traffic","DONIA - MEDTRIX","Trafic 2000 - Ops","Cruise Mapper","NEPTUNE(PORT DE MARSEILLE)","ANAIS","CLEANSEANET / SEG","EMSA","L'intranet des CROSS - SURPOL","REDDIB","DATA SHOM"],icons=["icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","icon-LOGO-APP","bx bx-navigation","bx bx-navigation","bx bx-navigation","bx bx-navigation","bx bx-navigation","bx bx-navigation","bx bx-navigation","bx bx-navigation","bx bx-navigation","icon-SURPOLE","icon-SURPOLE","icon-SURPOLE","icon-WATER","icon-WATER"],translateY=["-88px","-50","-34","-88px"];export default class extends AbstractView{constructor(i){super(i),this.setTitle("Liens Opérations"),Code=(Code="")+`
    <div class="iconPath">
    <i class="bx bx-home bx-border-circle"></i>
    >
    <i class="bx bx-heart"></i>
    </div>
      <i onclick="history.back()" class="backButton bx bx-arrow-back bx-flashing-hover"></i>
      <div class="mainTitle">Liens Opérations</div>
      <div class="SwitchedPanel">
        <main class="site-wrapper">
            <div class="pt-tablecell page-home">
            <img style="width:300px;transform: rotateZ(270deg);position: absolute;top:50%;left:-100px; opacity:0.3;" src="imgs/d.png" alt="">
    `+' <div class="hexagon-menu clear">',names.forEach(function(i,t){Code+=`
          <div class="hexagon-item">
            <div class="hex-item">
                <div></div> <div></div> <div></div>
            </div>
            <div class="hex-item">
                <div></div> <div></div> <div></div>
            </div>
            <a  class="hex-content" target="_blank" href="${sites[t]}" >
                <span class="hex-content-inner">
                    <span class="icon">
                        <i class="${icons[t]}"></i>
                    </span>
                    <span class="title">${i}</span>
                </span>
                <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" ><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
            </a>
          </div>
      `,t%7==6&&(Code+=` </div> <div class="hexagon-menu clear" style="transform: translateY(${translateY[parseInt(t/7)]});"> `)}),Code+="</div></main> </div>"}async getHtml(){return Code}}