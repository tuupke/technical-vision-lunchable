<details class="css-only">
	<summary>Details</summary>
	<div id="demo-accordion-css">
		<p>This is just a basic accordion</p>
	</div>
</details>

<style>
	.css-only #demo-accordion-css {
		transition:
			display 0.3s allow-discrete,
			opacity 0.3s,
			max-block-size 0.3s;
		opacity: 0;
		max-block-size: 0;
	}

	.css-only[open] #demo-accordion-css {
		opacity: 1;
		max-block-size: 200px;
	}

	@starting-style {
		.css-only[open] #demo-accordion-css {
			opacity: 0;
			max-block-size: 0;
		}
	}

	details {
		align-self: flex-start;
		margin-left: 20vw;
		font-size: 24px;
		cursor: pointer;

		& p {
			padding: 8px 0;
		}
	}
</style>
