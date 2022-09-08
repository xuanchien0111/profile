import Footer from "./componets/footer";
import Header from "./componets/header";
import Introduce from "./componets/introduce";
import ProductCompany from "./componets/productscompany";
import ProductMy from "./componets/productsmy";
import Slider from "./componets/slider";
import Technology from "./componets/technology";

function App() {
  return (
    <div>
      <Header />
      <Introduce />
      <ProductCompany />
      <ProductMy/>
      <Technology/>
      <Footer />
      {/* <Slider /> */}
    </div>
  );
}

export default App;
