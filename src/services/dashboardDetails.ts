import axios from "axios"
import endpoints from "constants/endpoints"
import ApiResponse from "resources/entity/IApiResponse"

export const getMiniCardsDetails = async (token : string): Promise<ApiResponse> => {
    const {data} = await axios.get(endpoints.Dashboard.MINI_CARD_DETAILS, {
        headers:{
            'Content-Type':'application/json',
            'Authorization' : `Bearer ${token ? token : ""}`
        }
    })
    console.log(data)
    return data;
}