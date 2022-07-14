import ReactDom from 'react-dom'

function Suggestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src = {props.src} />
                <div class="texto">
                    <div class="nome">{props.user}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Sidebar () {
    const suggestionInformation = [{user : "bad.vibes.memes" , src : "./img/bad.vibes.memes.svg"}, 
                                   {user : "chibirdart" , src : "./img/chibirdart.svg"},
                                   {user : "razoesparaacreditar" , src : "./img/razoesparaacreditar.svg"},
                                   {user : "adorable_animals" , src : "./img/adorable_animals.svg"},
                                   {user : "smallcutecats" , src : "./img/smallcutecats.svg"}]
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="./img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {suggestionInformation.map(information => <Suggestion src = {information.src} user = {information.user}/>)}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}