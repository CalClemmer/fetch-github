/**
 * @todo create variable to store the information being pulled
 * @todo create async function
 
// run the function bellow
getCalData();
*/

let githubUrl = 'https://api.github.com/users/';


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

async function getSoftwareEngineers() {
    let linkList = [ ];

    for (let i = 0; i < softwareEngineers.length; i++) {

        const responseFromGithub = await fetch(`${githubUrl}${softwareEngineers[i]}`);

        if (responseFromGithub.status === 200 ) {

            let engineersData = await responseFromGithub.json();
            let { name, id, login } = engineersData;
            const result = { name, id , login };
            // console.log('Engineers Data:', result); 
            linkList.push(result);
        } else {
            console.log('404 errors!!');
        }
    }
    console.log('linkList array;', linkList);
    return linkList;
}

const makeList = async () => {
    
    const engineerList = await getSoftwareEngineers();

    let uList = document.createElement('ul');
    
    
    // for... of.. is another way of doing forEach
    for (const person of engineerList) {
        
        let { name } = person;
        let listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(name));
        uList.appendChild(listItem);
    }
    let bodyList = document.body.appendChild(uList); 
}
makeList();

// async function engineerList(getSoftwareEngineers()); // doesn't work @8:53pm
// const engineerList = getSoftwareEngineers(); //attempt @8:53pm


// attempt @8:42pm
// engineerList.forEach(element => {
//     let { name } = element
//     const nameList = { name }.appendChild['newEngineerList'];
// });