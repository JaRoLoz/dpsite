<script lang="ts">

</script>

<div>
	<section>
		<article>
			<h2>¿Qué es la Web 2.0?</h2>
			<p>El término se surgió para referirse a nuevos sitios web que se diferenciaban de los sitios web más tradicionales englobados bajo la denominación web 1.0. La característica diferencial es la participación colaborativa de los usuarios.</p>
		</article>
		<article>
			<h2>¿Qué servicios ofrece?</h2>
			<p>Hoy en día, los servicios más usados en Internet son: Correo Electrónico, World Wide Web, FTP, Grupos de Noticias, IRC y Servicios de Telefonía. Es una de los primeros servicios de acceso a la red.</p>
		</article>
		<article>
			<h2>Algunas definiciones básicas</h2>
			<div>
				<div>
					<h3><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU" alt="html"><span>HTML</span></h3>
					<p>Es el código que se utiliza para estructurar y desplegar una página web y sus contenidos.</p>
				</div>
				<div>
					<h3><img src="https://help.apple.com/assets/61E89DC80E28571E5079A0BC/61E89DC90E28571E5079A0C3/es_ES/fd47575ee10ce7f149900e7dc633c131.png" alt="html"><span>Navegador</span></h3>
					<p>Un navegador web es un programa que permite ver la información que contiene unapágina web.</p>
				</div>
				<div>
					<h3><img src="https://img.directindustry.es/images_di/photo-mg/61422-15053511.jpg" alt="html"><span>Servidor</span></h3>
					<p>Un servidor web (server) es un ordenador de gran potencia que se encarga de “prestar el servicio” de transmitir la información pedida por sus clientes.</p>
				</div>
				<div>
					<h3><img src="https://i0.wp.com/url-media.com/wp-content/uploads/2021/01/cropped-Icon.png?fit=512%2C512&ssl=1" alt="html"><span>URL o URI</span></h3>
					<p>Es la ubicación de una página web o de un archivo en Internet.</p>
				</div>
				<div>
					<h3><img src="https://linube.com/blog/wp-content/uploads/zona-dns.png" alt="html"><span>DNS</span></h3>
					<p>DNS son las iniciales de Domain Name System (sistema de nombres de dominio) yes una tecnología basada en una base de datos que sirve para resolver nombres en las redes, es decir, para conocer la dirección IP de la máquina donde está alojado el dominio al que queremos acceder.</p>
				</div>
				<div>
					<h3><img src="https://m.media-amazon.com/images/I/41nWydiju6L._AC_SY355_.jpg" alt="html"><span>Router</span></h3>
					<p>Un router es un dispositivo que ofrece una conexión Wi‑Fi, que normalmente está conectado a un módem y que envía información de Internet a tus dispositivos personales, como ordenadores, teléfonos o tablets.</p>
				</div>
				<div>
					<h3><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ycKqGhpnhdQP2q-4-3lubV4yFwCfPmfV-7JEMvIMnfRd5IzQ-MBWGT7qJvh9Fl6N6ac&usqp=CAU" alt="html"><span>Internet</span></h3>
					<p>Internet es una red de computadoras interconectadas a nivel mundial en forma de tela de araña. Consiste de servidores (o "nodos") que proveen información a aproximadamente 100 millones de personas que están conectadas entre ellas a través de las redes de telefonía y cable.</p>
				</div>
			</div>
		</article>
	</section>
</div>

<svelte:head>
	<title>Inicio | Web 2.0</title>
</svelte:head>

<style lang="postcss">
	article {
		padding: 1rem;
	}
	article > h2, p {
		padding: .5rem;
	}
	article > div {
		padding: .5rem;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, 14rem);
	}
	article > div > div {
		padding: .4rem;
		border: 2px solid black;
		border-radius: .5rem;
	}
	article > div > div > h3 {
		display: flex;
		align-items: center;
	}
	article > div > div > h3 > img {
		width: 1.3rem;
	}
</style>
