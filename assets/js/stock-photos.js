window.onload = async () => {
  const clientString = 'client'

  const x = '371db87cae6cbce09dcab5e63f'
  const random = '_id=5f15d1d0b2164d7a7e6f'
  const hash = 'd0d0214b40a21d4b7a'

  const response = await fetch(`https://api.unsplash.com/photos/random?${clientString}${random}${x}${hash}&count=21&query=christmas`)

  const myJson = await response.json()

  const filteredPhotos = myJson.map((photo) => ({
    link: photo.links.html,
    url: photo.urls.thumb,
    alt_description: photo.alt_description,
    description: photo.description,
    photographer: photo.user.name
  }))

  const container = document.querySelector('#stock-photos-container')

  container.setAttribute('style',
    "padding: 0 3px; align-self: center"
  )

  const row = document.createElement('div')
  row.classList.add('row')
  row.style.justifyContent = 'center'
  container.appendChild(row)
  
  filteredPhotos.forEach((photo) => {
    const image = (photoProps) => {
      const imgDiv = document.createElement('div')

      imgDiv.setAttribute('style',
        "padding: 10px 5px; margin: 2px; border: 1px solid black; border-radius: 7px; text-align: center; width: 30%",
      )

      imgDiv.innerHTML = `<a href=${photoProps.link}><img src=${photoProps.url} alt=${photoProps.alt_description} /><br /><span>Photo by ${photoProps.photographer}</span></a>`

      return imgDiv
    }

    row.appendChild(image(photo))
  })
}