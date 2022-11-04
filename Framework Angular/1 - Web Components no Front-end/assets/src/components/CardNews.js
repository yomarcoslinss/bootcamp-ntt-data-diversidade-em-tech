class CardNews extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left")

        const autor = document.createElement("span");
        autor.textContent = `Criado por: ${ (this.getAttribute("autor") || 'Anonymous')}`

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("link-img") || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAMFBMVEXFxcX////i4uL8/Pz39/fJycnw8PDz8/PNzc3p6enU1NTZ2dn5+fnl5eXS0tLt7e21khVAAAAEJklEQVR4nO2cCZajMAxEm7AkhCTc/7YzboYmBGiwrVJpePonoJ6s1TJfX47jOI7jOI7jOI7jOI7jOI7jOI7jOI7jGOF+ebZ90/ftpavZ35JK11dlMeNxfd7YXxVJd/3QMFG1/41pXs2WiFHLhf2JR7hXOzIC5ZP9mXsckmFfSn09KONbSsf+3E2eETICV5sx7PaI1PEXi15/iZcRjGIuFsd4xzvlnf3lM+qEYzViSUm9mcePYCd63bJ02HH5PHvYsUm+DiNKBHSYUHK0uNqBnk/S8uCSB1nHS0hHUbRcISIOMkBNjK2cDurhugnqoOZFoYg1Qotccp4+0LOECBukKEg6ZD0kQArBqb3UNiVFRy2ugxS4JHPICCWXCCb1CUIElnf1AMHde4gQgrtnzE1+Q18IRod+q9iBhKiXKRgXIQRg+bT+D20hkCzCEILSUbx0dSAKrQHlcku6p5pQzu13mJBGVwgqjRTF9SxClBOJ1KR0iXLZeBqLnEYILmpVukIw/WFAOWrhShTtOh5WNGpvDYE6Xf1rktP0I4jxXEB9jIKKv9pBCxa29Ke/IG/XX6rDOAlh0ohpdhm3b5CzxbhsR7QknCsrgBDOVvPeCnwCFB0Ad2ddtIvXW6zVB+nuSnmk9YawSXhbdLJewnyIcZZ9LdGOl/sGQ24qz37hI1WoKI+zVhDK7/S9X6H1MwtvL06zGy+gxMq7i9z3IzbsEXid5EVPnk2UL9Z3qFNjV2nuUWXss9CBh4H88UmKo5DfWmwRm+Qrg+YYuMfMugy/nv6qo/qTxla8muiiI1dp8f8PbVoqaYxJyeh5G0OZJLN1542B5nTZ1a+JABb1w4pNKvr5SqtMVuAm+ZvgM6sH0SjCy060RlF8Gs8pvnIb3DUY3Qlo9UF9LgTbBVR2FNROTaEch1GvR75RvEkE3OdSlMCWzkaUqki4DqWtLfC5GlDweNxW/Ax4FMbtkn8AblFwq+QLoDMW3NOqJdCVJ9ja8hrA+1FoQl8CS4xqjj4CcnjcU4tNMA6v6iADkP0UpUw4B5DhCQcrIN/7Eg5WQPxwUQ5WQHhrSDOlfyA7IlKp3dcRTYskTx+Q9HfxP2nFINguqtcmc+TyO+zR4THEymCyQeS8hJQLJ4S8RLG93ULGJHSDCJnEgEFkTELNISMC6Z1YZb0hMFIB3oTEkN++k5PhSHZSNOHqgVx3N+HqgVx3Z3//D5nuTi+zJvLOlsLt1FHyJkPsr38ja55i6GTlnS1DJytvMGQkGw5k5EQbddYP6UJo48V10p3ElIvkOIkpF8lwEmMukl6lGHOR9Hm28iXuPqndlZkSfiS13DLm6+lTIfZ3L0j0dlMV40CaELH9fTnScru5oJUatowVKIG0IsVc9E1dPzUwhf8krdoyl0Z+j7+XTdhfvUK5/bV/AMM5Ra/CMJLoAAAAAElFTkSuQmCC"
        newsImage.alt = "Foto da Noticia";

        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        cardRight.appendChild(newsImage)

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        
                .card {
                    height: 200px;
                    width: 80%;
                    box-shadow: 3px 2px 16px 3px rgba(0,0,0,0.56);
                    -webkit-box-shadow: 3px 2px 16px 3px rgba(0,0,0,0.56);
                    -moz-box-shadow: 3px 2px 16px 3px rgba(0,0,0,0.56);
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
                
                .card_left {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding-left: 10px;
                }
                
                .card_left > a {
                    text-decoration: none;
                    color: black;
                    margin-top: 15px;
                    font-size: 25px;
                    font-weight: bold;
                }
                
                .card_left > p {
                    color: gray;
                }
                
                
                .card_right img {
                    height: 100%;
                }

        `

        return style;
    }
    
}

customElements.define('card-news', CardNews)