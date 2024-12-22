<script lang="ts">
  import { mdiTheater } from '@mdi/js';
  import LinkButton from './LinkButton.svelte';

  export let link: string;
</script>

<LinkButton {link} iconPath={mdiTheater} iconAlt="">See the full performance</LinkButton>
