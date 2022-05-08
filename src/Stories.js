export default function Stories(){
    const stories = [
        {
            image: "images/profiles/9gag 1.png",
            text: "9gag"
        },
        {
            image: "images/profiles/meowed 1.png",
            text: "meowed"
        },
        {
            image: "images/profiles/barked 1.png",
            text: "barked"
        },
        {
            image: "images/profiles/nathanwpylestrangeplanet 1.png",
            text: "nathan"
        },
        {
            image: "images/profiles/wawawiwacomicsa 1.png",
            text: "wawa"
        },
        {
            image: "images/profiles/respondeai 1.png",
            text: "respondeai"
        },
        {
            image: "images/profiles/filomoderna 1.png",
            text: "filo"
        },
        {
            image: "images/profiles/memeriagourmet 1.png",
            text: "meme"
        }

    ];
    return (
        <div class="stories-box">
            {stories.map(storie => <Storie src={storie.image} text={storie.text}/>)}
            <ion-icon class="stories-button" name="chevron-forward-outline"></ion-icon>    
        </div>
    );
}

function Storie(props){
    return (
        <div class="storie">
            <img class="storie-circle" src="images/stories_background.jpg"  alt=""/>
            <a href="/">
                <img class="storie-image" src={props.src} alt="" />
            </a>

            <div class="storie-text">{props.text}</div>
        </div>
    );
}