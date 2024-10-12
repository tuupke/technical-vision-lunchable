<script lang="ts">
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section>
	<ul class="posts">
		{#each data.slides as slide}
			<li class="post">
				<a href={slide.slug} class="title">{slide.title}</a>
				<p class="description">{slide.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: 2rem;
	}

	.title {
		text-transform: capitalize;
	}
</style>
