(function () {



    if (
        !document.querySelectorAll ||
        !('draggable' in document.createElement('span')) ||
        window.opera
    ) {
        return;
    }


    for (var
            softwareItems = document.querySelectorAll('[data-draggable="softwareItem"]'),
            len = softwareItems.length,
            i = 0; i < len; i++) {
        softwareItems[i].setAttribute('draggable', 'true');
    }




    var softwareItem = null;


    document.addEventListener('dragstart', function (e) {
    
        softwareItem = e.target;

    
    
    
    
        e.dataTransfer.setData('text', '');

    }, false);



    document.addEventListener('dragover', function (e) {
        if (softwareItem) {
            e.preventDefault();
        }

    }, false);


    document.addEventListener('drop', function (e) {
    
    
        if (e.target.getAttribute('data-draggable') == 'softwareTarget') {
            e.target.innerHTML = "";
            e.target.style="border:none;list-style:none;"
            e.target.appendChild(softwareItem);

             var chnageid = "changeid" + Math.round(Math.random() * 100000);
             e.target.setAttribute("id", chnageid)
             console.log(chnageid);

            e.preventDefault();

            alert(softwareItem.innerHTML.trim() + " has Been Promoted as a Team Leader");
        }

    }, false);



    document.addEventListener('dragend', function (e) {
        softwareItem = null;

    }, false);

})();




(function () {



    if (
        !document.querySelectorAll ||
        !('draggable' in document.createElement('span')) ||
        window.opera
    ) {
        return;
    }


    for (var
            teamItems = document.querySelectorAll('[data-draggable="teamItem"]'),
            len = teamItems.length,
            i = 0; i < len; i++) {
        teamItems[i].setAttribute('draggable', 'true');
    }




    var teamItem = null;


    document.addEventListener('dragstart', function (e) {
    
        teamItem = e.target;

    
    
    
    
        e.dataTransfer.setData('text', '');

    }, false);



    document.addEventListener('dragover', function (e) {
        if (teamItem) {
            e.preventDefault();
        }

    }, false);


    document.addEventListener('drop', function (e) {
    
    
        if (e.target.getAttribute('data-draggable') == 'teamTarget') {
            
            e.target.innerHTML = "";
            e.target.style = "border:none;list-style:none;"

            e.target.appendChild(teamItem);

             var chnage2id = "changeid" + Math.round(Math.random() * 100000);
             e.target.setAttribute("id", chnage2id)
             console.log(chnage2id);

            e.preventDefault();
            alert(teamItem.innerHTML.trim() + " has Been Promoted as a Module Leader");
        }

    }, false);

    document.addEventListener('dragend', function (e) {
        teamItem = null;

    }, false);

})();

