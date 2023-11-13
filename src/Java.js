function  Java() {
    

    const hiddenMenu = document.querySelector(".hidden-menu"); // Brug . for at vælge klassen hidden-menu
    const lobeTypePil = document.querySelectorAll(".pil"); // Brug . for at vælge klassen pil

    lobeTypePil.forEach(pil => {
    pil.addEventListener('click', () => {
    if (hiddenMenu.style.display === "none" || hiddenMenu.style.display === "") {
    // Vis dropdown-menuen
    hiddenMenu.style.display = "block";
    } else {
            // Skjul dropdown-menuen
            hiddenMenu.style.display = "none";
           }
        });
    });


    const hiddenAnmeldelse = document.querySelector(".hidden-anmeldelse");
        const anmeldelsePile = document.querySelectorAll(".anmeldelse");

           anmeldelsePile.forEach(anmeldelsePil => {
           anmeldelsePil.addEventListener('click', () => {
           if (hiddenAnmeldelse.style.display === "none" || hiddenAnmeldelse.style.display === "") {
            // Vis dropdown-menuen
            hiddenAnmeldelse.style.display = "block";
            } else {
            // Skjul dropdown-menuen
            hiddenAnmeldelse.style.display = "none";
            }
        });
   });
}


export default Java
