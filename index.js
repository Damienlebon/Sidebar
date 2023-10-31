// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclique dessus.

// Ranger la sidebar si on click sur le contenu principal.

        const sideBar = document.getElementById('side-bar');
        const toggleBtn = document.getElementById('btn');
        const content = document.querySelector('.content');

        let SidebarVisible = false;

        toggleBtn.addEventListener('click', () => {
            if (SidebarVisible) {
                sideBar.style.left = '-230px'; 
            } else {
                sideBar.style.left = '0';
            }
            SidebarVisible = !SidebarVisible;
            toggleBtn.classList.toggle('active');
        });

        content.addEventListener('click', () => {
            if (SidebarVisible) {
                sideBar.style.left = '-230px'; 
                SidebarVisible = false;
                toggleBtn.classList.remove('active');
            }
        });