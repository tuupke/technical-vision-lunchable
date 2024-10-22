<script lang="ts">
	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="flex flex-col items-center justify-between w-screen h-screen max-h-screen">
	{#if data.meta.type === 'content'}
		<section class="flex flex-col justify-center w-5/6 h-full pt-10 mx-auto">
				<!-- Title -->
				<hgroup class="flex items-center w-full mb-10">
					<h1 class="w-full text-6xl font-black text-center text-sky-600">{data.meta.title}</h1>
				</hgroup>

				<!-- Post -->
				<div class="prose prose-2xl prose-invert max-w-none">
					<svelte:component this={data.content} />
				</div>
		</section>
	{:else if data.meta.type === 'demo'}
		<section class="w-5/6 pt-10 mx-auto">
			<hgroup class="flex items-center w-full">
				<h1 class="w-full text-3xl text-center">{data.meta.title} | {data.meta.type} </h1>
			</hgroup>
		</section>
	{:else if data.meta.type === 'code'}
		<section class="w-5/6 pt-10 mx-auto">
			<hgroup class="flex items-center w-full">
				<h1 class="w-full text-3xl text-center">{data.meta.title} | {data.meta.type} </h1>
			</hgroup>
		</section>
	{/if}

	<footer class="flex justify-between w-full px-6 py-4 text-gray-500">
		<a href="{data.previous}">Previous</a>
		<p>{data.current} / {data.total}</p>
		<a href="{data.next}">Next</a>
	</footer>
</div>

<style>
	footer {
		view-transition-name: footer;
	}

	hgroup {
		view-transition-name: title;
	}
</style>
