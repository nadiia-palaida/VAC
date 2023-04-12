import { defineRule } from 'vee-validate';
import { required, email, digits } from '@vee-validate/rules';

defineRule('required', required);
defineRule('email', email);
defineRule('digits', digits);
