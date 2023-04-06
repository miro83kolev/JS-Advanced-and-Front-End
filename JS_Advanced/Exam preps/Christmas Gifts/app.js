function solution() {
    let giftName = document.querySelector('input');
    let listOfGifts = document.querySelectorAll('section')[1];
    let sentGifts = document.querySelectorAll('section')[2];
    let discardGifts = document.querySelectorAll('section')[3];

    let addBtn = document.querySelector('button');

    addBtn.addEventListener('click', addGiftHandler);

    function addGiftHandler(event) {
        event.preventDefault();
        let ul = listOfGifts.querySelector('ul');
        let li = htmlCreator('li', giftName.value, ul, 'gift');

        let sendBtn = htmlCreator('button', 'Send', li);
        sendBtn.id = 'sendButton';

        let discardBtn = htmlCreator('button', 'Discard', li);
        discardBtn.id = 'discardButton';

        sendBtn.addEventListener('click', sendGiftHandler);
        discardBtn.addEventListener('click', discardGiftHandler);

        Array.from(ul.querySelectorsAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(x => ul.appendChild(x));

        giftName.value = '';        

    }

    function sendGiftHandler(event) {
        let text = event.target.parentNode.firstChild.textContent;
        let sentUl = sentGifts.querySelector('ul');
        htmlCreator('li', text, sentUl, 'gift');

        event.target.parentNode.remove();
    }

    function discardGiftHandler(event) {
        let text = event.target.parentNode.firstChild.textContent;
        let discardUl = discardGifts.querySelector('ul');
        htmlCreator('li', text, discardUl, 'gift');

        event.target.parentNode.remove();
    }
    

    function htmlCreator(tagName, content, parent, className){
        let element = document.createElement(tagName);
        element.textContent = content;

        if(parent) {
            parent.appendChild(element);
        }

        if(className) {
            element.className = className;
        }

        return element;
    }
}