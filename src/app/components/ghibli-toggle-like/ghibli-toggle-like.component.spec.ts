import { render, screen } from '@testing-library/angular';
import { GhibliToggleLikeComponent } from './ghibli-toggle-like.component';
import userEvent from '@testing-library/user-event';

const sut = async () => {
  return await render(GhibliToggleLikeComponent);
};

describe('GhibliToggleLikeComponent', () => {
  it('should create component', async () => {
    await sut();
    const buttonLike = screen.getByTestId('ghibli-button-like');
    expect(buttonLike).toBeInTheDocument();
  });

  it.skip('should validate if a icon is correct', async () => {
    const { fixture } = await sut();
    const buttonLike = screen.getByTestId('ghibli-button-like');
    const iconLike = screen.getByTestId('ghibli-button-like-icon');

    expect(iconLike).toHaveAttribute('src', 'assets/svg/heart.svg');
    await userEvent.click(buttonLike);
    fixture.componentInstance.liked = true;
    expect(iconLike).toHaveAttribute('src', 'assets/svg/heart-fill.svg');
  });
});
