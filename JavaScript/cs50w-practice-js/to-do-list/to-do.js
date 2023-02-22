document.addEventListener('DOMContentLoaded', () => {
    // kanei to button na min litourgei
    document.querySelector('#button').disabled = true;
    // otan patas ena koumpi sto input 
    document.querySelector('#text').onkeyup = () => {
        // to button energopiite otan to value length einai megalitero to 0
        if (document.querySelector('#text').value.length > 0){
            document.querySelector('#button').disabled = false;
        }
        // alios ginete disable
        else {
            document.querySelector('#button').disabled = true;
        }

    }
    // elenxoume to form otan kanei submit
    document.querySelector('form').onsubmit = () => {
        // pernoume to input value 
        const task = document.querySelector('#text').value;
        // ftiaxnoume ena li
        const li = document.createElement('li');
        // h timi tou li tha einai to task. vazoume innerhtml gia ma allaksi to periexomeno to li sto dom
        li.innerHTML = task;
        // prostheti to li sthn unorder list
        document.querySelector('ul').append(li);
        //alazei to esoteriko tou input se tipota
        document.querySelector('#text').value = '';

        //ksana kanei to button disable
        document.querySelector('#button').disabled = true;

        //stop submiting
        return false;
    }
})