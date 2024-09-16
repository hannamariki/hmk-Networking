export function fetchRepositories(keyword) {

    const apiUrl = process.env.EXPO_PUBLIC_API_URL;

    return fetch(`${apiUrl}?q=${keyword}`)
      .then(response => {
        if(!response.ok){
          throw new Error('Error in fetch: status code ${response.status} ${response.statusText}');
      }
      return response.json();
    })
}

