export const sampleShow = {
  elements: {
    name: {
      value: "Alquist's revenge"
    },
    description: {
      resolvedHtml: "<p>All the acting</p>"
    },
    main_image: {
      assets: [{
        description: "A cool image",
        url: "https://example.com"
      }]
    },
    ticket_link: {
      value: "https://example.com"
    },
    url: {
      value: "alquists-revenge"
    },
    gallery: {
      assets: [{
        description: "A cool image",
        url: "https://example.com"
      }]
    }
  }
}

export const sampleShowNoGallery = JSON.parse(JSON.stringify(sampleShow))
sampleShowNoGallery.gallery.assets = []

export const sampleShowNoTicketLink = JSON.parse(JSON.stringify(sampleShow))
sampleShowNoGallery.ticket_link.value = ""

export const basicInfoQuery = {
  kenticoCloudItemBasicInfo: {
    elements: {
      name: {
        value: "Czech Theater"
      },
      favicon: {
        assets: [{
          url: "https://assets-us-01.kc-usercontent.com/fb599585-baec-0077-1624-981d3321fff0/4e43fc7c-ce8d-49fd-aba9-bdf908330220/logo.jpg"
        }]
      },
      short_description: {
        value: "A great theater."
      }
    }
  }
}