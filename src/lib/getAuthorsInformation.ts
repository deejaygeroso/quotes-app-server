import FetchAPI from './FetchAPI'

const getAuthorsInformation = async (author = ''): Promise<any> => {
  if (author) {
    const parsedAuthor = author.replace(/\s/g, '%20')
    const wikiMainURL = 'https://en.wikipedia.org'
    const wikiApiRoute = `/w/api.php?action=query&format=json&prop=extracts&exintro=&explaintext=&titles=${parsedAuthor}`

    const fetchAPI = new FetchAPI(wikiMainURL)
    const wikiResult = await fetchAPI.getRequest<any>(wikiApiRoute)

    const pages = wikiResult.query.pages
    const authorInfo = pages[Object.keys(pages)[0]]

    if (authorInfo.pageid) {
      return authorInfo.extract
    }
  }

  return ''
}

export default getAuthorsInformation
