import { GenrresModule } from './genres.module';

describe('GenrresModule', () => {
  let genrresModule: GenrresModule;

  beforeEach(() => {
    genrresModule = new GenrresModule();
  });

  it('should create an instance', () => {
    expect(genrresModule).toBeTruthy();
  });
});
