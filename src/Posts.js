export default function Posts(){
    const posts = [
        {
            profileSrc: "images/profiles/circle profile 1.png",
            profileName: "teste",
            postSrc: "images/posts/angolano.png",
            likedName: "respondeai",
            likedNumber: "101.523"
        },
        {
            profileSrc: "images/profiles/circle profile 1.png",
            profileName: "teste",
            postSrc: "images/posts/2.jpg",
            likedName: "respondeai",
            likedNumber: "101.523"
        },
        {
            profileSrc: "images/profiles/circle profile 1.png",
            profileName: "teste",
            postSrc: "images/posts/3.jpg",
            likedName: "respondeai",
            likedNumber: "101.523"
        },
        {
            profileSrc: "images/profiles/circle profile 1.png",
            profileName: "teste",
            postSrc: "images/posts/5.jpg",
            likedName: "respondeai",
            likedNumber: "101.523"
        },
    ];
    return (
        <div>
            {posts.map(post => <Post profileSrc={post.profileSrc} profileName={post.profileName} postSrc={post.postSrc}
            likedName={post.likedName} likedNumber={post.likedNumber} />)}
        </div>

    );
}

function Post(props){
    return (
        <div class="posts-div">
     
        <div class="image-bar">
            <div class="image-bar-icons">
                <img  class="user-profile" src={props.profileSrc} />
                <div class="image-top-text"><h1>{props.profileName}</h1></div>

            </div>
            <div class="image-top-text"> <h1>...</h1></div>
           
        </div>
        <img class="image-div" src={props.postSrc} />

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
                <h3>Curtido por <b class="h3">{props.likedName}</b> e <b class="h3"> {props.likedNumber} pessoas</b></h3>
            </div>
        </div>
   </div>
    );
}