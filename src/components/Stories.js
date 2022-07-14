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
    return (
        <div class="stories">
            <Story src = "./img/9gag.svg" user = "9gag"/>
            <Story src = "./img/meowed.svg" user = "meowed"/>
            <Story src = "./img/barked.svg" user = "barked"/>
            <Story src = "./img/nathanwpylestrangeplanet.svg" user = "nathanwpylestrangeplanet"/>
            <Story src = "./img/wawawicomics.svg" user = "wawawicomics"/>
            <Story src = "./img/respondeai.svg" user = "respondeai"/>
            <Story src = "./img/filomoderna.svg" user = "filomoderna"/>
            <Story src = "./img/memeriagourmet.svg" user = "fmemeriagourmet"/>
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}