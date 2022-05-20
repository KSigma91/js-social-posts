/*
Milestone 1 -
 Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
[qui, la base dati ve la passo, ma in caso le img che ci sono on funzionino, potete sostituirle in quel modo]

Milestone 2 -
Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

Milestone 3 -
Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/
const domArea = document.getElementById("container");


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// stampo i post dentro html
posts.forEach(element => {
    // div class post
    const post = document.createElement("div");
    post.classList.add("post");
    domArea.append(post);

    // div class post header + contenuto
    const postHeader = document.createElement("div");
    postHeader.classList.add("post__header");
    post.append(postHeader);

    const postMeta = document.createElement("div");
    postMeta.classList.add("post-meta");
    postHeader.append(postMeta);

    const postMetaIcon = document.createElement("div");
    postMetaIcon.classList.add("post-meta__icon");
    postMeta.append(postMetaIcon);

    const addImg = document.createElement("img");
    addImg.classList.add("profile-pic");
    addImg.setAttribute("src", element.image);
    postMetaIcon.append(addImg);
    
    const postMetaData = document.createElement("div");
    postMetaData.classList.add("post-meta__data");
    postMeta.append(postMetaData);

    const postMetaAuthor = document.createElement("div");
    postMetaAuthor.classList.add("post-meta__author");
    postMetaAuthor.append(element.name);
    postMetaData.append(postMetaAuthor);

    const postMetaTime = document.createElement("div");
    postMetaTime.classList.add("post-meta__time");
    postMetaAuthor.append(element.created);
    postMetaData.append(postMetaTime);
    // fine div class post header

    // div class post text
    const postText = document.createElement("div");
    postText.classList.add("post__text");
    postText.append(element.content);
    post.append(postText);
    // fine div class post text

    // div class post image
    const postImage = document.createElement("div");
    postImage.classList.add("post__image");
    postImage.append(element.media);
    post.append(postImage);
    // fine div class post image

    // div class post footer
    const postFooter = document.createElement("div");
    postFooter.classList.add("post__footer");
    post.append(postFooter);

    const jsLikes = document.createElement("div");
    jsLikes.classList.add("likes", "js-likes");
    postFooter.append(jsLikes);

    const likesCta = document.createElement("div");
    likesCta.classList.add("likes__cta",);
    jsLikes.append(likesCta);

    const likeButton = document.createElement("a");
    likeButton.classList.add("like-button", "js-like-button");
    likeButton.setAttribute("href", "#");
    likeButton.setAttribute("data-postid", "1");
    jsLikes.append(likeButton);

    const likeButtonIcon = document.createElement("i");
    likeButtonIcon.classList.add("like-button__icon", "fas", "fa-thumbs-up");
    likeButtonIcon.setAttribute("aria-hidde", "true");
    likeButton.append(likeButtonIcon);

    const likeButtonLabel = document.createElement("span");
    likeButtonLabel.classList.add("like-button__label");
    //likeButtonLabel.append(element.likes);
    likeButton.append(likeButtonLabel);

    const likeCounter = document.createElement("div");
    likeCounter.classList.add("likes__counter");
    jsLikes.append(likeCounter);

    const likeCounter1 = document.createElement("b");
    likeCounter1.setAttribute("id", "like-counter-1");
    likeCounter1.setAttribute("class", "js-likes-counter");
    likeCounter1.append(element.likes);
    likeCounter.append(likeCounter1);
    // fine div class post footer

    console.log(element);
});

