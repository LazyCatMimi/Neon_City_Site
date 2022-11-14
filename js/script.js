function init(){
    //show date
    updateDate();

    //update time
    const updateTimeInterval = setInterval(updateTime, 100);
    
    
    //get the nav icon
    const navIcon = document.getElementsByClassName('menu-icon')[0].getElementsByTagName('img')[0];

    //click event listener for menu bar
    navIcon.addEventListener('click', showMenu, false);
}
window.addEventListener('load', init, false);

function showMenu(event){
    const header = document.getElementById('full-header');
    const expandedMenu = document.createElement('div');
    expandedMenu.setAttribute('class', 'glass');
    expandedMenu.setAttribute('id', 'expanded-menu');
    
   
    //clone the menu icon
    const closeMenuIconDiv = document.getElementsByClassName('menu-icon')[0].cloneNode(true);
    
    const linksDiv = document.getElementById('links').cloneNode(true);;
   linksDiv.style.display = 'initial';
    
    expandedMenu.append(closeMenuIconDiv);
    expandedMenu.append(linksDiv);
    //expandedMenu.innerHTML = linksHTML;


    header.append(expandedMenu);
    const closeMenuIcon =  document.getElementsByClassName('menu-icon')[1].getElementsByTagName('img')[0];
    closeMenuIcon.addEventListener('click', removeNav, false);
}

function removeNav(event){
    document.getElementById('expanded-menu').remove();
}


function updateDate(){
    //month array in string
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    //gate element to display date
    const dateElement = document.getElementById('date');

    //get month, day, year
    const date = new Date();
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear() + 114;

    //display date in mon-day-year format
    dateElement.innerHTML = month + '-' + day + '-' + year;

}

function updateTime(){
    const timeElement = document.getElementById('time');
    const date = new Date();
    const hour = fixFormat(date.getHours());
    const minute = fixFormat(date.getMinutes());
    const second = fixFormat(date.getSeconds());


    timeElement.innerHTML = hour + ':' + minute + ':' + second;
}

function fixFormat(num){
    if (num < 10)
        return num = '0' + num;
    else
        return num;

}