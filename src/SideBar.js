export default function SideBar(){
    const suggestions = [
        {
            profile: "images/profiles/Jotaro Kujo.jpg",
            username: "kujo_jotaro"
        },
        {
            profile: "images/profiles/kakyoin.jpg",
            username: "kakyoin"
        },
        {
            profile: "images/profiles/Jotaro Kujo.jpg",
            username: "kujo_jotaro"
        },
        {
            profile: "images/profiles/Jotaro Kujo.jpg",
            username: "kujo_jotaro"
        },
        {
            profile: "images/profiles/Jotaro Kujo.jpg",
            username: "kujo_jotaro"
        },
    ];
    return (
        <div>
     <div class="sidebar-div">
       
        <User userProfile="images/profiles/joseph.jpg" username="JoJo" name="Joseph Joestar"/>

        <div>
            <div class="suggestions-div">
                <h2 class="h2">Sugestões para você</h2>
                <a href="/"><h1 class="h1">Ver tudo</h1></a>
            </div>
            {suggestions.map(suggestion => <Suggestion profile={suggestion.profile} username={suggestion.username}/>)}
        </div>


     </div>

    </div>
    );
}

function Suggestion(props){
    return (
        <div class="suggestions-div">
        <div class="sidebar-user-div">
             <img class="user-profile" src={props.profile}  alt=""/>
             <div>
                <a href="/" class="user-name">{props.username}</a>
                <h3 class="name">Segue você</h3>
            </div>
       </div>
       <a href="/" class="follow"><h1>Seguir</h1></a>
    </div>

    );
}

function User(props){
    return (
        <div class="sidebar-user-div">
            <img class="sidebar-user-profile" src={props.userProfile}  alt=""/>
            <div>
                <a href="/" class="user-name">{props.username}</a>
                <h3 class="name">{props.name}</h3>
            </div>
        </div>
    );
}