const createExampleRepository = ({ ExampleDatasource }: any): any => {
    const getDataJson = async (): Promise<any> => {
        const { result, error } = await ExampleDatasource.getData();
        return { result, error };
    };

    return {
        getDataJson,
     };
};

export default createExampleRepository;
