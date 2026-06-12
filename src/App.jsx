import './App.css'
import { useState, useEffect, useRef } from 'react'

import coverSong1 from './assets/musica/covers/mami100.mp3'
import coverArt1 from './assets/musica/covers/portadamami.jpeg'
import coverSong2 from './assets/musica/covers/mia.mp3'
import coverArt2 from './assets/musica/covers/portadamia.jpeg'

import logo from './assets/logo.png'
import black1 from './assets/productos/gorras/negra/1.jpeg'
import black2 from './assets/productos/gorras/negra/2.jpeg'
import black3 from './assets/productos/gorras/negra/3.jpeg'
import black4 from './assets/productos/gorras/negra/4.jpeg'
import black5 from './assets/productos/gorras/negra/5.jpeg'

import green1 from './assets/productos/gorras/verde/1.jpeg'
import green2 from './assets/productos/gorras/verde/2.jpeg'
import green3 from './assets/productos/gorras/verde/3.jpeg'
import green4 from './assets/productos/gorras/verde/4.jpeg'
import green5 from './assets/productos/gorras/verde/5.jpeg'

import blue1 from './assets/productos/gorras/azul/1.jpeg'
import blue2 from './assets/productos/gorras/azul/2.jpeg'
import blue3 from './assets/productos/gorras/azul/3.jpeg'
import blue4 from './assets/productos/gorras/azul/4.jpeg'
import blue5 from './assets/productos/gorras/azul/5.jpeg'

import gallery1 from './assets/galeria/1.jpeg'
import gallery2 from './assets/galeria/2.jpeg'
import gallery3 from './assets/galeria/3.jpeg'
import gallery4 from './assets/galeria/4.jpeg'
import gallery5 from './assets/galeria/5.jpeg'
import gallery6 from './assets/galeria/6.jpeg'
import gallery7 from './assets/galeria/7.jpeg'
import gallery8 from './assets/galeria/8.jpeg'
import gallery9 from './assets/galeria/9.jpeg'
import gallery11 from './assets/galeria/11.jpeg'
import gallery12 from './assets/galeria/12.jpeg'
import gallery13 from './assets/galeria/13.jpeg'
import gallery14 from './assets/galeria/14.jpeg'
import gallery15 from './assets/galeria/15.jpeg'
import gallery16 from './assets/galeria/16.jpeg'
import gallery17 from './assets/galeria/17.jpeg'
import gallery18 from './assets/galeria/18.jpeg'
import gallery19 from './assets/galeria/19.jpeg'
import gallery20 from './assets/galeria/20.jpeg'

import mono from './assets/contacto/mono.jpeg'

