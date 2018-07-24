function customFetch() {
    const headers = new Headers()
    headers['Authorization'] = localStorage.getItem('JWT_TOKEN_TEST')

    const request = (url,init) => fetch(`http://localhost:9000${url}`, init)

    return {
        get: (url) => request(url,{method: 'GET', headers}),
        post: (url, body) => request(url, {method: 'POST', headers, body: JSON.stringify(body)})
    }

}
export const fetching = customFetch()



