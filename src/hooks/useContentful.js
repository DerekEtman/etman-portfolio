import { createClient } from "contentful";

const useContentful = () =>  {

   const client =  createClient({
        accessToken: process.env.REACT_APP_DELIVERY_API,
        space: process.env.REACT_APP_SPACE_ID,
        host:"cdn.contentful.com"
    })



    const getAsset = async (assetId) => {
        try{
            const asset = await client.getAsset(assetId)
            return asset
        } catch (err) {
            console.log(err)
        }
    }

    const getAssets = async () => {
        try{
            const assets = await client.getAssets()
            return assets
            // return await client.getAssets()
        } catch (err) {
            console.log(err)
        }
    }

    const getEntries = async () => {
        try{
            return await client.getEntries()
        } catch(err){
            console.log(err)
        }
    }



    return {getAsset, getAssets, getEntries}
}
export default useContentful;