import { Provider, useDispatch } from "react-redux";
import store from "./storts/store";
import Collection from "./component/home/content/Collection/collection"
import NewCollection from "./component/home/content/new collection/newCollection"
import Outfit from "./component/home/content/Outfit/outfit"
import Img from "./component/home/content/video/video"
import Header from "./component/home/header/header"
import NewCollection2 from "./component/home/content/NEWCOLLECTION/newCollection2"
import Footer from "./component/home/footer/footer"
import { useEffect, useState } from "react"





const App = () => {
  const [ShowGoToTop, setShowGoToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const GoToTopClick = () => {
    window.scrollTo(0, 0);
  }
  


  return (
    <Provider store={store}>
      <div className="App" >
        <Header  />
        <Img />
        <NewCollection />
        <Collection />
        <Outfit />
        <NewCollection2 />
        <Footer />
        {ShowGoToTop && <> <i style={{ position: 'fixed', right: 20, bottom: 20, }} onClick={() => GoToTopClick()} class="fad fa-arrow-circle-up fa-2x"></i></>}
      </div>
    </Provider>

  )
}

export default App
