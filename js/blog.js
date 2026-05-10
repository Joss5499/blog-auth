const postForm = document.getElementById("postForm");
const postsList = document.getElementById("postsList");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

function savePosts() {
    localStorage.setItem("posts", JSON.stringify(posts));
}

function renderPosts() {

    if (!postsList) return;

    postsList.innerHTML = "";

    posts.forEach((post, index) => {

        postsList.innerHTML += `
        
            <div class="post-card">

                <h3>${post.title}</h3>

                <p>${post.content}</p>

                <small>${post.date}</small>

                <div class="actions">

                    <button onclick="viewPost(${index})">
                        Ver
                    </button>

                    <button onclick="editPost(${index})">
                        Editar
                    </button>

                    <button onclick="deletePost(${index})">
                        Eliminar
                    </button>

                </div>

            </div>
        
        `;

    });

}

if (postForm) {

    postForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        const newPost = {
            title,
            content,
            date: new Date().toLocaleDateString()
        };

        posts.push(newPost);

        savePosts();

        renderPosts();

        postForm.reset();

    });

}

function deletePost(index) {

    posts.splice(index, 1);

    savePosts();

    renderPosts();

}

function editPost(index) {

    const newTitle = prompt("Nuevo título");
    const newContent = prompt("Nuevo contenido");

    if (newTitle && newContent) {

        posts[index].title = newTitle;
        posts[index].content = newContent;

        savePosts();

        renderPosts();

    }

}

function viewPost(index){

    localStorage.setItem("selectedPost", JSON.stringify(posts[index]));

    window.location.href = "post.html";

}

renderPosts();