<script lang="ts">

</script>

<div>
    <section>
        <article>
            <h2><span>Herramientas colaborativas</span></h2>
            <p><span>Hoy en día Internet y la Web 2.0 nos permiten el uso de herramientas de trabajo colaborativas sin apenas complicación y con un muy fácil uso.</span></p>
        </article>
    </section>
    <section class="tools-grid">
        <article>
            <span>
                <h3>Youtube</h3>
                <p>Youtube pagame Youtube pagame Youtube pagame Youtube pagame Youtube pagame Youtube pagame Youtube pagame Youtube pagame Youtube pagame Youtube pagame Youtube pagame Youtube pagame Youtube pagame</p>
            </span>
        </article>
    </section>
</div>

<svelte:head>
	<title>Herramientas | Web 2.0</title>
</svelte:head>

<style lang="postcss">
	article {
		padding: 1rem;
	}
	article > h2, p {
		padding: .5rem;
	}
	.tools-grid {
		padding: .5rem;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, 14rem);
	}
    .tools-grid > article {
        padding: .4rem;
        border: 2px solid black;
        border-radius: .8rem;
        color: rgba(0, 0, 0, 0);
        transition: 1s;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url("https://www.internetmatters.org/wp-content/uploads/2018/01/YouTube-logo-pc-2-600x314.png");
    }

    .tools-grid > article:hover {
        background: none;
        color: rgba(0, 0, 0, 1);
        transition: 1s;
    }

    .tools-grid > article > span > * {
        margin: 0;
        padding: 0;
    }

    .tools-grid > article > span {
        z-index: -1;
    }
</style>
