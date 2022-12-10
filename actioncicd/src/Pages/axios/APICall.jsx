import axios from "axios"

export const AllAPICall = async () => {
    const res = await axios('https://api.github.com/search/repositories?q=stars:%3E1+language:all')
    return  res
}

  

export const HTMLAPICall = async () => {
    const res = await axios('https://api.github.com/search/repositories?q=stars:%3E1+language:html')
    return  res
}



export const CSSAPICall = async () => {
    const res = await axios('https://api.github.com/search/repositories?q=stars:%3E1+language:css')
    return  res
}



export const JAVASCRIPTAPICAll = async () => {
    const res = await axios('https://api.github.com/search/repositories?q=stars:%3E1+language:javascript')
    return  res
}

  