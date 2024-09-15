export const ExampleUseCase = ({ ExampleRepository }: any) => async () => {
    const { result, error } = await ExampleRepository.getDataJson();

    return { result, error };
};
