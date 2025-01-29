<script lang="ts">
  import {
    PortableText,
    type PortableTextComponents
  } from '@portabletext/svelte';
  import {
    transformToPortableText
  } from '@kontent-ai/rich-text-resolver';
  import type { Elements } from '@kontent-ai/delivery-sdk';

  import ExternalLink from './RichTextElements/ExternalLink.svelte';
  import InternalLink from './RichTextElements/InternalLink.svelte';
  import Paragraph from './RichTextElements/Paragraph.svelte';
  import RichTextImage from './RichTextElements/RichTextImage.svelte';
  import Component from './RichTextElements/Component.svelte';

  export let richTextElement: Elements.RichTextElement;

  let { links, linkedItems, value: richText } = richTextElement;
  const portableText = transformToPortableText(richText);

  const portableTextComponents: PortableTextComponents = {
    types: {
      image: RichTextImage,
      componentOrItem: Component
    },
    block: {
      normal: Paragraph
    },
    marks: {
      contentItemLink: InternalLink,
      link: ExternalLink
    }
  };
</script>

<PortableText
  value={portableText}
  components={portableTextComponents}
  context={{ links, linkedItems }}
/>
