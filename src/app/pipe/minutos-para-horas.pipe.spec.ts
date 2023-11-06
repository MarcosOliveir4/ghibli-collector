import { MinutosParaHorasPipe } from './minutos-para-horas.pipe';

describe('MinutosParaHorasPipe', () => {
  let pipe: MinutosParaHorasPipe;

  beforeEach(() => {
    pipe = new MinutosParaHorasPipe();
  });

  it('should transform minutes into hours and minutes format', () => {
    const transformedValue = pipe.transform('150');
    expect(transformedValue).toBe('2h 30min');
  });

  it('should handle zero minutes', () => {
    const transformedValue = pipe.transform('0');
    expect(transformedValue).toBe('0h 0min');
  });

  it('should handle a string representing non-numeric value', () => {
    const transformedValue = pipe.transform('abc');
    expect(transformedValue).toBe('NaNh NaNmin');
  });
});
