import { passwordStrength } from 'check-password-strength'

export function isPasswordStrongEnough(password: string): boolean {
  const STRENGTH_ALLOWED = ['Medium', 'Strong']

  const feedback = passwordStrength(password)

  return STRENGTH_ALLOWED.includes(feedback.value)
}
