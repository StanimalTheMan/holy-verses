import { fireEvent, render, screen } from '@testing-library/react';
import Verse from '../components/Verse';

test('does not render verse content initially, renders content after click', () => {
  render(<Verse book="John" chapter={3} verses={[16]} content="For God so loved the world that He gave his only Son, that whoever believes in him should not perish but have eternal life." />);
  const verseNotRevealed = screen.getByText(/John 3:16/i);
  expect(verseNotRevealed).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('verse'))
  expect(verseNotRevealed).not.toBeInTheDocument();
  const verseContent = screen.getByText(/For God so loved the world that He gave his only Son, that whoever believes in him should not perish but have eternal life./i);
  expect(verseContent).toBeInTheDocument();
});