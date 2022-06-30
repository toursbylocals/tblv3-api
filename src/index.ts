export function displayHello(name: string): string {
  return 'HELLO: ' + name
}

export function twoNumSum(a: number, b: number): number {
  if (a < 0 || b < 0) {
    throw new Error('Sorry we do not support negative numbers')
  }

  return a + b
}
