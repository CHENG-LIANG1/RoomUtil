import axios from "axios"

import {encode} from "js-base64"

const URL = "https://119a8cf5-1c48-4962-baac-66e0b49100ed-bluemix.cloudantnosqldb.appdomain.cloud"
const username = "apikey-v2-r52nl7vkzy1n2w581g28k64jqjlut5sox7yckf3jwl3"
const password ="ef0c5c187a47518b06a8fab4509b9b53"

const authKeyEncode = encode(`${username}:${password}`)

export default axios.create({
    baseURL: `${URL}`,
    headers: {
        'Authorization' : `Basic ` + authKeyEncode
    }
})