import { asFunction, createContainer } from 'awilix';
import ExampleDatasource from '../data/remote/example.datasource';
import ExampleRepository from '../data/repositories/example.repository';
import { ExampleViewModel } from '../presentation/views/example/view-model';
import { ExampleUseCase } from '../domain/use-cases/example/example.use-case';

const container = createContainer();

container.register({
  // ViewModels
  ExampleViewModel: asFunction(ExampleViewModel),

  //  DataSources
  ExampleDatasource: asFunction(ExampleDatasource),

  // Repositories
  ExampleRepository: asFunction(ExampleRepository),

  // UseCases
  ExampleUseCase: asFunction(ExampleUseCase),

});

export default container;
