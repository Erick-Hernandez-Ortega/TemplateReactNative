import { useEffect } from 'react';

export const ExampleViewModel = ({ExampleUseCase} : any) => {

    useEffect(() => {
        const getDataJson = async () => {
            const { result, error } = await ExampleUseCase();
            return { result, error };
        };

        getDataJson();
    }, [ExampleUseCase]);


    const name = 'TemplateReactNative';

  return {
    name,
  };
};
