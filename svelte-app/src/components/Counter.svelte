<script>
	export let msg;
	let count = 0;

	function increment() {
		count++;
	}
</script>

<h1>This value was passed from the parent: <span>{msg}</span></h1>
<button on:click="{increment}">Counter: {count}</button>

<style>
	h1 {
		color: #6f9b74;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 300;
	}

    span {
        color: black
    }
</style>