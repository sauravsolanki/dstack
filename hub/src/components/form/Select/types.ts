import { ControllerProps, FieldValues } from 'react-hook-form';
import { SelectProps } from '@cloudscape-design/components/select';
import { FormFieldProps } from '@cloudscape-design/components/form-field';

export type FormSelectOption = SelectProps.Option;
export type FormSelectOptions = ReadonlyArray<FormSelectOption>;

export type FormSelectProps<T extends FieldValues> = Omit<SelectProps, 'value' | 'name' | 'selectedOption' | 'options'> &
    Omit<FormFieldProps, 'errorText'> &
    Pick<ControllerProps<T>, 'control' | 'name' | 'rules'> & {
        options: ReadonlyArray<SelectProps.Option>;
    };
