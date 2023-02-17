<script>
    let name = "";
    let output = "";

    const buttonClickHandler = () => {
        output = name;
    }
</script>

<main>
    <h1 class="heading">Welcome to Svelte</h1>
    <p>Your name is {output}</p>
    <input bind:value={name} />
    <button on:click={buttonClickHandler}>Submit</button>
</main>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .heading {
        text-align: center;
        color:white;
        font-size: large;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;   
    }
</style>
