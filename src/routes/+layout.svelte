<script>
	import '@picocss/pico';
</script>

<body>
	<main class="container-fluid">
		<slot />
	</main>
</body>

<style>
	body {
		touch-action: manipulation;
	}
</style>
