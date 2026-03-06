// replicateService.ts

import axios from 'axios';

const REPLICATE_API_URL = 'https://api.replicate.com/v1/predictions';
const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;

export const replicateRequest = async (model: string, input: object) => {
    try {
        const response = await axios.post(REPLICATE_API_URL, {
            version: model,
            input,
        }, {
            headers: {
                'Authorization': `Token ${REPLICATE_API_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(`Replicate API error: ${error.response?.data?.error || error.message}`);
    }
};