<script lang="ts">
  import Title from '$lib/components/Title.svelte';
  import { utils, writeFile } from 'xlsx';

  let submitted = $state(false);
  let rows = $state(1);
  let ticketCounts: { [row: string]: number } = $state({ 0: 1 });

  const getRowNumber = (string: string): string => string.split(/[a-zA-Z]*/)[1];

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const currentTarget = event.target as EventTarget & HTMLFormElement;
    const formData = new FormData(currentTarget);

    const data = [];
    let formIndex = 0;
    for (const [key, value] of formData) {
      // Look for even numbers to get only emails
      // Ticket numbers come from the state
      if (formIndex % 2 === 0) {
        const rowIndexNumber = getRowNumber(key);
        data.push([value, ticketCounts[rowIndexNumber]]);
      }
      formIndex += 1;
    }

    const worksheet = utils.aoa_to_sheet(data);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'People to Invite');

    writeFile(workbook, 'invites.xlsx');

    submitted = true;
  };

  const numberArray = new Array(10);

  const addRow = () => {
    rows += 1;
  };
  const buttonStyles =
    'hover:text-medium focus:text-medium inline-block inline-flex items-center gap-2 rounded-lg bg-blue-100 p-2 hover:bg-blue-200 focus:bg-blue-200';
</script>

<svelte:head>
  <title>Create File To Invite People</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<Title>Create File To Invite People</Title>

{#if !submitted}
  <form onsubmit={handleSubmit}>
    {#each new Array(rows).keys() as _row, rowIndex (rowIndex)}
      <div class="mb-4 flex flex-wrap gap-8">
        <div class="flex flex-col">
          <label class="text-xs" for={`email${rowIndex}`}>Email</label>
          <input
            class="border-2"
            type="email"
            id={`email${rowIndex}`}
            name={`email${rowIndex}`}
            value=""
          />
        </div>
        <div class="flex flex-col">
          <label class="text-xs" for={`ticketCount${rowIndex}`}
            >Number of Tickets</label
          >
          <select
            class="w-12 text-center"
            id={`ticketCount${rowIndex}`}
            name={`ticketCount${rowIndex}`}
            bind:value={ticketCounts[rowIndex]}
          >
            {#each numberArray as _x, numIndex (numIndex)}
              <option value={numIndex + 1}>{numIndex + 1}</option>
            {/each}
          </select>
        </div>
      </div>
    {/each}
    <button class={buttonStyles} type="submit">Create sheet</button>
  </form>
  <button class={`mt-4 ${buttonStyles}`} onclick={addRow}
    >Add another person</button
  >
{:else}
  <p data-testid="submittedText">
    You should be prompted to download the file. Then add it to the right event
    in <a
      class="font-medium underline hover:no-underline focus:no-underline"
      href="https://smsticket.cz/poradatel">Smsticket</a
    >. To create a new file, refresh the page.
  </p>
{/if}
