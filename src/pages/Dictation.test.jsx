import React from 'react';
import PropTypes from 'prop-types';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { fakeDictation, route } from '../helpers';
import Dictation from './Dictation';
import { useDictationList } from '../contexts';

jest.mock('../contexts', () => ({
  useDictationList: jest.fn(),
}));

function DictationRouter({ id }) {
  return <MemoryRouter initialEntries={[`/${id}`]}>{route('/:id', Dictation)}</MemoryRouter>;
}

DictationRouter.propTypes = {
  id: PropTypes.number.isRequired,
};

it(`renders without dictations`, () => {
  useDictationList.mockImplementation(() => []);

  render(<DictationRouter id={0} />);
});

it(`renders with dictations`, () => {
  useDictationList.mockImplementation(() => [fakeDictation(1), fakeDictation(2)]);

  render(<DictationRouter id={0} />);
});

it(`renders and clicks buttons`, async () => {
  useDictationList.mockImplementation(() => [fakeDictation(1)]);

  render(<DictationRouter id={1} />);

  const [firstStep, secondStep] = fakeDictation(1).steps;

  fireEvent.click(screen.getByText('Valider')); // validate invalid code

  fireEvent.change(screen.getByLabelText(firstStep.instruction), {
    target: { value: firstStep.code },
  });

  await screen.findByDisplayValue(firstStep.code);

  fireEvent.click(screen.getByText('Valider'));

  await screen.findByLabelText(secondStep.instruction);

  fireEvent.click(screen.getByText('???'));

  await screen.findByDisplayValue(secondStep.code);

  fireEvent.click(screen.getByText('Valider'));

  await screen.findByRole('status');
});
