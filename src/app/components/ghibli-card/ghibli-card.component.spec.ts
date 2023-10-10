import { GhibliCardComponent } from './ghibli-card.component';
import { render, screen } from '@testing-library/angular';
import { NgOptimizedImage } from '@angular/common';

const defaultProperties = {
  title: 'Castle in the Sky',
  img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg',
  description:
    "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world."
};

const sut = async () => {
  return await render(GhibliCardComponent, {
    imports: [NgOptimizedImage],
    componentProperties: {
      ...defaultProperties
    }
  });
};

describe('GhibliCardComponent', () => {
  beforeAll(() => {
    const preconnectLink = document.createElement('link');
    preconnectLink.rel = 'preconnect';
    preconnectLink.href = 'https://image.tmdb.org';
    document.head.appendChild(preconnectLink);
  });

  afterAll(() => {
    const preconnectLink = document.querySelector('link[rel="preconnect"]');
    if (preconnectLink) {
      preconnectLink.remove();
    }
  });
  it('should render card', async () => {
    await sut();
    const card = screen.getByTestId('ghibli-card');
    expect(card).toBeInTheDocument();
  });
  it('should render title', async () => {
    await sut();
    const title = screen.getByTestId('ghibli-card-title').textContent;
    expect(title).toBe(defaultProperties.title);
  });
  it('should render description', async () => {
    await sut();
    const description = screen.getByTestId(
      'ghibli-card-description'
    ).textContent;
    expect(description).toBe(defaultProperties.description);
  });
});
