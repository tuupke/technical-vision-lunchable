<script lang="ts">
  export let chrome: string = '';
  export let firefox: string = '';
  export let safari: string = '';

  export let shipIt: boolean = false;
  export let tryIt: boolean = false;
  export let checkIt: boolean = false;

  export let globalScore: string = '';
  export let dashboardScore: string = '';
</script>

<h1>🚢 ship score 🚢</h1>

{#if shipIt}
  <div>SHIP IT</div>
{/if}

{#if tryIt}
  <div>SHIP IT</div>
{/if}

{#if checkIt}
  <div>SHIP IT</div>
{/if}

{#if dashboardScore}
  <div>
    <span>{dashboardScore}</span>
    <span>Dashboard Users</span>
  </div>
{/if}

{#if globalScore}
  <div>
    <span>{globalScore}</span>
    <span>Global Usage</span>
  </div>
{/if}