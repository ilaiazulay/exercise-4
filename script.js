const name = document.getElementById('name');
const password = document.getElementById('password');
const phone = document.getElementById('phone')
const interest = document.getElementsByClassName('interest')
var submit = document.getElementById('submit-button')
const errorElement = document.getElementById('error')

    submit.onclick = function(e)
    {
        let messeges = []
        let spaceDetector = 0

        /////////////// name validation ////////////////
        for(let i=0; i < name.value.length; i++)
        {                   

            if ((name.value[i] >= '0' && name.value[i] <= '10'))
                {               
                    e.preventDefault()
                    alert('Name must not contain numbers')
                    break
                }
            if (name.value[i] === ' ')
                {
                    spaceDetector = 1;
                }
            if (spaceDetector === 0 && (i+1) === name.value.length)
                {
                    e.preventDefault()
                    alert('Full name must contain space')
                }
        }
        /////////////// name validation ////////////////

        /////////////// password validation ////////////

        if (password.value.length < 6)
        {
            e.preventDefault()
            alert('password must contain at least 6 characters')
        }

        /////////////// password validation ////////////

        /////////////// phone validation //////////////
        
        if (phone.value.length < 9 || phone.value.length > 10)
        {
            e.preventDefault()
            alert('phone number must contain between 9 or 10 numbers')
        }

        if (phone.value.match('-'))
        {
            e.preventDefault()
            alert('phone number must not contain "-" character')
        }

        /////////////// phone validation //////////////

        /////////////// checkbox validation ///////////

        for (let i=0; i < 5; i++)
        {
            if (interest[i].checked === true)
            {
                break;
            }
            if(interest[i].checked === false && i+1 === 5)
            {
                e.preventDefault()
                alert('Must check at least one interest')
            }
        }

        /////////////// checkbox validation ///////////

    }

































// const error = document.getElementById('error')
// var has_number = new RegExp("\d+");


// // form.addEventListener('submit', (e) => {

// //     e.preventDefault()
// // })

// form.addEventListener('submit', (e) =>
// {
//     let messeges =[]        

//     for (var i = 0; i < name.length; i++) 
//     {
//         if (name[i] >= '0' || name[i] <= '10') 
//         {   
//             console.log(name[i])
//             e.preventDefault()
//             messeges.push('Name must contain only characters')
//             break
//         }
//     }

//     if(password.length < 6){
//         messeges.push('password must be at least 6 characters')
//     }

//     if(messeges.length > 0){
//         e.preventDefault()
//         error.innerText = messeges.join(', ')
//     }
    
// })