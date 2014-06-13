<form id="regist" method="post" action="index.php?ins=true">

	<p>Bienvenu sur <span>echo</span>, une boîte à rythmes qui te permet de créer des morceaux et de les exporter.</p>
	<p class="min">Pour un usage optimal, utilise les dernières versions de <a href="http://www.google.be/intl/fr/chrome/browser/" target="blank">Chrome</a> ou de <a href="http://www.mozilla.org/fr/firefox/new/" target="blank">Firefox</a>.
	
	<div class="alert">
		
		<p class="error">
			<?php

				if($erreur['login']){
					echo $erreur['login'];
				}

				elseif($erreur['dlogin']){

					echo $erreur['dlogin'];
				}
				
			?>
		</p>			

	</div>

	<div>
	
		
		<label for="login">Login</label>
		<input type="text" id="login" name="login">

	</div>

	<div class="alert">
		
		<p class="error">
			<?php

				if($erreur['mail']){
					echo $erreur['mail'];
				}

				elseif($erreur['dmail']){

					echo $erreur["dmail"];
				}
			?>
		</p>
	</div>

	<div>
						
		<label for="mail">Mail</label>
		<input type="email" id="mail" name="mail">

	</div>

	<div class="alert">
		
		<p class="error">
			<?php

				if($erreur['password']){
					echo $erreur['password'];
				}
			?>	
		</p>
	</div>

	<div>
		
		<label for="password">Mot de passe</label>
		<input type="password" id="password" name="password">
		
	</div>

	<div>
		
		<input type="submit" value="S'inscrire">
	</div>


</form>