<script>
    import VisitCounter from "./VisitCounter.svelte";
</script>

<div>
    <div id="top-info">
        <VisitCounter />
        <h1><span>Web 2.0</span></h1>
    </div>
    <div id="top-link">
        <a href="#/"><span>Inicio</span></a>
        <a href="#/media"><span>Medios</span></a>
        <a href="#/tools"><span>Herramientas</span></a>
        <a href="#/"><span>Página 3</span></a>
        <a href="#/"><span>Página 4</span></a>
    </div>
</div>

<style lang="postcss">
    h1 {
        font-size: 35px;
    }

    div:first-of-type {
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;  
    }

    #top-info {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-bottom: 1px solid black;
        align-items: center;
        place-items: center;
        min-height: 4rem;
    }   

    #top-link {
        min-height: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 4px;
        border-bottom: 1px solid black;
    }

    a {
        border-radius: 10px;
        color:rgba(255, 255, 255, 0.87);
        border: none;
        transition: 1s;
    }

    a:hover {
        box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.87);
        padding-top: 3px;
        padding-bottom: 3px;
        padding-left: 10vw;
        padding-right: 10vw;
        display: flex;
        flex-direction: columns;
        justify-content: center;
        transition: 1s;
    }
</style>