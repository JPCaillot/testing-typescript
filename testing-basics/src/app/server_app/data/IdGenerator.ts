import { randomBytes } from 'crypto'

/* istanbul ignore next */
export function generateRandomId() {
    const randomId = randomBytes(10).toString('hex');
    return randomId;
}

