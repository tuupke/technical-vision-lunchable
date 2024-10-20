<script lang="ts">
	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
	</hgroup>

  <!-- Post -->
	<div class="prose prose-invert">
		<svelte:component this={data.content} />
	</div>
</article>

<footer class="flex justify-between">
	<a href="{data.previous}">Previous</a>
	<p>{data.current} / {data.total}</p>
	<a href="{data.next}">Next</a>
</footer>
