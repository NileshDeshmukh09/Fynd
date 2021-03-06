let workshops = [];

function fetchWorkshops(){
    fetch(`http://workshops-server.herokuapp.com/workshops`)
        .then(response => {
            if( !response.ok){
                throw new Error("Something went Wrong");
            }
            return response.json();
        })
        .then(data=>{
            workshops = data;
            console.log("data has been loaded !")
            console.log(data);
            showWorkshops();
        })
        .catch(error=>{
            alert( error.message)
        });
}

function getWorkshopString( workshop ){
    return `
        <div class="workshop-card row" data-id="${workshop.id}">
            <div class="col-xs-12 workshop-card-inner padding-medium border-medium">
                <div class="row">
                <div class="col-xs-4">
                    <img src="${workshop.imageUrl}" class="img-responsive"/>
                </div>
                <div class="col-xs-8">
                    <h2>${workshop.name}</h2>
                    <div>${workshop.description}</div>
                    <button class="btn btn-primary btn-edit">Edit</button>
                    <button class="btn btn-danger btn-delete">Delete</button>
                </div>
                </div>
            </div>
        </div>  
    `;
}

function showWorkshops(){
   const workshopsEl = document.querySelector('#workshops');
   workshopsEl.innerHTML = "";
    workshops.forEach(
        workshop => {
        workshopsEl.innerHTML += getWorkshopString( workshop );
        }
    )
} 

function addWorkshopToList( workshop ){
    const workshopEl = document.querySelector( '#workshops' );
    workshopEl.innerHTML += getWorkshopString( workshop );
}

function addWorkshop( event ){
    // Prevent form submission
    event.preventDefault();

    // Some DOM Nodes 
    const formSubmitStatusEl = document.querySelector( '#form-submit-status');

    // Read the user Inputs
    const name = document.querySelector('#name').value ;
    const description = document.querySelector('#description').value ;
    const startDate = document.querySelector('#startDate').value ;
    const endDate = document.querySelector('#endDate').value ;
    const time = document.querySelector('#time').value ;
    const imageUrl = document.querySelector('#imageUrl').value ;
    const online = document.querySelector('#online').checked ;
    const inPerson = document.querySelector('#inPerson').checked ;

    // Gather the data send to the backend
    const newWorkshop = {
        name : name,
        description : description,
        startDate : startDate,
        endDate : endDate,
        time : time,
        modes : {
            online : online,
            inPerson :  inPerson
        }, 
        imageUrl : imageUrl
    };

    // if form is invalid then do not go ahead with submission to backend
    if(name === "" || description === "" || startDate == "" || endDate === "" ||
       time === "" || imageUrl === "" || ( !online && !inPerson) ){
        // Display the Error message 
        formSubmitStatusEl.classList.remove( 'bg-success' );
        formSubmitStatusEl.classList.add( 'bg-danger' );
        formSubmitStatusEl.innerHTML = "Form has Error , Please correct it";
        return ;
    
    }
    // go ahead and Submit to the Backend

    // Display the Success Message 
    formSubmitStatusEl.classList.remove( 'bg-danger' );
    formSubmitStatusEl.classList.add( 'bg-success' );
    formSubmitStatusEl.innerHTML = "Form has been Submited ..!"

    //  send the data to the Backend
    fetch(
        'https://workshops-server.herokuapp.com/workshops',
        {
            method : "POST",
            body : JSON.stringify( newWorkshop ),
            headers : {
                'Content-Type' : 'application/json'
            }

        }
    )
    .then(response => {
        if( !response.ok){
            throw new Error("Something went Wrong");
        }
        return response.json();
    })
    .then(data=>{
      workshops = [
        ...workshops,
        data
      ];
      addWorkshopToList( data );
    })
    .catch(error=>{
        alert( error.message)
    });
}

function deleteWorkshop(workshopID , workshopCard){

    //some DOM NODES
    const operationStatusEl = document.querySelector('#operation-status');

    fetch(`https://workshops-server.herokuapp.com/workshops/${workshopID}`,
        {
            method : "DELETE",
        })
    .then(response => {
        workshops =  workshops.filter(
            workshop =>  workshop.id !== workshopID
            // console.log("wID : ", typeof workshop.id);    
        );
        console.log(response)
        console.log("workshopID :", workshopID);
        workshopCard.remove(); 
        
        // Display the Success Message 
        operationStatusEl.classList.remove( 'bg-danger' );
        operationStatusEl.classList.add( 'bg-success' );
        operationStatusEl.innerHTML = "Workshop has been Deleted "
        
    })
    .catch(error => {
        // Display the EDIT Message 
        operationStatusEl.classList.remove( 'bg-success' );
        operationStatusEl.classList.add( 'bg-danger' );
        console.log("Workshop throws error");
        operationStatusEl.innerHTML = error.message;
        console.log(error);

    });
}


function fillForm(workshopID , workshopCard){

    //Some DOM Nodes
    const operationStatusEl = document.querySelector( '#operation-status' );

    // Get the details of selected workshop
    const selectedWorkshop = workshops.find(
        workshop => workshop.id === workshopID
    );
        console.log(selectedWorkshop);

    
    // Populate the user Inputs
    document.querySelector('#name').value = selectedWorkshop.name;
    document.querySelector('#description').value = selectedWorkshop.description;
    document.querySelector('#startDate').value = selectedWorkshop.startDate;
    document.querySelector('#endDate').value = selectedWorkshop.endDate; 
    document.querySelector('#time').value  = selectedWorkshop.time;
    document.querySelector('#imageUrl').value = selectedWorkshop.imageUrl;
    document.querySelector('#online').checked = selectedWorkshop.modes.online;
    document.querySelector('#inPerson').checked = selectedWorkshop.modes.inPerson;

}

// ------------ Setup event handlers on page load ---------

window.addEventListener('load', function(){
    fetchWorkshops();
});

const form = document.querySelector('#add-workshop-form');
form.addEventListener('submit', addWorkshop );



//Event Delegiation
document.body.addEventListener('click',
    function( event ){

        //actual Event that was Clicked
        const el = event.target;
        console.log( el );
        const isDelete = el.classList.contains( 'btn-delete')
        const isEdit = el.classList.contains( 'btn-edit');

        let workshopCard , workshopID;
        if( isDelete || isEdit ){
            workshopCard = el.closest('.workshop-card');
            workshopID =  parseInt(workshopCard.getAttribute( 'data-id' ));
            console.log("Workshop-Type : ", typeof workshopID); 
            console.log("WorkshopID : ",  workshopID);
        }

        if( isDelete ){
            deleteWorkshop(workshopID, workshopCard );
            return;
        }

        if( isEdit ){
            fillForm(workshopID, workshopCard );
            return;
        }
    })