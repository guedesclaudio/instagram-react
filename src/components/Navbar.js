import ReactDom from 'react-dom'

function Icon (props) {
    return (
        <ion-icon name = {props.name}></ion-icon>
    )
}

export default function Navbar() {
    const icons = [{src : "paper-plane-outline"}, 
                   {src : "compass-outline"},
                   {src : "heart-outline"},
                   {src : "person-outline"}]
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src="./img/logo.png" />
                </div>

                <div class="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div class="instagram-mobile">
                    <img src="./img/logo.png" />
                </div>
        
                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
        
                <div class="icones">
                    {icons.map (icon => <Icon name = {icon.src}/>)}
                </div>

                <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}


