/**
 * @todo - Make fetch-apis folder inside of codealongs
 * @todo - Create 3 files inside 
 * @todo - Add skeleton for index.html
 * @todo - Link your css 
 * @todo - Link your script  
 * @todo - Open VS code to app.js
 * @todo - Make a README.md file
 */

let githubUrl = 'https://api.github.com/users/';

/**
 * Template Literals
 */

let username = 'CalClemmer';
let = romeUrl = `${githubUrl}${username}` // {string} -> https://api.github.com/users/romebell
console.log('romeUrl: ', romeUrl); // endpoint

/**
 * Fetch
 */

console.log('fetch: ', fetch);
console.dir('fetchdir: ', fetch);

/**
 * Syntax - .then()
 * @function getCalClemmerData
 * @return {object} - name, bio, following 
 */

function getCalClemmerData() {
    fetch(romeUrl) //endpoint, very necessary!
    .then(responseFromGithub => {
        console.log('responseFromGithub:', responseFromGithub);
        // check the status to make it's 200;
        console.log(responseFromGithub.status);
        if (responseFromGithub.status === 200) { //good to check if the status is 200
            return responseFromGithub.json(); // grab this and pass it to the next .then(data) 
        } else {
            console.log('There is no data for this user!');
        }
    })
    .then(data => {
        console.log('data;', data); // {object}
        console.log(data.bio); // 
        console.log(data.name); // Cal Clemmer -> {string}
        // Destructuring 
        /** 
        let { bio } = data;
        console.log('bio: ', bio);
        let { following } = data;
        console.log( following );
        */

        // Destructure name, bio, following 
        let {name, bio, following} = data;
        console.log(name);
        console.log(bio);
        console.log(following);

        const result = {name, bio, following};
        
        /** 
        result.name = name;
        result.bio = bio;
        result.following = following;
        */ 

        console.log(result); 
        return result;
    })
}




/**
 * @todo Make two function ex: getBradRipple 
 * @todo Return 3 different items of data inside an object, name and then two different 
 * than bio and following 
 */

 function getUserData(username) {

    let = Url = `${githubUrl}${username}` // {string} -> https://api.github.com/users/romebell

    fetch(Url) 
    .then(responseFromGithub => { // this is a promise. What is being returned from the previous function call. 
        if (responseFromGithub.status === 200) { //good to check if the status is 200
            return responseFromGithub.json(); // grab this and pass it to the next .then(data) 
        } else {
            console.log('There is no data for this user!');
        }
    })
    .then(data => {

        // Destructure name, bio, following 
        let {name, id, location, email} = data;
        const result = {name, id, location, email};
        
        console.log(result); 
        return result;
    })
}

console.log('BEGIN API FETCH QUEST');
getUserData('CalClemmer');
getUserData('BradRipple');
getUserData('rest2437');
getUserData('janejiunkim');
getUserData('siegfer');
getUserData('romebell');

/**
 * Function Expression
 */

const getRobData = function() {
    console.log('Look at me I\'m Rob :D')
}
const getRomeData = function() {
    console.log('Look at me I\'m Rome :D')
}

// Run the Function 
getRobData();

/**When javascript is ran, javascript finds all declared functions and 
 * puts them at the top (the functions are 'hoisted')
 * BUT it doesn't do that for function expressions  
 * 
 * Fun fact, Javascript runs asynchronously  
 * All the functions you need ran before each other, 
 * you need to carefully structure them. They will not wait. 
 * .then is the key to make functions wait their turn!! 
 * 
 
 */ 

/**
 * Syntax - async/await 
 */

const getBothDatasets = function () {
    console.log('inside getBothDataSets');
    getRobData();
    getRomeData();
}

getBothDatasets();

async function getCalClemmerData() {
//you can't await outside of an async function;
    const responseFromGithub = await fetch(`${githubUrl}CalClemmer`); 
    console.log('Response from github', responseFromGithub); 

    if (responseFromGithub.status === 200) {
        const data = await responseFromGithub.json();
        console.log('data constructor', data.constructor);
        let {name, html_url, public_repos} = data;
        let results = {
            name,
            html_url,
            public_repos
        }
        console.log(results);
        return(results);
    } else {
        return {message: 'There was no data'}
    }
}

getCalClemmerData();

const getData2 = async function() {
    let x = await getCalClemmerData();
    console.log('x I"M RIGHT HERE ', x);
    let y = await getUserData('CalClemmer'); 
    console.log('this one should come second', y)
}

getData2();