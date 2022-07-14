import ReactDom from 'react-dom'

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                  <img src = {props.srcIcon} />
                  {props.user}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src = {props.srcPhoto}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src = {props.srcLike} />
                    <div class="texto">
                        Curtido por <strong>{props.userLike}</strong> e <strong>outras {props.likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    return (
        <div class="posts">
            <Post srcIcon = "./img/meowed.svg" user = "meowed" srcPhoto = "./img/gato-telefone.svg" 
            srcLike = "./img/respondeai.svg" userLike = "respondeai" likes = "101.523"/>
            <Post srcIcon = "./img/barked.svg" user = "barked" srcPhoto = "./img/dog.svg" 
            srcLike = "./img/adorable_animals.svg" userLike = "adorable_animals" likes = "89.756"/>
        </div>
    )
}