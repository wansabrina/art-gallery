import { render } from "@testing-library/react";
import InputField from "@/components/InputField";
import '@testing-library/jest-dom';

describe("InputField component", () => {
  it("renders input field with label", () => {
    const label = "Name";
    const name = "name";
    const register = jest.fn();
    const { getByLabelText } = render(
      <InputField label={label} name={name} register={register} errors={{}} />
    );
    expect(getByLabelText(label)).toBeInTheDocument();
  });
});
