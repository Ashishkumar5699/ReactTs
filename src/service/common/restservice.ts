import axios from "axios";

let myHeaders;

const POSTMethod = async <Type>(data: object, url: string) => {
    //const data = JSON.stringify({
    //    "username": "string",
    //    "password": "string"
    //});

    //const config = {
    //    method: 'post',
    //    maxBodyLength: Infinity,
    //    url: 'http://localhost:5000/api/Account/login',
    //    headers: {
    //        'Content-Type': 'application/json'
    //    },
    //    data: data
    //};

    //axios.request(config)
    //    .then((response) => {
    //        console.log(JSON.stringify(response.data));
    //    })
    //    .catch((error) => {
    //        console.log(error);
    //    });

    myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: object = {
        method: 'POST',
        url: url,
        data: data,
        headers: myHeaders,
    };

    return await axios<Type>(url, requestOptions)
        .then(response => response)
        .catch((error) => console.log(error));
}

export {
    POSTMethod,
}