/* PRODUCTOS */ 
const products = [ { name:'LEVÍ YEAH "beginnings"', price:'$349 MXN', description: 'Primera gorra oficial de Leví Yeah.', sizes:['UNITALLA'], colors:[ { name:'NEGRA', images:[ black1, black2, black3, black4, black5 ] }, { name:'VERDE', images:[ green1, green2, green3, green4, green5 ] }, { name:'AZUL', images:[ blue1, blue2, blue3, blue4, blue5 ] } ] } ]
const musicFolders = [
  {
    category: 'COVERS',
    songs: [
      {
        title: 'MAMI 100PRE',
        audio: coverSong1,
        cover: coverArt1
      },
      {
        title: 'MÍA',
        audio: coverSong2,
        cover: coverArt2
      }
    ]
  },
  {
    category: 'CANCIONES PROPIAS',
    songs: []
  }
]
const galleryPhotos = [
  {
    image: gallery1,
    title: 'MOMENTO 001',
    text: 'ese stiker lo pego mi mujer <3'
  },
  {
    image: gallery2,
    title: 'MOMENTO 002',
    text: 'alguien q me preste su pared para hacerlo'
  },
  {
    image: gallery3,
    title: 'MOMENTO 003',
    text: 'ya la venden en el waldos JAJAJ'
  },
  {
    image: gallery4,
    title: 'MOMENTO 004',
    text: 'awbo mamá'
  },
  {
    image: gallery5,
    title: 'MOMENTO 005',
    text: 'segun ahi dice "Leví Yeah"'
  },
  {
    image: gallery6,
    title: 'MOMENTO 006',
    text: 'si llegan a ver mis stikers, me etiquetan'
  },
  {
  image: gallery7,
  title: 'MOMENTO 007',
  text: 'enebea'
  },
  {
  image: gallery8,
  title: 'MOMENTO 008',
  text: 'es hermoso en persona Larry'
  },
  {
  image: gallery9,
  title: 'MOMENTO 009',
  text: 'como q no me doy cuenta'
  },
  {
  image: gallery11,
  title: 'MOMENTO 011',
  text: 'mi lugar seguro'
  },
  {
  image: gallery12,
  title: 'MOMENTO 012',
  text: 'vandalizando el metro de la cdmx'
  },
  {
  image: gallery13,
  title: 'MOMENTO 013',
  text: 'jesucito4'
  },
  {
  image: gallery14,
  title: 'MOMENTO 014',
  text: 'jesucito trae la gamaaa'
  },
  {
  image: gallery15,
  title: 'MOMENTO 015',
  text: 'yo'
  },
  {
  image: gallery16,
  title: 'MOMENTO 016',
  text: 'leviyeah'
  },
  {
  image: gallery17,
  title: 'MOMENTO 017',
  text: 'duroo'
  },
  {
  image: gallery18,
  title: 'MOMENTO 018',
  text: 'si lo ven me avisan'
  },
  {
  image: gallery19,
  title: 'MOMENTO 019',
  text: 'leviyeah'
  },
  {
  image: gallery20,
  title: 'MOMENTO 020',
  text: 'custom en la bici del chino'
  }
]
function App() {

const [scrolled,setScrolled]=useState(false)
const [selectedProduct,setSelectedProduct]=useState(null)
const [selectedSize,setSelectedSize]=useState('')
const [selectedColor,setSelectedColor]=useState(0)
const [selectedImage,setSelectedImage]=useState(0)
const [selectedPhoto,setSelectedPhoto]=useState(null)

const audioRef = useRef(null)

const [currentSong,setCurrentSong]=useState(null)

const playSong = (song) => {
  setCurrentSong(song)

  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.title,
      artist: 'Leví Yeah',
      album: 'Leví Yeah',
      artwork: [
        {
          src: song.cover,
          sizes: '512x512',
          type: 'image/jpeg'
        }
      ]
    })
  }

  setTimeout(async ()=>{
    if(audioRef.current){
      audioRef.current.load()

      try{
        await audioRef.current.play()
      }catch(error){
        console.log('El navegador bloqueó la reproducción automática:', error)
      }
    }
  },100)
}

const phoneNumber = '525564445244'

const buyOnWhatsApp = () => {
  const product = selectedProduct
  const color = product.colors[selectedColor].name

  const message = `Hola, quiero comprar:
${product.name}
Color: ${color}
Precio: ${product.price}`

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  window.open(url, '_blank')
}

useEffect(()=>{

const handleScroll=()=>{

if(window.scrollY > 100){
setScrolled(true)
}else{
setScrolled(false)
}

}

window.addEventListener('scroll',handleScroll)

return ()=> window.removeEventListener('scroll',handleScroll)

},[])

