function attachEvents() {
    const BASE_URL = `http://localhost:3030/jsonstore/blog/`;
    const posts = document.getElementById('posts');
    const comments = document.getElementById('post-comments');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const loadBtn = document.getElementById('btnLoadPosts');
    const viewPostBtn = document.getElementById('btnViewPost');

    loadBtn.addEventListener('click', getPosts);
    viewPostBtn.addEventListener('click', viewPostDetails);

    async function getPosts() {
        // try catch block
        try {
            //await promise to base url/posts
            const response = await fetch(`${BASE_URL}posts`);
            //check if response is different than 200 - ok if yes throw an error
            if (!response.ok) {
                throw new Error('Error');
            }
            // json parse data
            const data = await response.json();

            //clear and replace all posts children
            posts.replaceChildren();
            // iterate to create new tag option with its attributes
            Object.values(data).forEach(x => {
                htmlGenerator('option', x.title, posts, x.id);
            });
        } catch (error) {
            console.error(error.message);
        }
    }

    async function viewPostDetails() {
        //try catch block
        try {
            // fetch posts
            const res = await fetch(`${BASE_URL}posts`);
            // check response
            if (!res.ok) {
                throw new Error('Error');
            }
            //parse all posts to json
            const allPosts = await res.json();

            //take id == value
            const id = posts.value;
            //take title
            const title = posts.options[posts.selectedIndex].text;
            // iterate to find in all posts with this title
            const body = Object.values(allPosts).find(x => x.title === title);
            //replace
            postTitle.textContent = title;
            postBody.textContent = body.body;

            //fetch comments
            const response = await fetch(`${BASE_URL}comments`);
            if (!response.ok) {
                throw new Error('Error');
            }
            //parse data
            const info = await response.json();
            //replace all comments children from info data with same id
            comments.replaceChildren();
            Object.values(info).forEach(x => {
                if (id === x.postId) {
                    const li = htmlGenerator('li', x.text, comments);
                    li.id = x.id;
                }
            });
        } catch (error) {
            console.error(error.message);
        }
    }

    function htmlGenerator(tagName, content, parent, value) {
        const el = document.createElement(tagName);
        el.textContent = content;

        if (parent) {
            parent.appendChild(el);
        }

        if (value) {
            el.setAttribute('value', value);
        }

        return el;
    }
}

attachEvents();