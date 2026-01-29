export default async function dataFetcher(url) {
    try {
        return await(await fetch(url)).json()
    } catch (error) {
        return "Fetch data error! galat system hubungi kami via contact us terima kasii \n" + error
    }
}