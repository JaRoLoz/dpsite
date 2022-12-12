<script lang="ts">

</script>

<div>
	<section>
        <article style="background-image: url('https://www.luisllamas.es/wp-content/uploads/2011/10/web2.jpg');" />
		<article>
			<h2>¿Qué es la Web 2.0?</h2>
			<p>El término se surgió para referirse a nuevos sitios web que se diferenciaban de los sitios web más tradicionales englobados bajo la denominación web 1.0. La característica diferencial es la participación colaborativa de los usuarios.</p>
		</article>
	</section>
	<section>
        <article style="background-image: url('https://www.comparahosting.com/wp-content/uploads/2020/06/Imagen-pincipal-foro-en-l%C3%ADnea.jpg');" />
		<article>
			<h2>Foros</h2>
			<p>Un foro de internet es un lugar donde las personas pueden intercambiar ideas sobre temas de interés. Sus miembros pueden publicar discusiones y leer y responder a los mensajes escritos por otros participantes.</p>
		</article>
	</section>
	<section>
        <article style="background-image: url('https://linube.com/blog/wp-content/uploads/correo-electronico.jpg');" />
		<article>
			<h2>Email</h2>
			<p>El correo electrónico es un sistema de correspondencia que permite el intercambio de mensajes entre usuarios que estén conectados a una red informática, pero ubicados en distintas computadoras.</p>
		</article>
	</section>
	<section>
        <article style="background-image: url('https://revistabyte.es/wp-content/uploads/2020/09/videoconferencia-web-696x505.jpg');" />
		<article>
			<h2>Videoconferencias</h2>
			<p>Hoy en día Internet nos permite realizar reuniones virtuales utilizando nuestra webcam y micrófono para comunicarnos con otros usuarios.</p>
		</article>
	</section>
	<section>
        <article style="background-image: url('https://www.presteamshop.com/blog/wp-content/uploads/2020/08/mejores-modulos-de-chat-online-para-tu-tienda-en-prestashop.png');" />
		<article>
			<h2>Mensajería</h2>
			<p>Programas de comunicación basados en texto, donde dos personas entablan una conversación a través de dispositivos conectados a Internet, como computadoras, celulares y tabletas.</p>
		</article>
	</section>
</div>

<svelte:head>
	<title>Medios | Web 2.0</title>
</svelte:head>

<style lang="postcss">
	div {
		box-sizing: border-box;
		padding-top: 1rem;
		display: grid;
		gap: 1rem;
	}
	section {
		width: 95%;
		margin-left: auto;
		margin-right: auto;
		padding: .3rem;
		display: grid;
		grid-template-columns: 30% 70%;
		border: 2px solid black;
		border-radius: .5rem;
	}
	section > article:first-of-type {
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}

	section > article:not(:first-of-type) {
		margin-left: 1rem;
	}
</style>
