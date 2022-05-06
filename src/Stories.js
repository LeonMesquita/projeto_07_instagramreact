export default function Stories(){
    return (
        <div class="stories-box">
            <Storie src="images/profiles/9gag 1.png" text="9gag"/>
            <Storie src="images/profiles/meowed 1.png" text="meowed"/>
            <Storie src="images/profiles/barked 1.png" text="barked"/>
            <Storie src="images/profiles/nathanwpylestrangeplanet 1.png" text="nathan"/>
            <Storie src="images/profiles/wawawiwacomicsa 1.png" text="wawa"/>
            <Storie src="images/profiles/respondeai 1.png" text="respondeai"/>
            <Storie src="images/profiles/filomoderna 1.png" text="filo"/>
            <Storie src="images/profiles/memeriagourmet 1.png" text="meme"/>
            <ion-icon class="stories-button" name="chevron-forward-outline"></ion-icon>    
        </div>

    )
}

function Storie(props){
    return (
        <div class="storie">
            <img class="storie-circle" src="images/stories_background.jpg" />
            <a href="">
                <img class="storie-image" src={props.src} alt="" />
            </a>

            <div class="storie-text">{props.text}</div>
        </div>
    );
}