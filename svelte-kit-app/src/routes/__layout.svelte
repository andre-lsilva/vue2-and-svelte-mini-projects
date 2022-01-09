<script>
	import '../styles/global.css';
</script>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/blog">Blog</a>
		<a href="/about">About</a>
	</nav>
</header>

<main>
	<slot />
</main>

<style>
	nav {
		background: #68cb80;
		font-size: 2rem;
		display: flex;
		justify-content: space-evenly;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
