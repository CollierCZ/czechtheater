export const sampleShow = {
  elements: {
    name: {
      value: "Alquist's revenge"
    },
    description: {
      resolvedData: {
        html: "<p>All the acting in a longer way.</p>"
      }
    },
    main_image: {
      value: [{
        description: "A cool image",
        url: "https://example.com"
      }]
    },
    short_description: {
      value: "<p>All the acting</p>"
    },
    ticket_link: {
      value: "https://example.com"
    },
    url: {
      value: "alquists-revenge"
    },
    gallery: {
      value: [{
        description: "A cool image",
        url: "https://example.com"
      }]
    }
  }
}

let sampleShowNoGallery = JSON.parse(JSON.stringify(sampleShow))
sampleShowNoGallery.elements.gallery.value = []

let sampleShowNoTicketLink = JSON.parse(JSON.stringify(sampleShow))
sampleShowNoTicketLink.elements.ticket_link.value = ""

export {sampleShowNoGallery,sampleShowNoTicketLink}

export const basicInfoQuery = {
  kontentItemBasicInfo: {
    elements: {
      name: {
        value: "Czech Theater"
      },
      favicon: {
        value: [{
          url: "https://assets-us-01.kc-usercontent.com/fb599585-baec-0077-1624-981d3321fff0/4e43fc7c-ce8d-49fd-aba9-bdf908330220/logo.jpg"
        }]
      },
      short_description: {
        value: "A great theater."
      }
    }
  }
}