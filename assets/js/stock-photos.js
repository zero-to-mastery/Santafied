window.onload = async () => {
  const response = await fetch('https://api.unsplash.com/photos/random?client_id=5f15d1d0b2164d7a7e6f371db87cae6cbce09dcab5e63fd0d0214b40a21d4b7a&count=21&query=christmas')

  const myJson = await response.json()

  const filteredPhotos = myJson.map((photo) => ({
    link: photo.links.html,
    url: photo.urls.thumb,
    alt_description: photo.alt_description,
    description: photo.description,
    photographer: photo.user.name
  }))

  filteredPhotos.forEach((photo) => {
    const container = document.querySelector('#stock-photos-container')

    container.setAttribute('style',
      "padding: 0 3px; align-self: center"
    )

    container.classList.add('row')

    const image = (photoProps) => {
      const imgDiv = document.createElement('div')

      imgDiv.setAttribute('style',
        "padding: 10px 5px; border: 1px solid black; border-radius: 7px; text-align: center",
      )

      imgDiv.setAttribute('class', 'col-4')

      imgDiv.innerHTML = `<a href=${photoProps.link}><img src=${photoProps.url} alt=${photoProps.alt_description} /><span>Photo by ${photoProps.photographer}</span></a>`

      return imgDiv
    }

    container.appendChild(image(photo))
  })
}