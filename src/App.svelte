<script lang="ts">
    import Router from "svelte-spa-router";
    import Topbar from "./components/Topbar.svelte";
    import VisitorMap from "./components/VisitorMap.svelte";
    import Clock from "./components/Clock.svelte";
    import routes from "./routes";
    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth/>

<Topbar />
<div id="page-content">
    <div><Router {routes}/></div>
    {#if innerWidth > 700}
        <div id="about-content">
            <Clock />
            <VisitorMap />
        </div>
    {/if}
</div>

<style>
    #page-content {
        display: grid;
        grid-template-columns: 1fr 20rem;
        min-height: calc(100vh - 6rem - 10px);
    }

    #about-content {
        background-color: #4a4a4a;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
</style>
