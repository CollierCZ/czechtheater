import { cleanup, render, screen, within } from '@testing-library/svelte';
import { afterEach, describe, expect, it, vi } from 'vitest';

import FactPage from './+page.svelte';
import {
  firstFactText,
  firstImageDescription,
  secondFactText,
  sharedLogo,
  testFacts
} from '$lib/Tests/sharedData';

describe('Fact page', () => {
  afterEach(() => {
    cleanup();
    vi.spyOn(global.Math, 'random').mockRestore();
  });

  it('should have the right header, text, and image', () => {
    // Choose the first fact
    vi.spyOn(global.Math, 'random').mockReturnValueOnce(0.1);

    render(FactPage, {
      data: {
        facts: testFacts,
        logo: sharedLogo
      }
    });

    const heading = screen.getByRole('heading');
    const child = within(heading).getByText('Czech Theater Fact');

    const factDescriptionText = screen.getByText(firstFactText);
    const factImage = screen.getByAltText(firstImageDescription);

    expect(child).toBeInTheDocument();
    expect(factDescriptionText).toBeInTheDocument();
    expect(factImage).toBeInTheDocument();
  });

  it('should show a different fact when chosen at random', () => {
    // Choose the second fact
    vi.spyOn(global.Math, 'random').mockReturnValueOnce(0.99);

    render(FactPage, {
      data: {
        facts: testFacts,
        logo: sharedLogo
      }
    });

    const factDescriptionText = screen.getByText(secondFactText);

    expect(factDescriptionText).toBeInTheDocument();
  });
});
