import {
  About, 
  Header,
  Footer
} from "../components"

const MainPage = () => {
  return (
    <div className="text-gray-300 min-h-screen">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default MainPage;