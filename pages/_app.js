import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../public/components/header'
import Menu from '../public/components/menu'
// import wallpaper from '../public/icons/wallpaperflare.com_wallpaper.jpg'

function MyApp({ Component, pageProps }) {
  
  return (
    <Provider store={store} >
    
    <>
      <Head>
        <link 
          rel="icon"
          type='image/png'
          href='/icons/favicon.png/'
        />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />
<link rel="preconnect" href="https://fonts.googleapis.com" />
{/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
<link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <script src="path/to/dist/feather.js" /> */}
        <title>Mayur Patankar</title>
      </Head>
      <div
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/ec/0c/60/ec0c6065a57df10774c81d2385149531.png')`, // Reference the image in the public folder
          backgroundSize: 'cover', // Make sure the image covers the entire background
          backgroundPosition: 'center', // Center the background image
          height: '100vh', // Ensure it takes up the full height of the page
        }}
      >
      {/* <div className='row'>
        <Header />
      </div> */}
      <div className='row'>
        <div className='col-lg-1 col-md-2'>
          <Menu className="mx-5 my-5" />
        </div>
        <div className='col-lg-10 col-md-8'>
        <Component {...pageProps} />
        </div>
      </div>
      </div>
    </>
    </Provider>
  ) 
}

export default MyApp
