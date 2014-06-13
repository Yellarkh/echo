<form id="connect" method="post" action="index.php">

						<p>Bienvenu sur <span>echo</span>, une boîte à rythmes qui te permet de créer des morceaux et de les exporter.</p>
						<p class="min">Pour un usage optimal, utilise les dernières versions de <a href="http://www.google.be/intl/fr/chrome/browser/" target="blank">Chrome</a> ou de <a href="http://www.mozilla.org/fr/firefox/new/" target="blank">Firefox</a>.
						
						<div class="alert">
							
							<p class="error">
								<?php

									if($error['login']){
										echo $error['login'];
									}

									if ($error['log']) {
										echo $error['log'];
									}
									if ($error['state']) {
										echo $error['state'];
									}
								?>
							</p>
						</div>

						<div>
						
							
							
							
							<label for="log">Login</label>
							<input type="text" id="log" name="log">

						</div>

						<div class="alert">
							
							<p class="error">
								<?php

									if($error['password']){
									echo $error['password'];
									}
								?>
							</p>
						</div>

						<div>
							
							<label for="pass">Mot de passe</label>
							<input type="password" id="pass" name="pass">
							
						</div>

						<div>
							
							<input type="submit" value="Se connecter">
							<a href="index.php?ins=true" class="register">Pas encore inscrit ?</a>
							<!-- <a href="http://localhost:7777/connexion.php?ins=true" class="register">Pas encore inscrit ?</a> -->
						</div>


					</form>