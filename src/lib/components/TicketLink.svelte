<script lang="ts">
	import { mdiTicket } from '@mdi/js';
	import LinkButton from './LinkButton.svelte';

	export let link: string;
</script>

<LinkButton {link} iconPath={mdiTicket} iconAlt="">
	Tickets
</LinkButton>
