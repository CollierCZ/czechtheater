export const sampleImage = {
  description: "A great image",
  url: "https://example.com/wide.png"
};

export const sampleImageNoDescription = {
  url: "https://example.com/wide.png"
};

export const sampleTallImageData = {
  description: "A great image",
  height: 250,
  width: 150,
  url: "https://example.com/wide.png"
};

export const sampleWideImageData = {
  description: "A great image",
  height: 150,
  width: 250,
  url: "https://example.com/wide.png"
};


export const sampleShow = {
  elements: {
    name: {
      value: "Alquist's revenge",
    },
    description: {
      value: "<p>All the acting in a longer way.</p>",
    },
    main_image: {
      value: [
        sampleImage
      ],
    },
    short_description: {
      value: "<p>All the acting</p>",
    },
    ticket_link: {
      value: "https://example.com",
    },
    url: {
      value: "alquists-revenge",
    },
    gallery: {
      value: [
        sampleImage
      ],
    },
  },
};

let sampleShowForPage = JSON.parse(JSON.stringify(sampleShow));
sampleShowForPage.elements.main_image.value = [
  sampleImage,
];

let sampleShowNoTicketLink = JSON.parse(JSON.stringify(sampleShow));
sampleShowNoTicketLink.elements.ticket_link.value = "";

let sampleShowForPageNoGallery = JSON.parse(JSON.stringify(sampleShowForPage));
sampleShowForPageNoGallery.elements.gallery.value = [];

let sampleShowForPageNoTicketLink = JSON.parse(JSON.stringify(sampleShowForPage));
sampleShowForPageNoTicketLink.elements.ticket_link.value = "";

export const internalLinkText = "Cat on the Rails"
const internalLinkValue = `<p>This is text with a link to the show <a data-item-id=\"7a4bc255\" href=\"\">${internalLinkText}</a>.</p>`
const internalLinkLinks = [{
  "codename": "cat_on_the_rails",
  "link_id": "7a4bc255",
  "type": "show",
  "url_slug": "cat-on-the-rails"
}]

export const internalLinksObject = {
  internalLinkLinks,
  internalLinkValue
}

let sampleShowForPageWithInternalLink = JSON.parse(JSON.stringify(sampleShowForPage));
sampleShowForPageWithInternalLink.elements.description.value = internalLinkValue
sampleShowForPageWithInternalLink.elements.description.links = internalLinkLinks

export {
  sampleShowForPage,
  sampleShowForPageNoGallery,
  sampleShowForPageNoTicketLink,
  sampleShowNoTicketLink,
  sampleShowForPageWithInternalLink
};

export const basicInfoQuery = {
  kontentItemBasicInfo: {
    elements: {
      name: {
        value: "Czech Theater",
      },
      favicon: {
        value: [
          {
            description: "Czech Theater",
            url: "https://assets-us-01.kc-usercontent.com/fb599585-baec-0077-1624-981d3321fff0/4e43fc7c-ce8d-49fd-aba9-bdf908330220/logo.jpg",
          },
        ],
      },
      short_description: {
        value: "A great theater.",
      },
    },
  },
};
