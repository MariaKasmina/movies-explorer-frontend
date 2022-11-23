function getDataAboutValidity(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const formValidity = target.closest("form").checkValidity();
    const validity = event.target.validity.valid;
    const errors = {[name]: target.validationMessage};
    return {name, value, validity, formValidity, errors};
}

export function checkValidity(event) {
    const data = getDataAboutValidity(event);
    const formNode = event.target.form;
    if (!data.validity) {
        event.target.closest('form').querySelector(`span.${data.name}-error`).innerText = data.errors[data.name];
        formNode.querySelector('button').disabled = !data.validity;
    } else {
        event.target.closest('form').querySelector(`span.${data.name}-error`).innerText = '';
    }
    if (data.formValidity) formNode.querySelector('button').disabled = false;
}

export function checkProfileFormValidity(event, name, email) {
    const data = getDataAboutValidity(event);
    const formNode = event.target.form;
    console.log(data)
    if (!data.validity) {
        event.target.closest('form').querySelector(`span.${data.name}-error`).innerText = data.errors[data.name];
        formNode.querySelector('button').disabled = !data.validity;
    } else {
        event.target.closest('form').querySelector(`span.${data.name}-error`).innerText = '';
    }
    if (data.validity) {
        if (data.name.includes('name')) {
            if (name === data.value) {
                formNode.querySelector('button').disabled = true;
            } else {
                if (data.formValidity) formNode.querySelector('button').disabled = false;
            }
        }
        if (data.name.includes('email')) {
            if (email === data.value) {
                formNode.querySelector('button').disabled = true;
            } else {
                if (data.formValidity) formNode.querySelector('button').disabled = false;
            }
        }
    }
}
