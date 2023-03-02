const main=document.getElementById('main')
const area=document.getElementById('area')
const enter=document.getElementById('enter')
const person=document.getElementById('person')
const act=document.getElementById('act')
const details=document.getElementById('details')
main.addEventListener('click',(e)=>{
    e.preventDefault()
      mainValidation()
})
const mainValidation=()=>{

    if(area.value===''){
        console.log('enter')
        enter.innerHTML='please enter your name'
    }
    else{
        console.log('success')
        enter.innerHTML=''
        acceptData()
        showData()
    }
}

let data={}
const acceptData=()=>{
    data['name']=area.value
    console.log(data)
}

const showData=()=>{
    person.innerHTML+=
    `<p id="details">${data.name}</p>`
     act.innerHTML+=
    `<button><i onClick='editData(this)' class="fa-solid fa-user-pen">Edit</i></button>
    <button><i onClick='deleteData(this)' class="fa-solid fa-trash">Delete</i></button>`
    area.value=''
}
const editData=()=>{
    area.value=person.detials.innerHTML
    person.remove()
    act.remove()
}
const deleteData=()=>{
    person.remove()
    act.remove()
}