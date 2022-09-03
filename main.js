(function() {

    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.classList.add('mb-3', 'mt-3');
        appTitle.innerHTML = title;
        return appTitle;
    }

    function createItemForm() {

        let form = document.createElement('form');
        let input = document.createElement('input');
        let butWrapper = document.createElement('div');
        let but = document.createElement('button');

        form.classList.add('input-group', 'mb-5');
        input.classList.add('form-control');

        input.placeholder = 'Введите значение';
        butWrapper.classList.add('input-group-append');
        but.classList.add('btn', 'btn-dark');
        but.textContent = 'Добавить';

        butWrapper.append(but);
        form.append(input);
        form.append(butWrapper);


        return {
            form,
            input,
            but
        };
    }

    function createList() {

        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }


    function createListItem(val) {

        let item = document.createElement('li');

        let butGroup = document.createElement('div');
        let done = document.createElement('button');
        let del = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'mb-3');

        item.textContent = val;

        butGroup.classList.add('btn-group', 'btn-group-sm');
        done.classList.add('btn', 'btn-success')
        del.classList.add('btn', 'btn-danger')
        done.textContent = 'Готово';
        del.textContent = 'Удалить';

        butGroup.append(done);
        butGroup.append(del);
        item.append(butGroup);

        return {
            item,
            done,
            del,
        }; 
    }


       
    document.addEventListener('DOMContentLoaded', function() {

        let container = document.getElementById('todo-app');

        let tit = createAppTitle('Список дел');
        let itemForm = createItemForm();
        let todoList = createList();



        container.append(tit);
        container.append(itemForm.form);
        container.append(todoList);


        itemForm.form.addEventListener('submit', function(e) {

            e.preventDefault();


            if (!itemForm.input.value) return;

            let todoItem = createListItem(itemForm.input.value);

            todoItem.done.addEventListener('click' , () => {
                todoItem.item.classList.toggle('list-group-item-success');
            })

            todoItem.del.addEventListener('click', () => {
                todoItem.item.remove();
            })

            todoList.append(todoItem.item);
            itemForm.input.value = '';
        });


    });

})();