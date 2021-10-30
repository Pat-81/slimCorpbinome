<?php require_once 'partials/head.php' ?>

    <h1 id="titre" class="text-center py-3">SLIME CORP</h1>
    <div class=" row no-gutters justify-content-around p-5" id="projets">
        <div class="partner col-lg-6 pt-2 text-center">
            <h2 class="text-center pt-5 pb-5">Nos partenaires</h2>
            <div id="partenaires">
            </div>
        </div>

        <div class="partner col-lg-6 pt-2 pb-5">
            <h2 class="text-center pt-5">Soutenez-nous</h2>
            <div class="input-group pt-5 ">
                <div class="input-group-prepend mx-auto pt-3 pb-5">
                    <label class="input-group-text don" for="inputGroupSelect01">Votre don</label>
                    <select class="custom-selec" id="inputGroupSelect01" disabled=true>
                        <option selected>Choisissez votre montant</option>
                        <option value="5">5€</option>
                        <option value="10">10€</option>
                        <option value="15">15€</option>
                        <option value="20">20€</option>
                        <option value="25">25€</option>
                    </select>
                </div>
            </div>
            <form action="">
                <div class="form-check text-center pt-3">
                    <input id="don-checkbox" type="checkbox" class="form-check-input" id="exampleCheck1 ">
                    <label class="form-check-label" for="exampleCheck1">Veuillez accepter pour valider votre don</label>
                </div>
                <button id="don" class="btn btn-outline-light d-block mx-auto mt-3 disabled">Valider</button>
            </form>
        </div>
    </div>
    <button id="ajout" class="btn btn-lg d-block mx-auto mt-3">Ajouter un partenaire</button>
    <div id="formulaire" class="col-lg-4 mx-auto d-flex flex-column-reverse justify-content-center">
     
    <button id="btnAddPartner" class="btn btn-outline-light  mx-auto mt-3  hide disabled" type="submit">Valider</button>
    </div>

    <?php require_once 'partials/footer.php' ?>