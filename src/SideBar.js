export default function SideBar(){
    const suggestions = [
        {
            profile: "images/profiles/badvibesmemes 1.svg",
            username: "bad.vibes.memes"
        },
        {
            profile: "images/profiles/chibirdart 1.svg",
            username: "chibirdart"
        },
        {
            profile: "images/profiles/razoesparaacreditar 1.svg",
            username: "razoesparaacreditar"
        },
        {
            profile: "images/profiles/adorableanimals 1.svg",
            username: "adorableanimals"
        },
        {
            profile: "images/profiles/smallcutecats 1.png",
            username: "smallcutecats"
        },
    ];
    return (
        <div>
     <div class="sidebar-div">
       
        <User userProfile="images/profiles/catanacomics 1.svg" username="catanacomics" name="Catana"/>

        <div>
            <div class="suggestions-div">
                <h2 class="h2">Sugestões para você</h2>
                <a href="/"><h1 class="h1">Ver tudo</h1></a>
            </div>
            {suggestions.map(suggestion => <Suggestion profile={suggestion.profile} username={suggestion.username}/>)}
        </div>

        
            <h6>
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags • 
                Idioma
            </h6>
            <h6>
                © 2021 INSTAGRAM DO FACEBOOK
            </h6>
        
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