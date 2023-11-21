function openTab(evt, tabName) {
    // Expand the info-card if it's in the smaller size
    const infoCard = document.getElementById('info-card');
    const isExpanded = infoCard.getAttribute('aria-expanded') === 'true';
    if (!isExpanded) {
        toggleInfoCardSize();
    }

    // Original functionality of openTab
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("info-card--section");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function toggleInfoCardSize() {
    const infoCard = document.getElementById('info-card');
    const firstTab = document.getElementById('info-card--section-1');
    const isExpanded = infoCard.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // Collapse the info-card and hide all sections
        infoCard.style.width = '300px'; // Example size, adjust as needed
        infoCard.style.height = '200px'; // Example size, adjust as needed
        infoCard.setAttribute('aria-expanded', 'false');
        hideAllSections();
    } else {
        // Expand the info-card and show the first section
        infoCard.style.width = '600px'; // Example size, adjust as needed
        infoCard.style.height = '400px'; // Example size, adjust as needed
        infoCard.setAttribute('aria-expanded', 'true');
        firstTab.style.display = 'block';
        setActiveTab('info-card--section-1');
    }
}

function hideAllSections() {
    const sections = document.getElementsByClassName('info-card--section');
    for (let section of sections) {
        section.style.display = 'none';
    }
}

function setActiveTab(tabId) {
    const tabs = document.getElementsByClassName('tab-link');
    for (let tab of tabs) {
        if (tab.getAttribute('onclick').includes(tabId)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    }
}

document.getElementById('info-card-toggle').addEventListener('click', toggleInfoCardSize);
