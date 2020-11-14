import React from 'react';
import Card from './../../Components/Card/Card'
import Header from './../../Components/Header/Header';
import SubHeader from './../../Components/SubHeader/subHeadre'
import NavbarPage from './../../Components/Navbar/Navbar'
import CarouselPage from './../../Components/Slider/Slider';
import CardSlider from './../../Components/CardSlider/CardSlider';
import './Home.css';
import FooterPagePro from './../../Components/Footer/Footer'


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          src: "https://cdn.shopify.com/s/files/1/0272/0409/1949/collections/Toys-For-Baby_1024x1024.png?v=1575626558"
        },
        {
          src: "https://cdn.shopify.com/s/files/1/0272/0409/1949/collections/Action-Figures_1024x1024.png?v=1575626649"
        },
        {
          src: "https://cdn.shopify.com/s/files/1/0272/0409/1949/collections/Remote-Cars_1024x1024.png?v=1575626679"
        },
        {
          src: "https://cdn.shopify.com/s/files/1/0272/0409/1949/collections/Girls-Costume_1024x1024.png?v=1575626717"
        },
        {
          src: "https://cdn.shopify.com/s/files/1/0272/0409/1949/collections/Boys-Costume_1024x1024.png?v=1575626743"
        },
        {
          src: "https://cdn.shopify.com/s/files/1/0272/0409/1949/collections/Toys-For-Baby_1024x1024.png?v=1575626558"
        },
        {
          src: "https://cdn.shopify.com/s/files/1/0272/0409/1949/collections/Toys-For-Baby_1024x1024.png?v=1575626558"
        }
      ]
    }
  }
  render() {
    return (
      <div style={{margin:"0px"}}>
            <Header  path={this.props.history}/>
            <SubHeader />
             <NavbarPage path={this.props.history}/>
             <CarouselPage />
        <div style={{width:"98%",margin:"auto"}}>
       
        <h1 className="cartHeading">Popular Categories</h1>
        <CardSlider>
          {
            this.state.images.map((v, i) => {
              return (
                <div>
                    <img alt="a" src={v.src} style={{ margin: "auto", width: "80%" }} />
                </div>
              )
            })
          }
        </CardSlider>
  
        </div>




        <div className="flashDeals">
          <h1 className="cartHeading">Flash Deals</h1>
          <CardSlider>
            {
              this.state.images.map((v, i) => {
                return (
                  <div>
                    <div>
                      <center>
                        <Card
                          path={this.props.history}
                          productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Holland-Popular-Famous-Lardmark-Souvenir-Windmill-Metal-Model-For-Decor_1024x1024_de9a46f1-0027-4d4b-ad4f-cf0aa5cf62e3_275x.jpg?v=1578056720"
                          productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163244_275x.jpg?v=1578056720"
                          productDes="I am a very simple card. I am good at containing small bits of"
                          productPrice="14,50"
                        />
                      </center>
                    </div>
                  </div>
                )
              })
            }
          </CardSlider>
        </div>





        <div className="newArrivals">
          <h1 className="cartHeading">New Arrivals</h1>
          <CardSlider>
            {
              this.state.images.map((v, i) => {
                return (
                  <div>
                    <div>
                      <center>
                        <Card
                          path={this.props.history}
                          productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Holland-Popular-Famous-Lardmark-Souvenir-Windmill-Metal-Model-For-Decor_1024x1024_de9a46f1-0027-4d4b-ad4f-cf0aa5cf62e3_275x.jpg?v=1578056720"
                          productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163244_275x.jpg?v=1578056720"
                          productDes="I am a very simple card. I am good at containing small bits of"
                          productPrice="14,50"
                        />
                      </center>
                    </div>
                  </div>
                )
              })
            }
          </CardSlider>
        </div>




        <div className="bestSellers">
          <h1 className="cartHeading">Best Sellers</h1>
          <CardSlider>
            {
              this.state.images.map((v, i) => {
                return (
                  <div>
                    <div>
                      <center>
                        <Card
                          path={this.props.history}
                          productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Holland-Popular-Famous-Lardmark-Souvenir-Windmill-Metal-Model-For-Decor_1024x1024_de9a46f1-0027-4d4b-ad4f-cf0aa5cf62e3_275x.jpg?v=1578056720"
                          productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163244_275x.jpg?v=1578056720"
                          productDes="I am a very simple card. I am good at containing small bits of"
                          productPrice="14,50"
                        />
                      </center>
                    </div>
                  </div>
                )
              })
            }
          </CardSlider>
        </div>


        <div className="shopBrands">
          <h1 className="cartHeading">Shop By Brands</h1>
          <CardSlider>
            {
              this.state.images.map((v, i) => {
                return (
                  <div>
                    <div>
                      <img  alt="a" src={v.src} style={{ margin: "auto", width: "80%" }} />
                    </div>
                  </div>
                )
              })
            }
          </CardSlider>
        </div>


      
    

        <br/><br/><br/><br/>
     
      <FooterPagePro/>

      </div>
    )
  }
}

export default Home;
