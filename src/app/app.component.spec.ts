import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { ToggleThemeModule } from './components/toggle-theme/toggle-theme.module';

const sut = async () => {
  return await render(AppComponent, {
    imports: [ToggleThemeModule]
  });
};

describe('AppComponent', () => {
  it('should create the app', async () => {
    const { fixture } = await sut();
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
