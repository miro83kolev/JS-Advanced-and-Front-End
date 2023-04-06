window.addEventListener("load", solve);

function solve() {
    const title = document.getElementById('post-title');
    const category = document.getElementById('post-category');
    const content = document.getElementById('post-content');
    const publishBtn = document.getElementById('publish-btn');
    const ulElement = document.getElementById('review-list');
    const form = document.querySelector('form');

    publishBtn.addEventListener("click", publishBtnHandler);

    function publishBtnHandler(event) {
        event.preventDefault();

        if(!title.value || !category.value || !content.value){
          return;
        }

        let liElement = htmlCreator('li');
        let articleElement = htmlCreator('article');
        let h4Element = htmlCreator('h4', `${title.value}`);
        let pCategoryElement = htmlCreator('p', `Category: ${category.value}`);
        let pContentElement = htmlCreator('p', `Content: ${content.value}`);

        let editBtn = htmlCreator('button', 'Edit');
        let approveBtn = htmlCreator('button', 'Approve');

        liElement.className = 'rpost';
        editBtn.className = 'action-btn edit';
        approveBtn.className = 'action-btn approve';

        articleElement.appendChild(h4Element);
        articleElement.appendChild(pCategoryElement);
        articleElement.appendChild(pContentElement);
        liElement.appendChild(articleElement);
        liElement.appendChild(approveBtn);
        liElement.appendChild(editBtn);
        ulElement.appendChild(liElement);

        title.value = '';
        category.value = '';
        content.value = '';

        editBtn.addEventListener('click', (e) => {
            title.value = h4Element.textContent;
            category.value = pCategoryElement.textContent.split('Category: ')[1];
            content.value = pContentElement.textContent.split('Content: ')[1];
            liElement.remove(e.target.parentNode.children);
        })

        approveBtn.addEventListener('click', () => {
            let publishedList = document.querySelector('#published-list');
            publishedList.appendChild(liElement);
            liElement.removeChild(editBtn);
            liElement.removeChild(approveBtn);
        });

        let clearBtn = document.querySelector('#clear-btn');
        clearBtn.addEventListener('click', (event) => {
          let publishedList = document.querySelector('#published-list');
          let lis = publishedList.querySelectorAll('li');
          for (let li of lis) {
            li.remove();
          }
        });

    }

    function htmlCreator(tagName, content) {
        const element = document.createElement(tagName);
        if (content) {
           element.textContent = content;
        }       

        return element;
    }

}
