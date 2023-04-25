import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const testCasesPLN = [
  { amount: '100', from: 'PLN', to: 'USD', expected: 'PLN 100.00 = $28.57' },
  { amount: '20', from: 'PLN', to: 'USD', expected: 'PLN 20.00 = $5.71'},
  { amount: '200', from: 'PLN', to: 'USD', expected: 'PLN 200.00 = $57.14' },
  { amount: '345', from: 'PLN', to: 'USD', expected: 'PLN 345.00 = $98.57' },
];

const testCasesUSD = [
  { amount: '100', from: 'USD', to: 'PLN', expected: '$100.00 = PLN 350.00' },
  { amount: '20', from: 'USD', to: 'PLN', expected: '$20.00 = PLN 70.00' },
  { amount: '200', from: 'USD', to: 'PLN', expected: '$200.00 = PLN 700.00' },
  { amount: '345', from: 'USD', to: 'PLN', expected: '$345.00 = PLN 1,207.50' },
];

const testCasesEqual = [
  { amount: '100', from: 'PLN', to: 'PLN', expected: 'PLN 100.00 = PLN 100.00' },
  { amount: '20', from: 'USD', to: 'USD', expected: '$20.00 = $20.00' },
  { amount: '200', from: 'PLN', to: 'PLN', expected: 'PLN 200.00 = PLN 200.00' },
  { amount: '345', from: 'USD', to: 'USD', expected: '$345.00 = $345.00' },
]

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });

  for (const testObjPln of testCasesPLN)
    it('should render proper info about conversion when PLN -> USD', () => {
      render(<ResultBox from={testObjPln.from} to={testObjPln.to} amount={parseInt(testObjPln.amount)} />);
      const output = screen.getByTestId('final-amount');
      expect(output).toHaveTextContent(testObjPln.expected);
    });
  cleanup();

  for (const testObjUsd of testCasesUSD)
    it('should render proper info about conversion when USD -> PLN', () => {
      render(<ResultBox from={testObjUsd.from} to={testObjUsd.to} amount={parseInt(testObjUsd.amount)} />);
      const output = screen.getByTestId('final-amount');
      expect(output).toHaveTextContent(testObjUsd.expected);
    });
  cleanup();

  for (const testObjEqual of testCasesEqual)
    it('should render proper info about conversion when PLN -> PLN and USD -> USD', () => {
      render(<ResultBox from={testObjEqual.from} to={testObjEqual.to} amount={parseInt(testObjEqual.amount)} />);
      const output = screen.getByTestId('final-amount');
      expect(output).toHaveTextContent(testObjEqual.expected);
    });
});