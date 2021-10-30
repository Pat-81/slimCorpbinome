</main>
<footer>
  <div class="row no-gutters text-center justify-content-around p-5">
    <div class=" row no-gutters col-sm-11 col-md-11 col-lg-11 col-xl-6 justify-content-around">
      <div class="col-sm-11 col-md-10 col-lg-6 col-xl-6">
        <h2 class="text-center h4">Nos coordonnées</h2>
        <p class="pt-3"><i class="fas fa-map-marked-alt py-1">&nbsp 1 rue du test <br>&nbsp 00000 TestCity</i><br><i class="fas fa-phone py-1">&nbsp 00-01-02-03-04</i></p>
      </div>

      <div id="map" class="col-sm-12 col-md-8 col-lg-6 col-xl-6">
      </div>
    </div>

    <div class="row no-gutters col-sm-11 col-md-11 col-lg-11 col-xl-6 justify-content-center">
      <div class="col-sm-11 col-md-6 col-lg-6 col-xl-6">
        <h2 class="text-center pb-2 h4">Newsletter</h2>
        <form>
          <div class="form-group ">
            <label for="formGroupExampleInput">Recevez notre newsletter</label>
            <input type="text" class="form-control w-75 mx-auto" id="formGroupExampleInput" placeholder="Entre votre adresse email">
          </div>
        </form>
      </div>
      <div class="col-sm-11 col-md-10 col-lg-6 col-xl-6">
        <h2 class="text-center pb-2 h4">Suivez- nous !</h2>
        <a href="#"><i class="social fab fa-facebook pt-3 px-1">&nbsp Facebook</i></a>
        <a href="#"><i class="social fab fa-twitter pt-3 px-1">&nbsp Twitter</i></a>
        <a href="#"><i class="social fab fa-tiktok pt-3 px-1">&nbsp Tiktok</i></a>
        <a href="#"><i class="social fab fa-instagram pt-3 px-1">&nbsp Instagram</i></a>
      </div>

    </div>
  </div>


</footer>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
<!--script-->
<script src="https://maps.google.com/maps/api/js?key=AIzaSyC2nqyjJXAQUiDstx3Km8vP4GBGOZfy__A" type="text/javascript"></script>
<script async type="text/javascript">
  // On initialise la latitude et la longitude de Paris (centre de la carte)
  var lat = 48.852969;
  var lon = 2.349903;
  var map = null;
  // Fonction d'initialisation de la carte
  function initMap() {
    // Créer l'objet "map" et l'insèrer dans l'élément HTML qui a l'ID "map"
    map = new google.maps.Map(document.getElementById("map"), {
      // Nous plaçons le centre de la carte avec les coordonnées ci-dessus
      center: new google.maps.LatLng(lat, lon),
      // Nous définissons le zoom par défaut
      zoom: 11,
      // Nous définissons le type de carte (ici carte routière)
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      // Nous activons les options de contrôle de la carte (plan, satellite...)
      mapTypeControl: true,
      // Nous désactivons la roulette de souris
      scrollwheel: false,
      mapTypeControlOptions: {
        // Cette option sert à définir comment les options se placent
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
      },
      // Activation des options de navigation dans la carte (zoom...)
      navigationControl: true,
      navigationControlOptions: {
        // Comment ces options doivent-elles s'afficher
        style: google.maps.NavigationControlStyle.ZOOM_PAN
      }
    });
  }
  window.onload = function() {
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap();
  };
</script>
<script src="js/main.js"></script>
<script src="js/projets.js"></script>
<script src="js/formulaire.js"></script>

</body>

</html>