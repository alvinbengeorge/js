<script>

    const title = "Chat";
    const age = 19;

    let messages = [
        { text: "Hello", bot: "start" },
        { text: "Hello", bot: "end" },
    ];


</script>

<main>
    <div class="padding">
        <h1 class="text-6xl underline content-center">Hello {title}!</h1>
    </div>
    <div class="">
        {#each messages as message}
            <div class="chat chat-{message.bot}">
                <p class="chat-bubble">{message.text}</p>
            </div>
        {/each}
    </div>
</main>

<style global lang="postcss">
    :global(html) {
        background-color: theme("colors.gray.100");
    }

    .padding {
        padding: 1rem 0rem;
    }
</style>