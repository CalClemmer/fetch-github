let githubUrl = 'https://api.github.com/users/';


// let username1 = 'rest2437'; 
// let = robUrl = `${githubUrl}${username1}`; 
// //console.log('robUrl' , robUrl);

// function getRobEstData () {
//     fetch(robUrl)
//     .then(responseFromGithub => {
//         console.log('responseFromGithub', responseFromGithub);
//         //checking status to make sure its 200 (good)
//         console.log('status:', responseFromGithub.status);
//         if (responseFromGithub.status === 200) {
//             return responseFromGithub.json();
//         } else {
//             console.log('there is no data for this user');
//         }
//     })
    
//     .then(data => {
//         console.log('data;', data); // {object}
//         // console.log('name:', data.name); // Rome Bell -> {string}

//         // Destructure name, bio, following
//         let { updated_at, location, following } = data;
//         console.log('updated_at:', updated_at);
//         console.log('location:', location);
//         console.log('following:', following);

//         const result = { updated_at, location, following };
//         // result.name = name;
//         // result.bio = bio;
//         // result.following = following;
//         console.log('result:', result);

//         return result;
//  })
// }

// getRobEstData()

// /**
//  * @todo Make two function getBradRipple, getCalClemmer
//  * @todo Return 3 different items of data inside an object { name: '' }
//  * */ 

// // Run 🏎 -> f

// // Run 🏎 -> f






// let username2 = 'CalClemmer';
// let = calUrl = `${githubUrl}${username2}`; 

// function getCalClemmerData() {
//     fetch(calUrl)
//     .then(responseFromGithub => {
//         console.log('responseFromGithub:', responseFromGithub);
//         console.log('status:', responseFromGithub.status);
//         if (responseFromGithub.status === 200) {
//             return responseFromGithub.json();
//         } else {
//             console.log('There is no data for this user!');
//         }
//     })
//     .then(data => {
//         console.log('data;', data); 
//         let { name, bio, following } = data;
//         console.log('name:', name);
//         console.log('bio:', bio);
//         console.log('following:', following);

//         const result = { name, bio, following };
//         console.log('result:', result);

//         return result;
//     })
// }
// getCalClemmerData()

// let username3 = 'janejiunkim';
// let = janeUrl = `${githubUrl}${username3}`;

// function getJaneData() {
//     fetch(janeUrl)
//     .then(responseFromGithub => {
//         console.log('responseFromGithub:', responseFromGithub);
//         console.log('status:', responseFromGithub.status);
//         if (responseFromGithub.status === 200) {
//             return responseFromGithub.json();
//         } else {
//             console.log('There is no data for this user!');
//         }
//     })
//     .then(data => {
//         console.log('data;', data);
//         let { login, bio, public_repos } = data;
//         console.log('login:', login);
//         console.log('bio:', bio);
//         console.log('public_repos:', public_repos);

//         const result = { login, bio, public_repos };
//         console.log('result:', result);

//         return result;
//     })
// }
// getJaneData()

// async function getQuinData() {
//     const responseFromGithub = await fetch(`${githubUrl}qmsparks`);
//     console.log('quin response:', responseFromGithub);

//     if (responseFromGithub.status === 200) {
//         const data = await responseFromGithub.json();
//         console.log('data:', data);
//         let { name, html_url, public_repos } = data;
//         let results = {
//             name, 
//             html_url,
//             public_repos
//         };
//         console.log('results:', results);
//         return results;
//     } else {
//         return { message: 'There was no data' }
//     }
// }
// getQuinData();

// async function getBradData() {
//     const responseFromGithub = await fetch(`${githubUrl}bradripple`);
//     console.log('brad response:', responseFromGithub);

//     if (responseFromGithub.status === 200) {
//         const data = await responseFromGithub.json();
//         console.log('data:', data);
//         let { name, html_url, public_repos } = data;
//         let results = {
//             name,
//             html_url,
//             public_repos
//         };
//         console.log('results:', results);
//         return results; 
//     } else {
//         return { message: 'There was no data' }
//     }
// }
// getBradData();

// async function getNickData() {
//     const responseFromGithub = await fetch(`${githubUrl}siegfer`);
//     console.log('Nicholas response:', responseFromGithub);

//     if (responseFromGithub.status ===200) {
//         const data = await responseFromGithub.json();
//         console.log('data:', data);
//         let { name, html_url, public_repos } = data;
//         let results = {
//             name,
//             html_url,
//             public_repos
//         };
//         console.log('results:', results);
//         return results;
//     } else {
//         return { message: 'there was no data'}
//     }
// }
// getNickData()

