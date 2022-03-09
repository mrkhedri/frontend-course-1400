function myFunction(){
document.getElementById('myDropdown').classList.toggle('show');
}
window.onclick = event=>{
    if(!event.target.matches(".dropdownBtn")){
        const dropdown = document.getElementById('myDropdown')
        if(dropdown.classList.contains('show')){
            dropdown.classList.remove('show')
        }
    }
}