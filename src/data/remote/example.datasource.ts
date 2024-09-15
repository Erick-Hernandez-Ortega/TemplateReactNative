import { AxiosInstance } from '../../domain/utils/axios-instance';

export default () => {
    const getData = async () => {
        try {
            const response: any = await AxiosInstance.get('/todos/1');

            return Promise.resolve({ result: response.data, error: null });
        } catch (error: any) {
            return Promise.resolve({ result: null, error: error });
        }
    };

    return {
        getData,
    };
};
