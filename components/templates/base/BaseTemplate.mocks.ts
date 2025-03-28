import { IBaseTemplate } from './BaseTemplate';

export const mockBaseTemplateProps = {
  default: {
    sampleTextProp: 'Hello World',
  } as IBaseTemplate,
  longText: {
    sampleTextProp: 'This is a much longer piece of text that might test our container styling and text overflow behavior',
  } as IBaseTemplate,
  specialChars: {
    sampleTextProp: 'Special characters: !@#$%^&*()',
  } as IBaseTemplate,
};

export const MockBaseTemplateComponent = (props: IBaseTemplate) => (
  <div data-testid="mock-base-template">
    {props.sampleTextProp}
  </div>
);