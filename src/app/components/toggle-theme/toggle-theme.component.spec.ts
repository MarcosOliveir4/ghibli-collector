import { render, screen } from '@testing-library/angular';
import { ToggleThemeComponent } from './toggle-theme.component';
import { Theme, ToggleThemeService } from './toggle-theme.service';
import userEvent from '@testing-library/user-event';

const sut = async () => {
  return await render(ToggleThemeComponent, {
    providers: [ToggleThemeService]
  });
};

describe('ToggleThemeComponent', () => {
  it('should create', async () => {
    await sut();
    const buttonToggleTheme = screen.getByTestId('btn-toggle-theme');

    expect(buttonToggleTheme).toBeInTheDocument();
  });
  it('should validate that the theme change function was called', async () => {
    const { fixture } = await sut();
    const toggleThemeSpy = jest.spyOn(fixture.componentInstance, 'toggleTheme');

    const buttonToggleTheme = screen.getByTestId('btn-toggle-theme');
    await userEvent.click(buttonToggleTheme);

    expect(toggleThemeSpy).toHaveBeenCalled();
    expect(toggleThemeSpy).toHaveBeenCalledTimes(1);
  });
  it('should validate if the default theme is applied', async () => {
    await sut();
    expect(screen.getByTestId(`theme-${Theme.DARK}`)).toBeInTheDocument();
  });
  it('should validate if the default theme is applied', async () => {
    await sut();
    const buttonToggleTheme = screen.getByTestId('btn-toggle-theme');
    await userEvent.click(buttonToggleTheme);

    expect(screen.getByTestId(`theme-${Theme.LIGHT}`)).toBeInTheDocument();
  });
});
