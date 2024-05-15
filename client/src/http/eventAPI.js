import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createEventCategory = async (eventCategory) => {
    const {data} = await $authHost.post('api/eventCategory', eventCategory)
    return data
}

export const fetchEventCategories = async () => {
    const {data} = await $host.get('api/eventCategory')
    return data
}

export const createEvent = async (event) => {
    const {data} = await $authHost.post('api/event', event)
    return data
}

export const fetchEvents = async (eventCategoryID) => {
    const {data} = await $host.get('api/event',  eventCategoryID)
    return data
}

export const fetchOneEvent = async (eventID) => {
    const {data} = await $host.get('api/event/' + eventID)
    return data
}