return (

<div>

<nav className={scrolled ? "navbar active" : "navbar"}>

<a href="#top">

<img src={logo} alt="logo"/>

</a>

<div className="nav-links">

<a href="#shop">mercadería</a>

<a href="#musica">música</a>

<a href="#galeria">galería</a>

<a href="#contacto">contacto</a>

</div>

</nav>

<section id="top" className="hero">

<img
src={logo}
alt="logo"
className="hero-logo"
/>

<div className="hero-buttons">

<a href="#shop">mercadería</a>

<a href="#musica">música</a>

<a href="#galeria">galería</a>

<a href="#contacto">contacto</a>

</div>

</section>

<section id="shop" className="section">

<h2>MERCADERÍA</h2>

<div className="shop-grid">

{products.map((product,index)=>(

<div className="product-card" key={index}>

<img
src={product.colors[1].images[0]}
alt={product.name}
className="product-img"
/>

<h3>{product.name}</h3>

<p>{product.price}</p>

<button onClick={()=>setSelectedProduct(product)}>
ver
</button>

</div>

))}

</div>
{selectedProduct && (
  <div
    className="modal-overlay"
    onClick={()=>{
      setSelectedProduct(null)
      setSelectedColor(0)
      setSelectedImage(0)
    }}
  >
    <div className="product-modal" onClick={(e)=>e.stopPropagation()}>

      <button
        className="close-modal"
        onClick={()=>{
          setSelectedProduct(null)
          setSelectedColor(0)
          setSelectedImage(0)
        }}
      >
        ×
      </button>

      <div>
        <img
          src={selectedProduct.colors[selectedColor].images[selectedImage]}
          alt={selectedProduct.name}
          className="main-product-image"
        />

        <div className="thumbnail-row">
          {selectedProduct.colors[selectedColor].images.map((img,index)=>(
            <img
              key={index}
              src={img}
              alt=""
              className={selectedImage === index ? 'thumbnail active-thumb' : 'thumbnail'}
              onClick={()=>setSelectedImage(index)}
            />
          ))}
        </div>
      </div>

      <div className="modal-info">
        <h3>{selectedProduct.name}</h3>
        <p>{selectedProduct.description}</p>
        <span>{selectedProduct.price}</span>

        <h4>COLOR</h4>
        <div className="color-buttons">
          {selectedProduct.colors.map((color,index)=>(
            <button
              key={index}
              onClick={()=>{
                setSelectedColor(index)
                setSelectedImage(0)
              }}
              className={selectedColor === index ? 'active-color' : ''}
            >
              {color.name}
            </button>
          ))}
        </div>

        <h4>TALLA</h4>
        <div className="sizes">
          {selectedProduct.sizes.map((size)=>(
            <button
key={size}
onClick={()=>setSelectedSize(size)}
className={selectedSize === size ? 'active-size' : ''}
>
{size}
</button>
          ))}
        </div>

        <button className="buy-btn" onClick={buyOnWhatsApp}>
COMPRAR
</button>
      </div>

    </div>
  </div>
)}
</section>

<section id="musica" className="section music-section">

<h2>MÚSICA</h2>

<div className="music-folders">

{musicFolders.map((folder,index)=>(

<div className="music-folder" key={index}>

<h3>{folder.category}</h3>

{folder.songs.length > 0 ? (

<div className="song-grid">

{folder.songs.map((song,songIndex)=>(

<div
className="song-card"
key={songIndex}
onClick={()=>playSong(song)}
>

<img src={song.cover} alt={song.title}/>

<p>{song.title}</p>

</div>

))}

</div>

) : (

<p className="coming-soon">PRÓXIMAMENTE</p>

)}

</div>

))}

</div>
{currentSong && (

<div className="now-playing">

<div className="player-header">

<button
className="close-player"
onClick={() => setCurrentSong(null)}
>
✕
</button>

</div>

<img
src={currentSong.cover}
alt={currentSong.title}
/>

<div>

<p>ESTÁ SONANDO</p>

<h4>{currentSong.title}</h4>

<audio
ref={audioRef}
controls
src={currentSong.audio}
></audio>

</div>

</div>

)}

</section>
<section id="galeria" className="section gallery-section">

<h2>GALERÍA</h2>

<div className="polaroid-wall">

{galleryPhotos.map((photo,index)=>(

<div
className="polaroid"
key={index}
onClick={()=>setSelectedPhoto(photo)}>
<img src={photo.image} alt={photo.title}/>

</div>

))}

</div>
{selectedPhoto && (

<div
className="photo-modal-overlay"
onClick={()=>setSelectedPhoto(null)}
>

<div
className="photo-modal"
onClick={(e)=>e.stopPropagation()}
>

<button
className="close-photo"
onClick={()=>setSelectedPhoto(null)}
>
×
</button>

<img src={selectedPhoto.image} alt={selectedPhoto.title}/>

<div className="photo-modal-text">
  <h3>{selectedPhoto.title}</h3>
  <p>{selectedPhoto.text}</p>
</div>

</div>

</div>

)}

</section>

<section id="contacto" className="section contact-section">

<h2>CONTACTO</h2>

<div className="contact-board">

<img src={mono} alt="Leví Yeah dibujo" className="contact-drawing"/>

<div className="postit postit-left">

<h3>QUIÉN SOY</h3>

<p>
realmente me gusta mucho el crear, asi q solo les comparto un poco de lo q he hecho y pues a seguir creando hasta hacernos inmortales
</p>

</div>

<div className="postit postit-right">

<h3>CONTACTO</h3>

<a href="https://www.facebook.com/comander.corteslopez/?locale=es_LA" target="_blank" rel="noreferrer">FACEBOOK</a>

<a href="https://www.instagram.com/http.leviyeah/" target="_blank" rel="noreferrer">INSTAGRAM</a>

<a href="https://www.tiktok.com/@www.leviyeah" target="_blank" rel="noreferrer">TIKTOK</a>

<a href="mailto:leviyeah26@gmail.com">leviyeah26@gmail.com</a>

</div>

</div>

</section>

</div>

)

}

export default App