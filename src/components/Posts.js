import ReactDom from 'react-dom'
import React from 'react'


function Post(props) {

    const [likeOrDeslike, setLikeOrDeslike] = React.useState("heart-outline")
    const [colorLike, setColorLike] = React.useState("")

    function like () {
        likeOrDeslike === "heart-outline" ? setLikeOrDeslike("heart-sharp"):setLikeOrDeslike("heart-outline")
        colorLike === "" ? setColorLike("danger"):setColorLike("")
    }

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
                <img src = {props.srcPhoto} onClick = {like}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name= {likeOrDeslike} color = {colorLike} onClick = {like}></ion-icon>
                        <ion-icon name="chatbubble-outline" ></ion-icon>
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

    const postsInformation = [{name : "meowed" , iconImg : "./img/meowed.svg" , postImg : "./img/gato-telefone.svg" ,
                              likeImg : "./img/respondeai.svg" , likeName : "respondeai" , likesNumber : "101.523"},
                              {name : "barked" , iconImg : "./img/barked.svg" , postImg : "./img/dog.svg" ,
                              likeImg : "./img/adorable_animals.svg" , likeName : "adorable_animals" , likesNumber : "101.523"}]
    return (
        <div class="posts">
            {postsInformation.map(information => <Post srcIcon = {information.iconImg} user = {information.name} srcPhoto = {information.postImg}
            srcLike = {information.likeImg} userLike = {information.likeName} likes = {information.likesNumber}/>)}
        </div>
    )
}

