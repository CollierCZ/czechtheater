export const sampleConstrainedGatsbyImageData = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: {
        layout: "constrained",
        placeholder: {
          fallback:
            "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwb/xAAVAQEBAAAAAAAAAAAAAAAAAAADAv/aAAwDAQACEAMQAAABmpekaaMCz//EAB0QAAICAQUAAAAAAAAAAAAAAAEEAgMRABIUITP/2gAIAQEAAQUCukeWLCNKndQz7ZxNXtf/xAAWEQEBAQAAAAAAAAAAAAAAAAAAATH/2gAIAQMBAT8BmK//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwGo/8QAHBAAAgICAwAAAAAAAAAAAAAAAAIBQSEiYYHw/9oACAEBAAY/AmWMcmtSLI/qOhT/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUGxUWFx/9oACAEBAAE/IbQamRfEuLeH3FUu29/WNKnk6TIQNolLvPc//9oADAMBAAIAAwAAABDsP//EABcRAQEBAQAAAAAAAAAAAAAAAAEAETH/2gAIAQMBAT8QGC6b/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARMf/aAAgBAgEBPxBatwX/xAAcEAEBAAICAwAAAAAAAAAAAAABEQAhMYFhcdH/2gAIAQEAAT8QqSikBp0ffGQYqiQ46R7wWwlnLRY/oUn1g1gSNOIqYodW73z/2Q==",
        },
        backgroundColor: "rgba(255,255,255,1)",
        images: {
          fallback: {
            src: "/static/76e870b9a7408e63cec608575bad6cb8/1169f/roadTrip.jpg",
            srcSet:
              "/static/76e870b9a7408e63cec608575bad6cb8/a72d7/roadTrip.jpg 63w,\n/static/76e870b9a7408e63cec608575bad6cb8/ae327/roadTrip.jpg 125w,\n/static/76e870b9a7408e63cec608575bad6cb8/1169f/roadTrip.jpg 250w,\n/static/76e870b9a7408e63cec608575bad6cb8/69ffc/roadTrip.jpg 500w",
            sizes: "(min-width: 250px) 250px, 100vw",
          },
          sources: [
            {
              srcSet:
                "/static/76e870b9a7408e63cec608575bad6cb8/acf2b/roadTrip.webp 63w,\n/static/76e870b9a7408e63cec608575bad6cb8/7f239/roadTrip.webp 125w,\n/static/76e870b9a7408e63cec608575bad6cb8/8d474/roadTrip.webp 250w,\n/static/76e870b9a7408e63cec608575bad6cb8/ba777/roadTrip.webp 500w",
              type: "image/webp",
              sizes: "(min-width: 250px) 250px, 100vw",
            },
          ],
        },
        width: 250,
        height: 150,
      },
    },
  },
};

export const sampleTallImageData = {
  height: 250,
  width: 150,
  url: "https://example.com/wide.png"
};

export const sampleWideImageData = {
  height: 150,
  width: 250,
  url: "https://example.com/wide.png"
};

export const sampleFixedGatsbyImageData = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: {
        layout: "fixed",
        placeholder: {
          fallback:
            "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAME/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAMB/9oADAMBAAIQAxAAAAGVITlXQwi0goMp/8QAGRABAAMBAQAAAAAAAAAAAAAAAQACAxET/9oACAEBAAEFAtbMdUs78tsukH0lseMrdIT/xAAXEQEBAQEAAAAAAAAAAAAAAAAAASEx/9oACAEDAQE/AWr1H//EABcRAAMBAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8BMV//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECEBKhIWFxgf/aAAgBAQAGPwLKpQJxwhyzHfZq30r8t//EABoQAAIDAQEAAAAAAAAAAAAAAAERACExQfD/2gAIAQEAAT8hIDvIfJogMwTAHa2ChpQzKqxCU5y5oXuwUi0YbF8qf//aAAwDAQACAAMAAAAQq+e//8QAGhEBAQACAwAAAAAAAAAAAAAAAQARITFBYf/aAAgBAwEBPxDAKd3klpcL/8QAGBEBAQADAAAAAAAAAAAAAAAAAAERMUH/2gAIAQIBAT8Q3Iyp1X//xAAdEAEBAAIDAQEBAAAAAAAAAAABEQAhMUFhcZHR/9oACAEBAAE/EOXAJBUV56bibYBhLI65ywIoSQIaxQmkdisOvnuICi6Wo6G+bx0TYMFT77gbqh2OdH8Yo/AdihjMbVH4Z//Z",
        },
        images: {
          fallback: {
            src: "/static/76e870b9a7408e63cec608575bad6cb8/46b1b/roadTrip.jpg",
            srcSet:
              "/static/76e870b9a7408e63cec608575bad6cb8/46b1b/roadTrip.jpg 284w,\n/static/76e870b9a7408e63cec608575bad6cb8/dae5c/roadTrip.jpg 568w",
            sizes: "284px",
          },
          sources: [
            {
              srcSet:
                "/static/76e870b9a7408e63cec608575bad6cb8/5d551/roadTrip.webp 284w,\n/static/76e870b9a7408e63cec608575bad6cb8/47346/roadTrip.webp 568w",
              type: "image/webp",
              sizes: "284px",
            },
          ],
        },
        width: 284,
        height: 284,
      },
    },
  },
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
        {
          description: "A cool image",
          ...sampleConstrainedGatsbyImageData,
        },
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
        {
          description: "A cool image",
          ...sampleConstrainedGatsbyImageData,
          url: "https://example.com",
        },
      ],
    },
  },
};

let sampleShowForPage = JSON.parse(JSON.stringify(sampleShow));
sampleShowForPage.elements.main_image.value = [
  {
    ...sampleConstrainedGatsbyImageData,
  },
];

let sampleShowNoTicketLink = JSON.parse(JSON.stringify(sampleShow));
sampleShowNoTicketLink.elements.ticket_link.value = "";

let sampleShowForPageNoGallery = JSON.parse(JSON.stringify(sampleShowForPage));
sampleShowForPageNoGallery.elements.gallery.value = [];

let sampleShowForPageNoTicketLink = JSON.parse(
  JSON.stringify(sampleShowForPage)
);
sampleShowForPageNoTicketLink.elements.ticket_link.value = "";

export {
  sampleShowForPage,
  sampleShowForPageNoGallery,
  sampleShowForPageNoTicketLink,
  sampleShowNoTicketLink,
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
            ...sampleFixedGatsbyImageData,
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
