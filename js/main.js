// add member class : represents a member
class addMember {
    constructor(name, training, memberId) {
        this.name = name;
        this.training = training;
        this.memberId = memberId;
    }
}
// UI class to handle UI tasks
class UI {
    static displayMember() {
        const member = store.getMember();
        member.forEach((members) => UI.addMemberList(members));
    }
    static addMemberList(members) {
        const list = document.querySelector('#member-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${members.name}</td>
        <td>${members.training}</td>
        <td>${members.memberId}</td>
        <td><a href="#" class ="btn btn-sm btn-danger delete">X</a></td>
        `;
        list.appendChild(row);
    }
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#member-form');
        container.insertBefore(div, form);

        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
    static clearFeild() {
        document.querySelector('#name').value = '';
        document.querySelector('#training').value = '';
        document.querySelector('#memberId').value = '';
    }
    static deleteMember(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
}
//store class : handles storage
class store {
    static getMember() {
        let member;
        if(localStorage.getItem('member') == null){
            member= [];
        }else{
            member = JSON.parse(localStorage.getItem('member'));
        }
        return member;
    }
    static addMembers(members){
        const member = store.getMember();

        member.push(members);
        localStorage.setItem('member', JSON.stringify(member));
    }
    static removeMember(memberId){
        const member = store.getMember();

        member.forEach((members,index)=>{
            if(members.memberId === memberId){
                member.splice(index,1);
            }
        });       
        localStorage.setItem('member', JSON.stringify(member));
    }
}
//display member
document.addEventListener('DOMLContentLoader', UI.displayMember());
//Add member
document.querySelector('#member-form').addEventListener('submit', (e) => {
    //prevent default value
    e.preventDefault();
    //get value from form
    const name = document.getElementById('name').value;
    const training = document.getElementById('training').value;
    const memberId = document.getElementById('memberId').value;

    //validate
    if (name === '' || training === '' || memberId === '') {
        UI.showAlert('plese fill all feilds', 'warning');
    } else {
        // Instatiate member
        const member = new addMember(name, training, memberId);

        //show alert
        UI.showAlert('Member Added', 'success');
        //add member to UI
        UI.addMemberList(member);
        //add member in store
        store.addMembers(member);
        //clearfeild
        UI.clearFeild();
    }

});
//Remove member
document.querySelector('#member-list').addEventListener('click', (e) => {
    //remove from UI
    UI.deleteMember(e.target);
    //show alert
    UI.showAlert('member removed', 'danger');
    //remove from store
    store.removeMember(e.target.parentElement.previousElementSibling.textContent);
});