// taskを表示させたい、チェックボックスとともに
function task (){
    const todo = document.getElementById('todo').value;
    const todobt = document.getElementById('todo-bt');
    const tasklist = document.getElementById('task-list');
    const endbtn = document.getElementById('endbtn');
    console.log(todo);

    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('check');
    const label = document.createElement('label');
    label.textContent = todo;
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    tasklist.appendChild(listItem);

        endbtn.addEventListener('click', () => {
            const Checkboxes = document.querySelectorAll('.check');
            // チェックボックスの個数を取得
            const numCheckboxes = Checkboxes.length;
            const Checked = document.querySelectorAll('.check:checked');
            // チェックされた個数を取得
            const numChecked = Checked.length;
        if (numCheckboxes === numChecked) {
            const cookie = Cookies.set('check',true);
            console.log(cookie);
            document.getElementById('today').style.color='pink';
            // window.location.href = 'location.html';
        }
        });
        // ページが読み込まれたときにCookieをチェック
        window.onload = () => {
            const Checked = Cookies.get('Checked');
            if (Checked === 'true') {
            document.getElementById('today').style.color = 'pink';
        }
    }
};
