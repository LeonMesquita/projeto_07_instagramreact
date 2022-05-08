import ReactDOM from 'react-dom';
import Posts from './Posts';
import SideBar from './SideBar';
import Stories from './Stories';

function TopBar(){
    return (
       // <!--barra superior-->
        <div class="bar-father">
          <div class="top-bar">
              <div class="div-logo">
                  <a href="/"> <div><img class="insta-icon" src="images/icons/logo-instagram.svg"  alt=""/></div></a>
                  <a href="/"> <div><img class="insta-logo" src="images/Instagram.png"  alt=""/></div></a>
              </div>
      
              <div>
              
                  <input  class="divBusca" type="text" id="txtBusca" placeholder="Pesquisar"/>
              </div>
              <div class="div-logo">
                  <a href="/"><ion-icon name="paper-plane-outline"   class="top-icons"></ion-icon></a>
                  <a href="/"><ion-icon name="compass-outline"   class="top-icons"></ion-icon></a>
                <a href="/"><ion-icon name="heart-outline"  class="top-icons"></ion-icon></a>
                 <a href="/"><ion-icon name="person-outline"  class="top-icons"></ion-icon></a>
              </div>
              
          </div>
      
          <div class="mobile-bar">
              <a href="/"> <div><img class="insta-icon" src="images/icons/logo-instagram.svg"  alt=""/></div></a>
              <a href="/"> <div><img class="insta-logo" src="images/Instagram.png"  alt=""/></div></a>
              <a href="/"><ion-icon name="paper-plane-outline"   class="top-icons"></ion-icon></a>
          </div>
          </div>
    )
}

function AppBody(){
    return (
        <div>
            <TopBar />
            <div class="page-content">
                <div class="main-content-div">
                    <Stories />
                    <Posts />
                </div>
                <SideBar />
            </div>
        </div>
    )
}

const app = AppBody()
ReactDOM.render(app, document.querySelector(".root"));