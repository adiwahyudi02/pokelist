export const get = (url: string) => {
    return fetch(url).then((res) => {
        if (!res.ok) {
            if (res.status === 404) {
                throw new Error('Data not found')
            }
        }

        return res
    })
}
