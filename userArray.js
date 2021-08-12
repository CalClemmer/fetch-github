
let githubUrl = 'https://api.github.com/users/';

async function getUserData(username) {
    const ans = [];
    for (let i = 0; i < username.length; i++) {
        let Url = `${githubUrl}${username[i]}` // {string} -> https://api.github.com/users/romebell

        let responseFromGithub = await fetch(Url)
        let data = await responseFromGithub.json();
        // console.log('data:', data);
        ans.push(data);
        /*
        .then(responseFromGithub => { // this is a promise. What is being returned from the previous function call. 
            if (responseFromGithub.status === 200) { //good to check if the status is 200
                return responseFromGithub.json(); // grab this and pass it to the next .then(data) 
            } else {
               console.log('There is no data for this user!');
            }
        })
        .then(data => {

            // Destructure name, bio, following 
            let {name} = data;
            const result = {name};
        
            ans.push(result)
        }) */
    } 
    return ans;
}

async function getNames(softwareEngineers){
    let ans = await getUserData(softwareEngineers);
    //console.log('getUserData', await getUserData(softwareEngineers))
    console.log('async length', ans.length);
    let names = nameArray(ans);
    //console.log('names pls', names);
    return names;
}


function nameArray(data) {
    let ans = [];
    //console.log('name', data);
    console.log('length', data.length);
    for (let i = 0; i < data.length; i++) {
        ans.push(data[i]['name']);
        //console.log(ans);
    }
    return (ans);
}

const softwareEngineers = [
    'kasaiavery3', 
    'romebell', 
    'CalClemmer', 
    'janejiunkim', 
    'SharleneImperial', 
    'bradripple',
    'rest2437',
    'qmsparks',
    'siegfer'
];
/**
 * Take the list of names, add them to a list, and add the list to do page
 * @todo Think about all resources that are needed
 * 1. Setting up some reference ( select elements from the DOM )
 *    - print each reference to make sure I can verify the reference is in memory ( exist ) -> most common errors
 *    - Make a note of what datatype it is ( take advantage of existing methods on datatype )
 * 2. Create some elements ( i.e. <ul> )
 *    - print to make sure you have the correct element created
 *    - decide if this is a parent or a child element
 * 3. Parent -> What am I appending to this element
 * 4. Child -> What am I doing | who is my parent 
 * 5. How am I going to get the new element onto the page ( DOM )
 * @todo select <body>
 * @todo create <ul> element
 * @todo append <ul> to <body>
 * @todo create an li ( inside the for loop )
 * @todo make a reference to each element
 * @todo Add the textContent to the li
 * @todo Append the <li> -> <ul>
 * @todo print to see if all elements are on the <ul>
 * @todo Append the <ul> -> <body>
*/

getNames(softwareEngineers).then(namesList => {

    const bodySelect = document.querySelector('body');
    let uList = document.createElement('ul');
    console.log('NAMES LIST', namesList);
    
    for (let i = 0; i < namesList.length; i++) {
        let liElement = document.createElement('li');
        let engineer = namesList[i]; // {string}

        // @todo Add textContent to the liElement
        liElement.textContent = engineer;
        // @todo print to see if the li element has the text
        // console.log('liElement', liElement);
        uList.append(liElement);
    }
    // console.log('uList', uList)
    bodySelect.append(uList);
});




const printNames = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log('testing?', arr[i]);
    }
}

// printNames(namesList);

//ulSelect.append

//nameArray(getUserData(softwareEngineers));


/*
const makeList = async () => (

    const engineerList = await getSoftwareEngineers();

    let uList = document.createElement('ul');
)
*/