// const getSharleneData = async function() {
//     const responseFromGithub = await fetch(`${githubUrl}SharleneImperial`);
//     console.log('sharlene response:', responseFromGithub);

//     if (responseFromGithub.status === 200) {
//         const data = await responseFromGithub.json();
//         console.log('data:', data);
//         let { name, html_url, public_repos } = data;
//         let results = {
//             name,
//             html_url,
//             public_repos
//         };
//         console.log('results:', results);
//         return results;
//         } else {
//             return {message: "no data found"}
//         }
//     }
//     getSharleneData()


// const getSaiData = async function() {
//     const responseFromGithub = await fetch(`${githubUrl}kasaiavery3`);
//     console.log('kasai response:', responseFromGithub);

//     if (responseFromGithub.status === 200) {
//         const data = await responseFromGithub.json();
//         console.log('data:', data);
//         let {name, html_url, public_repos} = data;
//         let results = {
//             name, 
//             html_url,
//             public_repos
//         };
//         console.log('results:', results);
//         return results;
//     } else {
//         return {message: 'no data found'}
//     }
// }
// getSaiData()

// const getRomeData = async function() {
//     const responseFromGithub = await fetch(`${githubUrl}romebell`);
//     console.log('Rome response:', responseFromGithub);

//     if (responseFromGithub.status === 200) {
//         const data = await responseFromGithub.json();
//         console.log('data:', data);
//         let { name, html_url, public_repos} = data;
//         let results = {
//             name,
//             html_url,
//             public_repos
//         };
//         console.log('results:', results);
//         return results;
//     } else {
//         return {message: 'no data found'}
//     }
// }
// getRomeData()



/**
 * Write a function getUserData(usernames) that takes in an array 
 * of strings ( Github usernames ) and returns an array of objects that has { login, name, id }
 * which comes back as data from Github
 * @link https://api.github.com/users/
 * @function getUserData
 * @param usernames - {string}
 * @return {array[ojbect]} object includes login, name, id
 */


/** 
 const getUserData = async function (usernames) {
     const results = [];

    for (let i = 0; i < usernames.length; i++) {
        let _usernames = usernames[i];
        fetch(`${githubUrl}${_usernames}`)
    .then(responseFromGithub => {
        //console.log('responseFromGithub:', responseFromGithub);
        //console.log('status:', responseFromGithub.status);
        if (responseFromGithub.status === 200) {
            return responseFromGithub.json();
        } else {
            console.log('There is no data for this user!');
        }
    })
    .then(data => {
        //console.log('data;', data);
        let { login, name, id } = data;
        const result = { login, name, id };
        //console.log('result:', result);
        results.push(result);
        })
    }
    console.log('show length', results.length); // 
    console.log(results);
    return results;
}
*/


async function getUserData(usernames) {
    const ans = [];
    for (let i = 0; i < usernames.length; i++) {
        let Url = `${githubUrl}${usernames[i]}`

        let responseFromGithub = await fetch(Url)
        let data = await responseFromGithub.json();
        ans.push(data);
    }
    return ans;
}


async function getNames(softwareEngineers) {
    let ans = await getUserData(softwareEngineers);
    console.log(ans);
    console.log('LENGTH', ans.length); 
    let names = namesFromArray(ans);
    return names;
    
    console.log(names);
}

/**
 * @function namesFromArray 
 * @param {array} //[{name: 'John Doe'}, {name: 'Jane Doe'}, {name: 'John Smith'}]
 *  
 * @return {array} //['John Doe', 'Jane Doe', 'John Smith']
 */

/**     
    let ans = await getUserData(softwareEngineers);
    console.log('LENGTH', ans.length)
}
*/

function namesFromArray(arr) {
    let ans = [];
    let allKeys = Object.keys(arr[0]);
    console.log('allKeys', allKeys);
    console.log('allKeys Type!', allKeys.constructor);

    for (let i = 0; i < allKeys.length; i++) {
        ans.push(allKeys[i]);
    }
    return ans;
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

function summonList(key){
    getNames(softwareEngineers, key).then(namesList => {
        const bodySelect = document.querySelector('body');
        let uList = document.createElement('ul');
        console.log('NAMES LIST', namesList);

        for (let i = 0; i < namesList.length; i++) {
            let liElement = document.createElement('li');
            let engineer = namesList[i];
            liElement.textContent = engineer;
            uList.append(liElement);
        }
        bodySelect.append(uList);
    });
}

// Run 🏎 -> f 
summonList();