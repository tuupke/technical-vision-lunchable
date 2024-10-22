<script lang="ts">
  import "../app.css";
  import { onNavigate, goto } from "$app/navigation";
  import { page } from '$app/stores';

  onNavigate((navigation) => {
    if(!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete
      })
    })
  })


  console.log($page.data);

  const navigate = (key: KeyboardEvent) => {
    switch (key.code) {
      case 'ArrowRight':
      case 'Space':
        if ($page.data.slides) {
          goto($page.data.slides[0].slug)
        } else {
          goto($page.data.next);
        }
        break;
      case 'ArrowLeft':
        if ($page.data.slides) {
          return
        } else {
          goto($page.data.previous);
        }      
      default:
        break;
    }
  }
</script>

<svelte:window on:keydown={navigate}></svelte:window>

<main class="w-screen h-screen text-gray-100 bg-gray-950">
	<slot />
</main>
