// const production = 'production'
// const local = 'dev'

const mode = process.env.MODE

const local_api_url = process.env.API_URL
const production_api_url = 'http://localhost:5000'



let base_api_url = ''

if (mode === production) {
    base_api_url = production_api_url
} else {
    base_api_url = local_api_url
}

export { base_api_url }