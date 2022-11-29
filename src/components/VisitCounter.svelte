<script lang="ts">
    if (!localStorage.getItem('visits')) localStorage.setItem('visits', '1');
    let visits = localStorage.getItem('visits');
    let zeroes: Array<null> = [];
    for (let i = 0; i < 4 - visits.split('').length; i++) zeroes.push(null);
    localStorage.setItem('visits', (+localStorage.getItem('visits') + 1).toString());
</script>

<div>
    {#each zeroes as zero}
        <span>0</span>
    {/each}
    {#each visits.split('') as num}
        <span>{num}</span>
    {/each}
</div>

<style lang="postcss">
    div {
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        border: 2px solid rgba(255, 255, 255, 0.87);
        border-radius: 10px;
    }

    div > span {
        padding: 2px;
        border-left: 2px solid rgba(255, 255, 255, 0.87);
    }

    div > span:first-child {
        border: none;
    }
</style>