<script lang="ts">
	import SvgIcon from '$lib/components/SvgIcon.svelte';
	import { mdiTicket } from '@mdi/js';
	import LinkButton from './LinkButton.svelte';

	export let link: string;
</script>

<LinkButton {link}>
	<SvgIcon path={mdiTicket} alt="" />
	Tickets
</LinkButton>
