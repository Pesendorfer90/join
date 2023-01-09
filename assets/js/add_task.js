 /**
  * 
  * This function is used to change the height of a div and display its contents
  * if the height of a div was previously changed and you click on another,
  * the previous div is reduced again and the content is hidden. 
  * The height of the clicked div is increased and the content is displayed
  * 
  * @param {*} clicked - This is the id where a classlist should be changed
  * @param {*} notClicked - This is the id where a classlist should be changed
  * @param {*} visible - This is the id where the classlist "d-none" will removed
  * @param {*} notVisible - This is the id where the classlist "d-none" will added
  */
function pullDownMenu(clicked, notClicked, visible, notVisible) {
    let openMenu = document.getElementById(clicked).classList;
    if (openMenu == 'dropdown-category-closed') {
        document.getElementById(clicked).classList.add('dropdown-category-open');
        document.getElementById(notClicked).classList.remove('dropdown-category-open');
        document.getElementById(visible).classList.remove('d-none');
        document.getElementById(notVisible).classList.add('d-none');
    } else {
        document.getElementById(clicked).classList.remove('dropdown-category-open');
        document.getElementById(visible).classList.add('d-none');
        document.getElementById(notVisible).classList.add('d-none');
    }
}