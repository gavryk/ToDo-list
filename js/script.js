function todoAction() {
    let addBtn = document.querySelector('.btn-add');
    let todoBlock = document.querySelector('#todo-list'),
        userValue = document.querySelector('.add-input');
    let errorText = document.querySelector('.error-text');
        errorText.style.display = 'none';

    function add() {
        //Create Block for items
        let itemWrapper = document.createElement('div'),
            textParag = document.createElement('p');
            textParag.classList.add('task');
        itemWrapper.classList.add('item-wrapper');
        let editInput = document.createElement('input');
        editInput.setAttribute('type', 'text');
        editInput.classList.add('edit');
        editInput.style.display = 'none';

        //Buttons delete and edit
        let btnDelete = document.createElement('button'),
            btnEdit = document.createElement('button');
        btnDelete.classList.add('btn', 'btn-danger');
        btnEdit.classList.add('btn', 'btn-success');
        btnEdit.innerHTML = 'Edit';
        btnDelete.innerHTML = 'Delete';

        //Buttons wrapper
        let btnsBlock = document.createElement('div');
        btnsBlock.appendChild(btnEdit);
        btnsBlock.appendChild(btnDelete);

        if(userValue.value !== '' && userValue.value.length < 15) {
            textParag.innerHTML = userValue.value;
            itemWrapper.appendChild(textParag);
            itemWrapper.appendChild(editInput);
            itemWrapper.appendChild(btnsBlock);

            todoBlock.appendChild(itemWrapper);
        } else {
            errorMsg();
        }
        userValue.value = '';
        btnDelete.addEventListener('click', removeEl);
        btnEdit.addEventListener('click', editEl);
    }

    function editEl() {
        let editTask = document.querySelectorAll('.task');
        let target = this;

        let editInput = document.querySelectorAll('.edit');
        editInput.forEach((input) => {
            if(input.parentElement === target.parentElement.parentElement) {
                input.style.display = 'block';
                input.addEventListener('keypress', function(event) {
                    if(event.which == 13 || event.keyCode == 13) {
                        editTask.forEach((el) => {
                            if(el.parentElement === input.parentElement) {
                                if(input.value.length < 15) {
                                    el.innerHTML = input.value;
                                } else {
                                    errorMsg();
                                }
                            }
                        });
                        input.style.display = 'none';
                    }
                });
                input.value = '';
            }
        })
    }

    function removeEl() {
        let parent = this.parentNode.parentNode;
        parent.style.transform = 'rotateX(90deg)';
        setTimeout(function() {
            parent.remove();
        }, 500);
    }

    function errorMsg() {
        userValue.style.borderColor = 'red';
        errorText.style.display = 'block';
        setTimeout(function() {
            userValue.style.borderColor = defaultStatus;
            errorText.style.display = 'none';
        }, 3000);
    }

    userValue.addEventListener('keypress', function(event) {
       if(event.keyCode === 13) {
           add();
       }
    });
    addBtn.addEventListener('click', add);
}
todoAction();