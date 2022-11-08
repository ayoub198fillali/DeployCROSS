<?php
?> <!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AIE.NG</title><link rel="icon" type="image/png" href="/imgs/favicon.png"><script src="./js/static/bundle.min.js" crossorigin="anonymous"></script><script src="./js/static/bundle.tracing.min.js" crossorigin="anonymous"></script><script>Sentry.init({
      dsn: "https://97b5bc3c2bb4429ea8c5b076e773fa90@o1357113.ingest.sentry.io/6643205",
      release: "aieng@1.8.22",
      integrations: [new Sentry.BrowserTracing()],
      tracesSampleRate: 1.0,
    });</script><link rel="stylesheet" href="./css/static/normalize.min.css"><link rel="stylesheet" href="./css/static/boxicons.min.css"><link rel="stylesheet" href="./css/fontsIcons.min.css"><link href="./css/static/jquery.dataTables.min.css" rel="stylesheet"><link href="./css/static/buttons.dataTables.min.css" rel="stylesheet"><link href="./css/static/searchPanes.dataTables.min.css" rel="stylesheet" type="text/css"><link href="./css/static/select.dataTables.min.css" rel="stylesheet" type="text/css"><link href="./css/static/rowReorder.dataTables.min.css" rel="stylesheet"><link rel="stylesheet" href="./css/main.min.css"><link rel="stylesheet" href="./views/Css/views.min.css"><link rel="stylesheet" href="./views/Css/Home.min.css"><link rel="stylesheet" href="./views/Css/Surnav.min.css"><link rel="stylesheet" href="./views/Css/Mouillage.min.css"><link rel="stylesheet" href="./views/Css/RsmSurfaune.min.css"><link rel="stylesheet" href="./views/Css/Surpol.min.css"><link rel="stylesheet" href="./views/Css/JournalOperation.min.css"><link rel="stylesheet" href="./views/Css/EnCours.min.css"><link rel="stylesheet" href="./views/Css/LienOperation.min.css"><link rel="stylesheet" href="./views/Css/Settings.min.css"><link rel="stylesheet" href="./views/Css/AddSortie.min.css"><link rel="stylesheet" href="./views/Css/Documents.min.css"></head><body style="zoom:85%"><div class="sidebar"><div class="mainLogo"><em style="font-size:18px" class="icon-LOGO-APP icon"></em><div class="logoName">AIE.NG</div><em class="bx bx-menu" id="btn"></em></div><div id="idMainTitleOrLOGO" class="mainLogoText"><img class="LogoCrossMed" src="./imgs/ENGLOGO.png" alt=""></div><ul class="navList"><li class="buttonMenu" id="SEARCH"><em class="bx bx-search"></em> <input type="search" placeholder="Search..."> <span class="tooltip">Search</span></li><li class="buttonMenu"><a class="NAV-A" href="/" data-link><em class="NAV-Img bx bx-home"></em> <span class="linksName">HOME</span> </a><span class="tooltip">HOME</span></li><li class="buttonMenu"><a id="surnavIdView" class="NAV-A" href="/surnav" data-link><em class="NAV-Img bx bx-navigation"></em> <span class="linksName">Surnav</span> </a><span class="tooltip">Surnav</span></li><li class="buttonMenu"><a class="NAV-A" href="/mouillage" data-link><em class="NAV-Img icon-MOUILLAGE"></em> <span class="linksName">Mouillage</span> </a><span class="tooltip">Mouillage</span></li><li class="buttonMenu"><a id="rsmsurfauneIdView" class="NAV-A" href="/rsmsurfaune" data-link><em class="NAV-Img icon-WATER"></em> <span class="linksName">Rsm/Surfaune</span> </a><span class="tooltip">RSM/Surfaune</span></li><li class="buttonMenu"><a id="surpolIdView" class="NAV-A" href="/surpol" data-link><em class="NAV-Img icon-SURPOLE"></em> <span class="linksName">Surpol</span> </a><span class="tooltip">Surpol</span></li><li class="buttonMenu"><a class="NAV-A" href="journauxoperations" data-link><em class="NAV-Img bx bx-folder"></em> <span class="linksName">Journaux Opérations</span> </a><span class="tooltip">Journaux Opérations</span></li><li class="buttonMenu"><a class="NAV-A" href="/encours" data-link><em class="NAV-Img icon-SPINNER"></em> <span class="linksName">En Cours</span> </a><span class="tooltip">En Cours</span></li><li class="buttonMenu"><a class="NAV-A" href="/liensoperations" data-link><em class="NAV-Img bx bx-heart"></em> <span class="linksName">Liens Opérations</span> </a><span class="tooltip">Liens Opérations</span></li><li class="buttonMenu"><a id="settingIdView" class="NAV-A" href="/setting" data-link><em class="NAV-Img bx bx-cog"></em> <span class="linksName">Setting</span> </a><span class="tooltip">Setting</span></li><div style="height: 55px"></div><li id="logOutButton" class="profile"><div class="profile-details"><div class="name_job"><div class="name">CROSSMED</div><div id="copyRight" class="job">Company</div></div></div><em class="bx bx-log-out" id="logOut"></em></li></ul></div><section id="MainPanel" class="main-section"></section><div class="menuRight"><a class="NAV-A" href="/addsortie" data-link><em class="NAV-Img icon-YACHT2 bx-tada"></em></a></div><div style="transform:translateY(calc(-100% + 100px))" class="menuRight"><a class="NAV-A" href="/journalquart" data-link><em class="NAV-Img icon-QUART bx-tada"></em></a></div><div style="transform:translateY(calc(-200% - 30px))" class="menuRightBottom"><a class="NAV-A" href="/documents" data-link><em class="NAV-Img icon-DOC-INFO-S bx-tada"></em></a></div><div style="transform:translateY(calc(-100% - 15px))" class="menuRightBottom"><a class="NAV-A" href="/otherwin" data-link><em class="NAV-Img bx bx-desktop bx-tada"></em></a></div><div id="menuRightBottomSeamis" class="menuRightBottom"><a class="NAV-A"><em class="NAV-Img icon-LOGO-SEAMIS bx-tada"></em></a></div><div id="dateRightBottom"><script>var idxDate = false;
      var months = ["Janvier", "Février ", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août ", "Septembre", "Octobre", "Novembre", "Décembre"],
        days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

      var date = new Date();
      const dateRightBottom = document.querySelector("#dateRightBottom");

      dateRightBottom.addEventListener("click", () => {
        idxDate = !idxDate;
        (idxDate == true) ?
        dateRightBottom.innerHTML = ('0' + date.getDate()).slice(-2) + "/" + ('0' + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear(): dateRightBottom.innerHTML = `Le ${days[date.getDay()]} ${('0' + date.getDate()).slice(-2)} ${months[date.getMonth()]} ${date.getFullYear()} `;
      })
      dateRightBottom.innerHTML = `Le ${days[date.getDay()]} ${('0' + date.getDate()).slice(-2)} ${months[date.getMonth()]} ${date.getFullYear()} `;</script></div><script>// DataBase Flag
    window.myCookie = Object.fromEntries(
      document.cookie.split("; ").map((c) => c.split("="))
    );
    if (window.myCookie["databaseFlagJs"] == undefined)
      document.cookie = "databaseFlagJs=aienggarde";



    // Debug Flags
    let debug = false;
    let debugUpdates = false;
    let debugCharge = false;
    let debugListners = false;
    /////////////////////////////////////////
    ////////////////Intervale////////////////
    /////////////////////////////////////////
    // The Variable To Update Data Without Updating The Page
    var intervalGlobalSorties = null;
    var intervalGlobalSurnav = null;
    var intervalGlobalLastIdSurnav = null;

    var intervalGlobalSurpol = null;
    var intervalGlobalLastIdSurpol = null;

    var intervalMouillage = null;
    var intervalEnCour = null;
    var intervalJournalOperation = null;

    var intervalGlobalRsmSurfaune = null;
    var intervalGlobalLastIdRsmSurfaune = null;

    var intervalGlobalJQ = null;

    ////////////////
    // All Intervale Functions
    function FintervalGlobalSorties() {}
    //--------
    function FintervalMouillage() {}
    //--------
    function FintervalEnCour() {}
    //--------
    function FintervalJournalOperation() {}
    //--------
    //--------
    function FintervalGlobalLastIdSurnav() {
      clearInterval(intervalGlobalLastIdSurnav)
      intervalGlobalLastIdSurnav = setInterval(function() {
        if (document.location.pathname != "/surnav") {
          if (debug) console.log(" LastId Last surnav");
          clearInterval(intervalGlobalLastIdSurnav);
        } else GetLastIdSurnav();
      }, timeToUpdate);
    }
    //--------
    //--------
    function FintervalGlobalLastIdSurpol() {
      clearInterval(intervalGlobalLastIdSurpol)
      intervalGlobalLastIdSurpol = setInterval(function() {
        if (document.location.pathname != "/surpol") {
          if (debug) console.log(" LastId Last Surpol");
          clearInterval(intervalGlobalLastIdSurpol);
        } else GetLastIdSurpol();
      }, timeToUpdate);
    }
    //--------
    //--------
    function FintervalGlobalLastIdRsmSurfaune() {
      clearInterval(intervalGlobalLastIdRsmSurfaune)
      intervalGlobalLastIdRsmSurfaune = setInterval(function() {
        if (document.location.pathname != "/rsmsurfaune") {
          if (debug) console.log(" LastId Last rsmsurfaune");
          clearInterval(intervalGlobalLastIdRsmSurfaune);
        } else GetLastIdRsmSurfaune();
      }, timeToUpdate);
    }
    //--------
    //--------
    function FintervalGlobalJQ() {
      clearInterval(intervalGlobalJQ);
      intervalGlobalJQ = setInterval(function() {
        if (document.location.pathname != "/journalquart") {
          if (debug) console.log("Last journalquart");
          clearInterval(intervalGlobalJQ);
        } else setThisDateEventJQUpdate();
      }, timeToUpdate);
    }
    /////////////////////////////////////////
    ////////////////Intervale////////////////
    /////////////////////////////////////////
    var timeToUpdate = 4000;
    window.auth = false;</script><script src="./js/static/Jquery.min.js"></script><script src="./js/static/sweetalert2.min.js"></script><script type="text/javascript" src="./js/static/email.min.js"></script><script type="module" src="./js/index.min.js"></script><script src="./js/main.min.js"></script><script src="./js/showHideSearchMenu.min.js"></script><script src="./views/Js/ViewsWork.min.js"></script><script src="./views/Js/HomeWork.min.js"></script><script src="./views/Js/AddSortieWork.min.js"></script><script src="./views/Js/DocumentsWork.min.js"></script><script src="./views/Js/SurnavWork.min.js"></script><script src="./views/Js/SettingsWork.min.js"></script><script src="./views/Js/MouillageWork.min.js"></script><script src="./views/Js/EnCoursWork.min.js"></script><script src="./views/Js/JournalOperationWork.min.js"></script><script src="./views/Js/JournalQuartWork.min.js"></script><script src="./views/Js/RsmSurfauneWork.min.js"></script><script src="./views/Js/OtherWinWork.min.js"></script><script src="./views/Js/SurpolWork.min.js"></script><script src="./js/static/jquery.dataTables.min.js"></script><script src="./js/static/dataTables.rowReorder.min.js"></script><script src="./js/static/dataTables.buttons.min.js"></script><script src="./js/static/jszip.min.js" type="text/javascript"></script><script src="./js/static/pdfmake.min.js" type="text/javascript"></script><script src="./js/static/vfs_fonts.min.js"></script><script src="./js/static/buttons.html5.min.js"></script><script src="./js/static/buttons.print.min.js"></script><script src="./js/static/dataTables.rowGroup.min.js"></script><script src="./js/static/buttons.colVis.min.js"></script><script src="./js/static/dataTables.searchPanes.min.js"></script><script src="./js/static/dataTables.select.min.js"></script><script src="./js/static/highcharts.min.js"></script><script src="./js/static/accessibility.min.js"></script><script src="./js/static/exporting.min.js"></script><script src="./js/static/export-data.min.js"></script><script src="./js/static/natural.min.js"></script><template id="my-template"><swal-title>Les modifications que vous avez apportées ne seront peut-être pas enregistrées?</swal-title><swal-icon type="warning" color="orange"></swal-icon><swal-button color="var( --mainColor)" type="confirm">Continuer</swal-button><swal-button type="cancel">Cancel</swal-button><swal-param name="allowEscapeKey" value="false"><swal-param name="customClass" value='{ "popup": "my-popup" }'></template>;<div id="colorConnectionDB" class="hidden"></div></body></html> <?php
?>