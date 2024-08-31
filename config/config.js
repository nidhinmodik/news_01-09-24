const mode = process.env.NEXT_PUBLIC_MODE;
let base_api_url = '';

if (mode === 'production') {
    base_api_url = process.env.NEXT_PUBLIC_PRODUCTION_API_URL;
} else {
    base_api_url = process.env.NEXT_PUBLIC_LOCAL_API_URL;
}

export { base_api_url };
