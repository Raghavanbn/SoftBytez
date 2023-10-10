
const ToggleMenu = () => {
    const menu = document.getElementById('menu');
    alert(menu);
    menu?.classList.toggle('hidden');
    menu?.classList.toggle('w-full');
    menu?.classList.toggle('h-screen');
}
export default ToggleMenu;