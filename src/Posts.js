export default function Posts(){
    return (
        <div class="posts-div">
     
        <div class="image-bar">
            <div class="image-bar-icons">
                <img  class="user-profile" src="images/profiles/circle profile 1.png" />
                <div class="image-top-text"><h1>teste</h1></div>

            </div>
            <div class="image-top-text"> <h1>...</h1></div>
           
        </div>
        <img class="image-div" src="images/posts/angolano.png" />

        <div>
            <div class="image-bar">
                <div class="image-bar-icons">
                    <button class="reactions-style"><ion-icon name="heart-outline"  class="reaction-icons"></ion-icon></button>
                    <button class="reactions-style"><ion-icon name="chatbubble-outline"  class="reaction-icons"></ion-icon></button>
                    <button class="reactions-style"><ion-icon name="paper-plane-outline"  class="reaction-icons"></ion-icon></button>

                </div>
                <button class="reactions-style"><ion-icon name="bookmark-outline" class="reaction-icons"></ion-icon>
                </button>


            </div>
            
            <div class="bottom-bar">
                <img class="bottom-image" src="images/profiles/circle profile 1.png" />
                <h3>Curtido por <b class="h3">respondeai</b> e <b class="h3"> 101.523 pessoas</b></h3>
            </div>
        </div>
   </div>

    );
}