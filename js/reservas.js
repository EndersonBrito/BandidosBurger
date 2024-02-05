const dropdownMenu = document.getElementById('dropdown-menu');
const openDropdownBtnMobile = document.getElementById('menu-navtrigger-mobile');
const openDropdownBtnDesktop = document.getElementById('menu-navtrigger-desktop');
const socialNetwork = document.getElementById('social-network-container')
const logoRotate = document.getElementById('logo-dropdown')
const primaryMenu = document.getElementById('primary-menu')
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const closeDropdownBtn = document.getElementById('header-dropdown-close');

function openDropdown(element) {
    dropdownMenu.classList.remove('hidden-dropdown');
    dropdownMenu.classList.add('dropdown-menu');
    dropdownMenu.classList.add('show-menu');
    dropdownMenu.classList.remove('close-menu');
    closeDropdownBtn.addEventListener('click', () => {
        dropdownMenu.classList.remove('add');
        dropdownMenu.classList.remove('show-menu');
        dropdownMenu.classList.add('close-menu');
        setTimeout(() => {
            line1.classList.remove('animate-1');
            line2.classList.remove('animate-2');
            socialNetwork.classList.remove('animate-social-network')
            primaryMenu.classList.remove('animate-primary-menu')
            logoRotate.classList.remove('animate-logo-rotate')
        }, 500);
    });
}
openDropdownBtnDesktop.addEventListener('click', () => {
    openDropdown();
    line1.classList.add('animate-1')
    line2.classList.add('animate-2')
    socialNetwork.classList.add('animate-social-network')
    primaryMenu.classList.add('animate-primary-menu')
    logoRotate.classList.add('animate-logo-rotate')
})
openDropdownBtnMobile.addEventListener('click', () => {
    openDropdown();
    line1.classList.add('animate-1')
    line2.classList.add('animate-2')
    socialNetwork.classList.add('animate-social-network')
    primaryMenu.classList.add('animate-primary-menu')
    logoRotate.classList.add('animate-logo-rotate')
})

var select = document.getElementById('selectRestaurant');
select.addEventListener('change',
    function(){
    var selectedOption = this.options[select.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);
    if (selectedOption.value == 'losEstados'){
        document.getElementById("reservaFormularioEstados").style.display = "block";
        document.getElementById("reservaFormularioSerra").style.display = "none";

    }else  if (selectedOption.value == 'laSerna'){
        document.getElementById("reservaFormularioEstados").style.display = "none";
        document.getElementById("reservaFormularioSerra").style.display = "block";

    }else{
        document.getElementById("reservaFormularioEstados").style.display = "none";
        document.getElementById("reservaFormularioSerra").style.display = "none";

    }
});