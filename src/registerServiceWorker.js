import { register } from 'register-service-worker'
if (process.env.NODE_ENV === 'production') {
  window.addEventListener('load', function() {
    register(`${process.env.BASE_URL}service-worker.js`, {
      ready () {
        console.log('App is being served from cache by a service worker.')
      },
      registered () {
        console.log('Service worker has been registered.')
      },
      cached () {
        console.log('Content has been cached for offline use.')
      },
      updatefound () {
        console.log('New content is downloading.')
      },
      updated () {
        console.log('New content is available; please refresh.')
        setTimeout(() => {
          window.location.reload(true)
        }, 1000)
      },
      activate(){
        console.log('Service Worker Activated')
      },
      offline () {
        console.log('No internet connection found. App is running in offline mode.')
      },
      error (error) {
        console.error('Error during service worker registration:', error)
      }
    })
  })
}else{
  console.info('Development Environment')
}
