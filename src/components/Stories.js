import ReactDom from 'react-dom'

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.src} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    )
}


export default function Stories () {
    const userStories = [{name : "9gag", img : "/img/9gag.svg"},
                         {name : "meowed", img : "./img/meowed.svg"},
                         {name : "barked", img : "./img/barked.svg"},
                         {name : "nathanwpylestrangeplanet", img : "./img/nathanwpylestrangeplanet.svg"},
                         {name : "wawawicomics", img : "./img/wawawicomics.svg"},
                         {name : "respondeai", img : "./img/respondeai.svg"}, 
                         {name : "filomoderna", img : "./img/filomoderna.svg"},
                         {name : "memeriagourmet", img : "./img/memeriagourmet.svg"}]
    return (
        <div class="stories">
            {userStories.map((user) => <Story src = {user.img} user = {user.name}/>)}
            
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}
