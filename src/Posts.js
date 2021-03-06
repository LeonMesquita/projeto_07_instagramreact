import React from 'react';
export default function Posts(){
    const posts = [
        {
            profileSrc: "images/profiles/meowed 1.png",
            profileName: "meowed",
            postSrc: "images/posts/gato-telefone 1.png",
            likedName: "respondeai",
            likedNumber: "101.523"
        },
        {
            profileSrc: "images/profiles/barked 1.png",
            profileName: "barked",
            postSrc: "images/posts/dog 1.png",
            likedName: "adorable_animals",
            likedNumber: "99.159"
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
    const [iconName, setIconName] = React.useState("heart-outline");
    const [iconClass, setIconClass] = React.useState("reactions-style");


    function changeIconClass(){
        
        if (iconName === "heart-outline"){
            setIconName("heart");
            setIconClass("liked-icon");
        }
        else if (iconName === "heart"){
            setIconName("heart-outline");
           setIconClass("reactions-style");
        }

    }

    return (
        <div class="posts-div">
     
        <div class="image-bar">
            <div class="image-bar-icons">
                <img  class="user-profile" src={props.profileSrc} alt=""/>
                <div class="image-top-text"><h1>{props.profileName}</h1></div>

            </div>
            <div class="image-top-text"> <h1>...</h1></div>
           
        </div>
        <img class="image-div" src={props.postSrc}  onClick={changeIconClass} alt=""/>

        <div>
            <div class="image-bar">
                <div class="image-bar-icons">
                <button class={iconClass} onClick={changeIconClass}><ion-icon name={iconName}></ion-icon></button>
                <button class="reactions-style"><ion-icon name="chatbubble-outline"></ion-icon></button>
                <button class="reactions-style"><ion-icon name="paper-plane-outline"></ion-icon></button>
                </div>
                <button class="reactions-style"><ion-icon name="bookmark-outline"></ion-icon>
                </button>


            </div>
            
            <div class="bottom-bar">
                <img class="bottom-image" src="images/profiles/circle profile 1.png"  alt=""/>
                <h3>Curtido por <b class="h3">{props.likedName}</b> e <b class="h3"> {props.likedNumber} pessoas</b></h3>
            </div>
        </div>
   </div>
    );
}