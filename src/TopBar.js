export default function TopBar(){
    return (
       // <!--barra superior-->
        <div class="bar-father">
          <div class="top-bar">
              <div class="div-logo">
                  <a href="/"> <div><img class="insta-icon" src="images/icons/logo-instagram.svg"  alt=""/></div></a>
                  <div class="divide"></div>
                  <a href="/"> <div><img class="insta-logo" src="images/Instagram.png"  alt=""/></div></a>
              </div>
      
              <div>
              
                  <input  class="divBusca" type="text" id="txtBusca" placeholder="Pesquisar"/>
              </div>
              <div class="div-logo">
                  <TopIcons iconName = "paper-plane-outline"/>
                  <TopIcons iconName = "compass-outline"/>
                  <TopIcons iconName = "heart-outline"/>
                  <TopIcons iconName = "person-outline"/>
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

function TopIcons(props){
    return(
        <a href="/"><ion-icon name={props.iconName}   class="top-icons"></ion-icon></a>
    );
}