<script>
    let a = 0, b = 0;
    let result = 0;

    const sum = () => {
        result = a + b;
    };

    const difference = () => {
        result = a - b;
    };

    const product = () => {
        result = a * b;
    };

    const quotient = () => {
        result = int(a / b);
    };


</script>

<main>
    <h1>Calculator</h1>
    <input bind:value={a}>
    <input bind:value={b}>

    <button on:click={sum}>Sum</button>
    <button on:click={difference}>Difference</button>
    <button on:click={product}>Product</button>
    <button on:click={quotient}>Quotient</button>

    <h3 class="result">Result => {result}</h3>
</main>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    h1 {
        font-size: 3rem;
        font-weight: 300;
        margin: 0;
    }

    input {
        font-size: 2rem;
        font-weight: 300;
        text-align: center;
        width: 100%;
        max-width: 300px;
        margin: 1rem 0;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        font-size: 2rem;
        font-weight: 300;
        text-align: center;
        width: 100%;
        max-width: 300px;
        margin: 1rem 0;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button:hover {
        background: #ddd;
        color: #333;
        border-radius: 1.4rem;
        animation-duration: 3s;
    }

    button:active {
        background: #ccc;
    }

    button:disabled {
        background: #eee;
        color: #ccc;
        cursor: not-allowed;
    }

    .result {
        font-size: 2rem;
        font-weight: 300;
        text-align: center;
        width: 100%;
        max-width: 300px;
        margin: 1rem 0;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
</style>
